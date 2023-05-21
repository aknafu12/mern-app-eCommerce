const express = require('express');
const app = express();

app.use(express.json());

// import the routes
const products = require('./routes/product');

//to use the routes
app.use('/api/v1', products)

module.exports = app ;