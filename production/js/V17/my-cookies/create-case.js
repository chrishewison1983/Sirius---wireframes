// =================================== Create case - COOKIES =================================== //
$(".edit-case-health").on("click", function (e) {
     $.cookie("order-type", 'Health and Welfare', {path:'/'});
});

$(".edit-case-pfa").on("click", function (e) {
     $.cookie("order-type", 'Property and finance', {path:'/'});
});
////////////////////////////////////// COLLECT COOKIES - THE ORDER - START //////////////////////////////////////
$("#create-case-button").on("click", function (e) {

     $.cookie("create-case-journey", true, {path:'/'});

     // Cookies for side bar - THE ORDER
     $.cookie("order-type", $("input[name=order-type]:checked").val(), {path:'/'});
     $.cookie("order-court-ref", $("#order-court-ref").val(), {path:'/'});
     $.cookie("order-date-day", $("#order-date-day").val(), {path:'/'});
     $.cookie("order-date-month", $("#order-date-month").val(), {path:'/'});
     $.cookie("order-date-year", $("#order-date-year").val(), {path:'/'});
     $.cookie("order-issue-day", $("#order-issue-day").val(), {path:'/'});
     $.cookie("order-issue-month", $("#order-issue-month").val(), {path:'/'});
     $.cookie("order-issue-year", $("#order-issue-year").val(), {path:'/'});
     $.cookie("order-received-day", $("#order-received-day").val(), {path:'/'});
     $.cookie("order-received-month", $("#order-received-month").val(), {path:'/'});
     $.cookie("order-received-year", $("#order-received-year").val(), {path:'/'});
     $.cookie("order-status", $("#order-status").val(), {path:'/'});
     $.cookie("order-status-day", $("#order-status-day").val(), {path:'/'});
     $.cookie("order-status-month", $("#order-status-month").val(), {path:'/'});
     $.cookie("order-status-year", $("#order-status-year").val(), {path:'/'});
     $.cookie("order-title", $("#order-title").val(), {path:'/'});

     // Cookies for side bar - DEPUTY/DEPUTIES
     $.cookie("deputies-appointed", $("input[name=deputies-appointed]:checked").val(), {path:'/'});
     // $.cookie("deputies-jointly", $("input[name=deputies-jointly]:checked").val(), {path:'/'});

});
////////////////////////////////////// COLLECT COOKIES - THE ORDER - END //////////////////////////////////////

////////////////////////////////////// POPULATE COOKIES - THE ORDER - START //////////////////////////////////////
$('.file-location-info').hide();
$('.bond-info').hide();
$('.dispense').hide();

