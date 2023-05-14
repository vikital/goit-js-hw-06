const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

let counterValue = 0;

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);

function decrement() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
