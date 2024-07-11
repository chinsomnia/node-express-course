const { writeFile } = require('fs');

console.log("at start");

writeFile('./temporary/fileB.txt', "This is line 1\n", (err, result) => {
    console.log("at point 1");
    if (err) {
        console.log("This error happened for line 1: ", err);
    } else {
        writeFile('./temporary/fileB.txt', "This is line 2\n", { flag: 'a' }, (err, result) => {
            console.log("at point 2");
            if (err) {
                console.log("This error for line 2 happened: ", err);
            } else {
                writeFile('./temporary/fileB.txt', "This is line 3\n", { flag: 'a' }, (err, result) => {
                    console.log("at point 3");
                    if (err) {
                        console.log("This error for line 3 happened: ", err);
                    }
                }
            )
            }
        })
    }
});
console.log("at end");
