"use strict";

const $ = selector => document.querySelector(selector); 

let likes = 0;
let dislikes = 0;
let total = 0;

const like = () => {
  likes += 1;
  $("#total_likes").innerHTML = likes;
  total += 1;
  $("#total").innerHTML = total;
  if (total > 0) {
    $("#total").classList.add('text-success')
    $("#total").classList.remove('text-danger');
  }
  else {
    $("#total").classList.add('text-danger')
  }
};


const dislike = () => {
  dislikes += 1;
  $("#total_dislikes").innerHTML = dislikes;
  total -= 1;
  $("#total").innerHTML = total;
  if (total > 0) {
    $("#total").classList.add('text-success')
    $("#total").classList.remove('text-danger');
  }
  else {
    $("#total").classList.add('text-danger')
  }
};





document.addEventListener("DOMContentLoaded", () => {
  $("#like").addEventListener("click", like);
  $("#dislike").addEventListener("click", dislike);
 
});