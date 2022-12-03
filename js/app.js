setClass("palindrome", "palindrome");

function handleInput() {
  let el_input = document.getElementById("input");
  checkPalindrome(el_input.value);
}
function setClass(id, className) {
  let element = document.getElementById(id);
  element.setAttribute("class", className);
}
function changeButtonContent(id, newContent){
  const el_button = document.getElementById(id);
  el_button.innerText = newContent.toString();
}
function checkPalindrome(inputString) {
  let letras = wordReverse(inputString);
  letras = letras.toString();
  let newWord = removeQuotes(letras);
  if (validateWords(removeSpecials(inputString), newWord)) {
    setClass("palindrome", "palindromeTrue");
    changeButtonContent("verify", "Yes, it's a palindrome!")
    return true;
  } else {
    setClass("palindrome", "palindrome");
    changeButtonContent("verify", "No, it isn't a palindrome..")
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
  
  return removeSpecials(word)
}
function removeSpecials(string) {
  string = string.replaceAll(/[ÀÁÂÃÄÅ]/g, "A");
  string = string.replaceAll(/[àáâãäå]/g, "a");
  string = string.replaceAll(/[ÈÉÊË]/g, "E");
  string = string.replaceAll(/[èéêë]/g, "e");
  string = string.replaceAll(/[ÌÍ]/g, "I");
  string = string.replaceAll(/[ìí]/g, "i");
  string = string.replaceAll(/[Ç]/g, "C");
  string = string.replaceAll(/[ç]/g, "c");
  string = string.replaceAll(/[^a-z0-9]/gi, "");

  return string;
}
function validateWords(word1, word2) {
  if (word1.length > 0 && word1.length <= 10 ** 5) {
    if (word1.toUpperCase() == word2.toUpperCase()) {
      return true;
    }
    false;
  }
  false;
}
