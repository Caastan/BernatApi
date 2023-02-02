var router = require('express').Router()
  var mamiferos = require('./mamiferos')

  router.use('/mamiferos', mamiferos)

  var peces = require('./peces')

  router.use('/peces', peces)

  router.get('/', function (req, res) {
    res.status(200).json({ message: 'Estás conectado a nuestra API' })
  })

  module.exports = router