$(document).ready(function() {
  console.log("Hello");
  $('#startbutton').click(function() {
    console.log("Clicked");
    $.ajax({
        dataType: "json",
          url: "https://api.adviceslip.com/advice?Callback=crystaladvice",
          success:
          function(getadvice){
            console.log(getadvice["slip"]["advice"]);
            $(".givenAdvice").text(getadvice["slip"]["advice"]);
          },
          error: function(xhr,status,error) {
            console.log(error);
          }
      });
    });
});
