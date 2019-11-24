exports.up = knex =>
    knex.schema.createTable("pull_requests", table => {
        table.uuid('id').primary();
        table.uuid('repository_id').notNullable();
        table.integer('number').notNullable();
        table.timestamp('created').notNullable().defaultTo(knex.fn.now());
        table.timestamp('merged');
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());

        table.foreign('repository_id').references('repositories.id');
    });



exports.down = knex => knex.schema.dropTableIfExists("pull_requests");
