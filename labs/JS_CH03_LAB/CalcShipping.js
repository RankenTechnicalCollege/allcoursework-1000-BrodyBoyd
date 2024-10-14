document.getElementById('btnClick').onclick = () => {
  let price = parseFloat(document.getElementById('price').value);

  if (price <= 25 && price >=0) {
    total = price + 1.50
    alert(`With shipping and handling you are paying $${total}`);
  }
  else if (price > 25) {
    total = price + (price * (10/100))
    alert(`With shipping and handling you are paying $${total}`);
  }
  else if (price = NaN) {
    alert("Please enter a number");
  }
}
