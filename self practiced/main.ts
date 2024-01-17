///<reference path="nm1.ts"/>

// import { Socity } from "./nm1";

// Socity.doNothing()

import { MyNamespace, Space } from "./nm1";

// Using the imported namespace
const myObject: MyNamespace.MyInterface = {
  name: "John",
  age: 25,
};
console.log(myObject);

let value = Space.greet({name:'na',age:12});
console.log(value);

const person: Space.person = { name: "Bob", age: 28 };
console.log(Space.greet(person));
