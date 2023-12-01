const express = require('express')
require('dotenv').config()
const app = express()
const router = require('./config/router')

app.use('public', express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

require('./config/mongoose')

app.use(router)

app.listen(3000)