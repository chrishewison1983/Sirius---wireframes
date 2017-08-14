// =================================== Create Case - JAVASCRIPT =================================== //
// $('.create-case-journey #cta-footer').hide();

////////////////////////////////////// THE ORDER //////////////////////////////////////
$("#case-type-welfare").click( function(){
     if($(this).is(':checked')) { $('.the-bond-details').slideUp('slow'); }
});
$("#case-type-property").click( function(){
     if($(this).is(':checked')) { $('.the-bond-details').show(); }
});

// THE ORDER - Changes the URL to H&W or The bond
$(".radio-health-welfare").click( function(){
     $('#create-case-button').attr('href', '../4-client-page/4a-new-client.html#HandW');
});

$(".radio-property").click( function(){
     $('#create-case-button').attr('href', '1b-the-bond.html');
});

// THE ORDER - activates the CTA
$("#case-order-date").on('input', function() {
     if ($('.radio-health-welfare').hasClass('checked') || $('.radio-property').hasClass('checked') && $('#case-court-ref').length > 0) {
          $('#create-case-button').removeClass('de-activate');
     }
});

// THE BOND - activates the CTA
$(".bond-yes").click( function(){
     $('#create-bond-button').removeAttr('href').addClass('de-activate');
});

$(".bond-no").click( function(){
     $('#create-bond-button').attr('href', '../4-client-page/4a-new-client.html#property').removeClass('de-activate');
});

$("#bond-amount").keyup(function() {
     if (!this.value) {
          $('#create-bond-button').addClass('de-activate');
          $('#create-bond-button').removeAttr('href');
     } else {
          $('#create-bond-button').removeClass('de-activate');
          $('#create-bond-button').attr('href', '../4-client-page/4a-new-client.html#property');
     }
});

// $("#bond-amount").on('input', function() {
//      $('#create-bond-button').removeClass('de-activate');
//      $('#create-bond-button').attr('href', '../4-client-page/4a-new-client.html#property');
// });

// THE BOND - activates the renewal date
$('.bond-date-edit').click( function(e){
     e.preventDefault();
     $(this).parent().removeClass('read-only');
     $('#bond-renewal-date').removeAttr('disabled');
});

// $("#case-order-title").click( function(){
//      $('#cta-footer').slideDown('slow');
// });

// if ($.cookie("create-case-step-1") == 'true') {
//      $('.accordion').find('#step-1').removeClass('inactive');
//      $('.accordion #step-1').find('.place-holder-text').hide();
//      $('.accordion #step-1').find('.commission-visit-info').show();
// }

////////////////////////////////////// DEPUTIES //////////////////////////////////////
// $(".deputies-appointed").click( function(){
//      $('#cta-footer').slideDown('slow');
// });

// $(".deputies-jointly").click( function(){
//      $('#cta-footer').slideDown('slow');
// });

// if ($.cookie("create-case-step-4") == 'true') {
//      $('.accordion').find('#step-1, #step-2, #step-3, #step-4').removeClass('inactive');
//      $('.accordion #step-1, .accordion #step-2, .accordion #step-3, .accordion #step-4').find('.place-holder-text').hide();
//      $('.accordion #step-1, .accordion #step-2, .accordion #step-3, .accordion #step-4').find('.commission-visit-info').show();
// }

////////////////////////////////////// THE FILES //////////////////////////////////////
$('.file-location-hidden').hide();

$("#case-file-physical").click( function(){
     if($(this).is(':checked')) { $('.file-location-hidden').slideDown('slow'); }
});
$("#case-file-scanned").click( function(){
     if($(this).is(':checked')) { $('.file-location-hidden').slideUp('slow'); }
});

// $(".file-location").click( function(){
//      $('#cta-footer').slideDown('slow');
// });

// if ($.cookie("create-case-step-3") == 'true') {
//      $('.accordion').find('#step-1, #step-2, #step-3').removeClass('inactive');
//      $('.accordion #step-1, .accordion #step-2, .accordion #step-3').find('.place-holder-text').hide();
//      $('.accordion #step-1, .accordion #step-2, .accordion #step-3').find('.commission-visit-info').show();
// }

