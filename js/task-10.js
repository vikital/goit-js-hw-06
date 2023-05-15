const dataInput = document.querySelector("input");
const dataCreateButton = document.querySelector("[data-create]");
const dataDestroyButton = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

dataCreateButton.addEventListener("click", dataCreateFunction);
dataDestroyButton.addEventListener("click", dataDestroyFunction);

function dataCreateFunction() {
  let boxArray = [];
  let boxSize = 20;

  for (
    let boxNumber = 1;
    boxNumber <= Number(dataInput.value);
    boxNumber += 1
  ) {
    boxSize += 10;
    boxArray.push(makeBox(boxSize));
  }
  boxes.append(...boxArray);
}

function dataDestroyFunction() {
  boxes.innerHTML = "";
}

function makeBox(sizeData) {
  let box = document.createElement("div");
  box.style.width = sizeData + "px";
  box.style.height = sizeData + "px";
  box.style.backgroundColor = getRandomHexColor();
  return box;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
