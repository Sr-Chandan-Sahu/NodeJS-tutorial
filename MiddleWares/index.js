const express = require('express');
const reqFilter= require('./middleware')

const app = express();

const route=express.Router() // to apply on multiple routes
route.use(reqFilter)
// const reqFilter=(req, res, next) =>{
//     if(!req.query.age){
//         res.send("Please provide your age")
//     }else if(req.query.age<18){
//         res.send("Since you are under aged,You cannot access this page")
//     }else{
//         next();
//     }
    
// }
// app.use(reqFilter)

app.get('',(req,res)=>{
    res.send("Welcome to the HomePage")
})
app.get('/about',(req,res)=>{
    res.send("Welcome to the AboutPage")
})
route.get('/users',(req,res)=>{
    res.send("Welcome to the UsersPage")
})
app.use('',route)

app.listen(5000)