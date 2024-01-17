//1
class Logger {
  constructor(public logFile: string) {}
  log(message: string) {}
}

//2
class Person {
  constructor(public firstName: string, public lastName: string) {}
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

//3
class Employee extends Person {
  constructor(firstName: string, lastName: string, public salary: number) {
    super(firstName, lastName);
  }
}

//4
// Private members are not inherited by sub classes whereas propected members does get inherited

//5
interface Address {
  street: string;
  city: string;
  zipCode: number;
}
interface Employeee {
  name: string;
  salary: number;
  address: Address;
}

let employee = {
  name: "John Smith",
  salary: 50_000,
  address: {
    street: "Flinders st",
    city: "Melbourne",
    zipCode: 3144,
  },
};

let employee1:Employeee = {
  name: "John Smith",
  salary: 50_000,
  address: {
    street: "Flinders st",
    city: "Melbourne",
    zipCode: 3144,
  }
};