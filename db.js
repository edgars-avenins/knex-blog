const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

const fn = require('./functions')

module.exports = {
  getUser,
  getUsers,
  setUsersFalse,
  getLevel,
  useLevel,
  addUser,
  getBlogs,
  getBlog,
  getFavs,
  updateUser,
  updateProfile,
  updateCredentials,
  removeFav,
  addFav,
  getUserBlogs,
  deleteBlogPost,
  addBlogPost
}

function getUsers(db = connection) {
  return db('users').select()
}


function getUser(userId, db = connection) {
  return db('users')
    .join('profiles', 'users.id', 'profiles.user_id')
    .select('users.id AS user_id', 'profiles.id AS profile_id', '*')
    .where('user_id', userId).first()
    .then(data => {
      delete data.id
      return data
    })
}

function setUsersFalse(db = connection) {
  return db('user-level')
    .select()
    .update({ level: false, admin: false })
    .then(res => res)
}

function getLevel(userId, db = connection) {
  const colName = (userId == 'admin' ? 'admin' : 'level')

  return db('user-level')
    .select()
    .where('id', userId)
    .update(colName, true)
    .then(data => data)
}

function useLevel(db = connection) {
  return db('user-level')
    .select()
    .where('level', true).orWhere('admin', true).first()
    .then(data => data)
}

function addUser(user, db = connection) {
  return db('users')
    .insert({ name: user.name, email: user.email })
    .then(newId => {

      return db('profiles')
        .insert({ user_id: newId[0], description: user.description })
        .then(() => {

          return db('user-level')
            .insert({ id: newId[0], user: user.name })
        })
    })
}

function getBlogs(db = connection) {
  return db('posts')
    .join('users', 'posts.user_id', 'users.id')
    .select()
    .then(data => {
      delete data.id
      return data
    })
}

function getBlog(userId, db = connection) {
  return db('posts')
    .select()
    .where('user_id', userId)
    .then(data => data)
}

function getFavs(userId, db = connection) {
  return db('favourites')
    .join('users', 'users.id', 'favourites.user_id')
    .select()
    .where('user_id', userId).first()
    .then(async data => {
      if (!data) return
      delete data.id
      data.favourites = []

      let favUsers = data.fav_id.split(',').map(item => Number(item))

      let promises = favUsers.map(async (item) => {
        return await db('users')
          .select()
          .where('id', item).first()
          .then(data => {
            return Promise.resolve(data)
          })
      })

      let allUsers = await Promise.all(promises)
      return allUsers
    })
}

function updateCredentials(userId, userData, db = connection) {
  return db('user-level')
    .select()
    .where('id', userId)
    .update(userData)
    .then(data => data)
}

function updateUser(userId, userData, db = connection) {
  return db('users')
    .select()
    .where('id', userId)
    .update(userData)
    .then(data => data)
}

function updateProfile(userId, profileData, db = connection) {
  return db('profiles')
    .select()
    .where('user_id', userId)
    .update(profileData)
    .then(data => data)
}

function removeFav(userId, removeId, db = connection) {
  return db('favourites')
    .select()
    .where('user_id', userId).first()
    .then(data => {

      if (data.fav_id.split(',').length > 1) {
        return fn.removeFav(removeId, data, (err, data) => {
          if (err) console.log(err)

          return db('favourites')
            .select()
            .where('user_id', userId)
            .update({ fav_id: data })
            .then(res => res)
        })
      } else
        return db('favourites')
          .select()
          .where('user_id', userId)
          .del()
          .then(res => res)

    })
}

function addFav(userId, newId, db = connection) {
  return db('favourites')
    .select()
    .where('user_id', userId).first()
    .then(data => {

      if (data) {

        return fn.addFav(newId, data, (err, data) => {
          if (err) console.log(err)

          return db('favourites')
            .select()
            .where('user_id', userId)
            .update({ fav_id: data })
            .then(res => res)
        })
      } else
        return db('favourites')
          .select()
          .where('user_id', userId)
          .insert({ user_id: userId, fav_id: newId })
          .then(res => res)
    })
}

function getUserBlogs(userId, db = connection){
  return db('posts')
    .select()
    .where('user_id', userId)
    .then(data => data)
}

function deleteBlogPost(postId, db = connection){
  return db('posts')
    .select()
    .where('id', postId)
    .del()
    .then(res => res)
}

function addBlogPost(userId, blogData, db = connection){
  blogData.user_id = userId

  return db('posts')
    .select()
    .insert(blogData)
    .then(res => res)
}