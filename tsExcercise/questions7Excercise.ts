//1

// function isArrayed(n:any):n is any[]{
//     return Array.isArray(n)

function reverseGen<T>(arr: T[]): T[] {
  return arr.length > 0 ? arr.reverse() : [];
}

console.log(reverseGen<string>(["l", "m", "hi"]));
console.log(reverseGen<number>([7, 8, 6]));
console.log(reverseGen<boolean>([false, true, true]));
console.log(reverseGen<any>([false, true, true]));
console.log(reverseGen<unknown>([false, true, true]));
console.log(reverseGen([false, true, true, null, undefined, 0, [], {}]));

//2
function acceptStringNumber(n: string | number): number {
  if (typeof n === "string") {
    return n.length;
  }
  return n * n;
}

console.log(acceptStringNumber("asalamunallikum"));
console.log(acceptStringNumber(5));

//3
function concateSN(n: string[] | number[]):string|number {

  let sum = 0
  let concat = ''

  for(const e of n){
    if(typeof e === 'number'){
        sum +=e
    }
    else if(typeof e === 'string'){
        concat+=e
    }
  }
  if(sum>0){
    return sum
  }
  else if(concat.length>0){
    return concat
  }
  return 'empty of different typed array'
}
console.log( 
concateSN([7, 8, 10, 12])
)
console.log(concateSN(["mohd", "asif", "hasan"]));
;

//4
interface Person1{
    name:string;
    age:number;
}

interface Worker1{
    jobTitle:string;
    salary:number;
}

type workingPerson = Person1 | Worker1
type workingPersona = Person1 & Worker1

const workingPerson1:workingPersona ={
    name:'faraz',
    age:22,
    jobTitle:'FrontEnd Intern',
    salary:0
}
const workingPerson2: workingPersona = {
  name: "faraz",
  age: 22,
  jobTitle: "FrontEnd Intern",
  salary: 0,
};

let p1 = {
  name: "faraz",
  age: 22,
};
let w1 = {
  jobTitle: "FrontEnd Intern",
  salary: 0,
};

//5
function acceptPW<T extends Worker1 & Person1>(
  n: Worker1 | Person1,
  m: Worker1 | Person1
) {
  console.log("given object :", n);
  console.log("given object :", m);
}

acceptPW<Worker1&Person1>(p1,w1)
acceptPW<workingPersona>(p1,w1)

//6
function isString(n:any):n is string{
    return typeof n === 'string'
}

function captilize(n:string){
    if(isString(n)){
        let words = n.split(" ")
        for(let i=0;i<words.length;i++){
            words[i] = words[i].charAt(0).toUpperCase()+ words[i].slice(1)
        }
       return words.join(" ")
    }
    else{
        return`type of n is'${typeof n}`;
    }
}

console.log(captilize("hello"));
console.log(captilize("mohd asif hasan"));

//7

//type guard
function isStringOrNumber(variable: any): variable is string | number {
  return typeof variable === 'string' || typeof variable === 'number';
}

function processStringOrNumber(input: string | number): void {
  if (isStringOrNumber(input)) {
    if (typeof input === 'string') {
      console.log(`Input is a string: ${input.toUpperCase()}`);
    } else {
      console.log(`Input is a number: ${input * 2}`);
    }
  } else {
    console.log(`Input is neither a string nor a number: ${input}`);
  }
}

const strVariable: string = 'hello';
const numVariable: number = 42;

processStringOrNumber(strVariable);
processStringOrNumber(numVariable);
// processStringOrNumber(true); 

