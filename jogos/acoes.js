const ativarmenu = () => {
    const oi = document.querySelector(".menuoculto")
    if (oi.style.display == "none" || oi.style.display == "") {
        oi.style.display = "block"
    }
    oi.style.display = "block"
}


const desativarmenu = () => {
    const oi = document.querySelector(".menuoculto")
    if (oi.style.display == "block") {
        oi.style.display = "none"
    }
    oi.style.display = "none"
}

const baixarjogo = () =>{
    const oi = document.querySelector(".versoes")
    if (oi.style.display == "none" || oi.style.display == "") {
        oi.style.display = "block"
    }
    else{
        oi.style.display = "none"
    }
}

