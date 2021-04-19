$("#first").hide();
$("#second").hide();
$("#third").hide();

$("#bouton").on("click", function(){
  $("#first").show();
});

$("#first").on("click", function(){
  $("#second").show();
});

$("#second").on("click", function(){
  $("#third").show();
});

$("#third").one("click", function(){
  $("body").addClass("gif");
  $("p").text("Joyeux anniversaire !")
});
