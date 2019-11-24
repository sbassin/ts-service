exports.up = knex =>
    knex.schema.createTable("dictionary", tbl => {
        tbl.increments();
        tbl.string("word").notNullable();
    });

exports.down = knex => knex.schema.dropTableIfExists("dictionary");
