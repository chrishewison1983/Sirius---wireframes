$(function(){
     var currencies = [
          { value: `Team Manager` },
          { value: `Bradley Chambers` },
          { value: `Evan Pearson` },
          { value: `Eve O'Donnell` },
          { value: `Zachary Winter` },
          { value: `Logan Chadwick` },
          { value: `Aidan Thorpe` },
          { value: `Victoria Cross` },
          { value: `Jennifer Foster` },
          { value: `Isaac Leonard` },
          { value: `Tyler Brennan` },
          { value: `Zak Singh` },
          { value: `Andrew Mitchell` },
          { value: `Jude Atkinson` },
          { value: `Isobel West` }

     ];

     // setup autocomplete function pulling from currencies[] array
     $('.my-clients-user-another-team, .my-tasks-user-another-team, .filter-another-user, .filter-another-user-client, .filter-another-user-deputy, .my-deputies-user-another-team').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {
               var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
               $('#outputcontent').html(thehtml);
          }
     });

});
