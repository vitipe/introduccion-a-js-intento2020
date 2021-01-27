//Clase 3 - Tarea 1
let nombreUsuario = prompt('Cómo te llamás?');//Y si apretan ESC? y si apretan ENTER de una?
const MI_NOMBRE = 'víctor'; //Aca el nombre de la variable sería MI_NOMBRE y sería const
const NOMBRE_MADRE = 'stella';//Aca el nombre de la variable sería NOMBRE_MADRE y sería const

if (MI_NOMBRE === nombreUsuario.toLowerCase()){//aca lo que uno quiere comparar va primero
    console.log(`Hola, Tocayo! yo también me llamo ${MI_NOMBRE}`)
}
else if (NOMBRE_MADRE === nombreUsuario.toLowerCase()){
    console.log('Hola ' + nombreUsuario + ', te llamás igual que mi madre!')
}
else if (nombreUsuario.trim().length === 0){ //.trim saca los espacios, y si es length 0 significa que está vacío.
    console.log('No ingresaste ningún nombre.')
}
else{
    console.log("Hola, " + nombreUsuario)
};


//Clase 3 - Tarea 2
let edadUsuario = Number(prompt("Cuantos años tenés?"));
const MI_EDAD = 29;

//Podría ser una constante tipo const TEXTO_PREGUNTA_EDAD = 'Que edad tenes?'
//Y despues  sería let edadUsuario = Number(Prompt(TEXTO_PREGUNTA_EDAD))

if (MI_EDAD < edadUsuario ){
    console.log("Sos más viejo que yo!")
}
else if (MI_EDAD > edadUsuario){
    console.log("Sos más joven que yo!")
}
else if(MI_EDAD == edadUsuario){ //Siempre usar "==="
    console.log("Tenemos la misma edad!")
}
else{
    console.log("No ingreaste un número!")
};

// Clase 3 - Tarea 3
let comprobarDNI = prompt("Tiene DNI?");
let respuestaPositiva = "sí";
let respuestaNegativa = "no";

if (comprobarDNI.toLowerCase() == respuestaPositiva){
    let edadUsuario = Number(prompt("Que edad tenés?"))
    let edadPermitida = 18
    if (edadUsuario >= edadPermitida){
        console.log("Bienvenido al bar!")
    }
    else if (edadUsuario < edadPermitida){
        console.log(`No tenés la edad permitida para entrar al bar, la cual es ${edadPermitida}`) //Por lo visto hay que usar el acento frances (`)para que tome la interpolación
    }
    else{
        console.log("No te entendí, tenés que aclarar la edad que tenés.")
    };
}
else if (comprobarDNI.toLowerCase() == respuestaNegativa){
    console.log("Sin DNI no te puedo dejar entrar al bar")
}
else {
    console.log("Mostrá el DNI o por favor correte de la fila que hay más gente queriendo entrar")
};