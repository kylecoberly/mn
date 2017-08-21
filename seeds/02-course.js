exports.seed = function(knex, Promise) {
  return knex.raw("TRUNCATE course RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("course").insert([{
          title: "Course 1"
      },{
          title: "Course 2"
      },{
          title: "Course 3"
      }]);
    });
};
