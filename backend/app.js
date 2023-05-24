const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const products = require('./routes/product');


const cors = require('cors');

app.use(express.json());
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Routes

app.use('/api', products);
// Error Handling
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({
            error: 'Unauthorized Access'
            });
            } else {
                next(err);
                }
                });
                // Exporting the app
                module.exports = app;
                

