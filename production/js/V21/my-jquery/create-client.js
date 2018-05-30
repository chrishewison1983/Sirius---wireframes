// =================================== Create client - JAVASCRIPT =================================== //
// Title - other
$('.client-title-other-answer').hide();

$("#client-title").change(function () {
     if ($(this).val() == 'Other') {
          $('.client-title-other-answer').slideDown();
     } else {
          $('.client-title-other-answer').slideUp();
     }
});

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

// STEP 1 - Validation
$("#client-last-name").on('input', function() {
     // if ($('#client-casarec').length > 0 && $('#client-first-name').length > 0) {
     //      $('#create-client').removeClass('de-activate');
     //      $('#create-client').attr('href', '../4-client-page/4a-new-client.html#NewClient');
     // }
     if ($(this).length > 0 && $('#client-first-name').length > 0) {
          $('#create-client-step-1').removeClass('de-activate');
          $('#create-client-step-1').attr('href', '3b-additional-details.html');
     }
});

// STEP 3 - Validation
// $("#client-casarec").on('input', function() {
//      if ($(this).length > 0) {
//           $('#create-client-step-3').removeClass('de-activate');
//           $('#create-client-step-3').attr('href', '../4-client-page/4a-new-client.html#NewClient');
//      }
// });


// Country functionality
$('.client-outside-uk, .client-airmail-required').hide();

$("#client-country").change(function () {
     if ($(this).val() == 'Outside') {
          $('.client-outside-uk, .client-airmail-required').slideDown();
     } else {
          $('.client-outside-uk, .client-airmail-required').slideUp();
     }
});
