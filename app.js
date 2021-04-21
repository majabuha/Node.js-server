const express = require('express');
const app = express();

app.use(express.json());
const db = require('./db.js');
const order = require('./cartManagment.js');
const productStatus = require('./productManagment.js')

db.initDatabase();

//get all of the products from database
app.get('/api/products', (req, res) => {
  productStatus.allProducts(req, res);
});

//add product to the products database
app.post('/api/products', (req, res) => {
    productStatus.dbAddProduct(req, res);
});

//remove product from the products database
app.delete('/api/products/:id', (req, res) => {
    productStatus.dbRemoveProduct(req, res);
});

//get all products in the cart
app.get('/api/cart', (req, res) => {
    order.cartProducts(req, res);
});

//add product to the cart
app.post('/api/cart', (req, res) => {
    order.addProduct(req, res);
});

//delete product from the cart
app.delete('/api/cart/:id', (req, res) => {
    order.removeProduct(req, res);
});

//port
app.listen(8000, () => {
    console.log('Server listening on 8000...');
});
