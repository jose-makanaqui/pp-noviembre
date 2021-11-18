function start(e) {
    e.dataTransfer.effecAllowed = 'move'; // Define el efecto como mover (Es el por defecto)
    e.dataTransfer.setData("Text", e.target.id); // Coje el elemento que se va a mover
    e.target.style.opacity = '0.4';
}

document.onkeydown = function(e) {
    // keycode for F5 function
    if (e.keyCode === 116) {
      return false;
    }
   if (e.keyCode === 82) {
  // removes the ctrl+r (page refresh)
      return false;
    }
  };


/**
 * Función que se ejecuta se termina de arrastrar el elemento. 
 */

function end(e){
    e.target.style.opacity = ''; // Restaura la opacidad del elemento   
    e.dataTransfer.clearData("Data"); 
}

/**
 * Función que se ejecuta cuando un elemento arrastrable entra en el elemento desde del que se llama. 
 */

function enter(e) {
    return true;
}

/**
 * Función que se ejecuta cuando un elemento arrastrable esta sobre el elemento desde del que se llama. 
 * Devuelve false si el objeto se puede soltar en ese elemento y true en caso contrario.
 */

function over(e) {
    if ((e.target.className == "contenedorPieza") || (e.target.className == "contenedorPieza1") 
        || (e.target.className == "contenedorPieza2") || (e.target.className == "contenedorPieza3")
        || (e.target.className == "contenedorPieza4")  || (e.target.className == "contenedorPieza5")
        || (e.target.id == "contenedorPiezas")) {
        return false;
    } else {
        return true;
    }
}
    
/**
 * Función que se ejecuta cuando un elemento arrastrable se suelta sobre el elemento desde del que se llama. 
 */

function drop(e) {
    e.preventDefault(); // Evita que se ejecute la accion por defecto del elemento soltado.
    var elementoArrastrado = e.dataTransfer.getData("Text");
    e.target.appendChild(document.getElementById(elementoArrastrado)); // Coloca el elemento soltado sobre el elemento desde el que se llamo esta funcion
    document.getElementById('botoncomprobar').disabled = false;
}

    /*function comprobarnavegador() {
    if ((document.getElementById('pieza1').parentNode.id!='pieza1') ||
        (document.getElementById('pieza2').parentNode.id!='pieza2') ||
        (document.getElementById('pieza3').parentNode.id!='pieza3') ||
        (document.getElementById('pieza4').parentNode.id!='pieza4') ||
        (document.getElementById('pieza5').parentNode.id!='pieza5'))

    {   document.getElementById('botoncomprobar').disabled = false;
    }else{
        document.getElementById('botoncomprobar').disabled = true;
    }
}*/

function comprobarPuzzle(){
    let inicio = 20;
    if ((document.getElementById('pieza1').parentNode.id=='uno') &&
        (document.getElementById('pieza2').parentNode.id=='dos') &&
        (document.getElementById('pieza3').parentNode.id=='tres') &&
        (document.getElementById('pieza4').parentNode.id=='cuatro') &&
        (document.getElementById('pieza5').parentNode.id=='cinco'))
    {
        document.getElementById('file').value += inicio;
        alert('sabesabe');
        document.getElementById('boton1').disabled = false;
    }else{
        alert('al palo le pegastes');
        document.getElementById('boton1').disabled = false;
    }
}

function mostrar(ejercicio) {
    fetch(ejercicio)
    .then(response => response.text())
    .then(datos => document.getElementById("contenido").innerHTML = datos);
    }

function concatenar(objeto) {
    document.getElementById('entrada2').value = objeto.value
    }

    function comprobar2() {
        let inicio = 20;
        let guardar = document.getElementById('entrada2').value;
        if (guardar == 2) {
            document.getElementById('file').value += inicio;
            alert("bien");
            document.getElementById('boton-comprobar2').disabled = true;
            document.getElementById('boton2').disabled = false;
            }else{
            alert("mal");
            document.getElementById('boton-comprobar2').disabled = true;
            document.getElementById('boton2').disabled = false;
            }
        }    

        function boton1() {
            let b1 = document.getElementById('b1').value;
            document.getElementById('entrada3').value = b1;
        }
    
        function boton2() {
            let b2 = "";
            document.getElementById('entrada3').value = b2;
        }
    
        function boton3() {
            let b3 = document.getElementById('b3').value;
            document.getElementById('entrada3').value = b3;
        }
    
        function comprobar3() {
            let inicie = 80;
            let guardar3 = document.getElementById("entrada3").value;
            if (guardar3 == "tres") {
                document.getElementById('file').value += inicie;
                alert("bien");
                document.getElementById('boton-comprobar3').disabled = true;
                document.getElementById('boton3').disabled = false;
            }else{
                alert("bien");
                document.getElementById('boton-comprobar3').disabled = true;
                document.getElementById('boton3').disabled = false;
            }
        }

        function guardarfrase4() {
            let guardar2;
            let inicia = 40;
            guardar2=document.getElementById("entrada4").value;
            if (guardar2 =="cuatro") {
                document.getElementById('file').value += inicia;
                alert("bien");
                document.getElementById('boton-comprobar4').disabled = true;
                document.getElementById('boton4').disabled = false;
            } else {
                alert("mal");
                document.getElementById('boton-comprobar4').disabled = true;
                document.getElementById('boton4').disabled = false;
            }
        }