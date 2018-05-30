$(function(){
     var currencies = [
          { value: `IT-01: Closure – attorney – death of donor - LPA` },
          { value: `IT-03: Closure – attorney – attorney has disclaimed - LPA` },
          { value: `IT-05: Closure – attorney – donor has revoked - LPA` },
          { value: `EP(bb): Blank Template` }

     ];

     // setup autocomplete function pulling from currencies[] array
     $('#insert-list-search').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {
               suggestion = suggestion.value;
               suggestion = suggestion.toLowerCase().replace(' ', '-');
               $('#inserts-list li').hide();
               $('#inserts-list li a span ' + suggestion).show();
          }
     });

});
