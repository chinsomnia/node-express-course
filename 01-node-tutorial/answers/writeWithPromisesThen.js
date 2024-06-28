const { writeFile, readFile } = require("fs").promises;  

console.log('Starting writeFile');
writeFile('temp.txt', '\nThis is line 1!', { flag: 'a' }) // write line 1  
.then(() => {  
    console.log('Done writing line 1');
   writeFile('temp.txt', '\nThis is line 2!', { flag: 'a' });
   // write line 2.  
   console.log('Done writing line 2');
   // Return the promise so you can chain the .then statements  
})  
.then (() => {
    writeFile('temp.txt', '\nThis is line 3!', { flag: 'a' });
    console.log('Done writing line 3');
})
.then (() => {
    console.log('reading file');
    return readFile('temp.txt', 'utf8');
})
.then ((data) => {
    console.log(data);
})
// write the third line, and follow that with two more .then blocks,  
// one to call readFile to read it back out, and one to log the data to the screen.   
.catch((error) => {  
    console.log("An error occurred: ", error)  
}) 