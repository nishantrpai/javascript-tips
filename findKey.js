//check if a key exists in a obj
let person = {
  firstName: "James",
  lastName: "Bond",
  age: 25,
};

//you can use the `in` operator
console.log('firstName' in person);

//or use Boolean
console.log(Boolean(person['firstName']));

//or use hasOwnProperty
console.log(person.hasOwnProperty('firstName'));