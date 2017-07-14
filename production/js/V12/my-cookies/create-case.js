// =================================== Create case - COOKIES =================================== //
////////////////////////////////////// COLLECT COOKIES - START //////////////////////////////////////
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
     $.cookie("deputies-jointly-severally", $("input[name=deputies-jointly-severally]:checked").val(), {path:'/'});
     $.cookie("deputies-jointly", $("input[name=deputies-jointly]:checked").val(), {path:'/'});

     // Cookies for side bar - FILE LOCATION
     $.cookie("file-location", $("input[name=file-location]:checked").val(), {path:'/'});
     $.cookie("file-address-line-1", $("#file-address-line-1").val(), {path:'/'});
     $.cookie("file-address-line-2", $("#file-address-line-2").val(), {path:'/'});
     $.cookie("file-address-line-3", $("#file-address-line-3").val(), {path:'/'});
     $.cookie("file-address-town", $("#file-address-town").val(), {path:'/'});
     $.cookie("file-address-county", $("#file-address-county").val(), {path:'/'});
     $.cookie("file-address-postcode", $("#file-address-postcode").val(), {path:'/'});

     // Cookies for side bar - THE BOND
     $.cookie("security-bond", $("input[name=security-bond]:checked").val(), {path:'/'});

     $.cookie("bond-dispensed-date", $("#bond-dispensed-date").val(), {path:'/'});
     $.cookie("bond-dispensed-reason", $("#bond-dispensed-reason").val(), {path:'/'});

     $.cookie("bond-amount", $("#bond-amount").val(), {path:'/'});
     $.cookie("bond-company", $("#bond-company").val(), {path:'/'});
     $.cookie("bond-ref-number", $("#bond-ref-number").val(), {path:'/'});
     $.cookie("bond-value", $("#bond-value").val(), {path:'/'});
     $.cookie("bond-renewal-date", $("#bond-renewal-date").val(), {path:'/'});

});
////////////////////////////////////// COLLECT COOKIES - END //////////////////////////////////////

////////////////////////////////////// POPULATE COOKIES - START //////////////////////////////////////
$('.file-location-info').hide();
$('.bond-info').hide();
$('.dispense').hide();

// Populate side bar - THE ORDER
if ($.cookie("case-order-type")) { $(".case-order-type-answer").text($.cookie("case-order-type")); }
if ($.cookie("case-court-ref")) { $(".case-court-ref-answer").text($.cookie("case-court-ref")); }
if ($.cookie("case-order-date")) { $(".case-order-date-answer").text($.cookie("case-order-date")); }
if ($.cookie("case-order-issue-date")) { $(".case-order-issue-date-answer").text($.cookie("case-order-issue-date")); }
if ($.cookie("case-order-status")) { $(".case-order-status-answer").text($.cookie("case-order-status")); }
if ($.cookie("case-status-date")) { $(".case-status-date-answer").text($.cookie("case-status-date")); }
if ($.cookie("case-received-date")) { $(".case-received-date-answer").text($.cookie("case-received-date")); }
if ($.cookie("case-order-title")) { $(".case-order-title-answer").text($.cookie("case-order-title")); }

// Populate side bar - DEPUTY/DEPUTIES
if ($.cookie("deputies-jointly-severally")) { $(".deputies-jointly-severally-answer").text($.cookie("deputies-jointly-severally")); }
if ($.cookie("deputies-jointly")) { $(".deputies-jointly-answer").text($.cookie("deputies-jointly")); }

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

// Populate side bar - THE BOND
$('#edit-bond').hide();
$('.bond-answer-hidden').hide();
$(".bond-dispensed-date-answer").hide();
$(".bond-dispensed-reason-answer").hide();

if ($.cookie("security-bond")) { $(".security-bond-answer").text($.cookie("security-bond")); }
if ($.cookie('security-bond') === 'Yes' ) {
     $('.bond-info').show();
     $('#edit-bond').show();
     $('.dispense').show();
}
if ($.cookie('security-bond') === 'No' ) {
     $('.bond-info').hide();
     $('#edit-bond').hide();
     $('.dispense').hide();
}
if ($.cookie('security-bond') === 'undefined' ) {
     $('.bond-info').hide();
     $(".security-bond-answer").text('None selected');
     $('#edit-bond').hide();
     $('.dispense').hide();
}
if ($.cookie('security-bond') === 'dispense' ) {
     $('.bond-info').show();
     $('.dispense-bond-info').show();
     $('#edit-bond').show();
     $('#edit-bond h1').text('Bond dispensed');
     $('.bond-answer-hidden').show();
     $('#case-security-bond-dispense').parent().addClass('checked');
     $('#case-security-bond-dispense').addAttr('checked', 'checked');
     $('#case-security-bond-yes, #case-security-bond-no').parent().removeClass('checked');
     $('#case-security-bond-yes, #case-security-bond-no').removeAttr('checked', 'checked');
     $(".bond-dispensed-date-answer").show();
     $(".bond-dispensed-reason-answer").show();
}

if ($.cookie("bond-dispensed-date")) { $(".bond-dispensed-date-answer").text($.cookie("bond-dispensed-date")); }
if ($.cookie("bond-dispensed-reason")) { $(".bond-dispensed-reason-answer").text($.cookie("bond-dispensed-reason")); }


if ($.cookie("bond-amount")) { $(".bond-amount-answer").text($.cookie("bond-amount")); }
if ($.cookie("bond-company")) { $(".bond-company-answer").text($.cookie("bond-company")); }
if ($.cookie("bond-ref-number")) { $(".bond-ref-number-answer").text($.cookie("bond-ref-number")); }
if ($.cookie("bond-value")) { $(".bond-value-answer").text($.cookie("bond-value")); }
if ($.cookie("bond-renewal-date")) { $(".bond-renewal-date-answer").text($.cookie("bond-renewal-date")); }

// Populate side bar - DISPENSE THE BOND
$('.dispense-bond-info').hide();
$('.dispense-bond-option').hide();

$("#dispense-bond").on("click", function (e) {
     $.cookie("dispense-bond-journey", true, {path:'/'});
     $.cookie("security-bond", "dispense", {path:'/'});
});

if ($.cookie('dispense-bond-journey') == 'true' ) {
     $('.dispense-bond-info').show();
     $('.dispense-bond-option').show();
     $('#case-security-bond-yes, #case-security-bond-no').parent().removeClass('checked');
     $('#case-security-bond-yes, #case-security-bond-no').removeAttr('checked', 'checked');
     $('.bond-answer-hidden').show();
} else {
     $('.dispense-bond-info').hide();
}

////////////////////////////////////// POPULATE COOKIES - END //////////////////////////////////////

// Changes the confirm url
if ($.cookie('case-order-type') === 'Health and Welfare' ) {
     $('#confirm-create-case').attr('href', '../4-client-page/4a-new-client.html#HandW');
}
if ($.cookie('case-order-type') === 'Property and finance' ) {
     $('#confirm-create-case').attr('href', '../4-client-page/4a-new-client.html#property');
}
