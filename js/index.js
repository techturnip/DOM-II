function randColor() {
  let char = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += char[Math.floor(Math.random() * 16)];
  }

  return color;
}

/* #1 On Click Event */
const nav = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav-link');

nav.addEventListener('click', onClick);

function onClick(e) {
  e.target.style.color = randColor();

  e.preventDefault();
}

navLink.forEach(link => {
  link.addEventListener('click', function(e) {
    e.stopPropagation();
    console.log('link clicked');
  });
});

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
const offset = document.createElement('a');

offset.textContent = 'Offset';

console.log(nav);

nav.appendChild(offset);

const body = document.querySelector('body');

body.addEventListener('mousemove', e => {
  offset.textContent = `X: ${e.offsetX} Y: ${e.offsetY}`;
});

/* #6 On Focus Event */

navLink.forEach(link => {
  link.addEventListener('focus', onFocus);
});

function onFocus(e) {
  console.log(`${e.target.innerText} link is in focus`);
}

/* #7 On Scroll Event */
const doc = document.documentElement;
window.addEventListener('scroll', onScroll);
let randBackgroundArr = [
  randColor(),
  randColor(),
  randColor(),
  randColor(),
  randColor(),
  randColor()
];

function onScroll(e) {
  let top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

  if (top > 0 && top < 100) {
    e.target.bgColor = randBackgroundArr[0];
  } else if (top > 100 && top < 200) {
    e.target.bgColor = randBackgroundArr[1];
  } else if (top > 200 && top < 300) {
    e.target.bgColor = randBackgroundArr[2];
  } else if (top > 300 && top < 400) {
    e.target.bgColor = randBackgroundArr[3];
  } else if (top > 400 && top < 500) {
    e.target.bgColor = randBackgroundArr[4];
  } else if (top > 500 && top < 600) {
    e.target.bgColor = randBackgroundArr[5];
  }
}

/* #8 Keydown Event */
const destination = document.querySelectorAll('.destination');

destination.forEach(dest => {
  dest.addEventListener('keydown', keyDown);
});

function keyDown(e) {
  e.target.style.border = `solid 1px ${randColor()}`;
}

/* #9 Cut Event */
const input = document.querySelectorAll('form input');

input.forEach(inp => {
  inp.addEventListener('cut', function(e) {
    alert(`You cut ${e.target.value} into the clipboard`);
  });
});

/* #10 Paste Event */
input.forEach(inp => {
  inp.addEventListener('paste', function(e) {
    alert(`You pasted into input`);
  });
});
