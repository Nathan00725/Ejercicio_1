function area() {
    let n1 = parseInt(document.getElementById('base').value)
    let n2 = parseInt(document.getElementById('area').value)

    if (isNaN(n1)) {
        alertify.error('Número 1 en blanco')
    } else if(isNaN(n2)) {
        alertify.error('Número 2 en blanco')
    } else {
        let area = n1 * n2;
        document.getElementById('Resultado').value = area
    }

}

function limpiar() {
    document.getElementById('base').value = ''
    document.getElementById('area').value = ''
    document.getElementById('Resultado').value = ''
}