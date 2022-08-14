let counter = 0;
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const label = document.getElementById("label");

button1.addEventListener("click", Increase);
button2.addEventListener("click", Decrease);

function Increase(e) {
  e.preventDefault();
  ++counter;
  label.innerHTML = `Counter value = ${counter}`;
}

function Decrease(e) {
  e.preventDefault();
  if (counter === 0) {
    label.innerHTML = `Counter (-) or 0 -error`;
    counter === 0;
  } else if (counter > 1) {
    counter--;
    label.innerHTML = `Counter value = ${counter}`;
  } else if (counter === 1) {
    label.innerHTML = `Counter (-) or 0 -error`;
    counter--;
  }
}
