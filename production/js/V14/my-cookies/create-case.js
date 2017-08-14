// =================================== Create case - COOKIES =================================== //
$(".edit-case-health").on("click", function (e) {
     $.cookie("case-order-type", 'Health and Welfare', {path:'/'});
});

$(".edit-case-pfa").on("click", function (e) {
     $.cookie("case-order-type", 'Property and finance', {path:'/'});
});
////////////////////////////////////// COLLECT COOKIES - THE ORDER - START //////////////////////////////////////
$("#create-case-button").on("click", function (e) {

     $.cookie("create-case-journey", true, {path:'/'});

     // Cookies for side bar - THE ORDER
     $.cookie("case-order-type", $("input[name=case-type]:checked").val(), {path:'/'});
     $.cookie("case-court-ref", $("#case-court-ref").val(), {path:'/'});
     $.cookie("case-order-date", $("#case-order-date").val(), {path:'/'});
     $.cookie("case-order-issue-date", $("#case-order-issue-date").val(), {path:'/'});
     $.cookie("case-order-status", $("#case-order-status").val(), {path:'/'});
     $.cookie("case-status-date", $("#case-status-date").val(), {path:'/'});
     $.cookie("case-received-date", $("#case-received-date").val(), {path:'/'});
     $.cookie("case-order-title", $("#case-order-title").val(), {path:'/'});

     // Cookies for side bar - DEPUTY/DEPUTIES
     $.cookie("deputies-appointed", $("input[name=deputies-appointed]:checked").val(), {path:'/'});
     // $.cookie("deputies-jointly", $("input[name=deputies-jointly]:checked").val(), {path:'/'});

     // Cookies for side bar - FILE LOCATION
     $.cookie("file-location", $("input[name=file-location]:checked").val(), {path:'/'});
     $.cookie("file-address-line-1", $("#file-address-line-1").val(), {path:'/'});
     $.cookie("file-address-line-2", $("#file-address-line-2").val(), {path:'/'});
     $.cookie("file-address-line-3", $("#file-address-line-3").val(), {path:'/'});
     $.cookie("file-address-town", $("#file-address-town").val(), {path:'/'});
     $.cookie("file-address-county", $("#file-address-county").val(), {path:'/'});
     $.cookie("file-address-postcode", $("#file-address-postcode").val(), {path:'/'});

});
////////////////////////////////////// COLLECT COOKIES - THE ORDER - END //////////////////////////////////////

////////////////////////////////////// POPULATE COOKIES - THE ORDER - START //////////////////////////////////////
$('.file-location-info').hide();
$('.bond-info').hide();
$('.dispense').hide();

