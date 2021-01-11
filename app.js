const express = require('express')
const handlebars = require('express-handlebars')

const app = express()
app.engine('hbs', handlebars({ extname: 'hbs' }))
app.set('view engine', 'hbs')
app.set('views', `${__dirname}/views`)
app.get('/home', (req, res) => {
  res.render('home', { layout: false })
})
app.get('/error', (req, res) => {
  res.render('error', { layout: false })
})
app.listen(8080, () => console.log('Running on 8080'))