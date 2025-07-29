const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const closeBtn = document.getElementById('close');

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.subscribe-box button');
  btn.addEventListener('click', () => {
    alert('Thanks for subscribing!');
  });
});

hamburger.onclick = () => {
    nav.classList.add('show');
  };

closeBtn.onclick = () => {
    nav.classList.remove('show');
  };
