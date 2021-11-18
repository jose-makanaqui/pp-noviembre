    document.onkeydown = function(e) {
        if (e.keyCode === 116) {
            return false;
          }
         if (e.keyCode === 82) {
        // removes the ctrl+r (page refresh)
            return false;
          }
    
        if (e.key === 116) {
        return false;
        }
        if (e.key === 82) {
        return false;
        }
        if (e.key == 1) {
        document.getElementById('entrada1').value = document.getElementById('bo3').value;
        }
        if (e.key == 2) {
        document.getElementById('entrada1').value = document.getElementById('bo4').value;
        }
        if (e.key == 3) {
        document.getElementById('entrada1').value = document.getElementById('bo5').value;
        }
        if (e.key == "Enter") {
            if (document.getElementById("entrada1").value =="cinco") {
                document.getElementById('file').value += 30;
                alert("bien");
                document.getElementById('boton-comprobar1').disabled = true;
                document.getElementById('boton1').disabled = false;
            }else {
                alert("mal");
                document.getElementById('boton-comprobar1').disabled = true;
                document.getElementById('boton1').disabled = false;
            }
        }

    }

    function mostrar(ejercicio) {
        var estadoBarra= document.getElementById('file').value
        while (estadoBarra <= 100) {
        fetch(ejercicio)
            .then(response => response.text())
            .then(datos => document.getElementById("contenido").innerHTML = datos);
        }
        alert("se frena");
    }

    function boton1() {
        document.getElementById('entrada1').value = document.getElementById('bo3').value;
    }
        
    function boton2() {
        document.getElementById('entrada1').value = document.getElementById('bo4').value;
    }

    function boton3() {
        document.getElementById('entrada1').value = document.getElementById('bo5').value;
    }

    function comprobar1() {
        if (document.getElementById("entrada1").value =="cinco") {
            document.getElementById('file').value += 30;
            alert("bien");
            document.getElementById('boton-comprobar1').disabled = true;
            document.getElementById('boton1').disabled = false;
        } else {
            alert("mal");
            document.getElementById('boton-comprobar1').disabled = true;
            document.getElementById('boton1').disabled = false;
        }
      }

    function guardarfrase2() {
        let guardar2;
        let inicia = 40;
        guardar2=document.getElementById("entrada2").value;
        if (guardar2 =="dos") {
            document.getElementById('file').value += inicia;
            alert("bien");
            document.getElementById('boton-comprobar2').disabled = true;
            document.getElementById('boton2').disabled = false;
        } else {
            alert("mal");
            document.getElementById('boton-comprobar2').disabled = true;
            document.getElementById('boton2').disabled = false;
        }
    }
/*
    function boton1() {
        let bot1 = document.getElementById('b1').value;
        document.getElementById('entrada3').value = bot1;
    }

    function boton2() {
        let bot2 = "";
        document.getElementById('entrada3').value = bot2;
    }

    function boton3() {
        let bot3 = document.getElementById('b3').value;
        document.getElementById('entrada3').value = bot3;
    }

    function comprobar3() {
        let inicie = 50;
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

    function concatenar(objeto) {
        document.getElementById('entrada4').value = objeto.value
        }

    function comprobar4() {
        let inicio = 20;
        let guardar = document.getElementById('entrada4').value;
        if (guardar == 4) {
            document.getElementById('file').value += inicio;
            alert("bien");
            document.getElementById('boton-comprobar4').disabled = true;
            document.getElementById('boton4').disabled = false;
            }else{
            alert("mal");
            document.getElementById('boton-comprobar4').disabled = true;
            document.getElementById('boton4').disabled = false;
            }
        }*/