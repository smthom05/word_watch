import $ from 'jquery'

$(document).ready(() => {

  var getTopWord = $.get('https://wordwatch-api.herokuapp.com/api/v1/top_word', function( data ){
    console.log(data.word)

      $("#top_word").text("Top Word: " + Object.keys(data.word)[0])
      $("#top_word_freq").text("Frequency: " + Object.values(data.word)[0])
    })

})
