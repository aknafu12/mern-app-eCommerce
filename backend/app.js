const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser')

// import all routes
const products = require('./routes/product');
const auth = require('./routes/authRoutes');



const cors = require('cors');
const errorMiddleware = require('./middlewares/errors')

app.use(express.json());
app.use(cookieParser());
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


// Routes

app.use('/api', products);
app.use('/api', auth);

// Middleware error handling 
app.use(errorMiddleware);
                // Exporting the app
                module.exports = app;
                

