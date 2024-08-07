const mongoose = require('mongoose')

const ProductsSchema = new mongoose.Schema(
    {
        name:String,
        price:Number,
        category:String,
    }
);

module.exports=mongoose.model('products', ProductsSchema);