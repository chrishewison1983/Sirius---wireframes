// =================================== Create contact - JAVASCRIPT =================================== //
// Country functionality
$('.contact-outside-uk, .contact-airmail').hide();

$("#contact-country").change(function () {
     if ($(this).val() == 'Outside') {
          $('.contact-outside-uk, .contact-airmail').slideDown();
     } else {
          $('.contact-outside-uk, .contact-airmail').slideUp();
     }
});

// Show/hide Interpreter details
$('.contact-interpreter-details').hide();

$("#contact-interpreter-yes").click( function(){
     if($(this).is(':checked')) { $('.contact-interpreter-details').slideDown(); }
});
$("#contact-interpreter-no").click( function(){
     if($(this).is(':checked')) { $('.contact-interpreter-details').slideUp(); }
});


// Page validation
$('#create-contact').removeAttr('href').addClass('de-activate');

// Delete contact
$(".delete-contact").click( function(){
     var contactName = $(this).closest('tr').find('.contact-name-value').text();
     var contactValue = $(this).closest('tr').data('value');
     $('#delete-contact .contact-name').text(contactName);
     $('#contact-list tr').removeClass('delete-this-item');
     $(this).closest(`tr[data-value="${contactValue}"]`).addClass('delete-this-item');
});

$('#delete-contact-confirm').click( function(){
     $('.delete-this-item').remove();
     $(this).siblings('.cancel').trigger('click');
});

// Title - other
$('.contact-title-other-answer').hide();

$("#contact-title").change(function () {
     if ($(this).val() == 'Other') {
          $('.contact-title-other-answer').slideDown();
     } else {
          $('.contact-title-other-answer').slideUp();
     }
});
