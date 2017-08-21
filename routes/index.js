var express = require('express');
var router = express.Router();
var queries = require("../db/queries");

router.get('/', function(req, res, next) {
    queries.getAllCourses().then(courses => {
        return Promise.all(courses.map(course => {
            return queries.getStudentsByCourse(course.id)
                .then(students => {
                    course.students = students;
                    return course;
                });
        }));
    }).then(courses => {
        res.send({courses});
    });
});

module.exports = router;
