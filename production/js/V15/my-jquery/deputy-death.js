// =================================== Deputy death - JAVASCRIPT =================================== //
// Show other option
$('.other-notified-by').hide();

$("#deputy-death-notified").change(function () {
     if ($(this).val() == 'Other') {
          $('.other-notified-by').slideDown();
     } else {
          $('.other-notified-by').slideUp();
     }
});

// Show proof of death info
$('.deputy-death-proof-yes, .deputy-death-proof-no').hide();

$("#deputy-death-proof-yes").click( function(){
     if($(this).is(':checked')) {
          $('.deputy-death-proof-yes').slideDown();
          $('.deputy-death-proof-no').slideUp();
     }
});
$("#deputy-death-proof-no").click( function(){
     if($(this).is(':checked')) {
          $('.deputy-death-proof-yes').slideUp();
          $('.deputy-death-proof-no').slideDown();
     }
});
