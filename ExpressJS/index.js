const express = require('express');
const app = express();

//concept-1

// app.get('', (req, res) => {
//     console.log("Data sent by browser=>>>",req.query.name)
//     res.send("Welcome, "+ req.query.name)
// })
// app.get('/about', (req, res) => {
//     res.send("Welcome to AboutPage")
// })
// app.get('/help', (req, res) => {
//     res.send("Welcome to HelpPage")
// })

//concept-2
// ----------------------
app.get('', (req, res) => {
    res.send(`<h1>Welcome to homepage</h1> <a href='/about'>Go to About page</a>`)
})
app.get('/about', (req, res) => {
    res.send(`
        <input type="text" placeholder="username" value=${req.query.name} />
        <button>Click me</button>
        <a href='/'>Go to Home page</a>
        `)
})
app.get('/help', (req, res) => {
    res.send({
        'name':'chandan',
        'age':'21'
        })
})


app.listen(5000);