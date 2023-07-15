const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

require('dotenv').config();
let path = require('path')
const bodyParser = require('body-parser');
const jsonFile = require('jsonfile');
const mongoose = require('mongoose');
const Product = require('./models/products-model.js');

app.use(express.static(path.resolve(__dirname, './')));
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(bodyParser.json())
app.use(express.urlencoded({
    extended:true
}))


const url = `mongodb+srv://ostapokapo:${process.env.TOKEN}@products.n2h6ngk.mongodb.net/test`;

async function connect() {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to mongoDB');
        let productValidate = await Product.find()
        app.get("/message", (req, res) => {
            res.json({ products: productValidate });
          });
          
    } catch (err) {
        console.log(err);
    }
}

connect();

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});
