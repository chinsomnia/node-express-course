console.log('Express Tutorial')

const express = require('express');
const app = express();

const { products } = require("./data"); //data provided for use

// Express static and middleware
app.use(express.static("./public"));

app.get('/api/v1/test', (req, res) => {
    console.log('sample json displayed');
    res.json({ message: "It worked!" });
});

app.get('/api/v1/products/:productID', (req, res) => {
    console.log(req);
    console.log(req.params);
    const idToFind = req.params.productID;
    const product = products.find((p) => p.id === Number(idToFind));

    if(!product) {
        return res.status(404).send({ message: "That product was not found."});
    };

    res.json(product);
    console.log('single product displayed')
});

app.get('/api/v1/products', (req, res) => {
    console.log('json products');
    res.json(products);
});

app.get('/api/v1/query', (req, res) => {
//   console.log(req.query);
    const { search, limit, price } = req.query;
    let sortedProducts = [...products];

    if(search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        })
    }
    if(limit) {
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(price) {
        sortedProducts = sortedProducts.filter(product => product.price < price);
        res.json(sortedProducts);
    }
    if(sortedProducts.length < 1) {
        res.status(200).send('Sorry, no product matched your search.');
    } 
});


// app.get('/', (req, res) => {
//     console.log('user hit the resource');
//     res.status(200).send('Home Page');
// });

// app.get('/about', (req, res) => {
//     res.status(200).send('About Page');
// })

app.all('*', (req, res) => {
    res.status(404).send('<h1>Error 404: resource not found</h1>')
})

app.listen(3000, () => {
    console.log('server is listening on port 3000...');
})

// app.get
// app.post
// app.put
// app.patch
// app.delete