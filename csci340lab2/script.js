$(document).ready(function() {
  $('.cookie').click(function() {
    $.ajax({
      dataType: "jsonp",
     jsonpCallback: "parseQuote",
     url: "https://api.adviceslip.com/advice?Callback=crystaladvice"
    });
  });
});
