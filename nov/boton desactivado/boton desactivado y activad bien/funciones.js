
$(document).ready(function () {
document.getElementById('entrada1').oninput = function() {
    if (document.getElementById('entrada1').value != ''){
        document.getElementById('boton1').disabled = false;
    }else{
        document.getElementById('boton1').disabled = true;
    }
    }
});

function mostrar(ejercicio) {
    fetch(ejercicio)
        .then(response => response.text())
        .then(datos => document.getElementById("contenido").innerHTML = datos);
}

function guardarfrase() {
    let guardar;
    let inicio = 20;
    guardar=document.getElementById("entrada1").value;
    if (guardar =="uno") {
        document.getElementById('file').value += inicio;
        alert("bien");
    } else {
        alert("mal");
    }
}

/*let ob2 = document.getElementById('entrada2').addEventListener('blur', (e) => {
    if (e.target.value == ''){
    document.getElementById('boton2').setAttribute('disabled', 'disabled');
    }else{
        document.getElementById('boton2').removeAttribute('disabled');
    }
})
*/

/*document.getElementById('entrada2').oninput = function() {
    if (document.getElementById('entrada2').value != ''){
        document.getElementById('boton2').disabled = false;
    }else{
        document.getElementById('boton2').disabled = true;
    }
}
*/