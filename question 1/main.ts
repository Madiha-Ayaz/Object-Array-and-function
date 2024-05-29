// Assignment 1: Building Your Friend List
// Learning Objective: Practice working with objects and arrays in TypeScript to create a data structure.
// Task: Create a program that manages a simple friend list.
// 1. Define an object named people containing an empty array called friends.
// 2. Create three separate objects, each representing a friend, with properties like firstName,
// lastName, and optionally id.
// 3. Add these friend objects to the friends array within the people object.
// 4. Output the entire people object to the console, displaying your information and your friend list



type Friend = {
    firstName: string;
    lastName: string;
    class: number;
    rollNo: number;
};
let people: { friends: Friend[] } = {
    friends: []
};

let bestFriend: Friend = {
    firstName: "Alisha",
    lastName: "Farhan",
    class: 12,
    rollNo: 32434,
};

let academyFriend: Friend = {
    firstName: "Atiqa",
    lastName: "Qasim",
    class: 12,
    rollNo: 46565,
};

let schoolFriend: Friend = {
    firstName: "Almas",
    lastName: "Ali",
    class: 12,
    rollNo: 86868,
};

// Add these friend objects to the friends array within the people object
people.friends.push(bestFriend);
people.friends.push(academyFriend);
people.friends.push(schoolFriend);
console.log('Friends',people.friends)
