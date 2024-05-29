"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let studentList = [
    {
        name: "Alina",
        seniorStatus: false,
        assignmentsCompleted: true,
    },
    {
        name: "Fatima",
        seniorStatus: true,
        assignmentsCompleted: true,
    },
    {
        name: "almas",
        seniorStatus: true,
        assignmentsCompleted: false,
    },
    {
        name: "Freeha",
        seniorStatus: true,
        assignmentsCompleted: false,
    },
    {
        name: "Alina",
        seniorStatus: false,
        assignmentsCompleted: true,
    },
    {
        name: "Afeefa",
        seniorStatus: true,
        assignmentsCompleted: true,
    },
    {
        name: "Asmara",
        seniorStatus: false,
        assignmentsCompleted: true,
    },
    {
        name: "Ashnoor",
        seniorStatus: true,
        assignmentsCompleted: true,
    },
];
function findStudentCompletedAsg(studentList) {
    for (let student of studentList) {
        if (student.seniorStatus && student.assignmentsCompleted === true) {
            console.log(student, "complete assignment list");
        }
    }
}
findStudentCompletedAsg(studentList);
function updatedlist(studentList) {
    let updatedStudents = [];
    for (let student of studentList) {
        updatedStudents.push(student);
        console.log(student, "updated list");
    }
}
updatedlist(studentList);
function removeStudentsWithIncompleteAssignments(studentList) {
    // Filter out students who are seniors and haven't completed their assignments
    return studentList.filter(student => !(student.seniorStatus && !student.assignmentsCompleted));
}
console.log("Before removal:");
console.log(studentList);
studentList = removeStudentsWithIncompleteAssignments(studentList);
console.log("After removal:");
console.log(studentList);
