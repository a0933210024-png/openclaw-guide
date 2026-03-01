import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const width = 1200;
const height = 630;

// Create SVG for the OG image
const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <!-- Dark background gradient -->
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0a0a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1a1a1a;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#FF6B35;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#00D4FF;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  
  <!-- Border accent -->
  <rect x="0" y="0" width="${width}" height="8" fill="url(#accent)"/>
  <rect x="0" y="${height - 8}" width="${width}" height="8" fill="url(#accent)"/>
  
  <!-- Main Title (EN) -->
  <text x="600" y="220" font-family="Arial, sans-serif" font-size="64" font-weight="bold" fill="#ffffff" text-anchor="middle">
    AI Models Guide
  </text>
  
  <!-- Subtitle -->
  <text x="600" y="290" font-family="Arial, sans-serif" font-size="36" fill="#a0a0a0" text-anchor="middle">
    省錢 vs 聰明的完美平衡
  </text>
  
  <text x="600" y="340" font-family="Arial, sans-serif" font-size="32" fill="#00D4FF" text-anchor="middle">
    Smart vs Cheap - Finding Balance
  </text>
  
  <!-- Model Emojis -->
  <text x="300" y="500" font-family="Arial, sans-serif" font-size="80" text-anchor="middle">🐣</text>
  <text x="600" y="500" font-family="Arial, sans-serif" font-size="80" text-anchor="middle">💼</text>
  <text x="900" y="500" font-family="Arial, sans-serif" font-size="80" text-anchor="middle">👑</text>
  
  <!-- Footer -->
  <text x="600" y="580" font-family="Arial, sans-serif" font-size="24" fill="#666666" text-anchor="middle">
    MiniBot 迷你兵 — openclaw-guide-red.vercel.app
  </text>
</svg>
`;

const outputPath = path.join(__dirname, '../public/og-models.png');

sharp(Buffer.from(svg))
  .png()
  .toFile(outputPath)
  .then(() => {
    console.log(`✅ OG image generated: ${outputPath}`);
  })
  .catch(err => {
    console.error('❌ Error generating OG image:', err);
    process.exit(1);
  });
