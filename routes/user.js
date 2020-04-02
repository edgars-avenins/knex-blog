const express = require('express')

const db = require('../db')
const fn = require('../functions')

const router = express.Router()

router.get('/:id', (req, res) => {
  const id = req.params.id
  const template = 'user'

  db.useLevel()
    .then(access => {

      db.getUser(id)
        .then(user => {

          db.getBlog(id)
            .then(blogs => {

              db.getFavs(id)
                .then(favs => {
                  console.log(access)
                  const data = {
                    user,
                    blogs,
                    favs,
                    isUser: fn.isUser(access, user),
                    access
                  }

                  res.render(template, data)
                })
            })
        })
    })
})

router.get('/:id/edit/profile', (req, res) => {
  const id = req.params.id
  const template = 'edit'

  db.getUser(id)
    .then(user => {
      res.render(template, user)
    })
})

router.post('/:id/edit/profile', (req, res) => {
  const id = req.params.id
  const credData = {
    user: req.body.name
  }
  const userData = {
    name: req.body.name,
    email: req.body.email,
  }
  const profileData = {
    description: req.body.description,
    url: req.body.url,
    image: req.body.image
  }

  db.updateCredentials(id, credData)
    .then(() => {

      db.updateUser(id, userData)
        .then(() => {

          db.updateProfile(id, profileData)
            .then(() => {
              res.redirect(`/user/${id}`)
            })
        })
    })
})

router.get('/:myId/:favId/favourites/add', (req, res) => {
  const myId = req.params.myId
  const favId = req.params.favId

  db.addFav(myId, favId)
    .then(() => {
      res.redirect(`/list`)
    })

})

router.get('/:id/edit/favourites', (req, res) => {
  const id = req.params.id
  const template = 'favourites'

  db.getUsers()
    .then(users => {

      db.getFavs(id)
        .then(data => {
          if(data) fn.addId(id, data)
          res.render(template, { data, users, id })
        })
    })

})

router.post('/:id/edit/favourites', (req, res) => {
  const id = req.params.id
  const newId = req.body.newId

  db.addFav(id, newId)
    .then(() => {
      res.redirect(`/user/${id}/edit/favourites`)
    })
})

router.get('/:originId/:id/favourites/delete', (req, res) => {
  const origin = req.params.originId
  const id = req.params.id

  db.removeFav(origin, id)
    .then(() => {
      res.redirect(`/user/${origin}/edit/favourites`)
    })

})

router.get('/:id/edit/blogs', (req, res) => {
  const id = req.params.id
  const template = 'my-blogs'

  db.getUserBlogs(id)
    .then(blogs => {
      if(blogs) fn.addId(id, blogs)

      res.render(template, {blogs, id})
    })
})

router.post('/:id/edit/blogs', (req, res) => {
  const id = req.params.id
  const blogData = req.body

  db.addBlogPost(id, blogData)
    .then(() => {
      res.redirect(`/user/${id}/edit/blogs`)
    })
})

router.get('/:userId/:postId/blogs/delete', (req, res) => {
  const userId = req.params.userId
  const postId = req.params.postId

  db.deleteBlogPost(postId)
    .then(() => {
      res.redirect(`/user/${userId}/edit/blogs`)
    })
})

module.exports = router