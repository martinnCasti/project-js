
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





// let contenedor = document.getElementById("contenedor");




// formFila.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     filaVirtual.innerHTML = "";

//     if(nombre.value == "" || apellido.value == "" || cantComensales.value == ""){
//         let mensaje = "No es posible cargar la reserva, intenta de nuevo";
//         alert(mensaje);
        
//     }else{
//         //genero las reservas para cada cliente
//     let reservaCliente = new Cliente(nombre.value,apellido.value,cantComensales.value);

//     //inserto el objeto en el array de reservas
//     reservas.push(reservaCliente);

//     //guardo el el localstorage los objetos
//     localStorage.setItem("cliente", JSON.stringify(reservas))

//     let reservasGeneradas = [];
//     let reservaStorage = JSON.parse(localStorage.getItem("cliente"))

    
//     reservaStorage ? reservasGeneradas = reservaStorage : console.log("No hay datos en el localstorage");

    
//     reservaStorage.forEach(element => {
    
//     let div = document.createElement("div");

//     div.innerHTML =` 
//     <h2>Reservas Generadas</h2>
//     <h3>Nombre y apellido: ${element.nombre}, ${element.apellido}</h3>
//     <h3>Cantidad de Comensales: ${element.comensales}</h3>
    
//     `;
//     filaVirtual.append(div);
//     Swal.fire(
//         'Perfecto!',
//         'Se ha guardado la reserva!',
//         'success'
//     )
//     });
    

//     console.log(reservaStorage);

//     }
// })

//     Swal.fire({
//         title: 'Seguro que desea eliminar la fila generada?',
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Si, deseo eliminarla'
//         }).then((result) => {
//         if (result.isConfirmed) {
//             localStorage.clear();
//             filaVirtual.innerHTML= " ";
//             Swal.fire(
//             'Elimnada!',
//             'La fila ha sido eliminada',
//             'success'
//         )
//         }
//     })  



 