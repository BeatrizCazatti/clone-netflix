$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    responsive:{
        0:{
            items:2.5
        },
        600:{
            items:3.5
        },
        1000:{
            items:5.5
        }
    }
})

var icoMute = document.getElementsByClassName('fa-volume-mute')[0]
var icoUp = document.getElementsByClassName('fa-volume-up')[0]
var video = document.getElementsByClassName('video')[0]
var cat = document.getElementsByClassName('cat')[0]
function tag() {
    cat.style.marginLeft = "0"
}

icoMute.style.display = 'flex'
icoMute.classList.remove('esconder')
icoUp.style.display = 'none'
icoUp.classList.add('esconder')
var activate = false

function sound(){    
    if(activate){
        //com som
        icoMute.style.display = 'none'
        icoMute.classList.add('esconder')
        icoUp.style.display = 'flex'
        icoUp.classList.remove('esconder')
        video.muted = false
        activate = false
    }else{
        //mutado
        icoMute.style.display = 'flex'
        icoMute.classList.remove('esconder')
        icoUp.style.display = 'none'
        icoUp.classList.add('esconder')
        video.muted = true
        activate = true
    }
}
var listNavigation = document.getElementById('navegar')


function animacaoSearch() {
    var inputSearch = document.getElementById('search')
    if(inputSearch.classList.contains('anin-search-open')){
        //tá aberto, bora fechar
        inputSearch.classList.add('anin-search-close')
        inputSearch.classList.remove('anin-search-open')
        inputSearch.value = ''
    }else{
        //tá fechado, bora abrir
        if(window.innerWidth < 550){
            navegar.style.display = 'none'
        }
        inputSearch.classList.add('anin-search-open')
        inputSearch.classList.remove('anin-search-close')
        inputSearch.focus()
    }
}

var boxPerfil = document.getElementsByClassName('box-perfil')[0]


var set = document.getElementsByClassName('set')[0]

var point = document.getElementsByClassName('point')[0]
point.classList.remove('esconder')    

var boxNoti = document.getElementsByClassName('box-notifications')[0]

function notificationsUp(){
    //window.alert('entrei')
    boxPerfil.classList.add('esconder')
    boxNoti.classList.add('box-notifications-up')
    boxNoti.classList.remove('box-notifications-close')
    boxNoti.classList.remove('esconder')    
}

function notificationsClose(){
    //window.alert('sai')
    boxNoti.classList.add('box-notifications-close')
    boxNoti.classList.remove('box-notifications-up')
    point.classList.add('esconder')
}
//
//

function perfilUp(){
    //window.alert('entrei')
    boxNoti.classList.add('esconder')
    boxPerfil.classList.add('box-notifications-up')
    boxPerfil.classList.remove('box-notifications-close')
    boxPerfil.classList.remove('esconder')    
    
    set.classList.remove('set-animation-close')
    set.classList.add('set-animation-up')
}

function perfilClose(){
    boxPerfil.classList.add('box-notifications-close')
    boxPerfil.classList.remove('box-notifications-up')
    set.classList.add('set-animation-close')
    set.classList.remove('set-animation-up')
    //boxPerfil.classList.add('esconder') 
}

//
//
var boxNavegation = document.getElementById('box-navegation')

function navegationUp() {
    
    boxPerfil.classList.add('esconder')
    boxNavegation.classList.add('box-notifications-up')
    boxNavegation.classList.remove('box-notifications-close')
    boxNavegation.classList.remove('esconder')    
}

function navegationClose(){
    boxNavegation.classList.add('box-notifications-close')
    boxNavegation.classList.remove('box-notifications-up')
}
    


  function hoverMouseEnterPerfil (n){
    var p = document.getElementsByTagName('p')[n]
    if(n == 4){
        /*Se for o add-perfil*/
        var circle=document.getElementById('circle')
        circle.style.backgroundColor = '#ffff'
    }
    var perfil = document.querySelectorAll('.perfil img')[n]
    p.style.color = '#ffffff'
    perfil.classList.add('list-perfis-hover')
    
}
function hoverMouseLeavePerfil (n){
    var p = document.getElementsByTagName('p')[n]
    if(n == 4){
        /*Se for o add-perfil*/
        var circle=document.getElementById('circle')
        circle.style.backgroundColor = '#6C6C6C'
    }
    var perfil = document.querySelectorAll('.perfil img')[n]
    p.style.color = '#6C6C6C'
    perfil.classList.remove('list-perfis-hover')
}


//////////////////////
//////////////////////
/////////////////////


var srcImage = '' 
var indexPerfil = ''

function videoTerminado() {
    var icoRedo = document.getElementsByClassName('fa-redo')[0]
    
    icoMute.style.position = 'absolute'
    
    icoMute.style.display = 'none'
    icoUp.style.display = 'none'
    
    icoRedo.style.display = 'flex'
    icoRedo.style.position = 'relative'

    document.querySelector('img.logo-filme').style.animation = 'animation-redo 1s 2s both'

    document.getElementById('text-trailer').style.animation = 'text-animation-redo 1s 2s both'
}

function replay() {
    var video = document.getElementsByTagName("video")[0]
    var icoRedo = document.getElementsByClassName('fa-redo')[0]

    video.currentTime = 0
    video.play()
    video.muted = 'false'

    icoRedo.style.display = 'none'
    icoRedo.style.position = 'unset'

    if(window.innerWidth <= 640){
        document.querySelector('img.logo-filme').style.animation = 'none'
        document.getElementById('text-trailer').style.animation = 'none'

        sound()
    }
    document.querySelector('img.logo-filme').style.animation = 'animation 1s 2s both'

    document.getElementById('text-trailer').style.animation = 'text-animation 1s 2s both'
    
    
    sound()
}
