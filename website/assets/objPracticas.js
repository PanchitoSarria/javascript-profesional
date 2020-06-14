class Personas{
    constructor(nombre, apellido, edad){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad

    // this.saludo()
    }

    saludo = function(){
        console.log(`Hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad}.`)
    }
}
Personas.prototype.soyViejo = function(){
    return this.edad > 35
}

class Developer extends Personas{
    constructor(nombre, apellido, edad, profesion, workCountry){
        super(nombre, apellido, edad)
        this.profesion= profesion
        this.workCountry = workCountry
    }

    saludo = function(){
        console.log(`Hola, soy ${this.nombre} y soy ${this.profesion} en ${this.workCountry}`)
    }
}


let fran = new Developer('Francisco', 'Sarría', 38, 'programador JS', 'España'),
    agus = new Personas('Agus', 'Sarría', 39),
    elena = new Personas('Elena', 'Herrera', 8)

