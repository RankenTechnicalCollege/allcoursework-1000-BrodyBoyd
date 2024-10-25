"use strict";

const $ = selector => document.querySelector(selector);


const calculateTotal = (subtotal, rate)=> {
  
  let total = subtotal * (1 + (rate/100));
return total.toFixed(2);
};

const calculateTax = (subtotal, rate)=> {
  
  let tax = (subtotal * (1 + (rate/100))) - subtotal;
return tax.toFixed(2);
};


const processEntries = () => {
  const subtotal = parseFloat($("#subtotal").value)
  const rate = parseFloat($("#rate").value)

  let errorMessageSubtotal = "Invalid Subtotal amount.  Must be from 1-10,000"
  let errorMessageRate = "Invalid interest rate.  Must be from 1-12"

  if (subtotal <= 0 || subtotal > 10000) {
    alert(errorMessageSubtotal);
    focusAndSelect("#subtotal");
  }
  else if (rate <= 0 || rate > 12) { 
    alert(errorMessageRate);
    focusAndSelect("#rate");
  }
  else {
  $("#total").value = calculateTotal(subtotal,rate);
  $("#sales_tax").value = calculateTax(subtotal,rate);
}
};

document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", processEntries);
  $("#subtotal").focus();
});

function clear()
{   
   document.getElementById("myForm").reset();
};