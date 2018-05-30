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
          { value: `Isobel West` },
          { value: `Joe Bloggs` },
          { value: `Simon Carter` },
          { value: `David Harper` },
          { value: `Shiobhan McDermot` },
          { value: `Hannah Nixon` }

     ];

     // setup autocomplete function pulling from currencies[] array
     $('.filter-completed-user').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {
               suggestion = suggestion.value;
               suggestion = suggestion.toLowerCase().replace(' ', '-');
               $('#completed-tasks-table tbody tr').hide();
               $('#completed-tasks-table tbody tr.' + suggestion).show();
          }
     });

});
