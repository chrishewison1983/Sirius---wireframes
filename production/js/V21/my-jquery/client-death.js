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
// $('.client-death-proof-yes, .client-death-proof-no').hide();

$("#client-death-proof-yes").click( function(){
     if($(this).is(':checked')) {
          $('.client-death-proof-yes').slideDown().css('display', 'inline-block');
          $('.client-death-proof-no').slideUp();
          $('#confirm-client-death').text('Confirm client is deceased');
          $('#confirm-client-deceased').text('The client is deceased');
     }
});
$("#client-death-proof-no").click( function(){
     if($(this).is(':checked')) {
          $('.client-death-proof-yes').slideUp();
          $('.client-death-proof-no').slideDown().css('display', 'inline-block');
          $('#confirm-client-death').text('Confirm death notification');
          $('#confirm-client-deceased').text('Client death notified');
     }
});

// Button validation
// $('#confirm-client-death').removeAttr('href');

$(".activate-the-cta").click(function() {
     $('#confirm-client-death').removeClass('de-activate');
     $('#confirm-client-death').attr('href', '#client-death-modal');
     $('#confirm-client-death').attr('rel', 'modal:open');
});

$("#client-death-certificate-received-year").keypress(function() {
     if (!this.value) {
          $('#confirm-client-death').removeClass('de-activate');
          $('#confirm-client-death').attr('href', '#client-death-modal');
          $('#confirm-client-death').attr('rel', 'modal:open');
     }
});
