const toggle=document.getElementsByClassName("navbar__toggle")[0];
const navLinks=document.getElementsByClassName('navbar__menu')[0]
const mainContent=document.getElementsByClassName('page-title')[0]
toggle.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
    mainContent.classList.toggle('do');
})