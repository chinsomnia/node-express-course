const { createReadStream } = require("fs");


const stream = createReadStream('../content/big.txt', {
    highWaterMark: 200,
    encoding: 'utf8'
});

stream.on('data', (result) => {
    console.log('Result received');
    
    let numberOfChunksReceived = 0;

    for (let i = 0; i < 1000; i++) {
        console.log(`Counter: ${i}`);
        numberOfChunksReceived++;
    }

    console.log(numberOfChunksReceived);

});

stream.on('end', () => {
    console.log('end of data');
});

stream.on('error', (err) => {
    console.error('Error:', err);
});