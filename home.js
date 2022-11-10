
//Declaramos variables
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let cantComensales = document.getElementById("cantComensales");

const reservas = [];

//Generamos la class Cliente
class Cliente {
    constructor(nombre, apellido, comensales){
        this.nombre = nombre;
        this.apellido = apellido;
        this.comensales = comensales;

    }
}

//Generamos el fetch para la consulta la api local
const consultarReservas = async () => {

    
    const response = await fetch("./data/data.json");
    const data = await response.json();
    let contenedor = document.getElementById("contenedor");

    data.forEach((element) => {
        let div = document.createElement("contenedor");
        div.innerHTML =`
        <h2>Nombre: ${element.nombre}
        <h3>Apellido: ${element.apellido}
        <h3>Cantidad de comensales: ${element.CantComensales}
        <hr/>
        
        `;

        contenedor.append(div);
    }
    )
    Swal.fire({
        position: 'top-mid',
        icon: 'success',
        title: 'Se ha traido los datos correctamente!',
        showConfirmButton: false,
        timer: 1500
      })
}


//Traigo el btnConsultar del html
let botonConsultar = document.getElementById("btnConsultar");

botonConsultar.addEventListener("click", () =>{

    consultarReservas();    

})








 