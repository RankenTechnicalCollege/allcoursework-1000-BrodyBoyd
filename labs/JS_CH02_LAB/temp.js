const temp = parseFloat(prompt("Enter Fahrenheit temperature"));

const newtemp = parseFloat((temp-32)*(5/9))

const html = `<p>Your temperature in Celsius is  ${newtemp.toFixed(1)}</p>`
document.write(html);