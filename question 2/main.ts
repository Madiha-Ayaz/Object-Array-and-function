// Assignment 2:Manipulating an Array: Rearranging Words
// Objective:
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or
// create temporary arrays).
// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC"

const scrambledArray: string[] = ["student", "of", "true", "123", "am", "a", "GIAIC", "I"];

let array: string[] = [];

// Iterate over the scrambledArray and filter strings

  if (typeof scrambledArray === 'string') {
    array.push();
  }

array.unshift(scrambledArray[7]); // "I"
array.push(scrambledArray[4]); 
array.push(scrambledArray[5]); // "a"
array.push(scrambledArray[0]); // "studea
array.push(scrambledArray[1]); // "of"
array.push(scrambledArray[6]); // "GIAIC"

console.log(Object.values(array)) // Output: ["I", "am", "a", "student", "of", "GIAIC"]
 let joinArray=array.join(" ")
 
 console.log(joinArray)

