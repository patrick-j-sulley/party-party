const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())

//www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka

router.get('/query/:query', (req, res) => {
  request
    .get(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${req.params.query}`)
    .end((err, result) => {
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.json(result.body)
      }
    })
})

module.exports = router
