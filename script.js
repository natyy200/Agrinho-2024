// alert("Hello World");

const caixa = document.querySelector(".caixa");

const bgMusic = new Audio("./sons/raggamuffin-173303.mp3");
bgMusic.volume= 0.2;

caixa.addEventListener('mouseover',()=>bgMusic.play());




