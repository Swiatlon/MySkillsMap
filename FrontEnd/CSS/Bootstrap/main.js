// Schedule Switching Mechanism

const daysBoxesOrder = [
  [0, 1, 2, 3, 4], // S
  [4, 3, 2, 1, 0], // M
  [1, 3, 4, 1, 0], // T
  [4, 2, 1, 3, 0], // W
  [4, 3, 2, 1, 0], // T
  [3, 2, 1, 4, 0], // F
  [1, 4, 0, 2, 3], // S
];

const boxesContainer = document.querySelector('#boxesContainer');
const boxes = [...document.querySelectorAll('#boxesContainer > .images-section-box')].filter(
  (item, index) => index % 2
);
const btnGroup = [...document.querySelectorAll('.btn-group > input[name=btnradio]')];

btnGroup.forEach((btn) =>
  btn.addEventListener('change', function () {
    const selectedDay = parseInt(this.id.replace('btnradio', '')) - 1;
    const order = daysBoxesOrder[selectedDay];
    reorderBoxes(order);
  })
);

function reorderBoxes(order) {
  boxesContainer.innerHTML = '';
  order.forEach((index) => {
    boxesContainer.appendChild(boxes[index].cloneNode(true));
    boxesContainer.appendChild(boxes[index].cloneNode(true));
  });
}

// Navigation Background change

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    navbar.classList.remove('navbar-dark');
    navbar.classList.add('navbar-light');
  } else {
    navbar.classList.remove('navbar-light');
    navbar.classList.add('navbar-dark');
  }
});

// Content reveal animation

const revealElements = [...document.querySelectorAll('.reveal')];

window.addEventListener("scroll", reveal);

function reveal() {
  revealElements.forEach((elem) => {
    const windowHeight = window.innerHeight;
    const revealTop = elem.getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      elem.classList.add('showAnimation');
    }
  });
}
