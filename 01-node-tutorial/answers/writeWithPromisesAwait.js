
const { writeFile, readFile } = require("fs").promises;  

const writer = async() => {
    try {
        await writeFile('temp.txt', `1. Why did the programmer go broke? \n2. He used up all his cache. \n3. Now, he's always looking for a new stack!`);
        console.log('done with writing file')
    } catch (error) {
        console.error('Error writing file:', error);
    }
};

const reader = async() => {
    try {
        await readFile(
            'temp.txt', 'utf8'
        );
        console.log('done reading file');
    } catch (error) {
        console.error('Error reading file:', error)
    }
}


const readWrite = async() => {
    await writer();
    await reader();
}

readWrite();

// async function writer() {
//     console.log('writer started')
//     await writeFile(
//         'temp.txt',
//         `1. Why did the programmer go broke?`,
//         (err, result) => {
//             console.log('at line 1';)
//             if (err) {
//                 console.log('Line 1 error:', err);
//             } else {
//                 writeFile('temp.txt',
//                 `2. He used up all his cache.`,
//                 { flag: 'a' },
//                 console.log('at line 2');
//                 if (err) {
//                     console.log('Line 2 error:', err);
//                 } else {
//                     writeFile('temp.txt',
//                     `3. Now, he's always looking for a new stack!`,
//                     { flag: 'a' },
//                     console.log('at line 3');
//                     if (err) {
//                         console.log('Line 3 error:', err);
//                     }
//                     )
//                 }
//                 )
//             }
//         }
//     )
// }

// function reader() {

// }


// const { readFileSync, writeFileSync } = require('fs');

// writeFileSync(
//     './temporary/fileA.txt',
//     `1. This is the first line.`
// );

// writeFileSync(
//     './temporary/fileA.txt',
//     `2. This is the second line.`,
//     { flag: 'a'}
// )

// writeFileSync(
//     './temporary/fileA.txt',
//     `3. This is the third line.`,
//     { flag: 'a'}
// );

// const display3Lines = readFileSync('./temporary/fileA.txt', 'utf8');

// console.log(display3Lines);