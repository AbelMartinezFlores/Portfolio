window.addEventListener("scroll", ()=>{
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>0);
});

const menu  = document.querySelector('#menu');
const nav = document.querySelector('.nav-link');

menu.addEventListener("click", () =>{
    nav.classList.toggle("open");
});