if (window.location.href.indexOf("EditCase") != -1) {

     $('.state').text('Edit case');

     // Order type
     if ($.cookie('order-type') === 'Health and Welfare' ) {
          $('#order-type-welfare').parent().addClass('checked');
          $('#order-type-welfare').attr('checked', 'checked');
          $('#order-type-property').parent().removeClass('checked');
          $('#order-type-property').removeAttr('checked');
          // $('#bond-details-section').hide();
     }
     if ($.cookie('order-type') === 'Property and finance' ) {
          $('#order-type-property').parent().addClass('checked');
          $('#order-type-property').attr('checked', 'checked');
          $('#order-type-welfare').parent().removeClass('checked');
          $('#order-type-welfare').removeAttr('checked');
          // $('#bond-details-section').show();
     }

     // Court reference
     if ($.cookie("order-court-ref")) {
          $('#order-court-ref').val($.cookie("order-court-ref"));
     } else if ($.cookie("client-casarec")) {
          $("#order-court-ref").val($.cookie("client-casarec"));
     } else {
          $('#order-court-ref').val('19273638');
     }

     // Order date
     if ($.cookie("order-day")) {
          $('#order-day').val($.cookie("order-day"));
     } else {
          $('#order-day').val('28');
     }
     if ($.cookie("order-month")) {
          $('#order-month').val($.cookie("order-month"));
     } else {
          $('#order-month').val('08');
     }
     if ($.cookie("order-year")) {
          $('#order-year').val($.cookie("order-year"));
     } else {
          $('#order-year').val('2018');
     }

     // Order issue date
     if ($.cookie("order-issue-day")) {
          $('#order-issue-day').val($.cookie("order-issue-day"));
     } else {
          $('#order-issue-day').val('28/08/2017');
     }
     if ($.cookie("order-issue-month")) {
          $('#order-issue-month').val($.cookie("order-issue-month"));
     } else {
          $('#order-issue-month').val('08');
     }
     if ($.cookie("order-issue-year")) {
          $('#order-issue-year').val($.cookie("order-issue-year"));
     } else {
          $('#order-issue-year').val('2017');
     }

     // Order status
     if ($.cookie("order-status")) {
          $('#order-status').val($.cookie("order-status"));
     } else {
          $('#order-status').val('Open');
     }

     // Status date
     if ($.cookie("order-status-day")) {
          $('#order-status-day').val($.cookie("order-status-day"));
     } else {
          $('#order-status-day').val('28');
     }
     if ($.cookie("order-status-month")) {
          $('#order-status-month').val($.cookie("order-status-month"));
     } else {
          $('#order-status-month').val('08');
     }

     if ($.cookie("order-status-year")) {
          $('#order-status-year').val($.cookie("order-status-year"));
     } else {
          $('#order-status-year').val('2018');
     }

     // Order received date
     if ($.cookie("order-received-day")) {
          $('#order-received-day').val($.cookie("order-received-day"));
     } else {
          $('#order-received-day').val('28');
     }
     if ($.cookie("order-received-month")) {
          $('#order-received-month').val($.cookie("order-received-month"));
     } else {
          $('#order-received-month').val('08');
     }
     if ($.cookie("order-received-year")) {
          $('#order-received-year').val($.cookie("order-received-year"));
     } else {
          $('#order-received-year').val('2017');
     }

     // Order title
     if ($.cookie("order-title")) {
          $('#order-title').val($.cookie("order-title"));
     } else {
          $('#order-title').val('Order title');
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
     } else if ($.cookie('deputies-appointed') === 'Joint & severally' ) {
          $('#deputies-appointed-joint-severally').parent().addClass('checked');
          $('#deputies-appointed-joint-severally').attr('checked', 'checked');
          $('#deputies-appointed-sole, #deputies-appointed-joint').parent().removeClass('checked');
     } else {
          $('#deputies-appointed-joint').parent().addClass('checked');
          $('#deputies-appointed-joint').attr('checked', 'checked');
          $('#deputies-appointed-sole, #deputies-appointed-joint-severally').parent().removeClass('checked');
     }

}

if ($.cookie("order-journey") == 'PFA') {
     $('#order-type-property').parent().addClass('checked');
     $('#order-type-property').attr('checked', 'checked');
     $('#order-type-welfare').parent().removeClass('checked');
     $('#order-type-welfare').removeAttr('checked');
} if ($.cookie("order-journey") == 'HandW') {
     $('#order-type-welfare').parent().addClass('checked');
     $('#order-type-welfare').attr('checked', 'checked');
     $('#order-type-property').parent().removeClass('checked');
     $('#order-type-property').removeAttr('checked');
}

// Populate side bar - THE ORDER
if ($.cookie('order-type') === 'Health and Welfare' ) {
     $('#order-type-welfare').parent().addClass('checked');
     $('#order-type-welfare').attr('checked', 'checked');
     $('#order-type-property').parent().removeClass('checked');
     $('#order-type-property').removeAttr('checked');
     // $('#bond-details-section').hide();
}
if ($.cookie('order-type') === 'Property and finance' ) {
     $('#order-type-property').parent().addClass('checked');
     $('#order-type-property').attr('checked', 'checked');
     $('#order-type-welfare').parent().removeClass('checked');
     $('#order-type-welfare').removeAttr('checked');
     // $('#bond-details-section').show();
}
if ($.cookie("order-type")) {
     $(".order-type-answer").text($.cookie("order-type"));
}
if ($.cookie("order-court-ref")) { $(".order-court-ref-answer").text($.cookie("order-court-ref")); }
if ($.cookie("order-day")) {
     $(".order-day-answer").text($.cookie("order-day"));
     $('#bond-renewal-day').val($.cookie("order-day"));
}
if ($.cookie("order-month")) {
     $(".order-month-answer").text($.cookie("order-month"));
     $('#bond-renewal-month').val($.cookie("order-month"));
}
if ($.cookie("order-year")) {
     $(".order-year-answer").text($.cookie("order-year"));
     $('#bond-renewal-year').val($.cookie("order-year"));
}
if ($.cookie("order-issue-day")) { $(".order-issue-day-answer").text($.cookie("order-issue-day")); }
if ($.cookie("order-issue-month")) { $(".order-issue-month-answer").text($.cookie("order-issue-month")); }
if ($.cookie("order-issue-year")) { $(".order-issue-year-answer").text($.cookie("order-issue-year")); }
if ($.cookie("order-status")) { $(".order-status-answer").text($.cookie("order-status")); }
if ($.cookie("order-status-day")) { $(".order-status-day-answer").text($.cookie("order-status-day")); }
if ($.cookie("order-status-month")) { $(".order-status-month-answer").text($.cookie("order-status-month")); }
if ($.cookie("order-status-year")) { $(".order-status-year-answer").text($.cookie("order-status-year")); }
if ($.cookie("order-received-day")) { $(".order-received-day-answer").text($.cookie("order-received-day")); }
if ($.cookie("order-received-month")) { $(".order-received-month-answer").text($.cookie("order-received-month")); }
if ($.cookie("order-received-year")) { $(".order-received-year-answer").text($.cookie("order-received-year")); }
if ($.cookie("order-title")) { $(".order-title-answer").text($.cookie("order-title")); }

