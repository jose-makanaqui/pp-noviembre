/*window.addEventListener('load', inicio, false);

function inicio() {
    document.getElementById('uno' || 'dos' || 'tres' || 'cuatro' || 'cinco').
    addEventListener('change', contenedorVacio);
    
}*/

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
    }else{
        alert('al palo le pegastes');
    }
}

