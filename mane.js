let menuBlock = document.querySelector('.menu')
let gameBlock = document.querySelector('.zadachi')
let currentAnswer = document.querySelector('number')


function startGame(){
    menuBlock.classList.add('hidden');
    gameBlock.classList.remove('hidden');   
}


function goBack(){
    menuBlock.classList.remove('hidden');
    gameBlock.classList.add('hidden');  
}