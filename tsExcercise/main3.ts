// 3  Create a TypeScript implementation of the Singleton pattern for a logging service. Ensure that only one
// instance of the logger exists across the application. Additionally, design a Factory pattern to create different
// types of loggers (e.g., FileLogger, ConsoleLogger) based on user preferences.

class Singleton{
    private static instance:Singleton | null = null;

    private constructor(){

    }
    public static getInstance():Singleton{
        if(!Singleton.instance){
            Singleton.instance = new Singleton()
        }
        return Singleton.instance
    }
}

const i1= Singleton.getInstance()
const i2= Singleton.getInstance()

console.log(i1 ===  i2);