// alert("Hello World");

const caixa = document.querySelector(".caixa");

const music = new Audio("./sons/raggamuffin-173303.mp3");
music.volume= 0.1;

caixa.addEventListener('mouseover', ()=>music.play());
    

