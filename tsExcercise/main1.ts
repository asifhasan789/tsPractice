// 1. Implement a custom inheritance mechanism in TypeScript using prototypes. Create a base class Shape with
// properties and methods, and then extend it to create derived classes like Circle and Rectangle.
type measureType = number |number[]


class Shape<T extends measureType>{
    constructor(private measure:T){}
    get dataMember(){
        return this.measure
    }
    displayMeasure(){
        console.log("Measures given :",this.measure);
    }
}

class Circle<T extends number> extends Shape<T>{
    constructor( private sides: T){
        super (sides)
    }
    getCircleArea(){
        return 3.14*(this.sides**2)
    }

}

class Rectangle<T extends measureType> extends Shape<T> {
  constructor(private sides: T) {
    super(sides);
  }

  private isNumberArray(value: unknown): value is number[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'number') && value.length === 2;
}
  
  getRectangleArea(){
    if(this.isNumberArray(this.sides)){
    return this.sides[0]*this.sides[1];}
    return -1
}
    
}

//shape object
const s1 = new Shape(45)
//getter method
console.log(s1.dataMember);
s1.displayMeasure()

//circle object
const c1 = new Circle(10)
c1.displayMeasure()
console.log(c1.getCircleArea());

//rectangle object
const r1 = new Rectangle([20,10])
r1.displayMeasure()
console.log(r1.dataMember);
console.log(r1.getRectangleArea());

//using prototype mechanism

// function Shape1(m:number){
//     this.m = m
// }

// Base class
function Animal(this: { name: string }, name: string) {
  this.name = name;
}

Animal.prototype.eat = function (food: string): string {
    console.log(`${this.name} is eating ${food}`);
    return `Yum, ${food} tastes good!`;
};

// Derived class
function Dog(this:{name: string, breed: string},name: string, breed: string) {
    // Call the base class constructor
    Animal.call(this, name);

    // Additional properties for the derived class
    this.breed = breed;
}

// Set up the prototype chain
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Additional method for the derived class
Dog.prototype.bark = function (): string {
    console.log(`${this.name} is barking!`);
    return 'Woof! Woof!';
};

// Creating instances
const myDog = new Dog('Buddy', 'Golden Retriever');

// Using methods from the base class
console.log(myDog.eat('dog food'));

// Using methods from the derived class
console.log(myDog.bark());


