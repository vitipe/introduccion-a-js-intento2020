/*


*/

function crearArraySueldos(){
    let arraySueldos = [];
    let nodeValuesSueldos = document.querySelectorAll('input')

    for (let i = 0; i<nodeValuesSueldos.length; i++){
        if (nodeValuesSueldos[i].value != ''){ //aca tambien se puede usar un "continue" que saltea la iteración
            arraySueldos.push(Number(nodeValuesSueldos[i].value));
        }
    }
    return arraySueldos;
}

function calcularMayorSalarioAnual(arraySueldos){
    let mayorSalario = arraySueldos[0];
    for (let i = 0; i < arraySueldos.length; i++){
        if (arraySueldos[i] > mayorSalario){
            mayorSalario = arraySueldos[i];
        };
    };
    return mayorSalario;
};

function calcularMenorSalarioAnual(arraySueldos){
    let menorSalario = arraySueldos[0];
    for (let i = 0; i < arraySueldos.length; i++){
        if (arraySueldos[i] < menorSalario){
            menorSalario = arraySueldos[i];
        };
    };
    return menorSalario;
};

function calcularSalarioAnualPromedio(arraySueldos){
    let acumuladorSalarioAnual = 0;
    for (let i = 0; i < arraySueldos.length; i++){
        acumuladorSalarioAnual += arraySueldos[i];
    };
    let salarioAnualPromedio = acumuladorSalarioAnual / arraySueldos.length;
    return salarioAnualPromedio.toFixed(2);
};

function calcularSalarioMensualPromedio(arraySueldos){
    let mesesAño = 12;
    return (calcularSalarioAnualPromedio(arraySueldos) / mesesAño).toFixed(2);
};

function crearInputsSueldo(){
    let $formulario = document.querySelector('#formulario');
    let nuevoDiv = document.createElement('div');
    let nuevoInput = document.createElement('input');
    let nuevoLabel = document.createElement('label');
    let textoLabel = document.createTextNode('Salario familiar ' + numeroDeFamiliar);
    nuevoDiv.className = 'div-sueldo';
    nuevoInput.type = 'number';
    nuevoInput.className = 'form-control';

    nuevoLabel.appendChild(textoLabel);
    nuevoDiv.appendChild(nuevoLabel);
    nuevoDiv.appendChild(nuevoInput);
    $formulario.appendChild(nuevoDiv);
};

function removerInputsSueldo(){
    let formulario = document.querySelector('#formulario');
    let ultimoDiv = formulario.lastElementChild;
    formulario.removeChild(ultimoDiv);
};

//Boton Agregar
let numeroDeFamiliar = 1; //Me gustaría que estuviera adentro de una función pero no sé dónde
let $botonAgregarSueldo = document.querySelector('#boton-agregar');
$botonAgregarSueldo.onclick = function(){
    crearInputsSueldo(numeroDeFamiliar);
    numeroDeFamiliar++;
    document.querySelector('#boton-calcular').style.display = "block";

    return false;
};

//Boton Quitar
let $botonQuitarSueldo = document.querySelector('#boton-quitar');
$botonQuitarSueldo.onclick = function() {
    event.preventDefault();//creo que es lo mismo que el return false, es para que no se envíe el formulario
    removerInputsSueldo();
    numeroDeFamiliar--;
    
    return false;
};

//Boton calcular
let $botonCalcular = document.querySelector('#boton-calcular');
$botonCalcular.onclick = function(){
    document.querySelector('#resultado-mayor-sueldo').textContent = "El mayor salario anual es " + calcularMayorSalarioAnual(crearArraySueldos());
    document.querySelector('#resultado-menor-sueldo').textContent = "El menor salario anual es " + calcularMenorSalarioAnual(crearArraySueldos());
    document.querySelector('#resultado-promedio-anual-sueldo').textContent = "El sueldo anual promedio es " + calcularSalarioAnualPromedio(crearArraySueldos());
    document.querySelector('#resultado-promedio-mensual-sueldo').textContent = "El sueldo mensual promedio es " + calcularSalarioMensualPromedio(crearArraySueldos());
    document.querySelector('#boton-resetear').style.display = "block";

    return false;
};

//Boton resetear



//A ARREGLAR!

//Meter todo adentro del form cosa que resetee todo lo de adentro?
//Hacer botón resetear, que aparezca una vez que hacemos click en boton-calcular
//Ver que no use 0 pero si '' para no contar el input vacio (LISTO)
//Ver que reste el numero de familiar (LISTO)
//Mover los .toFixed a la function cosa que ya lo devuelva de ahí (LISTO)