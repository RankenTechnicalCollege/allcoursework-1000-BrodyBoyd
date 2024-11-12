const btnElList = document.querySelectorAll('.btn');

btnElList.forEach(btnEl => {
  btnEl.addEventListener('click', () => {
    // Check if the clicked button already has the 'special' class
    if (btnEl.classList.contains('special')) {
      // If it does, remove the 'special' class (deselect it)
      btnEl.classList.remove('special');
    } else {
      // Add the 'special' class to the clicked button (select it)
      btnEl.classList.add('special');
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  var today = new Date();
  var date = today.toDateString();
  document.getElementById('date').innerHTML = date;
});