// Populate side bar - DEPUTY/DEPUTIES
if ($.cookie('deputies-appointed') === 'Sole' ) {
     $('#deputies-appointed-sole').parent().addClass('checked');
     $('#deputies-appointed-sole').attr('checked', 'checked');
     $('#deputies-appointed-joint, #deputies-appointed-joint-severally').parent().removeClass('checked');
} else if ($.cookie('deputies-appointed') === 'Joint' ) {
     $('#deputies-appointed-joint').parent().addClass('checked');
     $('#deputies-appointed-joint').attr('checked', 'checked');
     $('#deputies-appointed-sole, #deputies-appointed-joint-severally').parent().removeClass('checked');
} else if ($.cookie('deputies-appointed') === 'Joint & severally' ) {
     $('#deputies-appointed-joint-severally').parent().addClass('checked');
     $('#deputies-appointed-joint-severally').attr('checked', 'checked');
     $('#deputies-appointed-sole, #deputies-appointed-joint').parent().removeClass('checked');
} else {
     $('#deputies-appointed-joint').parent().addClass('checked');
     $('#deputies-appointed-joint').attr('checked', 'checked');
     $('#deputies-appointed-sole, #deputies-appointed-joint-severally').parent().removeClass('checked');
}
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
     $.cookie("bond-value", $("#bond-value").val(), {path:'/'});
     $.cookie("bond-company", $("#bond-company").val(), {path:'/'});
     $.cookie("bond-company-other", $("#bond-other").val(), {path:'/'});
     $.cookie("bond-ref-number", $("#bond-ref-number").val(), {path:'/'});
     $.cookie("bond-renewal-day", $("#bond-renewal-day").val(), {path:'/'});
     $.cookie("bond-renewal-month", $("#bond-renewal-month").val(), {path:'/'});
     $.cookie("bond-renewal-year", $("#bond-renewal-year").val(), {path:'/'});

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
     $.cookie("bond-dispensed-day", $("#bond-dispensed-day").val(), {path:'/'});
     $.cookie("bond-dispensed-month", $("#bond-dispensed-month").val(), {path:'/'});
     $.cookie("bond-dispensed-year", $("#bond-dispensed-year").val(), {path:'/'});
     $.cookie("bond-dispensed-reason", $("input[name=dispensed-reason]:checked").val(), {path:'/'});
});

////////////////////////////////////// COLLECT COOKIES - THE BOND - END //////////////////////////////////////

////////////////////////////////////// POPULATE COOKIES - THE BOND - START //////////////////////////////////////
$('#edit-bond').hide();
$('.bond-answer-hidden').hide();
$('.dispense-bond-info').hide();
$(".bond-dispensed-day-answer, .bond-dispensed-month-answer, .bond-dispensed-year-answer").hide();
$(".bond-dispensed-reason-answer").hide();
$('#dispense-bond-button').hide();
$('#dispense-bond').hide();
$('.case-info h2 .edit-bond, .actions-nav .edit-bond').hide();
$('.why-edit-bond').hide();
// $('#bond-dispensed-true').hide();
// $('.radio.dispense-bond-option').hide();

