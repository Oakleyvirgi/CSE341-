const express = require('express');

const app = express();


/*app.use('/add-product', (req, res, next) => {
    console.log('First Middleware!');
    res.send('<h1>The "Add Product" Page</h1>');
    next();
});

app.use('/', (req, res, next) => {
    console.log('Second Middleware!');
    res.send('<p>Assignment Solved!</p>');
});*/

app.use('/users', (req, res, next) => {
    console.log('/users middleware');
    res.send('<p>The Middleware that handles just /users</p>');
});

app.use('/', (req, res, next) => {
    console.log('/ middleware');
    res.send('<p>The Middleware that handles just /</p>');
    next();
});


app.listen(3000);