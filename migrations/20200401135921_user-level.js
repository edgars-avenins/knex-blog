exports.up = (knex, Promise) => {
    return knex.schema.createTable('user-level', (table) => {
      table.increments('id').primary()
      table.string('user')
      table.boolean('level')
      table.boolean('admin')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('user-level')
  }
  