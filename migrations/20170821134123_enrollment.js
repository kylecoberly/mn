exports.up = function(knex, Promise) {
    return knex.schema.createTable("enrollment", table => {
        table.increments();
        table.integer("student_id").references("student.id");
        table.integer("course_id").references("course.id");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("enrollment");
};

