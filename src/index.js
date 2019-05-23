import $ from 'jquery'

$(document).ready(() => {

  var getTopWord = function() {
    $.get('https://wordwatch-api.herokuapp.com/api/v1/top_word', function( data ){
      $("#top_word").text("Top Word: " + Object.keys(data.word)[0])
      $("#top_word_freq").text("Frequency: " + Object.values(data.word)[0])
    })
  }

  $("#button").click(function(){
    var words = $('#text_area').val().replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"");
    if (words.includes(' ')) {
      var words_arr = words.split(' ')
      console.log(words_arr);
        for (var i = 0; i < words_arr.length; i++){
          $.post('https://wordwatch-api.herokuapp.com/api/v1/words', { "word": {"value": words_arr[i] }}, function(data) {
            console.log(data.message);
          })
        };
    } else {
      $.post('https://wordwatch-api.herokuapp.com/api/v1/words', { "word": {"value": words }}, function(data) {
        console.log(data.message);
      })
    }
    getTopWord()
  })
})
