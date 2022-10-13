
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

const consultarReservas = async () => {
    const response = await fetch("./data/data.json");
    const data = await response.json();
    let contenedor = document.getElementById("contenedor");

    data.forEach((element) => {
        let div = document.createElement("div");
        div.innerHTML =`
        <h2>Nro: ${element.id}
        <h3>Nombre y apellido: ${element.nombreApellido}
        <h3>Cantidad de comensales: ${element.CantComensales}
        <hr/>
        
        `;

        contenedor.append(div);
    }
    )
}


//let contenedor = document.getElementById("contenedor");

//let formFila = document.getElementById("Registro");


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

let botonConsultar = document.getElementById("btnConsultar");

botonConsultar.addEventListener("click", () =>{

    consultarReservas();    

})



    // Swal.fire({
    //     title: 'Seguro que desea eliminar la fila generada?',
    //     icon: 'warning',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'Si, deseo eliminarla'
    //     }).then((result) => {
    //     if (result.isConfirmed) {
    //         localStorage.clear();
    //         filaVirtual.innerHTML= " ";
    //         Swal.fire(
    //         'Elimnada!',
    //         'La fila ha sido eliminada',
    //         'success'
    //     )
    //     }
    // })  



    


    // let imputs = e.target.children;
    // reservas.push(imputs[0].value);
    // reservas.push(imputs[1].value);
    // reservas.push(imputs[2].value);

    // reservas.forEach(item => {

    //     let reservaGenerada = document.createElement("div");
    //     reservaGenerada.innerHTML = item;
    //     filaVirtual.append(reservaGenerada);
        
    // })

    // imputs[0].value= "";
    // imputs[1].value= "";
    // imputs[2].value= "";

// let cliente = new Cliente(nombre, apellido, cantComensales);

// let jsonCli = JSON.stringify(cliente);

// let cliente1 = localStorage.setItem("cliente1", jsonCli);

// console.log(localStorage);