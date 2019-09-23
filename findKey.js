let person = {
  'firstName': 'John',
  'lastName': 'Doe',
  'email': 'johndoe@gmail.com'
}

console.log('firstName' in person);

console.log(Boolean(person['firstName']));

console.log(person.hasOwnProperty('firstName'));