if ($.cookie("security-bond")) { $(".security-bond-answer").text($.cookie("security-bond")); }
if ($.cookie('security-bond') === 'Yes' ) {
     $('.bond-info').show();
     $('#edit-bond').show();
     $('.bond-answer-hidden').show();
     $('#order-security-bond-yes').attr('checked', 'checked').parent().addClass('checked');
     $('#order-security-bond-no').removeAttr('checked').parent().removeClass('checked');

     $('#edit-bond').show();
     $('#bond-dispensed, #create-bond').hide();
     $('.the-bond-details .optional').hide();
     $('.security-bond').hide();
     $('#dispense-bond').hide();

     $('.the-bond-info #section-header .breadcrumb').html('<a href="../index.html">My tasks</a> <div class="separator"> > </div> <a href="../4-client-page/4a-new-client.html">Client summary</a> <div class="separator"> > </div> <a href="../4-client-page/4a-new-client.html#property">PFA | 14820940</a> <div class="separator"> > </div> <span>The Bond</span>');
     $('.the-bond-info #section-header h1').text('Edit bond');

     $('.case-info h2 .add-bond, .actions-nav .add-bond').hide();
     $('.case-info h2 .edit-bond, .actions-nav .edit-bond').show();
     $('.why-edit-bond').hide();
}
if ($.cookie('security-bond') === 'edit' ) {
     $('.bond-info').show();
     $('#edit-bond').show();
     $('.bond-answer-hidden').show();
     $('#order-security-bond-yes').attr('checked', 'checked').parent().addClass('checked');
     $('#order-security-bond-no').removeAttr('checked').parent().removeClass('checked');

     $('#edit-bond').show();
     $('#bond-dispensed, #create-bond').hide();
     $('.the-bond-details .optional').hide();
     $('.security-bond').hide();
     $('#dispense-bond').show();

     $('.the-bond-info #section-header .breadcrumb').html('<a href="../index.html">My tasks</a> <div class="separator"> > </div> <a href="../4-client-page/4a-new-client.html">Client summary</a> <div class="separator"> > </div> <a href="../4-client-page/4a-new-client.html#property">PFA | 14820940</a> <div class="separator"> > </div> <span>The Bond</span>');
     $('.the-bond-info #section-header h1').text('Edit the bond');
     $('#bond-details-section .section-title').text('Edit the bond');

     $('.case-info h2 .add-bond, .actions-nav .add-bond').hide();
     $('.case-info h2 .edit-bond, .actions-nav .edit-bond').show();
     $('.why-edit-bond').show();
}
if ($.cookie('security-bond') === 'No' ) {
     $('.bond-info').hide();
     $('#edit-bond').hide();
     $('.bond-answer-hidden').hide();
     $('#order-security-bond-no').attr('checked', 'checked').parent().addClass('checked');
     $('#order-security-bond-yes').removeAttr('checked').parent().removeClass('checked');

     $('#create-bond').show();
     $('#bond-dispensed, #edit-bond').hide();
     $('.security-bond').show();
     $('.the-bond-info #section-header h1').text('Create a bond');

     $('.order-info h2 .add-bond').show();
     $('.order-info h2 .edit-bond').hide();
     $('.why-edit-bond').hide();
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
     $('.the-bond-info #section-header h1').text('Create a bond');

     $('.case-info h2 .add-bond, .actions-nav .add-bond').show();
     $('.case-info h2 .edit-bond, .actions-nav .edit-bond').hide();
     $('.why-edit-bond').hide();
}
if ($.cookie('security-bond') === 'dispense' ) {
     $('#bond-dispensed').show();
     $('#bond-dispensed').parent().css('background', '#fc2b27');

     $('#create-bond, #edit-bond').hide();

     $('.bond-answer-hidden').hide();
     $('.dispense-bond-info').show();
     $('.security-bond').show();
     $('.radio.dispense-bond-option').show();

     // $('#case-security-bond-dispense').parent().addClass('checked');
     // $('#case-security-bond-dispense').attr('checked', 'checked');
     // $('#case-security-bond-yes, #case-security-bond-no').parent().removeClass('checked');
     // $('#case-security-bond-yes, #case-security-bond-no').removeAttr('checked');

     $('#bond-details-section .section-title').text('Dispense with the bond');
     $('.the-bond-info #section-header h1').text('Dispense with the bond');
     $('.bond-info').show();
     $('.security-bond-answer').text('Dispensed');
     $('.bond-dispensed-day-answer, .bond-dispensed-month-answer, .bond-dispensed-year-answer').show();
     $(".bond-dispensed-reason-answer").show();

     $('.description-title .bond-dispense').hide();

     // $('#create-bond-button').hide();
     // $('#bond-dispensed-true').show();
     $('#dispense-bond').hide();
     $('.the-bond-details .optional').hide();
     $('.security-bond').hide();

     $('.add-bond-link, .edit-bond').hide();
     $('.case-info h2 .add-bond, .actions-nav .add-bond').hide();
     $('.case-info h2 .edit-bond, .actions-nav .edit-bond').hide();
     $('.why-edit-bond').hide();
}

