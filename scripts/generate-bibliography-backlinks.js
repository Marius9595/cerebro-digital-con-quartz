// Script para sobrescribir los archivos de BIBLIOGRAPHY con sus backlinks
// Ejecutar con: node scripts/generate-bibliography-backlinks.js


import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const BIBLIOGRAPHY_DIR = path.join(__dirname, '../content/BIBLIOGRAPHY');
const CONTENT_DIR = path.join(__dirname, '../content');


function getAllMarkdownFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(filePath));
    } else if (file.endsWith('.md')) {
      results.push(filePath);
    }
  });
  return results;
}


function getBacklinks(targetName, allFiles) {
  const backlinks = [];
  const wikilink = `[[${targetName}]]`;
  allFiles.forEach(file => {
    if (file.includes('BIBLIOGRAPHY')) return; // No backlinks desde la propia BIBLIOGRAFÍA
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes(wikilink)) {
      // Mostrar solo el nombre relativo sin extensión
      const rel = path.relative(CONTENT_DIR, file).replace(/\\/g, '/').replace(/\.md$/, '');
      backlinks.push(`[[${rel}]]`);
    }
  });
  return backlinks;
}


function processBibliography() {
  const bibFiles = getAllMarkdownFiles(BIBLIOGRAPHY_DIR);
  const allFiles = getAllMarkdownFiles(CONTENT_DIR);
  bibFiles.forEach(bibFile => {
    const name = path.basename(bibFile, '.md');
    const backlinks = getBacklinks(name, allFiles);
    const output = backlinks.length ? backlinks.join('\n') : '_Sin backlinks_';
    fs.writeFileSync(bibFile, output, 'utf8');
    console.log(`Procesado: ${name} (${backlinks.length} backlinks)`);
  });
}

processBibliography();
