// Assignment 4: Student List Organizer
// Learning Objective: Get comfortable with data structures (objects and arrays) and basic
// functions in TypeScript.
// Tasks:
// 1. Student Data: The provided code defines an interface named Student that describes
// student information like name, senior status (true/false), and whether they've completed
// their assignments (true/false).
// o Imagine this as a template for organizing student details.
// 2. Student List:
// o An array named students stores information about several students using the
// Student template. Think of this array as your class list!
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
// o Can you guess why this information might be helpful?
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have
// a function that removes students who haven't completed their assignments
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)?
  interface Student { 
    name: string;
    seniorStatus: boolean;
    assignmentsCompleted: boolean;
}
let studentList:Student[]=[
    {
        name: "Alina",
    seniorStatus: false,
    assignmentsCompleted:true,
},
    {
        name: "Fatima",
    seniorStatus:true,
    assignmentsCompleted: true,
    },  
    {
        name: "almas",
        seniorStatus: true,
        assignmentsCompleted:false,
    },
    {
        name: "Freeha",
    seniorStatus: true,
    assignmentsCompleted:false,
    },
    {
        name: "Alina",
    seniorStatus: false,
    assignmentsCompleted:true,
},
{
    name: "Afeefa",
seniorStatus: true,
assignmentsCompleted:true,
},
{
    name: "Asmara",
seniorStatus: false,
assignmentsCompleted:true,
},

{
    name: "Ashnoor",
seniorStatus: true,
assignmentsCompleted:true,
},





]
function findStudentCompletedAsg(studentList: Student[]) {
    for (let student of studentList) {
        if (student.seniorStatus && student.assignmentsCompleted===true) {
            console.log(student,"complete assignment list");
        }
    }

}
findStudentCompletedAsg(studentList)

function updatedlist(studentList: Student[]) {
    let updatedStudents: Student[] = [];
    for (let student of studentList) {
        
            updatedStudents.push(student);
            console.log(student,"updated list")
        }
    }
 

updatedlist(studentList)
function removeStudentsWithIncompleteAssignments(studentList: Student[]): Student[] {
    // Filter out students who are seniors and haven't completed their assignments
    return studentList.filter(student => !(student.seniorStatus && !student.assignmentsCompleted));
}

console.log("Before removal:");
console.log(studentList);

studentList = removeStudentsWithIncompleteAssignments(studentList);

console.log("After removal:");
console.log(studentList);
    






