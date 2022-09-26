
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


let formFila = document.getElementById("Registro");
formFila.addEventListener("submit", (e)=>{
    e.preventDefault();
    filaVirtual.innerHTML = "";

    let reservaCliente = new Cliente(nombre,apellido,cantComensales);

    reservas.push(reservaCliente);

    localStorage.setItem("cliente", JSON.stringify(reservas))

    console.log(localStorage);

})
    


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