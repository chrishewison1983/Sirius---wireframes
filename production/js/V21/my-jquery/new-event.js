// =================================== New Event - JAVASCRIPT =================================== //

// Form Load
$('.new-event-form').hide();

$('.new-event-showcase #pre-loader').show();

setTimeout(function() {
     $('.new-event-form').show();
     $('.new-event-showcase #pre-loader').hide();
}, 1500);

// Confirm message
$('#new-event-button').click( function(e){
     e.preventDefault();
     var goTo = $(this).attr('href');

     window.scrollTo(0, 0);

     // Pre-loader shows
     $('#pre-loader-to-confirm').show();
     setTimeout(function(){
         $('#pre-loader-to-confirm').slideUp();
     },1000);

     // Shows the confirmation
     setTimeout(function(){
          $('#event-confirm').slideDown();
     },1000);

     $('form.new-event-form .form-group').addClass('read-only');

     setTimeout(function(){
         window.location = goTo;
     },2500);

     $('#event-error-message').hide();

});



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

$(".event-notes").click( function(){
     $("#new-event-button").removeClass('de-activate');
     $("#new-event-button").attr('href', '../4-client-hub/4a-new-client.html');
     $("#event-error-button").removeClass('de-activate');
});

$("#replacement-document").click( function(){
     $("#replace-event-button").removeClass('de-activate');
     $("#replace-event-button").attr('href', '../4-client-hub/4a-new-client.html');
});


$("#event-error-button").click( function(){
     $('#event-error-message').show();
     $('#dropzone').parent().addClass('error-field');
});

// =================================== Replace document Event - JAVASCRIPT =================================== //
// $(document).ready(function () {
//
//      $("#dropzone").click( function(){
//           $("#replace-event-button").removeClass('de-activate');
//           $("#replace-event-button").attr('href', '../4-client-hub/4a-new-client.html');
//      });
//
// });


// $(".event-notes").click( function(){
//      $("#event-error-button").removeClass('de-activate');
// });
