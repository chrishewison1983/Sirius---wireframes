// =================================== Create contact - CLIENT - JAVASCRIPT - START =================================== //
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
     var clientName = $('#section-header').find('.deputy-organisation-name-answer').text();
     $('#delete-contact .contact-name').text(contactName);
     $('#contact-list tr, #contact-list-deputy tr').removeClass('delete-this-item');
     $(this).closest(`tr[data-value="${contactValue}"]`).addClass('delete-this-item');

     $('#contact-removed-confirm h1 .contact-title').html(contactName);

     $('#delete-contact p .client-name').text(clientName);

});

$('#delete-contact-confirm').click( function(){
     $('.delete-this-item').remove();
     $(this).siblings('.cancel').trigger('click');
     $('#contact-removed-confirm').slideDown();
     setTimeout(function() {
          $("#contact-removed-confirm").slideUp()
     }, 5000);

     var contactNumber = parseInt($('ul.client-details li[data-tab="summary-tab-3"] span').text());
     $('ul.client-details li[data-tab="summary-tab-3"] span').text(contactNumber - 1);

     var deputyContactNumber = parseInt($('ul.deputy-tabs li[data-tab="tab-3"] span').text());
     $('ul.deputy-tabs li[data-tab="tab-3"] span').text(deputyContactNumber - 1);


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

// Contact organisation?
$('.form-deputy-correspondence-name, .form-contact-organisation-name').find('.required').hide();

$("#contact-organisation-yes").click( function(){
     if($(this).is(':checked')) {
          // $('.form-contact-company-info').slideDown();
          $('.contact-first-name').find('.required').hide();
          $('.contact-last-name').find('.required').hide();

          $('.form-deputy-correspondence-name, .form-contact-organisation-name').find('.required').show();

          $('.contact-address-line-3').hide();
     }
});
$("#contact-organisation-no").click( function(){
     if($(this).is(':checked')) {
          // $('.form-contact-company-info').slideUp();
          $('.contact-first-name').find('.required').show();
          $('.contact-last-name').find('.required').show();

          $('.form-deputy-correspondence-name, .form-contact-organisation-name').find('.required').hide();

          $('.contact-address-line-3').show();
     }
});
// =================================== Create contact - CLIENT - JAVASCRIPT - END =================================== //

// =================================== Create contact - PA - JAVASCRIPT - START =================================== //
// Hides or shows the right links
$('.deputy-details-page.lay').find('.add-pa-contact, .add-pro-contact').hide();
$('.deputy-details-page.public').find('.add-contact, .add-pro-contact').hide();
$('.deputy-details-page.professional').find('.add-contact, .add-pa-contact').hide();

$('.deputy-details-page.lay').find('.add-contact').show();
$('.deputy-details-page.public').find('.add-pa-contact').show();
$('.deputy-details-page.professional').find('.add-pro-contact').show();

// Team or not a team?
$('.form-deputy-contact-team-name').find('.required').hide();

$("#deputy-contact-team-yes").click( function(){
     if($(this).is(':checked')) {
          $('.deputy-contact-first-name').find('.required').hide();
          $('.deputy-contact-last-name').find('.required').hide();

          $('.form-deputy-contact-team-name').find('.required').show();
     }
});
$("#deputy-contact-team-no").click( function(){
     if($(this).is(':checked')) {
          $('.deputy-contact-first-name').find('.required').show();
          $('.deputy-contact-last-name').find('.required').show();

          $('.form-deputy-contact-team-name').find('.required').hide();
     }
});

// Title - other
$('.deputy-contact-title-other-answer').hide();

$("#deputy-contact-title").change(function () {
     if ($(this).val() == 'Other') {
          $('.deputy-contact-title-other-answer').slideDown();
     } else {
          $('.deputy-contact-title-other-answer').slideUp();
     }
});
