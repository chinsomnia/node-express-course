const { createReadStream } = require("fs");


const stream = createReadStream('../content/big.txt', {
    highWaterMark: 200,
    encoding: 'utf8'
});

let numberOfChunksReceived = 0;

stream.on('data', (result) => {
    numberOfChunksReceived++;
});


stream.on('end', () => {
    console.log('total chunks received:', numberOfChunksReceived);
    console.log('end of data');
});

stream.on('error', (err) => {
    console.error('Error:', err);
});