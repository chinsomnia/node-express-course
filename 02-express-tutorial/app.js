console.log('Express Tutorial')

const express = require('express');
const app = express();
const peopleRouter = require('./routes/people');


//Week4 Assignmen t
//Create Middleware function called logger in app.js
const { people } = require('./data');
// console.log(people);

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date();
    const currentTime = `Current Time is ${time.getHours()}:${time.getMinutes()}`;
    console.log(method, url, currentTime);
    next();
}; 

// app.use(logger);

// app.get('/', logger, (req, res) => {
//     res.send('Home');
// })

// static assets
app.use(express.static('./methods-public')); 

// parse form data
app.use(express.urlencoded({ extended: false }));

  // parse json data
app.use(express.json());

//

// // people
// app.get('/api/v1/people', logger, (req, res) => {
//     res.status(200).json({ success:true, data: people });
// });

// app.post('/api/v1/people',logger, (req, res) => {
//     console.log('adding name');
//     const { name } = req.body;
//     if (!name) {
//         return res.status(400).json({ success: false, message: 'Please provide name value'});
//     } 
//         people.push({ id: people.length + 1, name: req.body.name });
//         res.status(201).json({ success: true, name: req.body.name });
// })

// app.post('/login', (req, res) => {
//     const { name } = req.body;
//     if (name) {
//         return res.status(200).send(`Welcome ${name}`);
//     }
//     res.status(400).send({ success: false, message: "Please provide a name" });
// });

app.use("/api/v1/people", peopleRouter);

//server port 3000
app.listen(3000, () => {
    console.log('server is listening on port 3000...');
})

// app.get
// app.post
// app.put
// app.patch
// app.delete