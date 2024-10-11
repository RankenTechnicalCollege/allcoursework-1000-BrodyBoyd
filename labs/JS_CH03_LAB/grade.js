let total = 0;
let count = 0;
let score = 0;

do {
  score = parseInt(prompt("enter a test score, or enter 999 to end scores.", 999));
  
  if (score >= 0 && score <=59) {
    total = total + score;
    count++; 
    document.write(`<p>Score ${count}: ${score} Grade: F</p>`);
  }
  else if (score >= 60 && score <=67) {
    total = total + score;
    count++; 
    document.write(`<p>Score ${count}: ${score} Grade: D</p>`);
  }
  else if (score >= 68 && score <=79) {
    total = total + score;
    count++; 
    document.write(`<p>Score ${count}: ${score} Grade: C</p>`);
  }
  else if (score >= 80 && score <=87) {
    total = total + score;
    count++; 
    document.write(`<p>Score ${count}: ${score} Grade: B</p>`);
  }
  else if (score >= 88 && score <=100) {
    total = total + score;
    count++; 
    document.write(`<p>Score ${count}: ${score} Grade: A</p>`);
  }
  else if (score != 999) {
    alert("score must be a valid number from 0 through 100.");
  }
}
while(score != 999);

const average = parseInt(total/count);
document.write(`<p>average score is ${average}</p>`);