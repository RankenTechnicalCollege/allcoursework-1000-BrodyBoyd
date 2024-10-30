let favoriteMovies = ['Lala Land', 'Whiplash', 'Taladega Nights'];

function addToArray() {
  let inputValue = document.getElementById('inputBox').value;
  favoriteMovies.push(inputValue);
  for (let i = 0; i < favoriteMovies.length; i++) {
    document.getElementById('arrayDisplay').innerText = favoriteMovies.join(', ');
    document.getElementById('inputBox').value = '';
  }
}
