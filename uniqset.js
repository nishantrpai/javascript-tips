//Say you have an array
let arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5];

//The Set object lets you store unique values of any type.
let set = new Set(arr) //Set { 1, 2, 3, 4, 5 }

//Change from Set -> Array
let uniqArr = Array.from(set)

//If you log the unique array
console.log(uniqArr); //[ 1, 2, 3, 4, 5 ]