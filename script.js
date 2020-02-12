const userInput = document.querySelector("input[type=text]");
const option = document.querySelector("select");
const options = document.querySelectorAll("option");
const userOutput = document.querySelector(".output");

const inputValue = () => userInput.value;

const capitalise = (element) => element.charAt(0).toUpperCase() + element.substring(1, element.length);
const findFirstName = (element) => {
  if (element.indexOf(" ") == -1) {
    return element
  } else {
    element = element.substring(0, element.indexOf(" "))
  }

  return element;
}


const getLengthOfName = element => findFirstName(element).length;


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


function capitaliseAfterGapsHyphen(element) {
  const arr = element.split(" ");
  const newSentence = [];
  arr.forEach(word => {
    if (word !== " " || word !== "-") {
      let capitalisedWord = word.charAt(0).toUpperCase() + word.substring(1, word.length);
      newSentence.push(capitalisedWord);
    } else {
      newSentence.push(word);
    }
  });

  const capitalisedSentence = newSentence.join(" ");
  return capitalisedSentence
}

options.forEach(op => op.selected = false);


option.addEventListener("change", () => {
  let element = inputValue();
  let result;
  if (option[0].selected == true) {
    result = element
  } else if (option[1].selected == true) {
    result = capitalise(element)
  } else if (option[2].selected == true) {
    console.log(findFirstName(element));
    result = findFirstName(element)
  } else if (option[3].selected == true) {
    result = getLengthOfName(element)
  } else if (option[4].selected == true) {
    result = getMiddleName(element)
  } else if (option[5].selected == true) {
    result = checkFileExtension(element)
  } else if (option[6].selected == true) {
    result = hidePassword(element)
  } else if (option[7].selected == true) {
    result = capitaliseThird(element)
  } else if (option[8].selected == true) {
    result = capitaliseAfterGapsHyphen(element)
  }
  userOutput.textContent = result;
})