$(function(){
     var currencies = [
          { value: `Case Work - Reply Due` },
          { value: `Order - Review the order` },
          { value: `Order - Allocate to team` },
          { value: `Intro - Arrange settling in` },
          { value: `Intro - Settling in call` },
          { value: `Intro - New Deputy Report` },
          { value: `Visit - Commission` },
          { value: `Visit - Required` },
          { value: `Visit - Urgent required` },
          { value: `Visit - Report due` }

     ];

     // setup autocomplete function pulling from currencies[] array
     $('#filter-type-completed').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {
               suggestion = suggestion.value;
               suggestion = suggestion.toLowerCase().replace(new RegExp(' ', 'g'), '-');

               while (suggestion.indexOf('--') > -1) {
                    suggestion = suggestion.replace('--', '-');
               }

               $('#completed-tasks-table tbody tr').hide();
               $('#completed-tasks-table tbody tr.' + suggestion).show();
          }
     });

     $('.filter-type-task').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {
               suggestion = suggestion.value;
               suggestion = suggestion.toLowerCase().replace(new RegExp(' ', 'g'), '-');

               while (suggestion.indexOf('--') > -1) {
                    suggestion = suggestion.replace('--', '-');
               }

               $('#dashboard-tasks-table tbody tr').hide();
               $('#dashboard-tasks-table tbody tr.' + suggestion).show();
          }
     });



});
