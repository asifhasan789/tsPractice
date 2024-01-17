console.log('hello world in ts')

//creating a type called person which has type
type Person = {
    name: string,
    phone : number,
    address? : string
}
//creating interface similar to type but more used
interface NewInterface {
    rollno : number [],
    dept : string,
    clg: string
}

let data : [number,boolean?] = [304]

let num:bigint = 999999999999999555n
console.log(num);

let student : NewInterface ={
    rollno :[1604,20,733,304],
    dept: 'cse',
    clg: 'mj'
}


type Name = string
let namePerson:String = 'asif'
let marks: number | string  = 'hello'
let typePerson : Name = 'faraz'

let typeObj: Person ={
    name : 'adnan',
    phone : 789,
    // address:'shah gunj'
}

function add(a:number,b:number) :any {

}

// implicit type also can't be changed here
let implidata = 'string'
// implidata = 54

function pow(value: number, exponent:number = 10) {
  return value ** exponent;
}

function getData<F,L>(v1:F,v2:L): any{
    return [v1,v2]
}

console.log(getData<string,number>('nine',90));

// function createPair<S, T>(v1: S, v2: T): number {
//   return v1+v2;
// }
// console.log(createPair<number, number>("hello", 42));

console.log(pow(10));

console.log(typeof data,data);
console.log('adding using function',add(7,8));

console.log(student.rollno.join('-'));

console.log(typeObj.address);
console.log(typeObj.name.length);
console.log(typeObj.phone);

 console.log(namePerson);
 console.log(marks);