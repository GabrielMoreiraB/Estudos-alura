const botaoMenu = document.querySelector('botao__cabecalho-menu')
const menu = document.querySelector('cabecalho__menu')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('cabecalho__menu-ativo')
})