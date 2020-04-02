const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.setUsersFalse()
    .then(() => {

      db.getUsers()
        .then(users => {
          res.render('access-level', {users})
        })
    })
})

router.post('/', (req, res) => {
  const accessId = req.body.level
  db.getLevel(accessId)
    .then(() => {
      res.redirect('/list')
    })

})

router.get('/list', (req, res) => {
  db.useLevel()
    .then(access => {

      db.getUsers()
        .then(users => {

          res.render('index', { users: users, access: access })
        })
        .catch(err => {
          res.status(500).send('DATABASE ERROR: ' + err.message)
        })
    })
})

router.post('/list', (req, res) => {
  db.addUser(req.body)
    .then(() => {
      res.redirect('/list')
    })
})



router.get('/blogs', (req, res) => {
  const template = 'blogs'

  db.getBlogs()
    .then(data => {
      res.render(template, { data })
    })

})



module.exports = router
