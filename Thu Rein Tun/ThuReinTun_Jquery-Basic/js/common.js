$(document).ready(function(){


  $("#hide").click(function () {
    $(".box").hide();
  });

  //$("#show").click(function () {
  //  $(".box").show();
  //});

  $("#show").on("click", function () {
    $(".box").show();
  });

  $("#mouseenter").mouseenter(function(){
    $(this).css('background', 'red');
  });

  $("#mouseout").mouseout(function(){
    $(this).css('background', 'black');
  });

  $("#doubleclick").dblclick(function(){
    alert("Why are you clicking me double?:)");
  });

  $("#fullname").keyup(function () {
    $("#fullname").val() == "" ? $("#submit").hide() : $("#submit").show();
  });


  $("input").focus(function(){
    $(this).css("background-color", "yellow");
  });
  $("input").blur(function(){
    $(this).css("background-color", "green");
  });

  $("#add-class").click(function () {
    $("#paragraph").addClass("styling");
  });

  $("#remove-class").click(function () {
    $("#paragraph").removeClass("styling");
  });

  $("#toggle-class").click(function () {
    $("#paragraph").toggleClass("styling");
  });

  $("#enlarge").click(function () {
    $("#square").animate({
      width: "+=100px",
      height: "+=100px",
      marginLeft: "10px"
    },1000);
  });

  $("#fade").click(function () {
    $("#fade1").fadeToggle();
    $("#fade2").fadeToggle("slow");
    $("#fade3").fadeToggle(3000);
  });

  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });

  
});