
//Funciones y metodos

//Funcion disponibilidad, realiza la cuenta en base a dos numeros, 
//para validar si hay lugar o no en el rest/bar.
function disponibilidad(num1, num2) {
    result = num1-num2;
    return result;
}

//Generamos la clase Cliente para poder 
//guardar luego la info que nos pasa el usuario en un array.
class Cliente {
    constructor(nombre, apellido, comensales){
        this.nombre = nombre;
        this.apellido = apellido;
        this.comensales = comensales;
    }
}

//Creamos el Array de reservas donde se van a almacenar todos las reservas generadas por el usuario.
const reservas =[];

//Hardcodeo de cantidad de Sillas
//Inicio del sistema de reservas 
let cantSillas = 100;

//Utilizamos la funcion reservar para guardar 
//el nombre y apellido del usuario
let nombre = prompt("Bienvenido a sittingApp. Cual es su nombre?");
let apellido = prompt("Por favor, ingrese su apellido");   
alert(`Bienvenid@ ${nombre} ${apellido}. Esta es la fila virtual de sittingApp`);

//Preguntamos cuantos comensales son para poder guardar la cantidad 
//en la variable numComensales y poder sacar la cuenta de la disponibilidad del restaurante.
let numComensales = prompt("Cuantos comensales son?");

while (cantSillas>0) {

    //alert("Entro en el while porque cantSillas es >0");

    if (numComensales<=cantSillas) {

        //alert("entro en el primer if porque numComensales es <= cantSillas")
        cantSillas = disponibilidad(cantSillas,numComensales);
        if (cantSillas>=0) {
            alert(`Se te asignara una mesa para ${numComensales} comensales. Tenes tantas personas por delante`);
            reservas.push(new Cliente(nombre,apellido,numComensales));
            alert(`Hay ${cantSillas} cantidad disponible`);    
        }
    }else{
        //alert("entro en el del primer if porque numComensales>cantSillas");
        alert("No disponemos de la cantidad de sillas requeridas para la reserva");

    }

    alert(`Hay ${cantSillas} cantidad disponible`);

        if (cantSillas>0) {
            //alert("entro en el 2do if porque cantSillas es > 0")
            nombre = prompt("Bienvenido a sittingApp. Cual es su nombre?");
            apellido = prompt("Por favor, ingrese su apellido");   
            alert(`Bienvenid@ ${nombre} ${apellido}. Esta es la fila virtual de sittingApp`);
            numComensales = prompt("Cuantos comensales son?");

            if(numComensales>cantSillas){
                //alert("entro en el if porque numComensales es > a cantSillas");
                alert(`No es posible reservar la cantidad de comensales ingresados ${numComensales} ya que no disponemos de lugar.`);
                alert(`Solo nos quedan ${cantSillas} lugares disponible`);
                let nombre = prompt("Bienvenido a sittingApp. Cual es su nombre?");
                let apellido = prompt("Por favor, ingrese su apellido");   
                alert(`Bienvenid@ ${nombre} ${apellido}. Esta es la fila virtual de sittingApp`);
                numComensales = prompt("Cuantos comensales son?");
            }else{
                alert(`Se te asignara una mesa para ${numComensales} comensales. Tenes tantas personas por delante`);
                reservas.push(new Cliente(nombre,apellido,numComensales));
                cantSillas = disponibilidad(cantSillas,numComensales);
                if (cantSillas==0) {
                    alert("No tenemos mas lugar en el restaurante/bar")
                    
                }else{
                    alert(`Solo nos quedan ${cantSillas} lugares disponible`);
                    let nombre = prompt("Bienvenido a sittingApp. Cual es su nombre?");
                    let apellido = prompt("Por favor, ingrese su apellido");   
                    alert(`Bienvenid@ ${nombre} ${apellido}. Esta es la fila virtual de sittingApp`);
                    numComensales = prompt("Cuantos comensales son?");
                }
            }
        }else{
            alert("Entro en el else porque cantSillas < a numComensales ");
            alert("No hay mas disponibilidad en el restaurante/Bar");
        }

        // alert(`Quedan ${cantSillas} disponibles`)
}

//Listamos la lista de los clientes que
//generaron una reserva.
mostrarlistaClientes(reservas);


//ME VA A SERVIR PARA IDENTIFICAR SI ESTA O NO LO INDICADO EN LOS CORCHETES DEL INDEXOF 
//EN EL ARRAY
// if (reservas.includes(Objet.nombre)) {
        
// }