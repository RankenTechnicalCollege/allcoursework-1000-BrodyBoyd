"use strict";

const $ = selector => document.querySelector(selector);


const calculateFV = (investment, rate, years)=> {
  
  let futureValue = investment;
    for (let i = 1; i <= years; i++) {
  futureValue += futureValue * rate / 100;
}
return futureValue.toFixed(2);
}

// const processEntries = () => {
//   const investment = parseFloat($("#investment").value)
//   const rate = parseFloat($("#rate").value)
//   const years = parseFloat($("#years").value)

//   let errorMessageInvest = "Invalid investment amount.  Must be from 1-100,000"
//   let errorMessageRate = "Invalid interest rate.  Must be from 1-15"
//   let errorMessageYears = "Invalid amount of years.  Must be from 1-50"

//   if (investment <= 0 || investment > 100000) {
//     alert(errorMessageInvest);
//     focusAndSelect("#investment");
//   }
//   else if (rate <= 0 || rate > 15) { 
//     alert(errorMessageRate);
//     focusAndSelect("#rate");
//   }
//   else if (years <= 0 || years > 50) { 
//     alert(errorMessageYears);
//     focusAndSelect("#years");
//   }
//   else {
//   $("#future_value").value = calculateFV(investment,rate,years);
// }
// }

document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", () => {
    const investment = parseFloat($("#investment").value)
    const rate = parseFloat($("#rate").value)
    const years = parseFloat($("#years").value)
  
    let errorMessageInvest = "Invalid investment amount.  Must be from 1-100,000"
    let errorMessageRate = "Invalid interest rate.  Must be from 1-15"
    let errorMessageYears = "Invalid amount of years.  Must be from 1-50"
  
    if (investment <= 0 || investment > 100000) {
      alert(errorMessageInvest);
      focusAndSelect("#investment");
    }
    else if (rate <= 0 || rate > 15) { 
      alert(errorMessageRate);
      focusAndSelect("#rate");
    }
    else if (years <= 0 || years > 50) { 
      alert(errorMessageYears);
      focusAndSelect("#years");
    }
    else {
    $("#future_value").value = calculateFV(investment,rate,years);
  }
  });
  $("#investment").focus();
  
});