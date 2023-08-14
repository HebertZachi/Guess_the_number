'use strict';


  var secretNumber = Math.trunc(Math.random()*20 + 1);

  var score = 20;
  var highscore = 0;
  var ganhei = 0;

const mostrarNumero = (secretNumber) => {
  document.querySelector('.number').textContent = secretNumber;
} 
  
const mandarMensagem = (mensagem) => {
  document.querySelector('.message').textContent = mensagem;
};

const mandarPontuação = (pontuação) => {
  document.querySelector('.score').textContent = pontuação;
};

const corDeFundo = (cor) => {
  document.querySelector('body').style.backgroundColor = cor
};

const gameOver = () => {
  mandarMensagem('Você Perdeu');
  mandarPontuação(0);
  corDeFundo('red');
  mostrarNumero(secretNumber)
}


//Evento do botão check 
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value)

  // Quando não tem imput
  if (!guess) {
    mandarMensagem('Digite um número')
  
    // Quando ganha
  } else if (guess === secretNumber) {
      ganhei = 1;
      mandarMensagem('Parabéns você acertou')
      corDeFundo('#60b347');
      mostrarNumero(secretNumber);
      if (highscore <= score){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

  // Dica da posição
  } else if (guess !== secretNumber) {
    if (ganhei == 0 && score > 1 ) {
      mandarMensagem(guess > secretNumber ? 'Mais Baixo' : 'Mais Alto');
      score--
      mandarPontuação(score)
    } else if (ganhei == 1) {

    } else {
      gameOver();
    }

  } else {

  }
});

//Evento de jogar Novamente
document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random()*20 + 1);
  score = 20;
  ganhei = 0;
  mandarPontuação(20);
  corDeFundo('#222')
  mandarMensagem('Tente um número...');
  mostrarNumero('?')
  document.querySelector('.guess').value = '';
  
}); 