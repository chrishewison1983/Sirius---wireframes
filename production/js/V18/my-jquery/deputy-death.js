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
// $('.deputy-death-proof-yes, .deputy-death-proof-no').hide();

$("#deputy-death-proof-yes").click( function(){
     if($(this).is(':checked')) {
          $('.deputy-death-proof-yes').slideDown().css('display', 'inline-block');
          $('.deputy-death-proof-no').slideUp();
          $('#confirm-deputy-death').text('Confirm deputy is deceased');
          $('#confirm-deputy-deceased').text('The deputy is deceased');
     }
});
$("#deputy-death-proof-no").click( function(){
     if($(this).is(':checked')) {
          $('.deputy-death-proof-yes').slideUp();
          $('.deputy-death-proof-no').slideDown().css('display', 'inline-block');
          $('#confirm-deputy-death').text('Confirm death notification');
          $('#confirm-deputy-deceased').text('Deputy death notified');
     }
});

// Button validation
// $('#confirm-deputy-death').removeAttr('href');

$(".activate-the-cta").click(function() {
     $('#confirm-deputy-death').removeClass('de-activate');
     $('#confirm-deputy-death').attr('href', '#deputy-death-modal');
     $('#confirm-deputy-death').attr('rel', 'modal:open');
});

$("#deputy-death-certificate-received-year").keypress(function() {
     if (!this.value) {
          $('#confirm-deputy-death').removeClass('de-activate');
          $('#confirm-deputy-death').attr('href', '#deputy-death-modal');
          $('#confirm-deputy-death').attr('rel', 'modal:open');
     }
});