if ($.cookie("bond-dispensed-day")) {
     $(".bond-dispensed-day-answer").text($.cookie("bond-dispensed-day"));
     $("#bond-dispensed-day").val($.cookie("bond-dispensed-day"));
}
if ($.cookie("bond-dispensed-month")) {
     $(".bond-dispensed-month-answer").text($.cookie("bond-dispensed-month"));
     $("#bond-dispensed-month").val($.cookie("bond-dispensed-month"));
}
if ($.cookie("bond-dispensed-year")) {
     $(".bond-dispensed-year-answer").text($.cookie("bond-dispensed-year"));
     $("#bond-dispensed-year").val($.cookie("bond-dispensed-year"));
}

if ($.cookie("bond-dispensed-reason") == 'Court instructions') {
     $(".bond-dispensed-reason-answer").text($.cookie("bond-dispensed-reason"));
     $("#dispensed-reason-court").parent().addClass('checked');
     $("#dispensed-reason-court").attr('checked', 'checked');
     $("#dispensed-reason-keying").parent().removeClass('checked');
     $("#dispensed-reason-keying").removeAttr('checked');
}
if ($.cookie("bond-dispensed-reason") == 'Keying error') {
     $(".bond-dispensed-reason-answer").text($.cookie("bond-dispensed-reason"));
     $("#dispensed-reason-keying").parent().addClass('checked');
     $("#dispensed-reason-keying").attr('checked', 'checked');
     $("#dispensed-reason-court").parent().removeClass('checked');
     $("#dispensed-reason-court").removeAttr('checked');
}

if ($.cookie("bond-amount")) {
     $(".bond-amount-answer").text($.cookie("bond-amount"));
     $("#bond-amount").val($.cookie("bond-amount"));
}

if ($.cookie("bond-company") == 'Other') {
     $(".bond-company-answer").hide();
     $('.bond-other-answer-text').show();
     $(".bond-other-answer-text").text($.cookie("bond-company-other"));
} else {
     $(".bond-company-answer").text($.cookie("bond-company"));
     $("#bond-company").val($.cookie("bond-company"));
     $(".bond-company-answer").show();
     $('.bond-other-answer-text').hide();
}
if ($.cookie("bond-ref-number")) {
     $(".bond-ref-number-answer").text($.cookie("bond-ref-number"));
     $("#bond-ref-number").val($.cookie("bond-ref-number"));
}
if ($.cookie("bond-value")) {
     $(".bond-value-answer").text($.cookie("bond-value"));
     $("#bond-value").val($.cookie("bond-value"));
}
if ($.cookie("bond-renewal-day")) {
     $(".bond-renewal-day-answer").text($.cookie("bond-renewal-day"));
     $("#bond-renewal-day").val($.cookie("bond-renewal-day"));
}
if ($.cookie("bond-renewal-month")) {
     $(".bond-renewal-month-answer").text($.cookie("bond-renewal-month"));
     $("#bond-renewal-month").val($.cookie("bond-renewal-month"));
}
if ($.cookie("bond-renewal-year")) {
     $(".bond-renewal-year-answer").text($.cookie("bond-renewal-year"));
     $("#bond-renewal-year").val($.cookie("bond-renewal-year"));
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
if ($.cookie('order-type') === 'Health and Welfare' ) {
     $('#confirm-create-case, #dont-create').attr('href', '../4-client-page/4a-new-client.html#HandW');
}
if ($.cookie('order-type') === 'Property and finance' ) {
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

// BOND WARNING
$('.secondary-bond').hide();

if ($.cookie('bond-amount') == '150,000' && $.cookie('bond-value') == '150,000') {
     $('.secondary-bond').hide();
     $('#edit-bond').parent().removeClass('warning');
} else {
     $('.secondary-bond').show();
     $('#edit-bond').parent().addClass('warning');
}
