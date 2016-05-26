$("#char-count").hide();
$("#tweet-submit").hide();

$(".tweet-compose").on("click",function(){
  $("#char-count").show();
  $("#tweet-submit").show();
  $(".tweet-compose").addClass("textareaGrow2"); //not working...
});

var text_max = 140;
$("#char-count").html(text_max);

$("#textareaCount").keyup(function() {
    var text_length = $("#textareaCount").val().length;
    var text_remaining = text_max - text_length;
    $("#char-count").html(text_remaining + ' characters remaining');

    if(text_remaining < 10) { //uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu
      $("#char-count").css("color","red");
    }
if(text_remaining <= 0) {
  $("#tweet-submit").hide();
}
if(text_remaining >=1) {
  $("#tweet-submit").show();
}

});
