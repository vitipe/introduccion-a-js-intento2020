function validarGrupoFamiliar() {
    const $cantidadFamiliares = document.querySelector('#cantidad-familiares').value;
    
    if ($cantidadFamiliares === '') {
        console.log('Debe ingresar algún valor')
    }
}

validarGrupoFamiliar();