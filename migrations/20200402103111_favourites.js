exports.up = (knex, Promise) => {
    return knex.schema.createTable('favourites', (table) => {
      table.increments('user_id').primary()
      table.string('fav_id')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('favourites')
  }
  