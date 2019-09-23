//say you want remove 3 from the array
let arr = [1, 2, 3, 4, 5];

let modifiedArr = [...arr.slice(0, 2), ...arr.slice(3)];

console.log(modifiedArr);