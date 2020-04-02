exports.up = (knex, Promise) => {
    return knex.schema.createTable('profiles', (table) => {
      table.increments('id').primary()
      table.integer('user_id')
      table.string('url').defaultTo('https://dadjokegenerator.com/')
      table.string('image').defaultTo('https://picsum.photos/200')
      table.string('description')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('profiles')
  }
  