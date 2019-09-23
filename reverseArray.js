let arr = [1,2,3,4,5];

console.log(arr); //[1, 2, 3, 4, 5]

console.log(arr.reverse()); //[5, 4, 3, 2, 1]

console.log(arr); //[1, 2, 3, 4, 5]

console.log(Array.prototype.reverse.call(arr)); //[1, 2, 3, 4, 5]
//for changing arr you'll need to declare 
//arr = Array.prototype.reverse.call(arr);

console.log(arr); 