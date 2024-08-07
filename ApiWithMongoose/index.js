const express = require('express');
require('./config')
const Product= require('./product')
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); // parsing data

app.post('/create',async(req, res) => {
    const data = new Product(req.body);
    const result = await data.save();
    console.log(result);
    res.send(result);
})

app.get('/list', async(req, res) => {
    const data = await Product.find();
    console.log(data);
    res.send(data);
})


app.delete('/delete/:_id', async(req, res) => {
    const data = await Product.deleteOne(req.params);
    console.log(data);
    res.send(data);
})

app.put('/update/:_id', async(req, res) => {
    const data = await Product.updateOne(
        req.params,
        {
            $set:req.body
        }
    );
    console.log(data);
    res.send(data);
})


//Search API
app.get('/search/:key', async(req, res) =>{
    const data = await Product.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"category":{$regex:req.params.key}},
            ]
        }
    );
    console.log(data)
    res.send(data)
})

app.listen(6000)