abrirMenuMobile.addEventListener('click', abrirMenu)
fecharMenuMobile.addEventListener('click', fecharMenu)

function abrirMenu(){
    abrirMenuMobile.classList.add('abrirMenuResponsivo')  
    fecharMenuMobile.classList.add('fecharMenuResponsivo')
    menu.classList.add('menuResponsivo')
}

function fecharMenu(){
    abrirMenuMobile.classList.remove('abrirMenuResponsivo')  
    fecharMenuMobile.classList.remove('fecharMenuResponsivo')
    menu.classList.remove('menuResponsivo')
}