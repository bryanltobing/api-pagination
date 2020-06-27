const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/products');
require('./config/mongoose');

// middleware
const pagination = require('./middleware/pagination');

const app = express();

const db = mongoose.connection;

// create sample product data
db.once("open", async () => {
    if(await Product.countDocuments().exec() > 0) {
        return 
    }
    Promise.all([
        Product.create({ name : 'Product 1' }),
        Product.create({ name : 'Product 2' }),
        Product.create({ name : 'Product 3' }),
        Product.create({ name : 'Product 4' }),
        Product.create({ name : 'Product 5' }),
        Product.create({ name : 'Product 6' }),
        Product.create({ name : 'Product 7' }),
        Product.create({ name : 'Product 8' }),
        Product.create({ name : 'Product 9' }),
        Product.create({ name : 'Product 10' }),
        Product.create({ name : 'Product 11' }),
        Product.create({ name : 'Product 12' }),
        Product.create({ name : 'Product 13' }),
        Product.create({ name : 'Product 14' }),
        Product.create({ name : 'Product 15' }),
        Product.create({ name : 'Product 16' }),
        Product.create({ name : 'Product 17' }),
    ]).then(() => console.log('Added User'));
});

app.get('/product', pagination(Product) , (req, res) => {
    res.send(res.dataResult);
});

app.listen(8000, () => console.log('Server Started'));