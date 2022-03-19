const API_URL = 'https://meme-api.herokuapp.com/gimme/';
const memesContainer = document.getElementsByTagName('main')[0];
const pixelsToAddMemes = 5000;
console.log('Memes engaged');

async function fetchMemes() {
  console.log('rendered');
  const memes = await (await fetch(`${API_URL}40`)).json();
  memes.memes.forEach((mem) => {
    memesContainer.insertAdjacentHTML(
      'beforeend',
      `<div class="image" style="background-image: url('${mem.url}'); margin-bottom: 1rem;">`
    );
  });
}

window.addEventListener('scroll', (e) => {
  if ((scrollY % pixelsToAddMemes).toString().length === 2) {
    fetchMemes();
  }
});

fetchMemes();
