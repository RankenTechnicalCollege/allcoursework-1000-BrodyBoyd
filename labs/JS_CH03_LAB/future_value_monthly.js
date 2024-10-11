let investment = 0;
do {
  investment = parseFloat(prompt("Enter investment amount as xxxxx.xx", 10000));
}
while ( isNaN(investment) );

let rate = 0;
do {
  rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5));
}
while( isNaN(rate) );

let years = 0;
do {
  years = parseInt(prompt("enter number of years", 10));
}
while ( isNaN(years) );

let futureValue = investment;
for (let i = 1; i <= years; i++) {
  futureValue += futureValue * rate / 100;
}

document.write(`<h2>Future value with yearly interest</h2>`)
document.write(`<p><label>Investment amount:</label> ${investment}</p>`);
document.write(`<p><label>Interest Rate:</label> ${rate}</p>`);
document.write(`<p><label>Years:</label> ${years}</p>`);
document.write(`<p><label>Future value:</label> ${futureValue.toFixed(2)}</p>`);

let monthlyValue = investment;
for (let i = 1; i <= years*12; i++) {
  monthlyValue += monthlyValue * rate/100 / 12;
}

document.write(`<h2>Future value with monthly interest</h2>`)
document.write(`<p><label>Investment amount:</label> ${investment}</p>`);
document.write(`<p><label>Interest Rate:</label> ${rate}</p>`);
document.write(`<p><label>Years:</label> ${years}</p>`);
document.write(`<p><label>Future value:</label> ${monthlyValue.toFixed(2)}</p>`);