let nums = document.querySelectorAll(".num");
let section = document.querySelector(".cups");
let started = false;

window.onscroll = function () {
  if (window.scrollY + window.innerHeight >= section.offsetTop) {
    if (!started) {
      nums.forEach(num => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 4000 / goal);
} 

const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');
const menu1 = document.getElementById('menu1');
const menu2 = document.getElementById('menu2');
const menu3 = document.getElementById('menu3');

function showMenu(menuToShow, menuToHide1, menuToHide2) {
  menuToShow.style.display = 'flex';
  menuToHide1.style.display = 'none';
  menuToHide2.style.display = 'none';
}

button1.addEventListener('click', function () {
  showMenu(menu1, menu2, menu3);
});

button2.addEventListener('click', function () {
  showMenu(menu2, menu1, menu3);
});

button3.addEventListener('click', function () {
  showMenu(menu3, menu1, menu2);
});