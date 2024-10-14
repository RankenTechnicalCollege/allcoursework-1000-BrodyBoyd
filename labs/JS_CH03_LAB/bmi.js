
let weight = parseInt(document.getElementById('weight').value)
let height = parseInt(document.getElementById('height').value)

let bmi = parseFloat(calcBMI(weight * 703 / height^2)) 

function myFunction() {
  document.getElementById("bmi").value = bmi;
}
