/* #1 On Click Event */
const nav = document.querySelector('.nav').addEventListener('click', onClick);

function onClick(e) {
  let char = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += char[Math.floor(Math.random() * 16)];
  }

  e.target.style.color = color;
}

/* #2 On Load Event */
const funBusImg = document
  .querySelector('.intro img')
  .addEventListener('load', onLoad);

function onLoad(e) {
  alert('Fun Bus Image has Loaded');
}

/* #3 Mouse Up event */
const logo = document
  .querySelector('.logo-heading')
  .addEventListener('mouseup', onMouseUp);

function onMouseUp(e) {
  e.target.style.textDecoration = 'underline';
}

/* #4 Mouse Over event */
const images = document.querySelectorAll('img');

images.forEach(image => {
  image.addEventListener('mouseover', onMouseOver);
});

function onMouseOver(e) {
  e.target.style.display = 'none';
}

/* #5 Mouse Move event */
const body = document
  .querySelector('body')
  .addEventListener('mousemove', function(e) {
    console.log('Screen position X: ' + e.offsetX);
    console.log('Screen position Y: ' + e.offsetY);
  });
