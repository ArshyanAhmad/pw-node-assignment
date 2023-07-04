const Router = require('express').Router()

const { home, about, contact } = require('../controller/controller')

Router.get('/', home)
Router.get('/about', about)
Router.get('/contact', contact)

module.exports = Router;