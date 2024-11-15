'use strict';

const $ = (selector) => document.querySelector(selector);

let names = [];
let scores = [];

const add = () => {
  let name = $('#name').value;
  let score = parseInt($('#score').value);
  if (name != '' && score > -1 && score <= 100 && score != '') {
    names.push(name);
    scores.push(score);
    $('#name').value = '';
    $('#score').value = '';
    $('#score_error').innerHTML = '*';
    $('#name_error').innerHTML = '*';
  } else if (score < -1 || score > 100 || isNaN(score) && name != '') {
    $('#score_error').innerHTML = 'Please enter a score between 0 and 100!';
  } else if (name == '') {
    $('#name_error').innerHTML = 'Please enter a name!';
  } else if (score < 0 || score > 100 || score == '' && name == '') {
    $('#score_error').innerHTML = 'Please enter a score between 0 and 100!';
    $('#name_error').innerHTML = 'Please enter a name!';
  } else if (score == '' && name != '') {
    $('#score_error').innerHTML = 'Please enter a score between 0 and 100!';
  }
};

const results = () => {
  var total = 0;
  for(var i = 0; i < scores.length; i++) {
      total += scores[i];
  }
  var avg = total / scores.length;
  $('#avg').innerHTML = avg.toFixed(2);

  const topScore = Math.max(...scores);
  $('#top_score').innerHTML = topScore.toFixed(2);

  for(var i = 0; i < scores.length; i++) {
    if (topScore == scores[i]) {
      let topStudent = names[i];
      $('#top_scorer').innerHTML = topStudent;
    }
}
};

const allScores = () => {
  $('#allScores').innerHTML = "";
  for(var i = 0; i < scores.length; i++) {
    $('#allScores').innerHTML += names[i] + ", " + scores[i];
    $('#allScores').innerHTML += '<br>';
}
};

document.addEventListener('DOMContentLoaded', () => {
  $('#add').addEventListener('click', add);
  $('#results').addEventListener('click', results);
  $('#scores').addEventListener('click', allScores);
  $('#name').focus();
});
