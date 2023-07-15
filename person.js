// const person = {
//   name:'Mike Tyson',
//   age:60,
// }

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet(){
    return `I am ${this.name} , I am ${this.age} years old`;
  }
}

module.exports = Person;
