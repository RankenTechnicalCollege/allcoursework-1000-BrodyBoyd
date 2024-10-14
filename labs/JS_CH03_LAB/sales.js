const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

let q1 = region1[0] + region2[0] + region3[0] + region4[0] + region5[0]
let q2 = region1[1] + region2[1] + region3[1] + region4[1] + region5[1]
let q3 = region1[2] + region2[2] + region3[2] + region4[2] + region5[2]
let q4 = region1[3] + region2[3] + region3[3] + region4[3] + region5[3]

let r1 = region1[0] + region1[1] + region1[2] + region1[3]
let r2 = region2[0] + region2[1] + region2[2] + region2[3]
let r3 = region3[0] + region3[1] + region3[2] + region3[3]
let r4 = region4[0] + region4[1] + region4[2] + region4[3]
let r5 = region5[0] + region5[1] + region5[2] + region5[3]

let total = q1 + q2 + q3 + q4

document.write(`<h1>Sales Data</h2>`) 
document.write(`<br><h2>Sales By Quarter</h2>`) 
document.write(`<p>Q1: $${q1}</p>`)
document.write(`<p>Q2: $${q2}</p>`)
document.write(`<p>Q3: $${q3}</p>`)
document.write(`<p>Q4: $${q4}</p>`)
document.write(`<br><br>`)
document.write(`<h2>Sales By Region</h2>`)
document.write(`<p>Region 1: $${r1}</p>`)
document.write(`<p>Region 2: $${r2}</p>`)
document.write(`<p>Region 3: $${r3}</p>`)
document.write(`<p>Region 4: $${r4}</p>`)
document.write(`<p>Region 5: $${r5}</p>`)
document.write(`<br><br>`)
document.write(`<h2>Total Sales</h2>`)
document.write(`<p>$${total}</p>`)