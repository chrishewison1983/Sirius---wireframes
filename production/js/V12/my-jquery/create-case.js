// =================================== Create Case - JAVASCRIPT =================================== //
$('.create-case-journey #cta-footer').hide();

////////////////////////////////////// THE ORDER //////////////////////////////////////
$("#case-type-welfare").click( function(){
     if($(this).is(':checked')) { $('.the-bond-details').slideUp('slow'); }
});
$("#case-type-property").click( function(){
     if($(this).is(':checked')) { $('.the-bond-details').show(); }
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
$(".deputies-jointly").click( function(){
     $('#cta-footer').slideDown('slow');
});

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
     }
});
$("#case-security-bond-dispense").click( function(){
     if($(this).is(':checked')) {
          $('.bond-answer-hidden').slideDown('slow');
          $('.dispense-bond-info').show();
     }
});

// =================================== Edit Case - JAVASCRIPT =================================== //
if (window.location.href.indexOf("EditCase") != -1) {

     $('#order-details, #deputy-details').wrap('<a href="#edit-case-modal" rel="modal:open" class="modal-wrapper"></a>');

     $('#cta-footer').show();

     // Order type
     $('#case-type-welfare, #case-type-property').attr('disabled', true);
     $('#case-type-welfare, #case-type-property').closest('.form-group').addClass('read-only');
     if ($.cookie('case-order-type') === 'Health and Welfare' ) {
          $('#case-type-welfare').parent().addClass('checked');
          $('#case-type-welfare').attr('checked', 'checked');
          $('#case-type-property').parent().removeClass('checked');
          $('#bond-details-section').hide();
     }
     if ($.cookie('case-order-type') === 'Property and finance' ) {
          $('#case-type-property').parent().addClass('checked');
          $('#case-type-property').attr('checked', 'checked');
          $('#case-type-welfare').parent().removeClass('checked');
          $('#bond-details-section').show();
     }

     // Court reference
     $('#case-court-ref').attr('readonly', true);
     $('#case-court-ref').parent().addClass('read-only');
     $('#case-court-ref').val($.cookie("case-court-ref"));

     // Order date
     $('#case-order-date').attr('readonly', true);
     $('#case-order-date').parent().addClass('read-only');
     $('#case-order-date').val($.cookie("case-order-date"));

     // Order issue date
     $('#case-order-issue-date').attr('readonly', true);
     $('#case-order-issue-date').parent().addClass('read-only');
     $('#case-order-issue-date').val($.cookie("case-order-issue-date"));

     // Order status
     $('#case-order-status').attr('disabled', true);
     $('#case-order-status').parent().addClass('read-only');
     $('#case-order-status').val($.cookie("case-order-status"));

     // Status date
     $('#case-status-date').attr('readonly', true);
     $('#case-status-date').parent().addClass('read-only');
     $('#case-status-date').val($.cookie("case-status-date"));

     // Order received date
     $('#case-received-date').attr('readonly', true);
     $('#case-received-date').parent().addClass('read-only');
     $('#case-received-date').val($.cookie("case-received-date"));

     // Order title
     $('#case-order-title').attr('readonly', true);
     $('#case-order-title').parent().addClass('read-only');
     $('#case-order-title').val($.cookie("case-order-title"));

     // Deputies jointly severally
     $('#deputies-jointly-severally-yes, #deputies-jointly-severally-no').attr('disabled', true);
     $('#deputies-jointly-severally-yes, #deputies-jointly-severally-no').closest('.form-group').addClass('read-only');
     // $('#deputies-jointly-severally-yes').parent().addClass('checked');
     if ($.cookie('deputies-jointly-severally') === 'Yes' ) {
          $('#deputies-jointly-severally-yes').parent().addClass('checked');
          $('#deputies-jointly-severally-yes').attr('checked', 'checked');
          $('#deputies-jointly-severally-no').parent().removeClass('checked');
     }
     if ($.cookie('deputies-jointly-severally') === 'No' ) {
          $('#deputies-jointly-severally-no').parent().addClass('checked');
          $('#deputies-jointly-severally-no').attr('checked', 'checked');
          $('#deputies-jointly-severally-yes').parent().removeClass('checked');
     }

     // Deputies jointly
     $('#deputies-jointly-yes, #deputies-jointly-no').attr('disabled', true);
     $('#deputies-jointly-yes, #deputies-jointly-no').closest('.form-group').addClass('read-only');
     if ($.cookie('deputies-jointly') === 'Yes' ) {
          $('#deputies-jointly-yes').parent().addClass('checked');
          $('#deputies-jointly-yes').attr('checked', 'checked');
          $('#deputies-jointly-no').parent().removeClass('checked');
          $('#deputies-jointly-no').removeAttr('checked', 'checked');
     }
     if ($.cookie('deputies-jointly') === 'No' ) {
          $('#deputies-jointly-no').parent().addClass('checked');
          $('#deputies-jointly-no').attr('checked', 'checked');
          $('#deputies-jointly-yes').parent().removeClass('checked');
          $('#deputies-jointly-yes').removeAttr('checked', 'checked');
     }

     // File location
     if ($.cookie('file-location') === 'Physical' ) {
          $('#case-file-physical').parent().addClass('checked');
          $('#case-file-physical').attr('checked', 'checked');
          $('#case-file-scanned').parent().removeClass('checked');
          $('#case-file-scanned').removeAttr('checked', 'checked');

          $('.file-location-hidden').show();

          $("#file-address-line-1").val($.cookie("file-address-line-1"));
          $("#file-address-line-2").val($.cookie("file-address-line-2"));
          $("#file-address-line-3").val($.cookie("file-address-line-3"));
          $("#file-address-town").val($.cookie("file-address-town"));
          $("#file-address-county").val($.cookie("file-address-county"));
          $("#file-address-postcode").val($.cookie("file-address-postcode"));
     }
     if ($.cookie('file-location') === 'Scanned' ) {
          $('#case-file-scanned').parent().addClass('checked');
          $('#case-file-scanned').attr('checked', 'checked');
          $('#case-file-physical').parent().removeClass('checked');
          $('#case-file-physical').removeAttr('checked', 'checked');
          $('.file-location-hidden').hide();
     }
     if ($.cookie('file-location') === 'undefined' ) {
          $('#case-file-scanned, #case-file-physical').parent().removeClass('checked');
          $('.file-location-hidden').hide();
     }

     // Bond info
     if ($.cookie('security-bond') === 'Yes') {
          $('#case-security-bond-yes').parent().addClass('checked');
          $('#case-security-bond-yes').attr('checked', 'checked');
          $('#case-security-bond-no, #case-security-bond-dispense').parent().removeClass('checked');
          $('#case-security-bond-no, #case-security-bond-dispense').removeAttr('checked', 'checked');
          $('.bond-answer-hidden').show();

          $("#bond-amount").val($.cookie("bond-amount"));
          $("#bond-company").val($.cookie("bond-company"));
          $("#bond-ref-number").val($.cookie("bond-ref-number"));
          $("#bond-value").val($.cookie("bond-value"));
          $("#bond-renewal-date").val($.cookie("bond-renewal-date"));
     }
     if ($.cookie('security-bond') === 'No' ) {
          $('#case-security-bond-no').parent().addClass('checked');
          $('#case-security-bond-no').attr('checked', 'checked');
          $('#case-security-bond-yes, #case-security-bond-dispense').parent().removeClass('checked');
          $('#case-security-bond-yes, #case-security-bond-dispense').removeAttr('checked', 'checked');
          $('.bond-answer-hidden').hide();
     }
     if ($.cookie('security-bond') === 'dispense' ) {
          $('#case-security-bond-dispense').parent().addClass('checked');
          $('#case-security-bond-dispense').attr('checked', 'checked');
          $('#case-security-bond-yes, #case-security-bond-no').parent().removeClass('checked');
          $('#case-security-bond-yes, #case-security-bond-no').removeAttr('checked', 'checked');
          $('.bond-answer-hidden').show();

          $("#bond-amount").val($.cookie("bond-amount"));
          $("#bond-company").val($.cookie("bond-company"));
          $("#bond-ref-number").val($.cookie("bond-ref-number"));
          $("#bond-value").val($.cookie("bond-value"));
          $("#bond-renewal-date").val($.cookie("bond-renewal-date"));
     }

}

