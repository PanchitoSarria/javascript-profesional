function add(a: number, b: number){
    return a + b
}

const sum = add(2, 2)


let person: string = 'Paul'

let persons: string[] = []
persons.push('Paul2')
persons.push('Pupi')


const personsAndNumbers: Array< string | number | object > = []
personsAndNumbers.push('Paul3')
personsAndNumbers.push(9)
personsAndNumbers.push({name: 'Paul Obj', age: 2})

console.log(personsAndNumbers)

enum Colors{
    rojo= 'Red',
    azul= 'Blue',
    amarillo= 'Yellow',
}

const myFavColor: Colors = Colors.azul

console.log(myFavColor)

let whatEver: any = 'Primero es String'
whatEver = 10
console.log(whatEver)



// FUNCIONES

function suma (a: number, b: number): number {
    return a + b
}

function funcReturn(b: number): (number) => number {
    return function(a: number){
        return a + b
    }
}
const returnedFunc = funcReturn(2)
const resultReturned = returnedFunc(5)
console.log(resultReturned)


function fullName(firstName: string, lastName: string = 'Perez'): string {
    return `${firstName} ${lastName}`
}
console.log(fullName('Paul'))



// INTERFACES

interface Autos {
    marca: string
    modelo: string
    year: number
    puertas: number
}

const miAuto : Autos = {
    marca: 'Renault',
    modelo: 'Clio',
    year: 2010,
    puertas: 5
}




interface algo{
    clave: string,
    clave2?: number,
}

const interface1 : algo = {
    clave : 'alguna cosa 1',
    // clave2 : 900,
}

console.log(interface1)




interface SquareConfig {
    color?: string;
    width?: number;
  }
  
  function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }
  
  let mySquare = createSquare({ color: "black" });
  console.log(mySquare)




// Interfaces with Functions
interface SearchFunc {
    (source: string, subString: string): boolean;
  }

let mySearch: SearchFunc = function (src, subString) {
  let result = src.search(subString);
  return result > -1;
};
console.log(mySearch('algo', 'al'))







let fullName2: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName2}.

I'll be ${age + 1} years old next month.`;
console.log(sentence)


interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
  }
  
  interface ClockInterface {
    tick(): void;
  }
  
  function createClock(
    ctor: ClockConstructor,
    hour: number,
    minute: number
  ): ClockInterface {
    return new ctor(hour, minute);
  }
  
  class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
      console.log("beep beep");
    }
  }
  
  class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
      console.log("tick tock");
    }
  }
  
  let digital = createClock(DigitalClock, 12, 17);
  let analog = createClock(AnalogClock, 7, 32);

  console.log(digital)
  console.log(analog)






  class Student {
    fullName: string;
    constructor(
      public firstName: string,
      public middleInitial: string,
      public lastName: string
    ) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
  }
  
  interface Person {
    firstName: string;
    lastName: string;
  }
  
  function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
  }
  
  let user = new Student("Jane", "M.", "User");
  
//   document.body.textContent = greeter(user);




class Control {
    private state: any;
  }
  
  interface SelectableControl extends Control {
    select(): void;
  }
  
  class Button extends Control implements SelectableControl {
    select() {}
  }
  
  class TextBox extends Control {
    select() {}
  }
  
  // class ImageControl implements SelectableControl {
  //   private state2: any;
  //   select() {}
  // }





  // class Octopus {
  //   readonly name: string;
  //   readonly numberOfLegs: number = 8;
  //   constructor(theName: string) {
  //     this.name = theName;
  //   }
  // }
  class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {}
  }
  let dad = new Octopus("Man with the 8 strong legs");
  // dad.name = "Man with the 3-piece suit";
  console.log(dad)



  enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG
  }
  
  /**
   * This is equivalent to:
   * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
   */
  type LogLevelStrings = keyof typeof LogLevel;
  
  function printImportant(key: LogLevelStrings, message: string) {
    const num = LogLevel[key];
    if (num <= LogLevel.WARN) {
      console.log("Log level key is:", key);
      console.log("Log level value is:", num);
      console.log("Log level message is:", message);
    }
  }
  printImportant("ERROR", "This is a message");

  const enum Enum {
    A = 1,
    B = A * 2
  }
  
  let uno = Enum.B
  console.log(uno)