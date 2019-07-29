exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('fullname', 128).notNullable();
    table.string('phone', 128);
    table
      .integer('auth_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('authenticatedusers')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table
      .integer('location_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('locations')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
