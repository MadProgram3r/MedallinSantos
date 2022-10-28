window.onload = function() {

    document.getElementById("btnTexto").addEventListener("click", pedirFecha);

    function pedirFecha(){
        
        var solicitud = new XMLHttpRequest();

        solicitud.onreadystatechange = function() {
            if(solicitud.readyState == 4 && solicitud.status == 200){
                document.getElementById("Texto").innerHTML = solicitud.response;
                console.log(solicitud.response);
            }
        }
        solicitud.open("GET", "PeticionesAjax.txt", true);
        solicitud.send();
    }

    document.getElementById("contenedor").onclick = function() {
        let target = event.target;
    
        cambiarColor(target);
    };
    
    function cambiarColor(target) {
        
        if(target.classList.contains("colorR")){
            target.classList.remove('colorR');
        }else{
            target.classList.add('colorR');
        }
        console.log(target.classList);
    }
}

