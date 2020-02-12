const userInput = document.querySelector("input[type=text]");


const inputValue = () => userInput.value;

document.querySelector("input[type=submit]").onclick = function () {
  console.log(inputValue());
  event.preventDefault();
}

const capitalise = (element) => element.charAt(0).toUpperCase() + element.substring(1, element.length);
const findFirstName = (element) => element.substring(0, element.indexOf(" "));

console.log(findFirstName("Sara Lnk"));