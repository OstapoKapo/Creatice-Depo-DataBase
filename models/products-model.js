const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    productCode: Number,
    price: String,
    size: String,
    colours: String,
    cloth: String,
    density: String,
    img:[{
        image:String,
        color:String
    }],
    modelPhone:String,
    material:String,
    type:String,
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;