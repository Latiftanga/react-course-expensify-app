// console.log('destructruing');

// const person = {
//   age: 30,
//   location: {
//     city: 'Wa',
//     temp: 100
//   }
// }

// const { name = 'Ananymous', age } = person;

// console.log(`My name is ${name}, am ${age} years old`);

// const book = {
//   title: 'Ego is an Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-published' } = book.publisher;

// console.log(publisherName)


//Array destructuring

const address = ['PLT 53 BLK A', 'Wa', 'Upper West'];

const [, city, region] = address;

console.log(`You're in ${city}, ${region}`);