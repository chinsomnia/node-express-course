const { readFileSync, writeFileSync } = require('fs');

writeFileSync(
    './temporary/fileA.txt',
    `1. This is the first line.`
);

writeFileSync(
    './temporary/fileA.txt',
    `2. This is the second line.`,
    { flag: 'a'}
)

writeFileSync(
    './temporary/fileA.txt',
    `3. This is the third line.`,
    { flag: 'a'}
);

const display3Lines = readFileSync('./temporary/fileA.txt', 'utf8');

console.log(display3Lines);