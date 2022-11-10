

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

let contenedor = document.getElementById("contenedor");
let formFila = document.getElementById("filaVirtual");

Registro.addEventListener("submit", (e)=>{
    e.preventDefault();
    filaVirtual.innerHTML = "";

    if(nombre.value == "" || apellido.value == "" || cantComensales.value == ""){
        let mensaje = "No es posible cargar la reserva, intenta de nuevo";
        alert(mensaje);
        
    }else{
        //genero las reservas para cada cliente
    let reservaCliente = new Cliente(nombre.value,apellido.value,cantComensales.value);

    //inserto el objeto en el array de reservas
    reservas.push(reservaCliente);

    //guardo el el localstorage los objetos
    localStorage.setItem("cliente", JSON.stringify(reservas))

    let reservasGeneradas = [];
    let reservaStorage = JSON.parse(localStorage.getItem("cliente"))

    
    reservaStorage ? reservasGeneradas = reservaStorage : console.log("No hay datos en el localstorage");

    
    reservaStorage.forEach(element => {
    
    let div = document.createElement("div");
    e.preventDefault();
    
    div.innerHTML =` 
    <h2>Reservas Generadas</h2>
    <h3>Nombre y apellido: ${element.nombre}, ${element.apellido}</h3>
    <h3>Cantidad de Comensales: ${element.comensales}</h3>
    <hr/>
    
    `;
    filaVirtual.append(div);
    Swal.fire(
        'Perfecto!',
        'Se ha guardado la reserva!',
        'success'
    )
    });
    

    console.log(reservaStorage);

    }
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
