// alert("Hello World");

const caixa = document.querySelector(".caixa");

const music = new Audio("sons/birds-frogs-nature.mp3");
const birdies = new Audio("sons/birdies.mp3")
music.volume = 0.2;

caixa.addEventListener('mouseover', ()=>music.play());
caixa.addEventListener('mouseover', ()=>birdies.play());
    

