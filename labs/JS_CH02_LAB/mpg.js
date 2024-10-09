"use strict";
        

const miles = parseInt(prompt("Enter miles driven"));

const gallons = parseInt(prompt("Enter gallons of gas used"));

const mpg = parseFloat(miles/gallons);

const html = `<p><label>Miles: </label>${miles}</p>
                <p><label>Gallons: </label>${gallons}</p>
                <p><label>MPG: </label>${mpg.toFixed(2)}</p>`;
            document.write(html);