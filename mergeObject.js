//Say you want to merge two objects

//Object 1
let obj1 = { "key1": "value1", "key2": "value2" };


//Object 2
let obj2 = { "key1": "value3", "key3": "value4" };

//You can use the ... operator

//1. Copy Object2 on Object1 
//2. Add missing key value pairs
let mergedObject1 = { ...obj1, ...obj2 }; //Output: { key1: 'value3', key2: 'value2', key3: 'value4' }

//1. Copy Object1 on Object2 
//2. Add missing key value pairs
let mergedObject2 = { ...obj2, ...obj1 }; //Output:{ key1: 'value1', key3: 'value4', key2: 'value2' }
