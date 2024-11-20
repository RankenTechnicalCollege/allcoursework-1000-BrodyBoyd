"use strict";

const $ = selector => document.querySelector(selector); 

const login = () => {

  const email = $("#email");
  const password = $("#password");

  if (email.value == "" && password.value == "") {
    $("#error").innerHTML = "You seem to have forgotten your username and password";
    $("#error").classList.add('text-danger');
    $("#error").classList.remove('text-success');
  };
  if (email.value == "admin@example.com" && password.value == "password") {
    $("#error").innerHTML = "Welcome Back admin";
    $("#error").classList.add('text-success');
    $("#error").classList.remove('text-danger');
  } 
  if (email.value != "admin@example.com" && password.value != "password" && email.value != "" && password.value != "") {
    $("#error").innerHTML = "That email and password doesn't seem to be right. Try again.";
    $("#error").classList.add('text-danger');
    $("#error").classList.remove('text-success');
  } 
  if (email.value == "admin@example.com" && password.value != "password") {
    $("#error").innerHTML = "That email and password doesn't seem to be right. Try again.";
    $("#error").classList.add('text-danger');
    $("#error").classList.remove('text-success');
  } 
  if (email.value != "admin@example.com" && password.value == "password") {
    $("#error").innerHTML = "That email and password doesn't seem to be right. Try again.";
    $("#error").classList.add('text-danger');
    $("#error").classList.remove('text-success');
  } 
};


//my pickem thing taught me all about the class list adding and removing




document.addEventListener("DOMContentLoaded", () => {
  $("#login").addEventListener("click", login);
  $("#email").focus();   
});