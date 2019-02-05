
import $ from 'jquery'


function  presentWord() {
  fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word', {
    method: "GET",
    redirect: 'follow',
    headers: {
      'Accept': 'application/json',  'Content-Type': 'application/json' },
  })
  .then(res => res.json())
  .then(data => {
    var wordKey = Object.keys(data.word)[0]
    var text = `<h3 class="top">${wordKey}, Times listed: ${data.word[wordKey]}</h3>`
    $('.top-word').append(text);
  })
}

function sendWords(word) {

  let userWord = { "word": { "value": `${word}` }  }
  fetch('https://wordwatch-api.herokuapp.com/api/v1/words', {
    method: "POST",
    mode: "cors",
    redirect: 'follow',
    headers: {
      'Accept': 'application/json',  'Content-Type': 'application/json' },
    body: JSON.stringify(userWord)
  })
  .then(response => console.log(response));
}

$(document).ready(() => {
  var wordsField = document.getElementById("words-field");

  presentWord();

  $("#break-down-btn").on("click", function(){
    let strings = wordsField.value;
    let stringsArray = strings.split(' ');

    stringsArray.forEach(function(word) {
      sendWords(word);
    });
  })
})
