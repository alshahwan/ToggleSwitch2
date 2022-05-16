let button = document.querySelector(".circle")
let whole = document.querySelector(":root")
let switcher = document.querySelector(".switcher")
switcher.addEventListener('click', event => {
    button.classList.toggle("night-c")
    switcher.classList.toggle("night-s")
    whole.classList.toggle("night-b")
  });