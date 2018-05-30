// =================================== Supervision Level - JAVASCRIPT =================================== //
// $('.new-event-journey #cta-footer').hide();

// $(".event-notes").click( function(){
//      $('#cta-footer').show();
// });

// Handles the error message
$('#event-error-button').hide();

$('#event-type').bind('change', function (e) {
     if ($(this).val() == 'Email') {
          $('#event-error-button').show();
          $('#new-event-button').hide();
     } else {
          $('#event-error-button').hide();
          $('#new-event-button').show();
     }
}).trigger('change');


$("#event-error-button").click( function(){
     $('#event-error-message').show();
     $('#dropzone').parent().addClass('error-field');
});
