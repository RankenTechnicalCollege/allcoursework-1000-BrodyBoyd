

const $ = selector => document.querySelector(selector);

function verify() {
  let age = parseFloat($('#age').value);

  numberCheck = isNaN(age)
  if (age >= 21 && age <= 200) {
    document.getElementById('messageDisplay').innerText = "Welcome to the venue!";
    document.getElementById('age').value = '';
  }
  else if (age >= 1 && age <= 20) {
    document.getElementById('messageDisplay').innerText = "You're not old enough!";
    document.getElementById('age').value = '';
  }
  else if (age < 1 || age > 200) {
    document.getElementById('messageDisplay').innerText = "Age out of range!";
    document.getElementById('age').value = '';
  }
  else if (numberCheck == true) {
    document.getElementById('messageDisplay').innerText = "Please enter your age!";
    document.getElementById('age').value = '';
  }
};

