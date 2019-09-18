//Say you want to merge two arrays
let array1 = [1,2,3];

//and another array
let array2 = [4,5,6];

//we can use the concat operator
let mergedArray = array1.concat(array2);
console.log(mergedArray);

//or we can use the ... operator similar to object
let mergedArray2 = [...array1, ...array2];
console.log(mergedArray2); 
