$(document).ready(function() {
  $('.crystal').click(function() {
    $.ajax({
      dataType: "jsonp",
        jsonpCallback: "parseQuote",
        url: "https://api.adviceslip.com/advice?Callback=crystaladvice"
        success: function(results) {
       $('.fortune').text(results["advice"]);
     },
     error: function(xhr,status,error) {
       console.log(error);
     }
      });
    });
  });
});
