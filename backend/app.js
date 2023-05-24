const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const products = require('./routes/product');


const cors = require('cors');
const errorMiddleware = require('./middlewares/errors')

app.use(express.json());
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Routes

app.use('/api', products);
app.use('/api', products);

// Middleware error handling 
app.use(errorMiddleware);
                // Exporting the app
                module.exports = app;
                

