const express = require('express');
const products = require('./data/products');

const app = express();

app.get('/', (request, response) => {
    response.send('API is runnin and runnin');
});

app.get('/api/products', (request, response) => {
    response.json(products);
});

app.get('/api/products/:id', (request, response) => {
    const product = products.find((prod) => prod._id === request.params.id);
    response.json(product);
});

app.listen(5000, console.log('Server running on port 5000'));
