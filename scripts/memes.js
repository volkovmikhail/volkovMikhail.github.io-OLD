const API_URL = 'https://meme-api.herokuapp.com/gimme/';
const memesContainer = document.getElementsByTagName('main')[0];
const pixelsToAddMemes = 4000;
console.log('Memes engaged');

async function fetchMemes() {
  console.log('rendered');
  const memes = await (await fetch(`${API_URL}40`)).json();
  memes.memes.forEach((mem) => {
    memesContainer.insertAdjacentHTML('beforeend', `<img src="${mem.url}">`);
  });
}

window.addEventListener('scroll', (e) => {
  if ((scrollY % pixelsToAddMemes).toString().length === 2) {
    fetchMemes();
  }
});

fetchMemes();
