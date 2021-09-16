$(document).ready(function() {
  console.log("Hello");
  $('#startbutton').click(function() {
    console.log("looking for your answers...");
    $.ajax({
        dataType: "json",
          url: "https://api.adviceslip.com/advice?Callback=crystaladvice",
          success:
          function(getAdvice){
            console.log(getAdvice["slip"]["advice"]);
            $(".givenAdvice").text(getAdvice["slip"]["advice"])
          },
          error: function(xhr,status,error) {
            console.log(error);
          }
      });
    $.ajax({
      dataType: "json",
        url: "https://yesno.wtf/api",
        success:
        function(getAnswer){
          console.log(getAnswer["answer"]);
          $(".givenAnswer").text(getAnswer["answer"]);
        },
        error: function(xhr,status,error) {
          console.log(error);
        }
    })
    });
});
