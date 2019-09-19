//Say you want to merge two arrays
let arr1 = [1, 2, 3];

let arr2 = [4, 5, 6];

//you can use concat
let mergedArray = arr1.concat(arr2);
console.log(mergedArray);

//or we can use ... operator
let mergedArray2 = [...arr1, ...arr2];
console.log(mergedArray2);
//works!