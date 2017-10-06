'use strict'

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config')

const path = require('path')
const express = require('express')
const app = express()

const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}))
app.use(webpackHotMiddleware(compiler))

app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(3000, function(err){
  if(err){
    console.error(err);
  }else{
    console.log("jalan bos");
  }
})
