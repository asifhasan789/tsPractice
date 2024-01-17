
//nm1.ts
// namespace Socity {
//   export function doNothing() {
//     console.log("inside socity and doNothing function without export");
//   }
// }

export namespace MyNamespace{
    export interface MyInterface{
        name:string;
        age:number;
    }
    export function myFunction():string{
        // console.log('function from MyNamespace')
        return "function from MyNamespace";

    }
}



export namespace Space{
    export interface person{
        name:string;
        age:number;
    }
    export function greet(person:person):string{
        return `hello,${person.name}!`
    }
}