////////////////////////////////////// THE BOND //////////////////////////////////////
$("#case-security-bond-yes").click( function(){
     if($(this).is(':checked')) {
          $('.bond-answer-hidden').slideDown('slow');
          $('.dispense-bond-info').slideUp();
     }
});
$("#case-security-bond-no").click( function(){
     if($(this).is(':checked')) {
          $('.bond-answer-hidden').slideUp('slow');
          $('.dispense-bond-info').slideUp();
     }
});
// $("#case-security-bond-dispense").click( function(){
//      if($(this).is(':checked')) {
//           $('.bond-answer-hidden').slideUp('slow');
//           $('.dispense-bond-info').slideDown();
//      }
// });

// =================================== Edit Case - START - JAVASCRIPT =================================== //
if (window.location.href.indexOf("EditCase") != -1) {

     $('#order-details, #deputy-details').wrap('<a href="#edit-case-modal" rel="modal:open" class="modal-wrapper"></a>');

     $('#cta-footer').show();

     $('#create-case-button').removeClass('de-activate');
     $('#create-case-button').attr('href', '../4-client-page/4a-new-client.html');

     // Order type
     $('#case-type-welfare, #case-type-property').attr('disabled', true);
     $('#case-type-welfare, #case-type-property').closest('.form-group').addClass('read-only');

     // Court reference
     $('#case-court-ref').attr('readonly', true);
     $('#case-court-ref').parent().addClass('read-only');

     // Order date
     $('#case-order-date').attr('readonly', true);
     $('#case-order-date').parent().addClass('read-only');

     // Order issue date
     $('#case-order-issue-date').attr('readonly', true);
     $('#case-order-issue-date').parent().addClass('read-only');

     // Order status
     $('#case-order-status').attr('disabled', true);
     $('#case-order-status').parent().addClass('read-only');

     // Status date
     $('#case-status-date').attr('readonly', true);
     $('#case-status-date').parent().addClass('read-only');

     // Order received date
     $('#case-received-date').attr('readonly', true);
     $('#case-received-date').parent().addClass('read-only');

     // Order title
     $('#case-order-title').attr('readonly', true);
     $('#case-order-title').parent().addClass('read-only');

     // Deputies jointly severally
     $('#deputies-appointed-sole, #deputies-appointed-joint, #deputies-appointed-joint-severally').attr('disabled', true);
     $('#deputies-appointed-sole, #deputies-appointed-joint, #deputies-appointed-joint-severally').closest('.form-group').addClass('read-only');

}

// Removes the read-only and disabled attributes of the form
$("#confirm-edit-order").click( function(){
     $('.modal-wrapper').removeAttr('rel');
     $('.modal-wrapper').removeAttr('href');
     $('.form-group').removeClass('read-only');

     // Order type
     $('#case-type-welfare, #case-type-property').attr('disabled', false);

     // Court reference
     $('#case-court-ref').attr('readonly', false);

     // Order date
     $('#case-order-date').attr('readonly', false);

     // Order issue date
     $('#case-order-issue-date').attr('readonly', false);

     // Order status
     $('#case-order-status').attr('disabled', false);

     // Status date
     $('#case-status-date').attr('readonly', false);

     // Order received date
     $('#case-received-date').attr('readonly', false);

     // Order title
     $('#case-order-title').attr('readonly', false);

     // Deputies jointly severally
     $('#deputies-appointed-sole, #deputies-appointed-joint, #deputies-appointed-joint-severally').attr('disabled', false);

});
// =================================== Edit Case - END - JAVASCRIPT =================================== //

// =================================== Dispence Bond - START - JAVASCRIPT =================================== //
$('#dispense-bond-true').hide();

$("#bond-dispense").keyup(function() {
     if ($(this).val() == 'dispense the bond') {
          $('#dispense-bond-true').show();
          $('#dispense-bond-false').hide();
     } else {
          $('#dispense-bond-true').hide();
          $('#dispense-bond-false').show();
     }

});
$("#dispense-bond-true").on("click", function (e) {
     $('.bond-answer-hidden').slideUp('slow');
     $('.dispense-bond-info').slideDown();
     $('#dispense-bond').hide();
     $('#bond-details-section .section-title').text('Dispence the bond');
     $('.the-bond-info #section-header h1').text('Dispence the bond');
     $('#dispense-bond-button').show();
     $('#create-bond-button').hide();
});
// =================================== Dispence Bond - END - JAVASCRIPT =================================== //
