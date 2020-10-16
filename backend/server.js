import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import products from './data/products.js';

dotenv.config();

connectDB();

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

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);