if (window.location.href.indexOf("EditCase") != -1) {

     $('.state').text('Edit case');

     // Order type
     if ($.cookie('case-order-type') === 'Health and Welfare' ) {
          $('#case-type-welfare').parent().addClass('checked');
          $('#case-type-welfare').attr('checked', 'checked');
          $('#case-type-property').parent().removeClass('checked');
          // $('#bond-details-section').hide();
     }
     if ($.cookie('case-order-type') === 'Property and finance' ) {
          $('#case-type-property').parent().addClass('checked');
          $('#case-type-property').attr('checked', 'checked');
          $('#case-type-welfare').parent().removeClass('checked');
          // $('#bond-details-section').show();
     }

     // Court reference
     if ($.cookie("case-court-ref")) {
          $('#case-court-ref').val($.cookie("case-court-ref"));
     } else if ($.cookie("client-casarec")) {
          $("#case-court-ref").val($.cookie("client-casarec"));
     } else {
          $('#case-court-ref').val('19273638');
     }

     // Order date
     if ($.cookie("case-order-date")) {
          $('#case-order-date').val($.cookie("case-order-date"));
     } else {
          $('#case-order-date').val('28/08/2018');
     }

     // Order issue date
     if ($.cookie("case-order-issue-date")) {
          $('#case-order-issue-date').val($.cookie("case-order-issue-date"));
     } else {
          $('#case-order-issue-date').val('28/08/2017');
     }

     // Order status
     if ($.cookie("case-order-status")) {
          $('#case-order-status').val($.cookie("case-order-status"));
     } else {
          $('#case-order-status').val('Open');
     }

     // Status date
     if ($.cookie("case-status-date")) {
          $('#case-status-date').val($.cookie("case-status-date"));
     } else {
          $('#case-status-date').val('28/08/2017');
     }

     // Order received date
     if ($.cookie("case-received-date")) {
          $('#case-received-date').val($.cookie("case-received-date"));
     } else {
          $('#case-received-date').val('28/07/2017');
     }

     // Order title
     if ($.cookie("case-order-title")) {
          $('#case-order-title').val($.cookie("case-order-title"));
     } else {
          $('#case-order-title').val('Order title');
     }

     // Deputies jointly severally
     if ($.cookie('deputies-appointed') === 'Sole' ) {
          $('#deputies-appointed-sole').parent().addClass('checked');
          $('#deputies-appointed-sole').attr('checked', 'checked');
          $('#deputies-appointed-joint, #deputies-appointed-joint-severally').parent().removeClass('checked');
     } else if ($.cookie('deputies-appointed') === 'Joint' ) {
          $('#deputies-appointed-joint').parent().addClass('checked');
          $('#deputies-appointed-joint').attr('checked', 'checked');
          $('#deputies-appointed-sole, #deputies-appointed-joint-severally').parent().removeClass('checked');
     } else if ($.cookie('deputies-appointed') === 'Joint &amp; severally' ) {
          $('#deputies-appointed-joint-severally').parent().addClass('checked');
          $('#deputies-appointed-joint-severally').attr('checked', 'checked');
          $('#deputies-appointed-sole, #deputies-appointed-joint').parent().removeClass('checked');
     } else {
          $('#deputies-appointed-joint').parent().addClass('checked');
          $('#deputies-appointed-joint').attr('checked', 'checked');
          $('#deputies-appointed-sole, #deputies-appointed-joint-severally').parent().removeClass('checked');
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

}

if ($.cookie("order-journey") == 'PFA') {
     $('#case-type-property').parent().addClass('checked');
     $('#case-type-property').attr('checked', 'checked');
     $('#case-type-welfare').parent().removeClass('checked');
     $('#case-type-welfare').removeAttr('checked');
} if ($.cookie("order-journey") == 'HandW') {
     $('#case-type-welfare').parent().addClass('checked');
     $('#case-type-welfare').attr('checked', 'checked');
     $('#case-type-property').parent().removeClass('checked');
     $('#case-type-property').removeAttr('checked');
}

// Populate side bar - THE ORDER
if ($.cookie("case-order-type")) { $(".case-order-type-answer").text($.cookie("case-order-type")); }
if ($.cookie("case-court-ref")) { $(".case-court-ref-answer").text($.cookie("case-court-ref")); }
if ($.cookie("case-order-date")) {
     $(".case-order-date-answer").text($.cookie("case-order-date"));
     $('#bond-renewal-date').val($.cookie("case-order-date"));
}
if ($.cookie("case-order-issue-date")) { $(".case-order-issue-date-answer").text($.cookie("case-order-issue-date")); }
if ($.cookie("case-order-status")) { $(".case-order-status-answer").text($.cookie("case-order-status")); }
if ($.cookie("case-status-date")) { $(".case-status-date-answer").text($.cookie("case-status-date")); }
if ($.cookie("case-received-date")) { $(".case-received-date-answer").text($.cookie("case-received-date")); }
if ($.cookie("case-order-title")) { $(".case-order-title-answer").text($.cookie("case-order-title")); }

// Populate side bar - DEPUTY/DEPUTIES
if ($.cookie("deputies-appointed")) { $(".deputies-appointed-answer").text($.cookie("deputies-appointed")); }
// if ($.cookie("deputies-jointly")) { $(".deputies-jointly-answer").text($.cookie("deputies-jointly")); }

// Populate side bar - FILE LOCATION
if ($.cookie("file-location")) { $(".file-location-answer").text($.cookie("file-location")); }
if ($.cookie('file-location') === 'Physical' ) {
     $('.file-location-info').show();
} else if ($.cookie('file-location') === 'Scanned' ) {
     $('.file-location-info').hide();
} else if ($.cookie('file-location') === 'undefined') {
     $('.file-location-answer').text('None selected');
     $('.file-location-info').hide();
}
if ($.cookie("file-address-line-1")) {
     $(".file-address-line-1-answer").text($.cookie("file-address-line-1") + ", ");
}
if ($.cookie("file-address-line-1") === "") {
     $(".file-address-line-1-answer").hide();
}
if ($.cookie("file-address-line-2")) {
     $(".file-address-line-2").text($.cookie("file-address-line-2") + ", ");
}
if ($.cookie("file-address-line-2") === "") {
     $(".file-address-line-2-answer").hide();
}
if ($.cookie("file-address-line-3")) {
     $(".file-address-line-3-answer").text($.cookie("file-address-line-3") + ", ");
}
if ($.cookie("file-address-line-3") === "") {
     $(".file-address-line-3-answer").hide();
}
if ($.cookie("file-address-town")) {
     $(".file-address-town-answer").text($.cookie("file-address-town") + ", ");
}
if ($.cookie("file-address-town") === "") {
     $(".file-address-town-answer").hide();
}
if ($.cookie("file-address-county")) {
     $(".file-address-county-answer").text($.cookie("file-address-county") + ", ");
}
if ($.cookie("file-address-county") === "") {
     $(".file-address-county-answer").hide();
}
if ($.cookie("file-address-postcode")) {
     $(".file-address-postcode-answer").text($.cookie("file-address-postcode") + ".");
}
if ($.cookie("file-address-postcode") === "") {
     $(".file-address-postcode-answer").hide();
}
////////////////////////////////////// POPULATE COOKIES - THE ORDER - END //////////////////////////////////////

////////////////////////////////////// COLLECT COOKIES - THE BOND - START //////////////////////////////////////
$("#create-bond-button").on("click", function (e) {

     // Cookies for side bar - THE BOND
     $.cookie("security-bond", $("input[name=security-bond]:checked").val(), {path:'/'});

     $.cookie("bond-amount", $("#bond-amount").val(), {path:'/'});
     $.cookie("bond-company", $("#bond-company").val(), {path:'/'});
     $.cookie("bond-ref-number", $("#bond-ref-number").val(), {path:'/'});
     $.cookie("bond-value", $("#bond-value").val(), {path:'/'});
     $.cookie("bond-renewal-date", $("#bond-renewal-date").val(), {path:'/'});

});

$('.add-bond').on("click", function (e) {
     $.cookie("security-bond", 'Yes', {path:'/'});
     // $.cookie("add-security-bond-journey", true, {path:'/'});
});

$('.edit-bond').on("click", function (e) {
     $.cookie("security-bond", 'edit', {path:'/'});
});

$("#dispense-bond-button").on("click", function (e) {
     $.cookie("security-bond", 'dispense', {path:'/'});
     $.cookie("bond-dispensed-date", $("#bond-dispensed-date").val(), {path:'/'});
     $.cookie("bond-dispensed-reason", $("#bond-dispensed-reason").val(), {path:'/'});
});

////////////////////////////////////// COLLECT COOKIES - THE BOND - END //////////////////////////////////////

////////////////////////////////////// POPULATE COOKIES - THE BOND - START //////////////////////////////////////
$('#edit-bond').hide();
$('.bond-answer-hidden').hide();
$('.dispense-bond-info').hide();
$(".bond-dispensed-date-answer").hide();
$(".bond-dispensed-reason-answer").hide();
$('#dispense-bond-button').hide();
$('#dispense-bond').hide();
// $('#bond-dispensed-true').hide();
// $('.radio.dispense-bond-option').hide();

if ($.cookie("security-bond")) { $(".security-bond-answer").text($.cookie("security-bond")); }
if ($.cookie('security-bond') === 'Yes' ) {
     $('.bond-info').show();
     $('#edit-bond').show();
     $('.bond-answer-hidden').show();
     $('#case-security-bond-yes').attr('checked', 'checked').parent().addClass('checked');
     $('#case-security-bond-no').removeAttr('checked').parent().removeClass('checked');

     $('#edit-bond').show();
     $('#bond-dispensed, #create-bond').hide();
     $('.the-bond-details .optional').hide();
     $('.security-bond').hide();
     $('#dispense-bond').hide();
}
if ($.cookie('security-bond') === 'edit' ) {
     $('.bond-info').show();
     $('#edit-bond').show();
     $('.bond-answer-hidden').show();
     $('#case-security-bond-yes').attr('checked', 'checked').parent().addClass('checked');
     $('#case-security-bond-no').removeAttr('checked').parent().removeClass('checked');

     $('#edit-bond').show();
     $('#bond-dispensed, #create-bond').hide();
     $('.the-bond-details .optional').hide();
     $('.security-bond').hide();
     $('#dispense-bond').show();
}
if ($.cookie('security-bond') === 'No' ) {
     $('.bond-info').hide();
     $('#edit-bond').hide();
     $('.bond-answer-hidden').hide();
     $('#case-security-bond-no').attr('checked', 'checked').parent().addClass('checked');
     $('#case-security-bond-yes').removeAttr('checked').parent().removeClass('checked');

     $('#create-bond').show();
     $('#bond-dispensed, #edit-bond').hide();
     $('.security-bond').show();
}
if ($.cookie('security-bond') === 'undefined' ) {
     $('.bond-info').hide();
     $(".security-bond-answer").text('None selected');
     $('#edit-bond').hide();
     $('.bond-dispense').hide();
     $('.dispense-bond-info').hide();

     $('#create-bond').show();
     $('#bond-dispensed, #edit-bond').hide();
     $('.security-bond').show();
}
if ($.cookie('security-bond') === 'dispense' ) {
     $('#bond-dispensed').show();
     $('#create-bond, #edit-bond').hide();

     $('.bond-answer-hidden').hide();
     $('.dispense-bond-info').show();
     $('.security-bond').show();
     $('.radio.dispense-bond-option').show();

     // $('#case-security-bond-dispense').parent().addClass('checked');
     // $('#case-security-bond-dispense').attr('checked', 'checked');
     // $('#case-security-bond-yes, #case-security-bond-no').parent().removeClass('checked');
     // $('#case-security-bond-yes, #case-security-bond-no').removeAttr('checked');

     $('#bond-details-section .section-title').text('Dispence the bond');
     $('.the-bond-info #section-header h1').text('Dispence the bond');
     $('.bond-info').show();
     $('.security-bond-answer').text('Dispensed');
     $('.bond-dispensed-date-answer').show();
     $(".bond-dispensed-reason-answer").show();

     $('.description-title .bond-dispense').hide();

     // $('#create-bond-button').hide();
     // $('#bond-dispensed-true').show();
     $('#dispense-bond').hide();
     $('.the-bond-details .optional').hide();
     $('.security-bond').hide();

     $('.add-bond-link, .edit-bond').hide();
}

if ($.cookie("bond-dispensed-date")) {
     $(".bond-dispensed-date-answer").text($.cookie("bond-dispensed-date"));
     $("#bond-dispensed-date").val($.cookie("bond-dispensed-date"));
}
if ($.cookie("bond-dispensed-reason")) {
     $(".bond-dispensed-reason-answer").text($.cookie("bond-dispensed-reason"));
     $("#bond-dispensed-reason").val($.cookie("bond-dispensed-reason"));
}

if ($.cookie("bond-amount")) {
     $(".bond-amount-answer").text($.cookie("bond-amount"));
     $("#bond-amount").val($.cookie("bond-amount"));
}
if ($.cookie("bond-company")) {
     $(".bond-company-answer").text($.cookie("bond-company"));
     $("#bond-company").val($.cookie("bond-company"));

}
if ($.cookie("bond-ref-number")) {
     $(".bond-ref-number-answer").text($.cookie("bond-ref-number"));
     $("#bond-ref-number").val($.cookie("bond-ref-number"));
}
if ($.cookie("bond-value")) {
     $(".bond-value-answer").text($.cookie("bond-value"));
     $("#bond-value").val($.cookie("bond-value"));
}
if ($.cookie("bond-renewal-date")) {
     $(".bond-renewal-date-answer").text($.cookie("bond-renewal-date"));
     $("#bond-renewal-date").val($.cookie("bond-renewal-date"));
}

// Populate side bar - DISPENSE THE BOND
// $('.dispense-bond-info').hide();

// if ($.cookie('dispense-bond-journey') == 'true' ) {
//      $('.dispense-bond-info').show();
//      $('.dispense-bond-option').show();
//      $('#case-security-bond-yes, #case-security-bond-no').parent().removeClass('checked');
//      $('#case-security-bond-yes, #case-security-bond-no').removeAttr('checked', 'checked');
//      // $('.bond-answer-hidden').show();
// } else {
//      $('.dispense-bond-info').hide();
// }
////////////////////////////////////// POPULATE COOKIES - THE BOND - END //////////////////////////////////////


// Changes the confirm url
if ($.cookie('case-order-type') === 'Health and Welfare' ) {
     $('#confirm-create-case, #dont-create').attr('href', '../4-client-page/4a-new-client.html#HandW');
}
if ($.cookie('case-order-type') === 'Property and finance' ) {
     $('#confirm-create-case, #dont-create').attr('href', '../4-client-page/4a-new-client.html#property');
}

// Create task page
$('.create-case #cta-footer').show();

$("#datepicker").on("click", function (e) {
     $('#confirm-create-case').removeClass('de-activate');
     $('#confirm-create-case').removeAttr('disabled');
});

// Add bond journey
if ($.cookie('add-security-bond-journey') === 'true') {

} else {

}


// Edit bond journey
if ($.cookie('edit-security-bond-journey') === 'true') {

} else {

}
