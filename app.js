const text = document.getElementById('startingText');

const answersBall = ["It is certain", "As I see it, yes", "Don't count on it", 
"It is decidedly so", "Ask again later", "My sources say no"]

function myFunction(){
  const index = Math.floor(Math.random()* 6)
  const message = answersBall[index]
  document.getElementById('startingText').innerText = message;
};   