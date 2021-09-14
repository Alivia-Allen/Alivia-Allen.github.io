$.ajax({
    dataType: "jsonp",
      jsonpCallback: "parseQuote",
      url: "https://api.adviceslip.com/advice?Callback=crystaladvice"
      .function(getadvice){
        w3.getHttpObject("https://api.adviceslip.com/advice", function(data)){
          advice=data.slip.advice
          alert(advice)
          .startbutton onclick="getadvice()"
        )};
        }
      }
    });
  });
});
