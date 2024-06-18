// Acessar janela do browser
//Acessar HTML
// Pegar botão
// Saber que está sendo clicado o botão
//  Acessar a Janela
// Pegar HTML todo
// Pegar o elements
// Mover o elements para direita


const btnRight = window.document.querySelector('.button-arrow.-right');
const btnLeft = window.document.querySelector('.button-arrow.-left');
const elements = window.document.querySelector('.elements');
let pixels = 150;


btnRight.addEventListener('click', function() {
pixels = pixels + 150; 
elements.style = `transform: translateX(${pixels}px);`;
});

btnLeft.addEventListener('click', function(){
pixels = pixels - 150;
elements.style = `transform: translateX(${pixels}px)`;

});