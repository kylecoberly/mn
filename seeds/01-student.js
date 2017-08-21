exports.seed = function(knex, Promise) {
  return knex.raw("TRUNCATE student RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("student").insert([{
          name: "Student 1"
      },{
          name: "Student 2"
      },{
          name: "Student 3"
      }]);
    });
};
