$(function(){
     var currencies = [
          { value: `Team Manager` },
          { value: `Joe Bloggs` },
          { value: `Simon Carter` },
          { value: `David Harper` },
          { value: `Shiobhan McDermot` },
          { value: `Hannah Nixon` }

     ];

     // setup autocomplete function pulling from currencies[] array
     $('.my-clients-user-in-team, .my-deputies-user-in-team').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {

          }
     });

     $('.my-tasks-user-in-team, .team-user-in-team').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {

          }
     });

     $('.team-user-in-team-deputies').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {
               suggestion = suggestion.value;
               suggestion = suggestion.toLowerCase().replace(' ', '-');
               $('#dashboard-deputies-table .summary-row, #dashboard-deputies-table tbody tr').hide();
               $('#dashboard-deputies-table .summary-row.' + suggestion).show();
          }
     });

     $('.team-user-in-team, .tasks-team-user-in-team').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {
               suggestion = suggestion.value;
               suggestion = suggestion.toLowerCase().replace(' ', '-');
               $('#dashboard-clients-table .summary-row, #dashboard-tasks-table tbody tr').hide();
               $('#dashboard-clients-table .summary-row.' + suggestion).show();
               $('#dashboard-tasks-table tbody tr.' + suggestion).show();
          }
     });


});
