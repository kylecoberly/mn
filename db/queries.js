const database = require("./database_connection");

module.exports = {
    getAllStudents(){
        return database("student").select("*");
    },
    getAllCourses(){
        return database("course").select("*");
    },
    getCourse(id){
        return database("course").select("*").where("id", id);
    },
    getStudent(id){
        return database("student").select("*").where("id", id);
    },
    getCoursesByStudent(student_id){
        return database("course").select("course.*")
            .innerJoin("enrollment", "course.id", "enrollment.course_id")
            .innerJoin("student", "enrollment.student_id", "student.id")
            .where("student.id", student_id);
    },
    getStudentsByCourse(course_id){
        return database("student").select("student.*")
            .innerJoin("enrollment", "student.id", "enrollment.student_id")
            .innerJoin("course", "enrollment.course_id", "course.id")
            .where("course.id", course_id);
    }
}
