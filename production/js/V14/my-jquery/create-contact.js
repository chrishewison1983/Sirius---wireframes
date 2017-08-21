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
     var contactName = $(this).closest('li').find('.contact-name').text();
     $('#delete-contact .contact-name').text(contactName);
     $('ul.contact-list li').removeClass('delete-this-item');
     $(this).closest('li').addClass('delete-this-item');
});

$('#delete-contact-confirm').click( function(){
     $('.delete-this-item').remove();
     $(this).siblings('.cancel').trigger('click');
});

// Edit deputy
// Show's the values for Lara Stevens (Deputy 1)
// if (window.location.href.indexOf("edit-deputy-1") != -1) {
//      // Hides the progess bar
//      $('nav.progress-bar').hide();
//
//      // Changes the header content
//      $('.breadcrumb .page-title').text('Edit deputy');
//      $('.deputy-first-name-answer').text('Lara');
//
//      // Changes the footer content
//      $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').text('Save & update deputy');
//      $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').attr('href', '#');
//      $('#add-deputy-step-1, #add-deputy-step-2, #add-deputy-step-3').attr('onclick', 'history.back();');
//      $('#add-another-deputy').hide();
//
//      // Form content - 1 - Personal details
//      $('#deputy-title').val('Mrs');
//      $('#deputy-first-name').val('Lara');
//      $('#deputy-last-name').val('Stevens');
//      $('#deputy-dob').val('17/07/1981');
//      $('#deputy-address-line-1').val('34 Broomfield Place');
//      $('#deputy-address-town').val('Stokesley');
//      $('#deputy-manual-postcode').val('TS9 8TU');
//      $('#deputy-country').val('England');
//      $('#deputy-phone-number').val('07079962666');
//      $('#deputy-mob-number').val('07079962666');
//      $('#deputy-email').val('lara.stevens@jourrapide.com');
//
//      // Form content - 2 - Case details
//      $('#deputy-type').val('Lay');
//      $('#deputy-relationship').val('Sibling');
//      $('#deputy-relationship').parent().removeClass('read-only');
//      $('#deputy-relationship').removeAttr('disabled');
//      $('#deputy-relationship').siblings().html('Relationship to the client: <strong>Lay options</strong>');
//      $('#deputy-relationship').html(`
//           <option value=''>-- Select --</option>
//           <option value='Child of client'>Child of client</option>
//           <option value='Sibling' selected>Sibling</option>
//           <option value='Spouse'>Spouse</option>
//           <option value='Parent of client'>Parent of client</option>
//           <option value='Civil Partner'>Civil Partner</option>
//           <option value='Friend'>Friend</option>
//           <option value='Partner (Not Civil Partner)'>Partner (Not Civil Partner)</option>
//           <option value='Other Relation'>Other Relation</option>
//      `);
//      $('#deputy-status').val('Active');
//      $('#deputy-fee-payer').parent().addClass('checked');
//      $('#deputy-fee-payer').attr('checked', 'checked');
//      $('#deputy-main-correspondent').parent().addClass('checked');
//      $('#deputy-main-correspondent').attr('checked', 'checked');
//
//      // Form content - 3 - Additional info
//      $('#deputy-digital-no').parent().addClass('checked');
//      $('#deputy-digital-no').attr('checked', 'checked');
//      $('#deputy-occupation').val('University professor');
//      $('#deputy-correspondence-email').parent().addClass('checked');
//      $('#deputy-correspondence-email').attr('checked', 'checked');
//      $('#deputy-special-spelling').parent().addClass('checked');
//      $('#deputy-special-spelling').attr('checked', 'checked');
//      $('#deputy-interpreter-no').parent().addClass('checked');
//      $('#deputy-interpreter-no').attr('checked', 'checked');
//      $('#deputy-newsletter-no').parent().addClass('checked');
//      $('#deputy-newsletter-no').attr('checked', 'checked');
// }
