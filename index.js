var randomNumber1 = Math.floor(Math.random()*6)+1; // number from 1-6
document.querySelector('.img1').setAttribute('src','images/dice' + randomNumber1 + '.png'); // selects first image and changes it according to randomNumber1

var randomNumber2 = Math.floor(Math.random()*6)+1; // number from 1-6
document.querySelector('.img2').setAttribute('src','images/dice' + randomNumber2 + '.png'); // selects forst image (dice1.png - dice6.png) and changes it
                                                                                            // according to randomNumber2

if (randomNumber1 > randomNumber2) {                                    // statements for evaluating who wins
  document.querySelector('h1').innerHTML= '🚩 Player 1 wins!';         // changes h1 text for all scenarios
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector('h1').innerHTML= 'Player 2 wins! 🚩';
}
else {
  document.querySelector('h1').innerHTML= 'Draw!';
}
