
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

$(document).ready(() => {
  presentWord();
})
