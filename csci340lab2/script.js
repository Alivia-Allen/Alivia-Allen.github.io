$(document).ready(function() {
  $('#startbutton').click(function() {
    $.ajax({
      dataType: "jsonp",
        jsonpCallback: "parseQuote",
        url: "https://api.adviceslip.com/advice?Callback=crystaladvice"
        success: function(results) {
       console.log(results["url"]);
        }
      });
    });
  });
});
