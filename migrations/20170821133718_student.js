exports.up = function(knex, Promise) {
    return knex.schema.createTable("student", table => {
        table.increments();
        table.string("name");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("student");
};
