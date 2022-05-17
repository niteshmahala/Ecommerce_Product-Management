const express = require('express');
const bodyparser = require('body-parser');
const {default: mongoose} = require('mongoose')
const rout = require('./routes/route.js')
const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended:true}))

mongoose.connect(config,{
    useNewUrlParser: true,
})
.then(()=> console.log("mongodb is connected"))
.catch(err=> console.log(err))

app.use('/', route)

app.listen(process.env.PORT || 3000 , function ()
{
    console.log("express app running on" +( process.env.PORT || 3000))
});





