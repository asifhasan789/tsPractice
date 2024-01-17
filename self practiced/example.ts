import { Col } from "react-bootstrap";

console.log("this is practice typescript file");

//type annotations in ts (explicit)
let test: number = 10;
let teststring: string = "ten";
let testBoolean: boolean = true;
let testAny: any = 10;
let testUnknown: unknown = "25";

//displaying the variables data
console.log(test);
console.log(teststring);
console.log(testBoolean);
console.log(testAny);
console.log(testUnknown);

//implicit type infering
let impdata = "string";

// defining types to be used
type Strings = string;

//defining types in objects format and optional types also
type TypeList = {
  name: string;
  rollno: number;
  pass: boolean;
  bloodgroup?: string;
};

// using defined types in variables or objects

let firstName: Strings = "mohd";

console.log(firstName, ": from custom Strings type");

let firstObj: TypeList = {
  name: "jhon",
  rollno: 12,
  pass: true,
  bloodgroup: "o+",
};
let secondObj: TypeList = {
  name: "jhon",
  rollno: 12,
  pass: true,
};

console.log(firstObj, secondObj, "both from custom type TypeList");

//setting up types using interface and combining interfaces by extending them

interface details {
  id: number;
  dob: Date;
  gender: string;
}

interface extraDetails extends details {
  address: string;
  pass?: boolean;
}

//creating variable using interface details type

let interfaceObj: details = {
  id: 789,
  dob: new Date(),
  gender: "male",
};

//creating variable using interface extraDetails interface that extends details and pass is an
//optional type in it i.e it has to implement all the types in details as well as extradetails
//except the optional ones

let newObj: extraDetails = {
  id: 745,
  dob: new Date(),
  gender: "female",
  address: "hyd",
};

console.log(newObj, "variable that is typed from extend interface ");

// optinal types using | operator union of types
let fruits: string | boolean = "apple";
fruits = true;

type newType = {
  code: number;
};
type newType2 = {
  msg: string;
};

//using the intersection operator to get combined types of the given above custom types

let response: newType & newType2 = {
  code: 200,
  msg: "success",
};

console.log(
  response,
  "from intersection of types and same goes for interfaces"
);

//using functions for types for return and also for the parameters
function concatnum(n: number, s: string): void {
  console.log(n + s, "this is void return");
}

function concatnumr(n: number, s: string): string {
  return n + s;
}

//function with default values in ts
function defaultVals(n:number, val=false):any{
    console.log(n,val);
}

console.log(defaultVals);

concatnum(7, "seven");
console.log(concatnumr(8, "eight"));

//using any, unknown and never
function action(n: any) {
  console.log(n.toLowerCase());
}
function action2(n: unknown):unknown{
  if (typeof n === "number") {
    return n.toString();
  } else if (typeof n === "string") {
    return n.toUpperCase();
  }
  return n
}

console.log(action2('noble'));
console.log(action2(25));
console.log(action2(true));

//using never type for functions that doesnt return or that goes into loop or throws expection

function intoInfinity():never{
    while(true){

    }
}

function throwsException():never{
    throw new Error('this is error')
}

// console.log(intoInfinity());
// console.log(throwsException());


//defining type arrays in ts
let dataArr : any[] = [1,false,'name']
let dataArr2 : number[] = [304,12,28]
let dataArr3 : string[] = ['abc','xyz','lmno']

//creating readonly tuple
let readonlyTuple: readonly [string, number] = ["hello", 42];

console.log(readonlyTuple,"read only tuple");
readonlyTuple = ['hi',25]
console.log(readonlyTuple);


console.log(dataArr);
console.log(dataArr2);
console.log(dataArr3);

//creating enums

enum Color {
    red=1,
    blue,
    green
}
// Color.green = 5
let newColor : Color = Color.green
console.log(newColor);
console.log(Color[newColor]);


//using as keyword converts the data type by force

let someval : any = 'hello'
let someValExtract: number = (someval as string).length
console.log(someval);
console.log(someValExtract);

