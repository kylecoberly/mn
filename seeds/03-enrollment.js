exports.seed = function(knex, Promise) {
  return knex.raw("TRUNCATE enrollment RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("enrollment").insert([{
          student_id: 1,
          course_id: 1
      },{
          student_id: 1,
          course_id: 2
      },{
          student_id: 2,
          course_id: 2
      },{
          student_id: 3,
          course_id: 1
      },{
          student_id: 3,
          course_id: 3
      }]);
    });
};
