$(document).ready(function() {
  $('.crystal').click(function() {
    $.ajax({
      dataType: "jsonp",
        jsonpCallback: "parseQuote",
        url: "https://api.adviceslip.com/advice?Callback=crystaladvice"
        success: function(results) {
       console.log('jsonpCallback', this.Callback);
     },
     error: function(xhr,status,error) {
       console.log(error);
     }
      });
    });
  });
});
