const bodyElement = window.document.body
abrirMenuMobile.addEventListener('click', abrirMenu)
fecharMenuMobile.addEventListener('click', fecharMenu)

function abrirMenu(){
    bodyElement.style.overflow = 'hidden'
    abrirMenuMobile.classList.add('abrirMenuResponsivo')  
    fecharMenuMobile.classList.add('fecharMenuResponsivo')
    menu.classList.add('menuResponsivo')
}

function fecharMenu(){
    bodyElement.style.overflow = 'auto'
    abrirMenuMobile.classList.remove('abrirMenuResponsivo')  
    fecharMenuMobile.classList.remove('fecharMenuResponsivo')
    menu.classList.remove('menuResponsivo')
}