"use strict";

const $ = selector => document.querySelector(selector); 


var toDoList = ['Clean car', 'Make Bed', 'Cut Dog\'s Nails', 'Watch the Entirety of Breaking Bad', 'Clean Bathroom'];

const addToDo = () => {
  let inputValue = document.getElementById('inputBox').value;

  if (inputValue == '') {
    $("#error").innerHTML = 'don\'t leave that blank, you actually gotta do something';
  }
  else {
  toDoList.push(inputValue);
  for (let i = 0; i < toDoList.length; i++) {
    document.getElementById('arrayDisplay').innerText = toDoList.join(', ');
    document.getElementById('inputBox').value = '';
    $("#error").innerHTML = '';
}
  }
};


const removeItem = () => {
  toDoList.pop();
  for (let i = 0; i < toDoList.length; i++) {
    document.getElementById('arrayDisplay').innerText = toDoList.join(', ');
    document.getElementById('inputBox').value = '';
    $("#error").innerHTML = '';
}
};
console.log(toDoList)
document.addEventListener("DOMContentLoaded", () => {
  $("#addToList").addEventListener("click", addToDo);
  $("#removeFromList").addEventListener("click", removeItem);
  $("#inputBox").focus();   
});