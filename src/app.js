const express = require('express');
const morgan = require('morgan');
const mainRouter = require('./routes/mainRouter')

const app = express();

// para ver nuestras peticiones por consola
app.use(morgan('dev'));

// para detectar la estructura json
app.use(express.json())

app.use(mainRouter)

module.exports = app;