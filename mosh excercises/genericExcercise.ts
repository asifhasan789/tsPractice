//1 converting the function into generic
// function echo(arg) {
//   return arg;
// }

function echo<T>(arg:T):T{
    return arg
}

//2
function printName<T extends {name:string}>(obj: T) {
  console.log(obj.name);
}

//3
class Entity<G>{
    constructor(public id:G){}
}

//4 this interface keyof will return

interface User4 {
  userId: number;
  username: string;
}

// "userId" | "username"