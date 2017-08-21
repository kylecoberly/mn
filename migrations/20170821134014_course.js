exports.up = function(knex, Promise) {
    return knex.schema.createTable("course", table => {
        table.increments();
        table.string("title");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("course");
};
