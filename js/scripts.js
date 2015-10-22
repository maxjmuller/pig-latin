var addAy = function(word) {
  var translation = (word + "ay");
  return translation;
  debugger;
}


$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    var word = $("input#word").val();
    var translation = addAy(word);
    $(".word").text(word);
    $(".translation").text(translation);

    $("#result").show();
    event.preventDefault();
  });
});
