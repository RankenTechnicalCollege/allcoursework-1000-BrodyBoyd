"use strict";

const $ = selector => document.querySelector(selector);
const processEntries = () => {

  let income = parseInt($('#income').value);

  let tax = 0;

  if (income < 0 || income==NaN) {
    alert("Enter a valid income");
  }
  if (income >= 0 && income <= 9875) { 
    tax = (income*.1);
    $('#tax').value = tax.toFixed(2);
  }
  if (income > 9875 && income <= 40125) {
    tax = parseFloat(987.50 + ((income - 9875) * .12));
    $('#tax').value = tax.toFixed(2);
  }
  if (income > 40125 && income <= 85525) {
    tax = parseFloat(4617.5 + ((income - 40125) * .22));
    $('#tax').value = tax.toFixed(2);
  }
  if (income > 85525 && income <= 163300) {
    tax = parseFloat(14605.5 + ((income - 85525) * .24));
    $('#tax').value = tax.toFixed(2);
  }
  if (income > 163300 && income <= 207350) {
    tax = parseFloat(33271.5 + ((income - 163300) * .32));
    $('#tax').value = tax.toFixed(2);
  }
  if (income > 207350 && income <= 518400) {
    tax = parseFloat(47367.5 + ((income - 207350) * .35));
    $('#tax').value = tax.toFixed(2);
  }
  if (income > 518400) {
    tax = parseFloat(156235 + ((income - 518400) * .37));
    $('#tax').value = tax.toFixed(2);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  $('#calculate').addEventListener('click', processEntries);
  $('#income').focus();
});
