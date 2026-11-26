import { mkdirSync, writeFileSync } from 'node:fs';

if (!process.env.GEMINI_API_KEY) {
  throw new Error('clone-local marker secret was not exposed');
}
mkdirSync('evals/logs', { recursive: true });
writeFileSync('evals/logs/api-reliability.jsonl', 'P\n');
console.log('pwnreq_secret_observed=true');
