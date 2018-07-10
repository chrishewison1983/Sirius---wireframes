// =================================== Create Bond - COOKIES =================================== //
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
     // $.cookie("bond-edit-reason", $("input[name=edit-reason]:checked").val(), {path:'/'});
     $.cookie("bond-edit-reason", $("#bond-edit-reason").val(), {path:'/'});
     $.cookie("bond-one-off-bond", $("input[name=bond-one-off-bond]:checked").val(), {path:'/'});
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
$('.add-new-bond').hide();
$('.edit-bond').hide();
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

// if ($.cookie("security-bond")) { $(".security-bond-answer").text($.cookie("security-bond")); }
$('.bond-info, .edit-bond-info').hide();

if ($.cookie('security-bond')) { $(".security-bond-answer").text($.cookie('security-bond')); }

if ($.cookie('security-bond') === 'Yes' ) {
     $('.bond-info').show();
     $('#edit-bond').show();
     $('.bond-answer-hidden').show();
     $('#order-security-bond-yes').attr('checked', 'checked').parent().addClass('checked');
     $('#order-security-bond-no').removeAttr('checked').parent().removeClass('checked');

     $('#edit-bond').show();
     $('#bond-dispensed, #create-bond, .edit-bond-info').hide();
     $('.the-bond-details .optional').hide();
     $('.security-bond').hide();
     $('#dispense-bond').hide();

     $('.the-bond-info #section-header .breadcrumb').html('<a href="../index.html" class="user-type-link">Dashboard</a> <div class="separator"> > </div> <a href="../4-client-hub/4a-new-client.html">Mr Gerald Brackens</a> <div class="separator"> > </div> <a href="../4-client-hub/4a-new-client.html#PFA">PFA | 14820940</a> <div class="separator"> > </div> <span>The Bond</span>');
     $('.the-bond-info #section-header h1').text('The bond');

     $('.case-info h2 .add-bond, .actions-nav .add-bond, #client-order-table .add-bond').hide();
     $('.case-info h2 .edit-bond, .actions-nav .edit-bond, #client-order-table .edit-bond').show();
     $('.why-edit-bond').hide();

     $(".security-bond-answer").text('Yes');
     $('.bond-renewal-date-answer').text($.cookie("bond-renewal-day") + '/' + $.cookie("bond-renewal-month") + '/' + $.cookie("bond-renewal-year"));

}
if ($.cookie('security-bond') === 'edit' ) {
     $('.bond-info').show();
     $('#edit-bond').show();
     $('.bond-answer-hidden').show();
     $('#order-security-bond-yes').attr('checked', 'checked').parent().addClass('checked');
     $('#order-security-bond-no').removeAttr('checked').parent().removeClass('checked');

     $('#edit-bond, .edit-bond-info').show();
     $('#bond-dispensed, #create-bond').hide();
     $('.the-bond-details .optional').hide();
     $('.security-bond').hide();
     $('#dispense-bond').show();

     $('.the-bond-info #section-header .breadcrumb').html('<a href="../index.html" class="user-type-link">Dashboard</a> <div class="separator"> > </div> <a href="../4-client-hub/4a-new-client.html">Mr Gerald Brackens</a> <div class="separator"> > </div> <a href="../4-client-hub/4a-new-client.html#PFA">PFA | 14820940</a> <div class="separator"> > </div> <span>The Bond</span>');
     $('.the-bond-info #section-header h1').text('Edit the bond');
     $('#bond-details-section .section-title').text('Edit the bond');

     $('.case-info h2 .add-bond, .actions-nav .add-bond, #client-order-table .add-bond').hide();
     $('.case-info h2 .edit-bond, .actions-nav .edit-bond, #client-order-table .edit-bond').show();
     $('.why-edit-bond').show();

     $(".security-bond-answer").text('Yes');
     $('.bond-renewal-date-answer').text($.cookie("bond-renewal-day") + '/' + $.cookie("bond-renewal-month") + '/' + $.cookie("bond-renewal-year"));

     $('#create-bond-button').removeClass('de-activate').attr('href', '../4-client-hub/4a-new-client.html#PFA');

}
if ($.cookie('security-bond') === 'No') {
     $('.bond-info, .edit-bond-info').hide();
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

     $('#flexbox-container .bond-info').hide();

     $(".security-bond-answer").text('No');
     $('.bond-renewal-date-answer').text('N/A');
}
if ($.cookie('security-bond') === 'undefined' ) {
     $('.bond-info, .edit-bond-info').hide();
     $(".security-bond-answer").text('None selected');
     $('#edit-bond').hide();
     $('.bond-dispense').hide();
     $('.dispense-bond-info').hide();

     $('#create-bond').show();
     $('#bond-dispensed, #edit-bond').hide();
     $('.security-bond').show();
     $('.the-bond-info #section-header h1').text('Create a bond');

     $('.case-info h2 .add-bond, .actions-nav .add-bond, #client-order-table .add-bond').show();
     $('.case-info h2 .edit-bond, .actions-nav .edit-bond, #client-order-table .edit-bond').hide();
     $('.why-edit-bond').hide();

     $(".security-bond-answer").text('No');
     $('.bond-renewal-date-answer').text('N/A');

}

