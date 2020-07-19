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