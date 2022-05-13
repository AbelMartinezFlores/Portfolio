//scroll con opacidad del nav
window.addEventListener("scroll", ()=>{
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>0);
});

//menu para nav pequeño con animacion
const menu  = document.querySelector('#menu');
const nav = document.querySelector('.nav-link');

menu.addEventListener("click", () =>{
    nav.classList.toggle("open");
});

//cambio modo oscuro-claro
const style =document.documentElement.style;
const checkbox = document.querySelector(".switch > input");

checkbox.addEventListener("click", () => {
    console.log(checkbox);
    if(checkbox.checked){
        style.setProperty('--first-color','#1F1F1F');
        style.setProperty('--second-color','#131313');
        style.setProperty('--circle','#1C1C1C');
        style.setProperty('--first-color-contrast','white');
        style.setProperty('--underlined','rgba(255, 255, 255, 0.301)');
        style.setProperty('--leter-first-color','white');
        style.setProperty('--leter-second-color','black');
    }
    else{
        style.setProperty('--first-color','white');
        style.setProperty('--second-color','#EEE');
        style.setProperty('--circle','#ccc');
        style.setProperty('--first-color-contrast','black');
        style.setProperty('--underlined','rgb(155 146 146)');
        style.setProperty('--leter-first-color','black');
        style.setProperty('--leter-second-color','white');
    }
})

