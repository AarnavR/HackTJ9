const express = require("express")
const app  = express()
const path = require('path')
const hbs = require('hbs');
app.set('view engine', 'hbs')
app.set('views','./views');

app.use(express.static(path.join(__dirname, "public")))
app.use

app.listen(4000)
