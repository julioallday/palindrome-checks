let result;
let language = {
  eng: {
    title: "Palindrome",
    content:
      "Palindrome, is every " +
      "word or phrase that can be read backwards and that, regardless of " +
      "the direction, maintains its meaning.",
      exemple: " Try it with the phrase “Dammit, I'm mad!”.",
      usableExemple: "Dammit, I'm mad!",
    verify: "Discover if your phrase is a palindrome!",
    verifyFalse: "No, it isn't a palindrome..",
    verifyTrue: "Yes, it's a palindrome",
  },
  ptBr: {
    title: "Palíndromo",
    content:
      "Palíndromo, é toda " +
      "palavra ou frase que pode ser lida de trás para frente e que, independentemente " +
      "a direção, mantém seu significado.",
      exemple: "Tente a frase: Socorram-me, subi no ônibus em Marrocos!" ,
      usableExemple: "Socorram-me, subi no ônibus em Marrocos!",
    verify: "Descubra se a frase é um palíndromo!",
    verifyFalse: "Não isso não é um palíndromo..",
    verifyTrue: "Sim, é um palíndromo",
  },
};
title.textContent = language.eng.title;
description.textContent = language.eng.content;
exemple.textContent = language.eng.exemple;

setClass("palindrome", "palindrome");

function setClass(id, className) {
  let element = document.getElementById(id);
  element.setAttribute("class", className);
}
function handleInput() {
  let el_input = document.getElementById("input");
  checkPalindrome(el_input.value);
}
function checkPalindrome(inputString) {
  let charList = textReverse(inputString);
  let text = charList.toString();
  let newText = removeSpecials(text);
  output.textContent = removeSpecials(inputString).toLowerCase();
  console.log(result);
  isTextsEquals(validateWords(removeSpecials(inputString), newText));
}
function changeButtonContent(id, newContent) {
  const el_button = document.getElementById(id);
  el_button.innerText = newContent.toString();
}
function isTextsEquals(condition) {
  if (condition) {
    transformStructure(true);
    console.log("work");
  } else {
    transformStructure(false);
  }
}
function transformStructure(condition) {
  if (condition) {
    setClass("palindrome", "palindromeTrue");
    changeButtonContent("verify", "Yes, it's a palindrome!");
    if (window.location.hash == "#es") {
      verify.textContent = language.eng.verifyTrue;
      exemple.textContent = '';
    } else if (window.location.hash == "#ptBr") {
      verify.textContent = language.ptBr.verifyTrue;
      exemple.textContent = '';
      
    }
  } else {
    setClass("palindrome", "palindrome");
    changeButtonContent("verify", "No, it isn't a palindrome..");
    if (window.location.hash == "#es") {
      verify.textContent = language.eng.verifyFalse;
    } else if (window.location.hash == "#ptBr") {
      title.textContent = language.ptBr.title;
      content.textContent = language.ptBr.content;
      verify.textContent = language.ptBr.verify;
    }
  }
}
function textReverse(string) {
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
  removeQuotes(string);
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

function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

if (window.location.hash) {
  if (window.location.hash != "#ptBr") {
    title.textContent = language.eng.title;
    description.textContent = language.eng.content;
    exemple.textContent = language.eng.exemple;
  } else if (window.location.hash == "#ptBr") {
    title.textContent = language.ptBr.title;
    description.textContent = language.ptBr.content;
    exemple.textContent = language.ptBr.exemple;
    verify.textContent = language.ptBr.verify;
}
}
function setExemple(){
  if (window.location.hash != "#ptBr") {
    input.textContent = language.eng.usableExemple;
  } else if (window.location.hash == "#ptBr") {
    input.textContent = language.ptBr.usableExemple;
}
}
