setClass("palindrome", "palindrome");


function handleInput() {
  let el_input = document.getElementById("input");
  checkPalindrome(el_input.value);
}
function setClass(id, className) {
  let element = document.getElementById(id);
  element.setAttribute("class", className);
}
function checkPalindrome(inputString) {
  let letras = wordReverse(inputString);
  letras = letras.toString();
  let newWord = removeQuotes(letras);
  if (validateWords(inputString, newWord)) {
    setClass("palindrome", "palindromeTrue")
    return true;
  } else {
    setClass("palindrome", "palindrome")
    return false;
  }
}
function wordReverse(string) {
  const letras = [];
  for (let i = string.length - 1; i >= 0; i--) {
    letras.push(string[i]);
  }
  return letras;
}
function removeQuotes(string) {
  let word = string.replaceAll(/,/g, "");
  return word;
}
function validateWords(word1, word2) {
  if (word1.length > 0 && word1.length <= 10 ** 5) {
    if (word1.toUpperCase() === word2.toUpperCase()) {
      return true;
    }
    false;
  }
  false;
}

