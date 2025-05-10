const {readFileSync, writeFileSync} = require('node:fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first);
console.log(second);
writeFileSync('./content/result-sync.txt', `result:\n${first + '\n' + second}`, {flag: 'a'});