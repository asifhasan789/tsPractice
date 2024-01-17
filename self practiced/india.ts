
// import { Circle} from "./m1";

// import { Circle } from "./m1";

// let c1 = new Circle(8)
// console.log(c1.radius);

// let c2 = new Circle

import * as Shapes from './m1'
let c3 = new Shapes.Circle(2)

class Animal{
    protected name:string;
    constructor(name:string){
        this.name = name  
     }

     eat(food:string):string{
        console.log('eating is a part of life');
        return food
     }
}

class Human extends Animal{
    education:string;
    constructor(edu:string){
        super('dog')
        this.education = edu
    }
    personality(){
        return 'kaisa bhi rahsakta'
    }

}

const nadeem = new Human('bca')
console.log(nadeem.education);
console.log(nadeem.personality());
console.log(nadeem.eat('bagara khana dalcha'));




const dog = new Animal('as')
const cat = new Animal('assdf')
console.log(dog);
// console.log(dog.name);
console.log(dog.eat('khana dio'));

if (nadeem instanceof Human) {
  console.log("this is use of instanceof ");
}

const colors = ["red", "blue", "green"] as const;
let anyColor: any = "purple";
let named: string | null = 'as'
console.log(named);
let nameLength = named.length;
console.log(nameLength);

enum Data{
    person,
    age
}

type Alias = 'asldk'
let person1:Alias = 'asldk'

interface abdullah{
    name:string;
    age?:number;
    location?:string;
    address:string
}

type useKeyof = keyof abdullah

let nm1:useKeyof = 'address'

// obj[nm1]

let a = 100;
let b = "Coffee";
let c = [true, false, false];
let d = { age: 58 };
let e = [3];
let f;
let g = [];

// let log:any = null
//  log?('a')


let name3: string | null = null

let speed = name3 ?? '800'

// let input = document.getElementById('button') as HTMLInputElement
// let input1 = <HTMLInputElement>document.getElementById("button");
// input1.value

function useUnkown(data:unknown){
     if(typeof data == 'string'){
        data.length
     }
}

let user = {
    address:{
        street:78
    }
} || null



user?.address?.street

let foo = undefined
function bar(){
    return 'bar'
}
let x = foo !== null && foo !== undefined ? foo : bar();
let y = foo ?? bar()
console.log(x,y);





// type useKeyof1 = 'name' | 'age' | 'location'

// let nm:abdullah = {}

class Logger{
    constructor(public file:string){}
    write(msg:string){
        return this.file = this.file +msg
    }
}

const log2 = new Logger('hello')
console.log(log2.file);
console.log(log2.write(' added'));

//
class Person {
  constructor(public firstName: string, public lastName: string) {}
  get fullName(){
    return this.firstName + this.lastName
  }
}
class Employee extends Person{
    constructor(private _salary:number,fn:string,ln:string){
        super(fn,ln)
    }
    salary(){
        return this._salary
    }
}

let p1 = new Person('alex','dwan')
console.log(p1.fullName);

interface empDetails {
    name:string;
    salary:number;
    address:{
        street:string;
        city:string;
        zcode:number;
    }
}

function echo<T>(arg:T){
    return arg
}
console.log(<number>echo(8));
console.log(echo('asif'));
interface Generic{
    name:string;
    age:number
}
console.log(<Generic>echo({name:'hamd',age:78}));

class Entity<T>{
    constructor(public ID:T){}
}
const gcp = new Entity(78)
const gcp2 = new Entity<boolean>(true)
const gcp3 = new Entity<Generic>({ name: "hamd", age: 78 });

console.log(gcp.ID);
console.log(gcp2.ID);
console.log(gcp3.ID);

function sayHi(): void {
  console.log("Hi!");
}

let speech: void = sayHi();
console.log(speech);


// function Sauce(name:string){
//     return(constructor:Function)=>{
//         constructor.prototype.sauce =name
//     }
// }
function Sauce(sauce: string) {
  return (constructor: Function) => {
    constructor.prototype.sauce = '';
    constructor.prototype.sandwhcih = '';
  };
}

// @Sauce("pesto")
// class Pizza {

// }
// @Sauce('pesto')
// class Pizza{
// }

// function gen1<>(n:F)




