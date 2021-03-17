/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

function calcularMayorEdad(arrayEdades){
    let mayorEdad = arrayEdades[0];
    for (let i = 0; i < arrayEdades.length; i++){
        if (arrayEdades[i] > mayorEdad){
            mayorEdad = arrayEdades[i];
        }
    };
    return mayorEdad;
};

function calcularMenorEdad(arrayEdades){
    let menorEdad = arrayEdades[0];
    for (let i = 0; i< arrayEdades.length; i++){
        if (arrayEdades[i] < menorEdad){
            menorEdad = arrayEdades[i];
        }
    }
    return menorEdad;
};

function calcularPromedioEdad(arrayEdades){
    let totalEdad = 0;
    for (let i = 0; i < arrayEdades.length; i++){
        totalEdad += arrayEdades[i];
    };
    return (totalEdad/arrayEdades.length);
};

function crearInputsFamiliares() {
    const $cantidadFamiliares = document.querySelector('#cantidad-familiares').value;
    const $formulario = document.querySelector("#formulario");

    for(let i = 1; i<=$cantidadFamiliares; i++){
        let nuevoLabel = document.createElement('label');
        let textoLabel = document.createTextNode('Edad Familiar ' + i);
        let nuevoInput = document.createElement('input'); //se puede poner tipo number aca?
        nuevoInput.type = "number"; //sí, de esta forma
        nuevoInput.min = "0";
        nuevoInput.className = "edades"; //aca con ".class" no anda

        nuevoLabel.appendChild(textoLabel);
        $formulario.appendChild(nuevoLabel);
        $formulario.appendChild(nuevoInput);
    }
}

function crearBotonCalcular() {
    let $botonCalcular = document.createElement('button');
    const $formulario = document.querySelector("#formulario");
    $botonCalcular.textContent = "Calcular edad";
    $botonCalcular.id = "boton-calcular"
    $formulario.appendChild($botonCalcular);

    $botonCalcular.onclick = function(){
        mostrarResultados();
        return false;
    }

}

function mostrarResultados() {
    let nodeValuesEdades = document.querySelectorAll('.edades');
        let arrayEdades = [];
        for (let i = 0; i<nodeValuesEdades.length; i++){
            arrayEdades.push(Number(nodeValuesEdades[i].value));
        };

        const $resultadoPromedioEdad = document.querySelector('#resultado-promedio-edad');
        const $resultadoMayorEdad = document.querySelector('#resultado-mayor-edad');
        const $resultadoMenorEdad = document.querySelector('#resultado-menor-edad');

        $resultadoPromedioEdad.textContent = "La edad promedio es " + calcularPromedioEdad(arrayEdades) + " años.";
        $resultadoMayorEdad.textContent = "La mayor edad es " + calcularMayorEdad(arrayEdades) + " años.";
        $resultadoMenorEdad.textContent = "La menor edad es " + calcularMenorEdad(arrayEdades) + " años.";
}

function crearBotonResetear() {
    //Aca boton resetear
    const $formulario = document.querySelector("#formulario");
    let botonResetear = document.createElement("button");
    botonResetear.textContent = "Resetear formulario";
    botonResetear.id = "boton-resetear"
    $formulario.appendChild(botonResetear);

    botonResetear.onclick = function(){
        //Con .reset() solo borra los numeros pero no los inputs. Así resetea el formulario.
        //Hacer un .remove() con un for por cada input que hay? ver esa
    }
}

const $botonAgregarFamiliares = document.querySelector('#boton-calculo');

$botonAgregarFamiliares.onclick = function(){
    crearInputsFamiliares();
    crearBotonCalcular();
    crearBotonResetear();

    return false;
};

//A HACER

//Boton resetear que borre todos los integrantes anteriores. Sería cuestión de armar un for que borre por cada integrante que hay
//De esa forma al crear intengrantes arranca de 0, no es necesario tener en cuenta cuantos había antes.