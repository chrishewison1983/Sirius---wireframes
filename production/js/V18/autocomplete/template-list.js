$(function(){
     var currencies = [
          { value: `Acknowledgement Letter.doc` },
          { value: `Blank Receiver.doc` },
          { value: `Closure letter - attorney.doc` },
          { value: `Family Care Payments COP App.doc` },
          { value: `Family Care Payments COP No Action.doc` },
          { value: `OPG Complaint Ack.doc` },
          { value: `OPG Complaint Esc.doc` },
          { value: `OPG English.doc` },
          { value: `Original Death Cert Lay.doc` },
          { value: `Original Documents Letter.doc` },
          { value: `Third party letter.doc` },
          { value: `Visit follow up letter.doc` }

     ];

     // setup autocomplete function pulling from currencies[] array
     $('#template-list-search').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {
               suggestion = suggestion.value;
               suggestion = suggestion.toLowerCase().replace(new RegExp(' ', 'g'), '-');
               suggestion = suggestion.toLowerCase().replace('.doc', '');

               while (suggestion.indexOf('--') > -1) {
                    suggestion = suggestion.replace('--', '-');
               }

               $('form.create-letter .document-item').hide();
               $('form.create-letter .document-item.' + suggestion).show();
          }
     });

});
