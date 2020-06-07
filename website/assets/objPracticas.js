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



//  Ejercicio de asincronismo

const URL_API_CHARAC = 'https://rickandmortyapi.com/api/character/'


function Promesa (){
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest()
        req.open('GET', URL_API_CHARAC, true)
        req.onreadystatechange = function(evento){
            if(req.readyState === 4){
                if(req.status === 200){

                }
            }
        }

    })
}