// if ($.cookie("bond-dispensed-day")) {
//      $(".bond-dispensed-day-answer").text($.cookie("bond-dispensed-day"));
//      $("#bond-dispensed-day").val($.cookie("bond-dispensed-day"));
// }
// if ($.cookie("bond-dispensed-month")) {
//      $(".bond-dispensed-month-answer").text($.cookie("bond-dispensed-month"));
//      $("#bond-dispensed-month").val($.cookie("bond-dispensed-month"));
// }
// if ($.cookie("bond-dispensed-year")) {
//      $(".bond-dispensed-year-answer").text($.cookie("bond-dispensed-year"));
//      $("#bond-dispensed-year").val($.cookie("bond-dispensed-year"));
// }

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

if ($.cookie("bond-edit-reason")) { $(".security-bond-edited-answer").text($.cookie("bond-edit-reason")); }

if ($.cookie("bond-amount")) {
     $(".bond-amount-answer").text('£ ' + $.cookie("bond-amount"));
     $("#bond-amount").val($.cookie("bond-amount"));
     // $(".bond-info").show();
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

if ($.cookie('security-bond') === 'dispense' ) {
     $('#bond-dispensed').show();
     $('#bond-dispensed').parent().css('background', '#fc2b27');

     $('#create-bond, #edit-bond, .edit-bond-info').hide();

     $('.bond-info').hide();

     $('.bond-answer-hidden').hide();
     $('.dispense-bond-info').show();
     $('.security-bond').show();
     $('.radio.dispense-bond-option').show();

     // Changes the client header
     $('.bond-amount-answer').text('dispensed');

     // $('#case-security-bond-dispense').parent().addClass('checked');
     // $('#case-security-bond-dispense').attr('checked', 'checked');
     // $('#case-security-bond-yes, #case-security-bond-no').parent().removeClass('checked');
     // $('#case-security-bond-yes, #case-security-bond-no').removeAttr('checked');

     $('#bond-details-section .section-title').text('Dispense with the bond');
     $('.the-bond-info #section-header h1').text('Dispense with the bond');
     // $('.bond-info').show();
     $('.security-bond-answer').text('Dispensed');
     $('.bond-dispensed-day-answer, .bond-dispensed-month-answer, .bond-dispensed-year-answer').show();
     $(".bond-dispensed-reason-answer").show();

     $('.description-title .bond-dispense').hide();

     $('.bond-dispensed-date-answer').text($.cookie("bond-dispensed-day") + '/' + $.cookie("bond-dispensed-month") + '/' + $.cookie("bond-dispensed-year"));

     // $('#create-bond-button').hide();
     // $('#bond-dispensed-true').show();
     $('#dispense-bond').hide();
     $('.the-bond-details .optional').hide();
     $('.security-bond').hide();

     $('.edit-bond, .add-bond').hide();
     $('.add-new-bond').show();
     // $('.case-info h2 .add-bond, .actions-nav .add-bond').hide();
     $('.case-info h2 .edit-bond, .actions-nav .edit-bond, #client-order-table .edit-bond').hide();
     $('.why-edit-bond').hide();

}

$(".add-new-bond").on("click", function (e) {
     $.cookie("bond-amount", '', {path:'/'});
     $.cookie("bond-value", '', {path:'/'});
     $.cookie("bond-company", '', {path:'/'});
     $.cookie("bond-company-other", '', {path:'/'});
     $.cookie("bond-ref-number", '', {path:'/'});
     $.cookie("bond-renewal-day", '', {path:'/'});
     $.cookie("bond-renewal-month", '', {path:'/'});
     $.cookie("bond-renewal-year", '', {path:'/'});
     $.cookie("bond-dispensed-day", '', {path:'/'});
     $.cookie("bond-dispensed-month", '', {path:'/'});
     $.cookie("bond-dispensed-year", '', {path:'/'});
     $.cookie("bond-dispensed-reason", '', {path:'/'});
     $.cookie("security-bond", 'Yes', {path:'/'});

});


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
     $('#confirm-create-case, #dont-create').attr('href', '../4-client-hub/4a-new-client.html#HandW');
}
if ($.cookie('order-type') === 'Property and finance' ) {
     $('#confirm-create-case, #dont-create').attr('href', '../4-client-hub/4a-new-client.html#PFA');
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

// One off Bond info
if ($.cookie("bond-company") == 'Howdens' || $.cookie("bond-company") == 'Deputy Bond Services (DBS)') {
     $('.one-off-bond').show().css('display', 'inline-block');
}

if ($.cookie("bond-one-off-bond") == 'Yes') {
     $("#bond-one-off-bond").attr('checked', 'checked');
     $("#bond-one-off-bond").parent().addClass('checked');
     $('.bond-renewal-info').hide();
} else {
     $('.bond-renewal-info').show();
     $('.one-off-bond').hide();
}
