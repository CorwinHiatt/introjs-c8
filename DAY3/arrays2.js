const students = require("./students.json")

//display all of the students first name one at a time, one per line.
function showStudents(studentList) {

    for (let i = 0; i < studentList.length; i++) {
        const students = studentList[i]
        console.log(students.firstName)
        
    }
    
    
}

showStudents(students)