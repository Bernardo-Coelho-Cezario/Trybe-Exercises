 /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
//Exercício 1
function changeText() {
  document.getElementsByTagName('p')[1].innerText = 'Me vejo como um "dev" e bem estruturado';
}

//Exercício 2
function changeYellowSquare() {
  let squareColor = document.getElementsByClassName('main-content')[0];
  squareColor.style.background = "rgb(76,164,109)";
}
changeYellowSquare();

// Exercício 3
function changeRedSquare () {
  
}