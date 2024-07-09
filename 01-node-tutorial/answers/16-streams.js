const { createReadStream } = require("fs");


const stream = createReadStream('../content/big.txt', {
    highWaterMark: 200,
    encoding: 'utf8'
});

let numberOfChunksReceived = 0;

stream.on('data', (result) => {
    console.log('Result received');

    for (let i = 0; i < 1000; i++) {
        console.log(`Counter: ${i}`);
        numberOfChunksReceived++;
    }
});


stream.on('end', () => {
    console.log('total chunks received:', numberOfChunksReceived);
    console.log('end of data');
});

stream.on('error', (err) => {
    console.error('Error:', err);
});