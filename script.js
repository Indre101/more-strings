const userInput = document.querySelector("input[type=text]");


const inputValue = () => userInput.value;

document.querySelector("input[type=submit]").onclick = function () {
  console.log(inputValue());
  event.preventDefault();
}

const capitalise = (element) => element.charAt(0).toUpperCase() + element.substring(1, element.length);
const findFirstName = (element) => element.substring(0, element.indexOf(" "));
const getLengthOfName = element => element.length;

const getHowManySpaces = (element) => {
  let firstGap = element.indexOf(" ");
  let index = 0;
  while (firstGap !== -1) {
    index++
    firstGap = element.indexOf(" ", (firstGap + index))
  }
  return index
}

function getMiddleName(element) {
  const names = element.split(" ");
  let middleName
  if (names.length >= 2 && names[2].length >= 2) {
    middleName = names[1];
  } else {
    middleName = "Middle name not found"
  }
  return middleName
}

function checkFileExtension(element) {
  return element.endsWith(".jpg") || element.endsWith(".png")
}

function hidePassword(element) {

  return "*".repeat(element.length)
}

const capitaliseThird = (element) => element.substring(0, 2) + element[2].toUpperCase() + element.substring(2, element.length);

console.log(capitaliseThird("Sara.pngk"));