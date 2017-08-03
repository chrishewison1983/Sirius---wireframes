// =================================== Create client - JAVASCRIPT =================================== //
// Error messaging
$(document).ready(function () {

     if (window.location.href.indexOf("error-message") != -1) {
          // Show's the error message
          $('#error-message').show();

          // Add anchor links to the selected groups
          $('#client-dob').closest('.form-group').attr('id', 'dob-error').addClass('error-field');
          $('#client-mob-number').closest('.form-group').attr('id', 'mobile-error').addClass('error-field');
          $('#client-email').closest('.form-group').attr('id', 'email-error').addClass('error-field');

     }

});

$("#client-last-name").on('input', function() {
     if ($('#client-casarec').length > 0 && $('#client-first-name').length > 0) {
          $('#create-client').removeClass('de-activate');
          $('#create-client').attr('href', '../4-client-page/4a-new-client.html#NewClient');
     }
     // if ($('#client-casarec').length < 8) {
     //      $('#error-message').show();
     //      $('#client-casarec').closest('.form-group').attr('id', 'casarec-error').addClass('error-field');
     //      $('#create-client').addClass('de-activate');
     // }
     // if ($('#client-casarec').length >= 8) {
     //      $('#error-message').hide();
     //      $('#client-casarec').closest('.form-group').removeAttr('id', 'casarec-error').removeClass('error-field');
     //      $('#create-client').removeClass('de-activate');
     // }
});

// $('#create-client').click(function(){
//      if ($('#client-casarec').length >= 8) {
//           $('#create-client').removeClass('de-activate');
//           $('#create-client').attr('href', '../4-client-page/4a-new-client.html#NewClient');
//      } else if ($('#client-casarec').length < 8) {
//           $(this).removeAttr('href');
//           $('#error-message').show();
//           $('#client-casarec').closest('.form-group').attr('id', 'casarec-error').addClass('error-field');
//      }
// });
