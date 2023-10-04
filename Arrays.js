//var listadecompras =[];
//listadecompras [3] = 'Tomates';
//listadecompras [1] = 'Lechugas';
//listadecompras [4] = 'Cebollas';

// console.log(listadecompras);

//var elementoDelArray = listadecompras [1];
//console.log (elementoDelArray);

//console.log(listadecompras.length);

//var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
//console.log (nombres);

//var colores = ['Amarillo', 'Azul'];
//colores.push('Rojo');
//colores.unshift('Verde');
//colores.pop();
//colores.shift();

//console.log(colores);

//var pintores = ['Picasso', 'Velezquez', 'Van Gogh', 'Dali'];
//var incluye = pintores.includes('Monet');

//console.log(incluye);

//var numeros = [10, 6, 8, 9];
//var cumplenCondicion = numeros.every((num) => {
//    return num > 5;
//});
//console.log(cumplenCondicion);

//var palabra='Henri';
//var palabraSeparada=palabra.split('');
//palabraSeparada.pop();
//palabraSeparada.push('y');
//var palabraArreglada=palabraSeparada.join('');
//console.log(palabraArreglada);

//var numeros = [1, 2, 3, 4];
//numeros.forEach((num) => {
//    if (num === 3) {
//        console.log(num);
//    }
//});

//var numeros = [1,2,3,4];
//var masUno = numeros.map((num) => {
//    return num+1;
//});
//console.log(masUno);

//var arr = [1,2,3,4,5];
//for (var i=0; i<arr.length; i++) {
//    console.log(arr[i]);
//}

function encontrarLetraP (string) {
    var letras = string.split ('');
    for (let i = 0; i<letras.length; i++) {
        if (letras [i] === 'P') {
            console.log ('Si contiene P');
        }  
    }
}
encontrarLetraP('javaScript');
encontrarLetraP('Henry');
