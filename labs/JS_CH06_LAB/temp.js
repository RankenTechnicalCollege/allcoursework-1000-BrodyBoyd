'use strict';

const $ = (selector) => document.querySelector(selector);

const Type = () => {
if ($("#fahrenheit").checked) {
  $("#entry").innerHTML = "Enter C degrees:";
  $("#output").innerHTML = "Degrees Fahrenheit:";
} 
if ($("#celsius").checked) {
  $("#entry").innerHTML = "Enter F degrees:";
  $("#output").innerHTML = "Degrees Celsius:";
};
};

const calc = () => {
  const input = $("#degree_entry").value;
  let output = 0;

  if (input == "" || isNaN(input)) {
    $("#error").innerHTML = "You must enter a valid number for degrees.";
  } 
  else {
    $("#error").innerHTML = "";
  if ($("#fahrenheit").checked) {
    output = ((input - 32) * (5/9));
  }
  if ($("#celsius").checked) {
    output = ((input * 1.8) +32);
  }
  $("#output_degree").setAttribute("value", output.toFixed(0))
};
};

document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", calc);
  $("#fahrenheit").addEventListener("click", Type);
  $("#celsius").addEventListener("click", Type);
  $("#input").focus();
})