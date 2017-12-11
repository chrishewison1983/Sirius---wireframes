// =================================== Deputy death - JAVASCRIPT =================================== //
// Show other option
$('.other-notified-by').hide();

$("#client-death-notified").change(function () {
     if ($(this).val() == 'Other') {
          $('.other-notified-by').slideDown();
     } else {
          $('.other-notified-by').slideUp();
     }
});

// Show proof of death info
$('.client-death-proof-yes, .client-death-proof-no').hide();

$("#client-death-proof-yes").click( function(){
     if($(this).is(':checked')) {
          $('.client-death-proof-yes').slideDown();
          $('.client-death-proof-no').slideUp();
     }
});
$("#client-death-proof-no").click( function(){
     if($(this).is(':checked')) {
          $('.client-death-proof-yes').slideUp();
          $('.client-death-proof-no').slideDown();
     }
});

// Button validation
$('#confirm-client-death').addClass('de-activate').removeAttr('href');

$("#client-death-certificate-received-year, #client-death-letter-sent-year").keypress(function() {
     if (!this.value) {
          $('#confirm-client-death').removeClass('de-activate').attr('href', '../4-client-page/4a-new-client.html#deceased');
     }
});
