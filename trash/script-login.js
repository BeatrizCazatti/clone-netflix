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
/*
srcImage = '' 
function perfilSelect(indexPerfil){
    var perfilSelecionado = document.getElementsByClassName('perfil')[indexPerfil]

    switch (indexPerfil) {
        case 0:
            srcImage = 'img/perfis/3.png'
            break;
        case 1:
            window.alert('Be')
            break;
        case 2:
            window.alert('Ge')
            break;
        case 3:
            window.alert('Zé')
            break;
        default:
            break;
    }
}
*/
