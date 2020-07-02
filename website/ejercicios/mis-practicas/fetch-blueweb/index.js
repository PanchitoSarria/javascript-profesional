const ctaButton = document.getElementById('boton')
const tablaJson = './tabla.json'
const tablaHtml = document.getElementById('contenido')

ctaButton.addEventListener('click', llenarTabla)

// function llenarTabla(event){
//     fetch(tablaJson)
//     .then( data => data.json())
//     .then( data => datosATabla(data))
// }

// function datosATabla(data){
//     for(dato of data){
//         // console.log(dato)
//         tablaHtml.innerHTML += `
//         <tr>
//           <th scope="row">${dato.id}</th>
//           <td>${dato.nombre}</td>
//           <td>${dato.email}</td>
//           <td>${dato.estado ? 'Activo' : 'Inactivo'}</td>
//         </tr>
//         `
//     }
// }

async function llenarTabla(event){
    const llamada = await fetch(tablaJson)
    const formatData = await llamada.json()
    return datosATabla(formatData)
}

function datosATabla(data){
    for(dato of data){
        // console.log(dato)
        tablaHtml.innerHTML += `
        <tr>
          <th scope="row">${dato.id}</th>
          <td>${dato.nombre}</td>
          <td>${dato.email}</td>
          <td>${dato.estado ? 'Activo' : 'Inactivo'}</td>
        </tr>
        `
    }
}