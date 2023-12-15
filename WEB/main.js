{
    console.log("Hola Mundo")
    let tarea = document.getElementById("tarea")
    let boton = document.getElementById("botonAd")

    boton.addEventListener("click", anadir)

    function anadir() {
        alert(tarea.value)
    }

}
