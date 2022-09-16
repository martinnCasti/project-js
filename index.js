let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let cantComensales = document.getElementById("cantComensales");


// class Cliente {
//     constructor(nombre, apellido, comensales){
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.comensales = comensales;
//     }
// }


const reservas =[];

let formFila = document.getElementById("Registro");
formFila.addEventListener("submit", (e) =>{
    e.preventDefault();
    filaVirtual.innerHTML = "";

    let imputs = e.target.children;
    reservas.push(imputs[0].value);
    reservas.push(imputs[1].value);
    reservas.push(imputs[2].value);
    

    reservas.forEach(item => {

        let reserva = document.createElement("div");
        reserva.innerHTML = item;
        filaVirtual.append(reserva);
    })

    imputs[0].value= "";
    imputs[1].value= "";
    imputs[2].value= "";
    
})