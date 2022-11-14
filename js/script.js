const btn = document.querySelector("#menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.querySelector("#mobile-menu");
const counters = document.querySelectorAll(".counter");
let scrollStarted = false;

btn.addEventListener("click", navToggle);
document.addEventListener("scroll", scrollPage);

function navToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scroll");
  menu.classList.toggle("show-mobile-menu");
}

function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 60 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function reset() {
  counters.forEach((counter) => {
    counter.innerText = 0;
  });
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {
      const target = parseInt(counter.getAttribute("data-target"));
      const c = parseInt(counter.innerText);

      if (c < target) {
        counter.innerText = `${Math.ceil(c + 0.5)}`;

        setTimeout(updateCounter, 65);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}
