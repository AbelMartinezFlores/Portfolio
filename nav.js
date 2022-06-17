function modoOscuro(){
    style.setProperty('--first-color','#1F1F1F');
    style.setProperty('--second-color','#131313');
    style.setProperty('--circle','#1C1C1C');
    style.setProperty('--first-color-contrast','#ebe1c9');
    style.setProperty('--underlined','rgba(255, 255, 255, 0.301)');
    style.setProperty('--leter-first-color','white');
    style.setProperty('--leter-second-color','black');
}

function modoClaro(){
    style.setProperty('--first-color','white');
    style.setProperty('--second-color','#EEE');
    style.setProperty('--circle','#ccc');
    style.setProperty('--first-color-contrast','black');
    style.setProperty('--underlined','rgb(155 146 146)');
    style.setProperty('--leter-first-color','black');
    style.setProperty('--leter-second-color','white');
}

//comprobacion inicial para detectar el modo del usuairo por defecto
const style =document.documentElement.style;
const checkbox = document.querySelector(".switch > input");
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if(prefersDark){
    modoOscuro();
    checkbox.checked = true;
}
else{
    modoClaro();
    checkbox.checked = false;
}

//cambio modo oscuro-claro
checkbox.addEventListener("click", () => {
    console.log(checkbox);
    if(checkbox.checked){
        modoOscuro();
    }
    else{
        modoClaro();
    }
})

//scroll con opacidad del nav
window.addEventListener("scroll", ()=>{
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>0);
});

//menu para nav pequeño con animacion
const menu  = document.querySelector('#menu');
const nav = document.querySelector('.nav-link');
const item_nav = document.querySelector('.nav-link>li>a');
console.log(item_nav)

menu.addEventListener("click", () =>{
    nav.classList.toggle("open");
});

function quitarNav(){
    if(nav.classList.contains("open"))
        nav.classList.toggle("open");
}

/**
 * TODO: arreglar nav para que se quite al pulsar sobre seccion
 * todo: cambiar estilo de matriculas de honor y hobbies
*/ 

