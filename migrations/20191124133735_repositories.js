exports.up = knex =>
    knex.schema.createTable("repositories", table => {
        table.uuid('id').primary();
        table.string('name').notNullable();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    });

exports.down = knex => knex.schema.dropTableIfExists("repositories");
