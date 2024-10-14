document.getElementById('btnClick').onclick = () => {
  event.preventDefault();
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  var num3 = parseFloat(document.getElementById('num3').value);
  var num4 = parseFloat(document.getElementById('num4').value);
  var num5 = parseFloat(document.getElementById('num5').value);

  var total = parseFloat(num1+num2+num3+num4+num5)

  let average = total/5

const html = `<p><label>Your Average:</p>
  <p>${average}</p>`;
        document.write(html);
      };