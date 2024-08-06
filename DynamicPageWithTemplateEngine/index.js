const express = require('express');
const app = express();

app.set('view engine','ejs')



app.get('',(req, res) => {
    const user={
        name:'Chandan',
        email:'chandan@gmail.com',
        age:21,
        skills:['c','c++','Java','JS','React']
    }
    res.render('profile',{user})
})
app.get('/login',(req, res) => {
    
    res.render('login')
})

app.listen(5000)