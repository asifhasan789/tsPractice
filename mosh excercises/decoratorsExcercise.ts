//1

//Create a decorator for adding a sauce to Pizza instances:

function Sauce(sauce:string){
    return(constructor:Function)=>{
        constructor.prototype.sause = sauce
    }
}


@Sauce("pesto")
class Pizza {
    
}