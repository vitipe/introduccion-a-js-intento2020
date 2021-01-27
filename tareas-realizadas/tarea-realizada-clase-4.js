//hacer una función que se llame calcularPromedio, que tome como parámetro un array.

const NUMEROS = [100, 200, 300, 400, 500];

function calcularPromedios(NUMEROS){
    let acumulador = 0;
    for (let i = 0; i < NUMEROS.length; i++){
        acumulador += NUMEROS[i];
    } 
    return(acumulador / NUMEROS.length);
}

console.log('El promedio sería ' + calcularPromedios(NUMEROS));


//Contemos todos los números del 10 al 0, pero que cuando lleguemos al 5 diga "Estamos en el medio!".

let NUMERO = 10;

while (NUMERO > 0){
    if (NUMERO === 5){
        console.log('Estamos en el medio!');
    } 
    else {
        console.log(NUMERO);
    };
    NUMERO -= 1;
};




//FizzBuzz
/*
Cuenta de 1 al 50 e imprime todos los numeros
Si un número es múltiplo de 3, imprime Fizz
Si un número es múltiplo de 5, imprime Buzz
Si un número es múltiplo de 3 y 5, imprime FizzBuzz
Para todos los demás, imprime el número mismo.
*/

const FIZZ = 'Fizz';
const BUZZ = 'Buzz';

for (let i = 1; i <= 50; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log(FIZZ + BUZZ);
    }
    else if (i % 3 === 0){
        console.log(FIZZ);
    }
    else if (i % 5 === 0){
        console.log(BUZZ);
    }
    else {
        console.log(i);
    }
};

//FizzBuzz de la clase:

for (let i = 1; i <= 50; i++){
    let texto = '';
    if (i % 3 === 0){
        texto = 'Fizz';
    }

    if (i % 5 === 0){
        texto += 'Buzz';
    }
    console.log(texto || i);
};