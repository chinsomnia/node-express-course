console.log('Express Tutorial')

const express = require('express');
const app = express();

// const { products } = require("./data"); //data provided for use

// // Express static and middleware
// app.use(express.static("./public"));

// app.get('/api/v1/test', (req, res) => {
//     console.log('sample json displayed');
//     res.json({ message: "It worked!" });
// });

// app.get('/api/v1/products/:productID', (req, res) => {
//     console.log(req);
//     console.log(req.params);
//     const idToFind = req.params.productID;
//     const product = products.find((p) => p.id === Number(idToFind));

//     if(!product) {
//         return res.status(404).send({ message: "That product was not found."});
//     };

//     res.json(product);
//     console.log('single product displayed')
// });

// app.get('/api/v1/products', (req, res) => {
//     console.log('json products');
//     res.json(products);
// });

// app.get('/api/v1/query', (req, res) => {
// //   console.log(req.query);
//     const { search, limit, price } = req.query;
//     let sortedProducts = [...products];

//     if(search) {
//         sortedProducts = sortedProducts.filter((product) => {
//             return product.name.startsWith(search);
//         })
//     }
//     if(limit) {
//         sortedProducts = sortedProducts.slice(0,Number(limit))
//     }
//     if(price) {
//         sortedProducts = sortedProducts.filter(product => product.price < price);
//         res.json(sortedProducts);
//     }
//     if(sortedProducts.length < 1) {
//         res.status(200).send('Sorry, no product matched your search.');
//     } 
// });


// // app.get('/', (req, res) => {
// //     console.log('user hit the resource');
// //     res.status(200).send('Home Page');
// // });

// // app.get('/about', (req, res) => {
// //     res.status(200).send('About Page');
// // })

// app.all('*', (req, res) => {
//     res.status(404).send('<h1>Error 404: resource not found</h1>')
// })

// app.listen(3000, () => {
//     console.log('server is listening on port 3000...');
// })

//Week4 Assignmen t
//Create Middleware function called logger in app.js
const { people } = require('./data');
console.log(people);

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

// people
app.get('/api/v1/people', logger, (req, res) => {
    res.status(200).json({ success:true, data: people });
});

app.post('/api/v1/people',logger, (req, res) => {
    console.log('adding name');
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, message: 'Please provide name value'});
    } 
        people.push({ id: people.length + 1, name: req.body.name });
        res.status(201).json({ success: true, name: req.body.name });
})

app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(400).send({ success: false, message: "Please provide a name" });
});

//server port 3000
app.listen(3000, () => {
    console.log('server is listening on port 3000...');
})

// app.get
// app.post
// app.put
// app.patch
// app.delete