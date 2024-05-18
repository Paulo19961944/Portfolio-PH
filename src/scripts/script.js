const bodyElement = window.document.body // Captura o Body
abrirMenuMobile.addEventListener('click', abrirMenu) // Adiciona Evento Botão ao Evento de Abrir Menu
fecharMenuMobile.addEventListener('click', fecharMenu) // Adiciona Evento ao Botão de Fechar Menu

// Funçao para abrir o menu
function abrirMenu(){
    bodyElement.style.overflow = 'hidden' // Trava a Tela
    abrirMenuMobile.classList.add('abrirMenuResponsivo') // Adiciona a classe abrirMenuResponsivo
    fecharMenuMobile.classList.add('fecharMenuResponsivo') // Adiciona a classe fecharMenuResponsivo
    menu.classList.add('menuResponsivo') // Adiciona a Classe menuResponsivo
}

// Função para fechar o menu
function fecharMenu(){
    bodyElement.style.overflow = 'auto' // Reseta no padrão original
    abrirMenuMobile.classList.remove('abrirMenuResponsivo') // Remove a classe abrirMenuResponsivo
    fecharMenuMobile.classList.remove('fecharMenuResponsivo') // Remove a classe fecharMenuResponsivo
    menu.classList.remove('menuResponsivo') // Remove a classe menuResponsivo
}