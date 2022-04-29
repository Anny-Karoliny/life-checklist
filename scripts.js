function verificar(){
    var elemento = document.getElementsByClassName("check")
    var nascer = document.getElementById("nascer")

    if(nascer.checked == true){
        nascer.style.backgroundColor = "red"
    }
}

verificar()