if (window.location.href.indexOf("Edit") != -1) {

     $('#cta-footer').show();

     // Order type
     if ($.cookie('case-order-type') === 'Health and Welfare' ) {
          $('#case-type-welfare').parent().addClass('checked');
          $('#case-type-welfare').attr('checked', 'checked');
          $('#case-type-property').parent().removeClass('checked');
          $('#bond-details-section').hide();
     }
     if ($.cookie('case-order-type') === 'Property and finance' ) {
          $('#case-type-property').parent().addClass('checked');
          $('#case-type-property').attr('checked', 'checked');
          $('#case-type-welfare').parent().removeClass('checked');
          $('#bond-details-section').show();
     }

     // Court reference
     $('#case-court-ref').val($.cookie("case-court-ref"));

     // Order date
     $('#case-order-date').val($.cookie("case-order-date"));

     // Order issue date
     $('#case-order-issue-date').val($.cookie("case-order-issue-date"));

     // Order status
     $('#case-order-status').val($.cookie("case-order-status"));

     // Status date
     $('#case-status-date').val($.cookie("case-status-date"));

     // Order received date
     $('#case-received-date').val($.cookie("case-received-date"));

     // Order title
     $('#case-order-title').val($.cookie("case-order-title"));

     // Deputies jointly severally
     if ($.cookie('deputies-jointly-severally') === 'Yes' ) {
          $('#deputies-jointly-severally-yes').parent().addClass('checked');
          $('#deputies-jointly-severally-yes').attr('checked', 'checked');
          $('#deputies-jointly-severally-no').parent().removeClass('checked');
     }
     if ($.cookie('deputies-jointly-severally') === 'No' ) {
          $('#deputies-jointly-severally-no').parent().addClass('checked');
          $('#deputies-jointly-severally-no').attr('checked', 'checked');
          $('#deputies-jointly-severally-yes').parent().removeClass('checked');
     }

     // Deputies jointly
     if ($.cookie('deputies-jointly') === 'Yes' ) {
          $('#deputies-jointly-yes').parent().addClass('checked');
          $('#deputies-jointly-yes').attr('checked', 'checked');
          $('#deputies-jointly-no').parent().removeClass('checked');
          $('#deputies-jointly-no').removeAttr('checked', 'checked');
     }
     if ($.cookie('deputies-jointly') === 'No' ) {
          $('#deputies-jointly-no').parent().addClass('checked');
          $('#deputies-jointly-no').attr('checked', 'checked');
          $('#deputies-jointly-yes').parent().removeClass('checked');
          $('#deputies-jointly-yes').removeAttr('checked', 'checked');
     }

     // File location
     if ($.cookie('file-location') === 'Physical' ) {
          $('#case-file-physical').parent().addClass('checked');
          $('#case-file-physical').attr('checked', 'checked');
          $('#case-file-scanned').parent().removeClass('checked');
          $('#case-file-scanned').removeAttr('checked', 'checked');

          $('.file-location-hidden').show();

          $("#file-address-line-1").val($.cookie("file-address-line-1"));
          $("#file-address-line-2").val($.cookie("file-address-line-2"));
          $("#file-address-line-3").val($.cookie("file-address-line-3"));
          $("#file-address-town").val($.cookie("file-address-town"));
          $("#file-address-county").val($.cookie("file-address-county"));
          $("#file-address-postcode").val($.cookie("file-address-postcode"));
     }
     if ($.cookie('file-location') === 'Scanned' ) {
          $('#case-file-scanned').parent().addClass('checked');
          $('#case-file-scanned').attr('checked', 'checked');
          $('#case-file-physical').parent().removeClass('checked');
          $('#case-file-physical').removeAttr('checked', 'checked');
          $('.file-location-hidden').hide();
     }
     if ($.cookie('file-location') === 'undefined' ) {
          $('#case-file-scanned, #case-file-physical').parent().removeClass('checked');
          $('.file-location-hidden').hide();
     }

     // Bond info
     if ($.cookie('security-bond') === 'Yes' ) {
          $('#case-security-bond-yes').parent().addClass('checked');
          $('#case-security-bond-yes').attr('checked', 'checked');
          $('#case-security-bond-no').parent().removeClass('checked');
          $('#case-security-bond-no').removeAttr('checked', 'checked');
          $('.bond-answer-hidden').show();

          $("#bond-amount").val($.cookie("bond-amount"));
          $("#bond-company").val($.cookie("bond-company"));
          $("#bond-ref-number").val($.cookie("bond-ref-number"));
          $("#bond-value").val($.cookie("bond-value"));
          $("#bond-renewal-date").val($.cookie("bond-renewal-date"));
     }
     if ($.cookie('security-bond') === 'No' ) {
          $('#case-security-bond-no').parent().addClass('checked');
          $('#case-security-bond-no').attr('checked', 'checked');
          $('#case-security-bond-yes').parent().removeClass('checked');
          $('#case-security-bond-yes').removeAttr('checked', 'checked');
          $('.bond-answer-hidden').hide();
     }

}
