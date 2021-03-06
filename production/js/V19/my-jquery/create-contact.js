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

     $('#contact-removed-confirm h1 .contact-title').html(contactName);

});

$('#delete-contact-confirm').click( function(){
     $('.delete-this-item').remove();
     $(this).siblings('.cancel').trigger('click');
     $('#contact-removed-confirm').slideDown();
     setTimeout(function() {
          $("#contact-removed-confirm").slideUp()
     }, 5000);

     var contactNumber = parseInt($('ul.client-details li[data-tab="summary-tab-5"] span').text());

     $('ul.client-details li[data-tab="summary-tab-5"] span').text(contactNumber - 1);

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
