var subMenu = document.querySelector('.submenu');
var openSubMenu = document.querySelector('.open_submenu');

openSubMenu.addEventListener('click' , function() {
    subMenu.classList.toggle('show');
})

document.addEventListener('click', function(e) {
    if ( subMenu.classList.contains('show')
    && !subMenu.contains(e.target)
    && !openSubMenu.contains(e.target)) {
        subMenu.classList.remove('show');
    }  
});
document.addEventListener('DOMContentLoaded', function() {
    var muscia = document.getElementById('musica');
    muscia.onplay();
 });
