//Desafío de programación #1: Imprimí los números del 1 al 10
//  Resultado: 10 9 8 7 6 5 4 3 2 1

// let contador = 10;

// while (contador >= 1) {
//     console.log(contador);
//     contador -= 1;
// };

// Desafìo de programación  #2: Imprimí los números impares del 1 al 100
// 1 3 5 ... 99

let contador = 1;

while (contador <= 100){
    console.log(contador);
    contador += 2;
}

for (let i = 0; i <= 100; i++){
    if (i % 2 === 1){
        console.log (i);
    };
};

// Desafío de programación #3: Imprimí la tabla de multiplicación del 7
// 7x0 = 0
// 7x1 = 7
// ...
// 7x9 = 63

let multiplicador = 1;

for (let i = 0; i<10;i++){
    console.log(multiplicador + "x" + i + "=" + (multiplicador*i));
};


// Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9
// 1x0 = 0
// ...
// 1x9 = 9
// 2x0 = 0
// ...
// 2x9 = 18
// ...
// ...
// 9x9 = 81




// Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
// [1,2,3,4,5,6,7,8,9,10]
// 1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle