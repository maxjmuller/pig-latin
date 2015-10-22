var addAy = function(word) {
  word = word + "ay";
}



$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    var word = $("input#word").val();
    var translation = addAy(word);
debugger;
    $(".word").text(word);
    $(".translation").text(translation);

  });

    $("#result").show();
    event.preventDefault();
});
