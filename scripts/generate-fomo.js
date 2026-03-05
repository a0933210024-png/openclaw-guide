#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const outputPath = path.join(projectRoot, 'src', 'data', 'fomo.json');

const SOURCES = ['Reuters', 'Bloomberg', 'The Information', 'TechCrunch', 'Financial Times', 'The Verge'];
const COMPANIES = ['NVIDIA', 'OpenAI', 'Microsoft', 'Google', 'Meta', 'Amazon', 'Anthropic', 'Mistral'];
const THEMES = [
  'new model release',
  'AI datacenter expansion',
  'enterprise adoption surge',
  'regulation headwind',
  'funding round',
  'GPU supply pressure',
  'AI assistant launch',
  'strategic partnership'
];

function seededRand(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function makeAsciiBar(value, width = 24) {
  const filled = Math.round((value / 100) * width);
  return `[${'#'.repeat(filled)}${'-'.repeat(Math.max(0, width - filled))}] ${value}`;
}

function main() {
  const now = new Date();
  const daySeed = Number(now.toISOString().slice(0, 10).replace(/-/g, ''));

  const items = [];
  let bullCount = 0;
  let bearCount = 0;

  for (let i = 0; i < 12; i++) {
    const r = seededRand(daySeed + i * 17);
    const company = COMPANIES[Math.floor(seededRand(daySeed + i * 3) * COMPANIES.length)];
    const theme = THEMES[Math.floor(seededRand(daySeed + i * 7) * THEMES.length)];
    const source = SOURCES[Math.floor(seededRand(daySeed + i * 11) * SOURCES.length)];

    const sentiment = r > 0.42 ? 'Bull' : 'Bear';
    if (sentiment === 'Bull') bullCount += 1;
    else bearCount += 1;

    const impact = Math.round(45 + seededRand(daySeed + i * 19) * 55);

    items.push({
      id: `fomo-${i + 1}`,
      timestamp: new Date(now.getTime() - i * 90 * 60 * 1000).toISOString(),
      company,
      source,
      headline: `${company} sees ${theme}`,
      sentiment,
      impact
    });
  }

  const sentimentBias = ((bullCount - bearCount) / items.length) * 35;
  const avgImpact = items.reduce((sum, item) => sum + item.impact, 0) / items.length;
  const rawScore = 50 + sentimentBias + (avgImpact - 70) * 0.6;
  const fomoIndex = Math.max(0, Math.min(100, Math.round(rawScore)));

  const payload = {
    generatedAt: now.toISOString(),
    methodology: 'Synthetic daily sentiment from AI news headlines (Bull/Bear) with impact-weighted FOMO scoring.',
    fomoIndex,
    asciiBar: makeAsciiBar(fomoIndex),
    sentimentSummary: {
      bull: bullCount,
      bear: bearCount,
      ratioBull: Number((bullCount / items.length).toFixed(2))
    },
    items
  };

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(payload, null, 2));
  console.log(`✅ FOMO data generated: ${outputPath}`);
  console.log(`FOMO Index: ${fomoIndex} | Bull: ${bullCount} Bear: ${bearCount}`);
}

main();
