// // Iterator Example
// function nameIterator(names){
// let nextIndex = 0;

// return {
//     next: function() {
//         return nextIndex < names.length ? {value: names [nextIndex++], done: false} :
//         { done: true }
//     }
// }
// }

// // Create an array of names
// const namesArr = ['Breyten', 'Lander', 'Tom', 'Dominic'];

// // Initialize iterator and pass in the names array
// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

// Generators are functions that can return multiple values
// they can 'yield values'

// function* sayNames(){
//     yield 'Breyten';
//     yield 'Lander';
//     yield 'Tim';
// }

// const name = sayNames();
// console.log(name.next().value);

