const mysql= require('mysql');
const connection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pass123',
    database:'nodejs',
})

connection.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Connected")
    }
})

connection.query('SELECT * FROM Products',(err, result)=>{
    console.log(result)
})