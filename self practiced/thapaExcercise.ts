//1
let s1: string = "Hello, TypeSript!";
//2
let firstName = "mohd";
let lastName: string = "asif";
let fullName = firstName.concat(lastName);
console.log(fullName);
//3
let sentence: string = "aspirtaion is the key to achievment";
let sentenceLength: number = sentence.length;
console.log(sentenceLength);
//4
let sentence1: string = "helping others will help you";
let uppercaseText: string = sentence1.toUpperCase();
let lowercaseText = uppercaseText.toLocaleLowerCase();
console.log(uppercaseText);
console.log(lowercaseText);
//5
let longText: string =
  "hey this extracting of 10 characters from sentence in ts";
let shortText = longText.slice(0, 10);
console.log(shortText, shortText.length);
//6
let str1: string = "hey world";
let str2: string = "hey world";
let areEqual: boolean = str1 === str2;
console.log(areEqual);
//7
let product: string = "laptop";
let price: number = 1000;
console.log(`product ${product} is priced at ${price} dollars`);
//8
function isEven(no: number): boolean {
  return no % 2 == 0;
}
console.log(isEven(7));
console.log(isEven(98));
//9
function isDivisibleBy4And8(no: number): boolean {
  return no % 4 == 0 && no % 8 == 0;
}
console.log("check if divisible by 4 and 8");
console.log(isDivisibleBy4And8(40));
console.log(isDivisibleBy4And8(36));
//10
console.log(2 ** 53);
console.log(2 ** 53 + 1);
let maxNumber = Number.MAX_SAFE_INTEGER;
console.log(maxNumber);
let maxNumber1: bigint = 9007199254740992n;
console.log(maxNumber1);
//11
let bigInt = BigInt(90071992547409925);
console.log(bigInt);
let sum = maxNumber1 + bigInt;
console.log(sum);

let ant: any = 10;
ant = "hi";
ant.length;
if (typeof ant == "string") {
  ant.charAt(2);
}
let anty: unknown = 45;
anty = "false";
// Type assertion is required to use the value
// console.log(anty.length);
console.log((anty as string).length);
if (typeof anty == "string") {
  anty.length;
}
//12
const isPalindrome =(word:string):boolean =>{
    // let letts:string[]= word.split('')
    // console.log(letts);
    
    let revWord:string = word.split('').reverse().join('')
    console.log(word,revWord);
    return word == revWord
}

console.log(isPalindrome('abcdefg'));
console.log(isPalindrome('abcba'));

//13
const findMaxValue =(no:number[]):number=>{
    return Math.max(...no)
}
const calculateAverage =(no:number[]):number=>{
    return no.reduce((p,c)=>p+c,0)/no.length
}

console.log(findMaxValue([10,50,99,-6,45.3]));
console.log(calculateAverage([10,50,99,-6,45.3]));
//14
function findRectArea(n:number,m:number){
    return n*m
}
console.log(findRectArea(5,8));

// let s5 = 'hello'
// s5 =10
let nn = [1,2,3,4]
let ll = new Array(1,2,3,4)
let pp = Array.of(4,5,6)
let mm = [1,true,'hi',null,undefined]

let oo = {
    name:'xyz',
    age:52
}
console.log(typeof oo);

let set1 = new Set<number>([1,2,3,1,2,3,1])
console.log(set1);

//15 filter
let greter4 = ['alic','bob','tom','john'].filter(e=>e.length>=4)
console.log(greter4);

let filt = ['Asif','Asim','John','Alice'].filter(e=>e.startsWith('A'))
console.log(filt);


//normal obj
let info ={
  name:'hamed',
  age:24,
  isStudent:true,
  address:{
    city:'hyd',
    pincode:500002,
    isIndian:true
  }
}


//obj with types

// {
//   name:string,
//   gender:string,
//   age:number,
//   address:{
//     city:string,
//     pincode:number
//   }
let info1:Data = {
  name:'xyz',
  gender: 'm',
  age:20,
  address:{
    city:'del',
    // pincode:500064
  }
}

const doubleAge = (n:Data) =>{
  return n.age*n.age
}

console.log(doubleAge(info1));

console.log(info1.address.pincode);

console.log(info.address.isIndian);

//type alias in ts
//code reusablity and better abstraction
//write type one time use multiple times at different places

type Data = {
  name: string | number;
  gender: string;
  age: number;
  address: {
    city: string;
    pincode?: number;
  };
};

export type TodosContext = {
  todos:string[],
  addTodo:(task:string) =>void
}


class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  drive() {
    console.log(`Driving my ${this.year} ${this.make} ${this.model}`);
  }
}

const c1 = new Car('hi','90',2012)
console.log(c1);

c1.drive()

let sumo:(a:number)=> number

let a =9

sumo=(a)=>{
  return a*a
}

type cat = 'billo'

const mycat:cat = 'billo'

type Namey = `mr.${string}`

let n1:Namey = `mr.kat`
let n:Namey = `mr.james`

//self practice

// Create a Person class with properties such as name, age, and a method sayHello that prints a greeting including the person's name.

class Person{
  name:string;
  age:number;
  sayHello(){
    console.log(`welcome ${this.name} age : ${this.age}`)
  }
  constructor(name:string,age:number){
    this.name = name
    this.age = age
  }

}

let p1 = new Person('asif',22)
p1.sayHello()

interface Shape{
  area:number;
  color:string;
}
interface Circle extends Shape{
  findArea:(n:number)=>number
}
interface Rectangle extends Shape{
  findArea:(n:number)=>number
}

function generic<T>(args: T): T{
  // let n = (args as number)*(args as number)
  return args
}

console.log(generic<number>(100));
console.log(generic<string>('hundred'));