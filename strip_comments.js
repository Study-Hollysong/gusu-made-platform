const fs = require('fs');
const input = process.argv[2] || 'pages.json';
const output = process.argv[3] || 'pages_no_comment.json';
let lines = fs.readFileSync(input, 'utf8').split(/\r?\n/);
lines = lines.map(line => line.replace(/\s*\/\/.*$/, ''));
const content = lines.join('\n');
fs.writeFileSync(output, content);
console.log(`Generated ${output}`);
