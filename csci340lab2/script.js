$(document).ready(function() {
  $('#startbutton').click(function() {
    $.ajax({
      dataType: "jsonp",
        jsonpCallback: "parseQuote",
        url: "https://api.adviceslip.com/advice?Callback=crystaladvice"
        success: function(results) {
       $('.fortune').text(results["quoteText"]);
     },
     error: function(xhr,status,error) {
       console.log(error);
     }
      });
    });
  });
});
