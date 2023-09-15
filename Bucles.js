
// BUCLE FOR

var suma=0;

for (var i=0 ; i<5 ; i++){
    suma=suma+i;
    console.log("variable de iteracion = ", i);
}
console.log("variable Suma = ", suma)


//BUCLE WHILE

var suma=0;
while (suma<3){
    suma = suma+1;
    console.log(suma);
}


// RECURSO SWITCH
const expr = "Cerezas";

switch (expr) {
    case "Naranjas":
        console.log("El kilogramo de naranjas cuesta $0,59.");
        break;
    case "Manzanas":
        console.log("el kilo de manzanas cuesta $0.32.");
        break;
    case "Platanos":
        console.log("El kilo de platanos cuesta $0.48.");
        break;
    case "Cerezas":
        console.log("El kilo de cerezas cuesta $3.00.");
        break;
    case "Mangos":
    case "Papayas":
        console.log("El kilo de mangos y papayas cuesta $2.79.");
        break;
    default:
        console.log("Lo lamentamos, por el momento no disponemos de " + expr + ".");    
}

console.log("Hay algo mas que quisiera consultar?");

