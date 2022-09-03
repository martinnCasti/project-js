let cantSillas = 100;

function Reservar() {
    let nombre = prompt("Bienvenido a sittingApp. Cual es su nombre?");
    let apellido = prompt("Por favor, ingrese su apellido");
    alert(`Bienvenid@ ${nombre} ${apellido}. Esta es la fila virtual de sittingApp`);

}

function Disponibilidad(num1, num2) {
    result = num1-num2;
    return result;
}

Reservar();   

let numComensales = prompt("Cuantos comensales son?");
    

while (cantSillas>0) {

    //alert("Entro en el while porque cantSillas es >0");

    if (numComensales<=cantSillas) {

        //alert("entro en el primer if porque numComensales es <= cantSillas")
        cantSillas = Disponibilidad(cantSillas,numComensales);
        if (cantSillas>=0) {
            alert(`Se te asignara una mesa para ${numComensales} comensales. Tenes tantas personas por delante`);
            alert(`Hay ${cantSillas} cantidad disponible`);    
        }
    }else{
        //alert("entro en el del primer if porque numComensales>cantSillas");
        alert("No disponemos de la cantidad de sillas requeridas para la reserva");

    }

    alert(`Hay ${cantSillas} cantidad disponible`);

        if (cantSillas>0) {
            //alert("entro en el 2do if porque cantSillas es > 0")
            Reservar();
            numComensales = prompt("Cuantos comensales son?");
            if(numComensales>cantSillas){
                //alert("entro en el if porque numComensales es > a cantSillas");
                alert(`No es posible reservar la cantidad de comensales ingresados ${numComensales} ya que no disponemos de lugar.`);
                alert(`Solo nos quedan ${cantSillas} lugares disponible`);
                Reservar();
                numComensales = prompt("Cuantos comensales son?");
            }else{
                alert(`Se te asignara una mesa para ${numComensales} comensales. Tenes tantas personas por delante`);
                cantSillas = Disponibilidad(cantSillas,numComensales);
                if (cantSillas==0) {
                    alert("No tenemos mas lugar en el restaurante/bar")
                    
                }else{
                    alert(`Solo nos quedan ${cantSillas} lugares disponible`);
                    Reservar();
                    numComensales = prompt("Cuantos comensales son?");
                }
            }
        }else{
            alert("Entro en el else porque cantSillas < a numComensales ");
            alert("No hay mas disponibilidad en el restaurante/Bar");
        }

        // alert(`Quedan ${cantSillas} disponibles`)
}