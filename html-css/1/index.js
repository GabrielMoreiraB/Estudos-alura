var cabecalho__menu = document.querySelector(".cabecalho__menu");

function clickMenu() {
    if(cabecalho__menu.style.display == "flex"){
        cabecalho__menu.style.display = "none"
    } else {
        cabecalho__menu.style.display = "flex";
    }
}