const express = require('express')
const { entry, configureApp } = require('@turbo360/turbo-sdk')

const app = express()

configureApp(app, {
  viewEngine: 'ejs', // mustache, ejs
  views: 'views',
  static: 'public',
})

// import routes
const index = require('./routes/index')

// set routes
app.use('/', index)

module.exports.entry = entry(() => app)
