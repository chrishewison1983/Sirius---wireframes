$(function(){
     var currencies = [
          { value: `
               <a href='/4-client-page/4a-new-client.html'>
                    <div class='title'>Gerald Brackens <span>Notified person</span></div>
                    <div class='title'>Case: <span>LPA/PFA 7000-0000-0192</span></div>
                    <div class='title'>Address: <span>11 Chapel Lane, EAST CANNOCK, W5152TA.</span></div>
                    <div class='title'>DOB: <span>01/12/1954</span></div>
               </a>
          ` },
          { value: "Geoffry Stenson" }

     ];

     // setup autocomplete function pulling from currencies[] array
     $('#autocomplete').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {
               var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
               $('#outputcontent').html(thehtml);
          }
     });

});
