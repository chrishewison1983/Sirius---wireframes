// =================================== Create Case - JAVASCRIPT =================================== //
// $('.create-case-journey #cta-footer').hide();

////////////////////////////////////// THE ORDER //////////////////////////////////////
$("#order-type-welfare").click( function(){
     if($(this).is(':checked')) { $('.the-bond-details').slideUp('slow'); }
});
$("#order-type-property").click( function(){
     if($(this).is(':checked')) { $('.the-bond-details').show(); }
});

// THE ORDER - Changes the URL to H&W or The bond
$(".radio-health-welfare").click( function(){
     $('#create-case-button').attr('href', '../4-client-hub/4a-new-client.html#HandW');
});

$(".radio-property").click( function(){
     $('#create-case-button').attr('href', '1b-the-bond.html');
});

// THE ORDER - activates the CTA
// $("#order-date-year").on('input', function() {
//      if ($('.radio-health-welfare').hasClass('checked') || $('.radio-property').hasClass('checked') && $('#order-court-ref').length > 0) {
//           $('#create-case-button').removeClass('de-activate');
//      }
// });

$("#order-deputy-type").change(function() {
     if ($('.radio-health-welfare').hasClass('checked') || $('.radio-property').hasClass('checked') && $('#order-court-ref').length > 0) {
          $('#create-case-button').removeClass('de-activate');
     }
});

// $("#order-status-year").on('keyup', function() {
//      if ($('.radio-health-welfare').hasClass('checked') || $('.radio-property').hasClass('checked') && $('#order-court-ref').length > 0) {
//           $('#create-case-button').removeClass('de-activate');
//      }
// });

// =================================== Edit Case - START - JAVASCRIPT =================================== //
$('#edit-case-button').hide();

if (window.location.href.indexOf("EditCase") != -1) {

     // $('#order-details, #deputy-details').wrap('<a href="#edit-case-modal" rel="modal:open" class="modal-wrapper"></a>');

     // $('#cta-footer').show();

     // $('#create-case-button').removeClass('de-activate');
     // $('#create-case-button').attr('href', '../4-client-hub/4a-new-client.html');

     // Order type
     $('#order-type-welfare, #order-type-property').attr('disabled', true);
     $('#order-type-welfare, #order-type-property').closest('.form-group').addClass('read-only');

     // Order category
     $('#order-category').attr('disabled', true);
     $('#order-category').closest('.form-group').addClass('read-only');

     // Court reference
     $('#order-court-ref').attr('readonly', true);
     $('#order-court-ref').parent().addClass('read-only');

     // Order notes
     // $('.order-notes-section').attr('readonly', true);
     // $('.order-notes-section').addClass('read-only');

     // Order date
     $('#order-date-day, #order-date-month, #order-date-year').attr('readonly', true);
     $('#order-date-day, #order-date-month, #order-date-year').closest('.form-group').addClass('read-only');

     // Order deputy type
     // $('#order-deputy-type').attr('disabled', true);
     // $('#order-deputy-type').parent().addClass('read-only');
     $('input[name="order-deputy-type"]').attr('disabled', true);
     $('input[name="order-deputy-type"]').closest('.form-group').addClass('read-only');

     // Order status
     $('#order-status').attr('disabled', true);
     $('#order-status').parent().addClass('read-only');

     // Order issue date
     $('#order-issue-day, #order-issue-month, #order-issue-year').attr('readonly', true);
     $('#order-issue-day, #order-issue-month, #order-issue-year').closest('.form-group').addClass('read-only');

     // Order expiry date
     $('#order-expiry-day, #order-expiry-month, #order-expiry-year').attr('readonly', true);
     $('#order-expiry-day, #order-expiry-month, #order-expiry-year').closest('.form-group').addClass('read-only');

     // Status date
     $('#order-status-day, #order-status-month, #order-status-year').attr('readonly', true);
     $('#order-status-day, #order-status-month, #order-status-year').closest('.form-group').addClass('read-only');

     // Order received date
     $('#order-received-day, #order-received-month, #order-received-year').attr('readonly', true);
     $('#order-received-day, #order-received-month, #order-received-year').closest('.form-group').addClass('read-only');

     // Order title
     $('#order-title').attr('readonly', true);
     $('#order-title').parent().addClass('read-only');

     // Deputies jointly severally
     $('#deputies-appointed-sole, #deputies-appointed-joint, #deputies-appointed-joint-severally').attr('disabled', true);
     $('#deputies-appointed-sole, #deputies-appointed-joint, #deputies-appointed-joint-severally').closest('.form-group').addClass('read-only');

     // Show's the EDIT CTA
     $('#edit-case-button').show();
     $('#create-case-button').addClass('de-activate');

     $('.order-notes').addClass('read-only');

}

// Removes the read-only and disabled attributes of the form
$("#confirm-edit-order").click( function(){
     $('.modal-wrapper').removeAttr('rel');
     $('.modal-wrapper').removeAttr('href');
     $('.form-group').removeClass('read-only');

     $('#edit-case-button').hide();
     $('#create-case-button').removeClass('de-activate');

     // Order type
     $('#order-type-welfare, #order-type-property').attr('disabled', false);

     // Court reference
     $('#order-court-ref').attr('readonly', false);

     // Order date
     $('#order-date-day, #order-date-month, #order-date-year').attr('readonly', false);

     // Order deputy type
     // $('#order-deputy-type').attr('disabled', false);
     $('input[name="order-deputy-type"]').attr('disabled', false);

     // Order status
     $('#order-status').attr('disabled', false);

     // Order issue date
     $('#order-issue-day, #order-issue-month, #order-issue-year').attr('readonly', false);

     // Order expiry date
     $('#order-expiry-day, #order-expiry-month, #order-expiry-year').attr('readonly', false);

     // Status date
     $('#order-status-day, #order-status-month, #order-status-year').attr('readonly', false);

     // Order received date
     $('#order-received-day, #order-received-month, #order-received-year').attr('readonly', false);

     // Order title
     $('#order-title').attr('readonly', false);

     // Deputies jointly severally
     $('#deputies-appointed-sole, #deputies-appointed-joint, #deputies-appointed-joint-severally').attr('disabled', false);

     // Show's the EDIT CTA
     // $('#edit-case-button').hide();
     // $('#create-case-button').show();

});
// =================================== Edit Case - END - JAVASCRIPT =================================== //

// Error message
$('.wrong-reference').hide();

// DOB - error details
$("#add-bond-error").click( function(){
     // Show's the error message
     $('#error-message').show();

     // Add anchor links to the selected groups
     $('#ref-error').addClass('error-field');

     // Error relavent text
     $('li.wrong-reference').css('display', 'list-item');
     $('span.wrong-reference').css('display', 'inline-block');
});
