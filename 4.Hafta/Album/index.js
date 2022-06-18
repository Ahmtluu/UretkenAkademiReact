const container = document.querySelector('.container'),
  imageUrl = 'https://source.unsplash.com/random/',
  rows = 6;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img');
  img.src = `${imageUrl}${getRandomSize()}`;
  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}
