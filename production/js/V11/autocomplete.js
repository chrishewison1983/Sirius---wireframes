$(function(){
     var currencies = [
          { value: `
               <a href='4-client-page/4a-new-client.html'>
                    <div class='title'>Gerald Dave Brackens <span>(Notified person)</span></div>
                    <div class='sub-title'>Case: <span>LPA/PFA 7000-0000-1893</span></div>
                    <div class='sub-title'>Address: <span>14 Mavis Avenue, Whitnash, LEAMINGTON SPA, CV32 8YH.</span></div>
                    <div class='sub-title'>DOB: <span>01/12/1954</span></div>
               </a>
          ` },
          { value: `
               <a href='4-client-page/4a-new-client.html'>
                    <div class='title'>Gerald Fred Brackens <span>(Notified person)</span></div>
                    <div class='sub-title'>Case: <span>LPA/PFA 7000-0000-0192</span></div>
                    <div class='sub-title'>Address: <span>11 Chapel Lane, EAST CANNOCK, W515 2TA.</span></div>
                    <div class='sub-title'>DOB: <span>17/07/1978</span></div>
               </a>
          ` },
          { value: `
               <a href='4-client-page/4a-new-client.html'>
                    <div class='title'>Paul Mark Brackens <span>(Notified person)</span></div>
                    <div class='sub-title'>Case: <span>LPA/PFA 7000-0000-1839</span></div>
                    <div class='sub-title'>Address: <span>74 Frankton Avenue, Finham, COVENTRY, CV31 9OP.</span></div>
                    <div class='sub-title'>DOB: <span>24/09/1967</span></div>
               </a>
          ` },
          { value: `
               <a href='search.html' class="footer">
                    <div class='sub-title'>Showing <span>3</span> of <span>20</span></div>
                    <div class='sub-title'><span>Show all ></span></div>
               </a>
          ` }

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
