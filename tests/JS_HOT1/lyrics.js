const $ = selector => document.querySelector(selector);

function number() {
  let number = parseFloat($('#number').value);

  numberCheck = isNaN(number)
  if (number == 1) {
    document.getElementById('messageDisplay').innerText = "One is the loneliest number that you'll ever do.";
    document.getElementById('number').value = '';
  }
  else if (number == 2) {
    document.getElementById('messageDisplay').innerText = "Two can be as bad as one. It's the loneliest number since the number one.";
    document.getElementById('number').value = '';
  }
  else if (number == 3) {
    document.getElementById('messageDisplay').innerText = "There is no three.";
    document.getElementById('number').value = '';
  }
  else if (number > 3 || number < 1) {
    document.getElementById('messageDisplay').innerText = "You didn't enter a valid number";
    document.getElementById('number').value = '';
  }
  else if (numberCheck == true) {
    document.getElementById('messageDisplay').innerText = "Please enter a number, not a word.";
    document.getElementById('number').value = '';
  }
};