import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Audio cache to speed up repeated TTS requests
const audioCache = new Map<string, Buffer>();
const MAX_CACHE_SIZE = 500;

export const RECOMMENDED_VOICES = [
  { id: 'en-US-AvaNeural', name: 'Ava (美音女声 · 自然灵动)', lang: 'en-US', gender: 'Female' },
  { id: 'en-US-AndrewNeural', name: 'Andrew (美音男声 · 沉稳纯正)', lang: 'en-US', gender: 'Male' },
  { id: 'en-US-EmmaNeural', name: 'Emma (美音女声 · 亲切温和)', lang: 'en-US', gender: 'Female' },
  { id: 'en-US-BrianNeural', name: 'Brian (美音男声 · 现代生动)', lang: 'en-US', gender: 'Male' },
  { id: 'en-GB-SoniaNeural', name: 'Sonia (英音女声 · 纯正英伦)', lang: 'en-GB', gender: 'Female' },
  { id: 'en-GB-RyanNeural', name: 'Ryan (英音男声 · 磁性标准)', lang: 'en-GB', gender: 'Male' },
  { id: 'zh-CN-XiaoxiaoNeural', name: '晓晓 (中英双语 · 自然流畅)', lang: 'zh-CN', gender: 'Female' },
  { id: 'zh-CN-YunxiNeural', name: '云希 (中英双语 · 阳光清脆)', lang: 'zh-CN', gender: 'Male' },
];

async function handleTTS(req: any, res: any) {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  if (url.pathname === '/api/tts/voices') {
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
    });
    res.end(JSON.stringify({ code: 0, voices: RECOMMENDED_VOICES }));
    return;
  }

  if (url.pathname === '/api/tts') {
    if (req.method === 'OPTIONS') {
      res.writeHead(204, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      });
      res.end();
      return;
    }

    let text = url.searchParams.get('text') || '';
    let voice = url.searchParams.get('voice') || 'en-US-AvaNeural';
    let rate = url.searchParams.get('rate') || 'default';
    let pitch = url.searchParams.get('pitch') || 'default';

    if (req.method === 'POST') {
      try {
        const bodyStr = await new Promise<string>((resolve, reject) => {
          let str = '';
          req.on('data', (chunk: any) => (str += chunk));
          req.on('end', () => resolve(str));
          req.on('error', reject);
        });
        if (bodyStr) {
          const body = JSON.parse(bodyStr);
          text = body.text || text;
          voice = body.voice || voice;
          rate = body.rate || rate;
          pitch = body.pitch || pitch;
        }
      } catch (e) {
        console.error('[TTS Plugin] Parse POST body error:', e);
      }
    }

    text = text.trim();
    if (!text) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ code: 400, message: 'Text parameter is required' }));
      return;
    }

    const cacheKey = `${voice}_${rate}_${pitch}_${text}`;
    if (audioCache.has(cacheKey)) {
      const cachedBuffer = audioCache.get(cacheKey)!;
      res.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': cachedBuffer.length,
        'Cache-Control': 'public, max-age=86400',
        'Access-Control-Allow-Origin': '*',
      });
      res.end(cachedBuffer);
      return;
    }

    try {
      const tts = new MsEdgeTTS();
      await tts.setMetadata(voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
      const readable = tts.toStream(text, {
        rate: rate === 'default' ? undefined : rate,
        pitch: pitch === 'default' ? undefined : pitch,
      });

      const chunks: Buffer[] = [];
      readable.on('data', (chunk: Buffer) => chunks.push(chunk));
      readable.on('end', () => {
        const audioBuffer = Buffer.concat(chunks);
        if (audioCache.size >= MAX_CACHE_SIZE) {
          const firstKey = audioCache.keys().next().value;
          if (firstKey) audioCache.delete(firstKey);
        }
        audioCache.set(cacheKey, audioBuffer);

        res.writeHead(200, {
          'Content-Type': 'audio/mpeg',
          'Content-Length': audioBuffer.length,
          'Cache-Control': 'public, max-age=86400',
          'Access-Control-Allow-Origin': '*',
        });
        res.end(audioBuffer);
      });

      readable.on('error', (err: any) => {
        console.error('[TTS Plugin] Stream error:', err);
        if (!res.headersSent) {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ code: 500, message: String(err) }));
        }
      });
    } catch (err: any) {
      console.error('[TTS Plugin] Initialization error:', err);
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ code: 500, message: String(err) }));
      }
    }
  }
}

function edgeTtsVitePlugin(): Plugin {
  return {
    name: 'vite-plugin-msedge-tts',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && (req.url.startsWith('/api/tts') || req.url.startsWith('/api/tts/voices'))) {
          handleTTS(req, res);
        } else {
          next();
        }
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && (req.url.startsWith('/api/tts') || req.url.startsWith('/api/tts/voices'))) {
          handleTTS(req, res);
        } else {
          next();
        }
      });
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    edgeTtsVitePlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
});
