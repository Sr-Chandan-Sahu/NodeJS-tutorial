const mongoose = require('mongoose')
    mongoose.connect('mongodb://localhost:27017/e-comm');
    const ProductsSchema = new mongoose.Schema({
        name: String,
        price: Number,
        category: String,
    });
const saveInDB = async () => {
    const ProductsModel = await mongoose.model('products', ProductsSchema)
    const data = new ProductsModel({
        name: 'Asus', price: 45000, category: "Laptop"
    })
    const result = await data.save()
    console.log(result)
}

// saveInDB()

const updateInDB = async () => {
    const Product = await mongoose.model('product', ProductsSchema)
    const data = await Product.updateOne(
        { name: 'Asus' },
        {
            $set: { price: 42000 }
        }
    )
    console.log(data)
}

// updateInDB()

const deleteInDB = async () => {
    const Product = await mongoose.model('product', ProductsSchema)
    const data = await Product.deleteOne({name:'HP'})
    console.log(data)
}
// deleteInDB()

const findInDB = async () => {
    const Product = await mongoose.model('product', ProductsSchema)
    const data = await Product.find()
    console.log(data)
}
findInDB()


