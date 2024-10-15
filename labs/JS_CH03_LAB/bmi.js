const calcBmi = () => {
let weight = parseInt(document.getElementById('weight').value)
let height = parseInt(document.getElementById('height').value)

let bmi = parseFloat((weight * 703) / (height*height)); 

  document.getElementById("bmi").innerText = bmi;
}
