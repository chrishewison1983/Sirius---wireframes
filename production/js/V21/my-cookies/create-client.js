// =================================== Create client - COOKIES =================================== //
// STEP 1
$("#create-client-step-1, #edit-client").on("click", function (e) {
     $.cookie("create-client-step-1", true, {path:'/'});

     $.cookie("client-casarec", $("#client-casarec").val(), {path:'/'});

     $.cookie("client-title", $("#client-title").val(), {path:'/'});
     $.cookie("client-title-other", $("#client-title-other").val(), {path:'/'});
     $.cookie("client-first-name", $("#client-first-name").val(), {path:'/'});
     $.cookie("client-middle-name", $("#client-middle-name").val(), {path:'/'});
     $.cookie("client-last-name", $("#client-last-name").val(), {path:'/'});
     $.cookie("client-previous-name", $("#client-previous-name").val(), {path:'/'});
     $.cookie("client-dob-day", $("#client-dob-day").val(), {path:'/'});
     $.cookie("client-dob-month", $("#client-dob-month").val(), {path:'/'});
     $.cookie("client-dob-year", $("#client-dob-year").val(), {path:'/'});

     $.cookie("client-address-line-1", $("#client-address-line-1").val(), {path:'/'});
     $.cookie("client-address-line-2", $("#client-address-line-2").val(), {path:'/'});
     $.cookie("client-address-line-3", $("#client-address-line-3").val(), {path:'/'});
     $.cookie("client-address-town", $("#client-address-town").val(), {path:'/'});
     $.cookie("client-manual-postcode", $("#client-manual-postcode").val(), {path:'/'});
     $.cookie("client-country", $("#client-country").val(), {path:'/'});
     $.cookie("client-country-desc", $("#client-country-description").val(), {path:'/'});
     $.cookie("client-airmail", $("input[name=client-airmail]:checked").val(), {path:'/'});

     $.cookie("client-phone-number", $("#client-phone-number").val(), {path:'/'});
     $.cookie("client-mob-number", $("#client-mob-number").val(), {path:'/'});
     $.cookie("client-email", $("#client-email").val(), {path:'/'});

});


// STEP 2
$("#create-client-step-2, #edit-addtional-info").on("click", function (e) {
     $.cookie("create-client-step-2", true, {path:'/'});

     $.cookie("client-financial", $("#client-financial").val(), {path:'/'});
     $.cookie("client-accommodation", $("#client-accommodation").val(), {path:'/'});
     /* textarea */ $.cookie("client-medical-condition", $("#client-medical-condition").val(), {path:'/'});

     $.cookie("client-marital-status", $("#client-marital-status").val(), {path:'/'});
     $.cookie("client-correspondence-post", $("#client-correspondence-post:checked").val(), {path:'/'});
     $.cookie("client-correspondence-phone", $("#client-correspondence-phone:checked").val(), {path:'/'});
     $.cookie("client-correspondence-email", $("#client-correspondence-email:checked").val(), {path:'/'});
     $.cookie("client-correspondence-welsh", $("#client-correspondence-welsh:checked").val(), {path:'/'});

});

// STEP 3
// $("#create-client-step-3, #edit-client").on("click", function (e) {
//      $.cookie("create-client-step-3", true, {path:'/'});
//
//      $.cookie("client-casarec", $("#client-casarec").val(), {path:'/'});
//      $.cookie("client-status", $("#client-status").val(), {path:'/'});
//      $.cookie("client-status-day", $("#client-status-day").val(), {path:'/'});
//      $.cookie("client-status-month", $("#client-status-month").val(), {path:'/'});
//      $.cookie("client-status-year", $("#client-status-year").val(), {path:'/'});
//
// });

// STEP 1 - Population
if ($.cookie("client-casarec")) {
     $(".client-casarec").text($.cookie("client-casarec"));
     $(".edit-client-form #client-casarec").val($.cookie("client-casarec"));
}
if ($.cookie("client-title") == 'Other') {
     $(".client-title").text($.cookie("client-title-other"));
     $(".edit-client-form #client-title").val($.cookie("client-title-other"));
} else if ($.cookie("client-title")) {
     $(".client-title").text($.cookie("client-title"));
     $(".edit-client-form #client-title").val($.cookie("client-title"));
}
if ($.cookie("client-first-name")) {
     $(".client-first-name").text($.cookie("client-first-name"));
     $(".edit-client-form #client-first-name").val($.cookie("client-first-name"));
}
if ($.cookie("client-middle-name")) {
     $(".client-middle-name").text($.cookie("client-middle-name"));
     $(".edit-client-form #client-middle-name").val($.cookie("client-middle-name"));
}
if ($.cookie("client-last-name")) {
     $(".client-last-name").text($.cookie("client-last-name"));
     $(".edit-client-form #client-last-name").val($.cookie("client-last-name"));
}
if ($.cookie("client-previous-name")) {
     $(".client-previously-known-as").text($.cookie("client-previous-name"));
     $(".edit-client-form #client-previous-name").val($.cookie("client-previous-name"));
}
if ($.cookie("client-dob-day")) {
     $(".client-dob-day").text($.cookie("client-dob-day"));
     $(".edit-client-form #client-dob-day").val($.cookie("client-dob-day"));
}
if ($.cookie("client-dob-month")) {
     $(".client-dob-month").text($.cookie("client-dob-month"));
     $(".edit-client-form #client-dob-month").val($.cookie("client-dob-month"));
}
if ($.cookie("client-dob-year")) {
     $(".client-dob-year").text($.cookie("client-dob-year"));
     $(".edit-client-form #client-dob-year").val($.cookie("client-dob-year"));
}
// if ($.cookie("client-postcode")) {
//      $(".client-postcode").text($.cookie("client-postcode"));
//      $(".edit-client-form #client-postcode").val($.cookie("client-postcode"));
// }
if ($.cookie("client-address-line-1")) {
     $(".client-address-line-1").text($.cookie("client-address-line-1"));
     $(".edit-client-form #client-address-line-1").val($.cookie("client-address-line-1"));
}
if ($.cookie("client-address-line-2")) {
     $(".client-address-line-2").text($.cookie("client-address-line-2"));
     $(".edit-client-form #client-address-line-2").val($.cookie("client-address-line-2"));
}
if ($.cookie("client-address-town")) {
     $(".client-address-town").text($.cookie("client-address-town"));
     $(".edit-client-form #client-address-town").val($.cookie("client-address-town"));
}
if ($.cookie("client-address-county")) {
     $(".client-address-county").text($.cookie("client-address-county"));
     $(".edit-client-form #client-address-county").val($.cookie("client-address-county"));
}
if ($.cookie("client-manual-postcode")) {
     $(".client-manual-postcode").text($.cookie("client-manual-postcode"));
     $(".edit-client-form #client-manual-postcode").val($.cookie("client-manual-postcode"));
}

if ($.cookie("client-country")) {
     $(".client-country").text($.cookie("client-country"));
     $(".edit-client-form #client-country").val($.cookie("client-country"));
     $('.client-outside-uk, .client-airmail-required, .client-airmail-required-answer').hide();
} else if ($.cookie("client-country") == 'Outside') {
     $(".client-country").text($.cookie("client-country"));
     $(".edit-client-form #client-country").val($.cookie("client-country"));
     $('.client-outside-uk, .client-airmail-required, .client-airmail-required-answer').show();
     $(".deputy-country-answer").text($.cookie("deputy-country-desc"));
     $("#client-country-description").val($.cookie("deputy-country-desc"));
}

if ($.cookie("client-airmail")) { $(".client-airmail").text($.cookie("client-airmail")); }
if ($.cookie("client-airmail") == 'Yes' ) {
     $("#client-airmail-yes").parent().addClass('checked');
     $("#client-airmail-no").parent().removeClass('checked');
}
if ($.cookie("client-airmail") == 'No' || $.cookie("client-airmail") == 'undefined') {
     $("#client-airmail-yes").parent().removeClass('checked');
     $("#client-airmail-no").parent().addClass('checked');
}
if ($.cookie("client-airmail") == 'undefined') {
     $("#client-airmail-yes").parent().removeClass('checked');
     $("#client-airmail-no").parent().addClass('checked');
     $('.client-airmail').text('No');
}


if ($.cookie("client-phone-number")) {
     $(".client-phone-number").text($.cookie("client-phone-number"));
     $(".edit-client-form #client-phone-number").val($.cookie("client-phone-number"));
}
if ($.cookie("client-mob-number")) {
     $(".client-mob-number").text($.cookie("client-mob-number"));
     $(".edit-client-form #client-mob-number").val($.cookie("client-mob-number"));
}
if ($.cookie("client-email")) {
     $(".client-email").text($.cookie("client-email"));
     $(".edit-client-form #client-email").val($.cookie("client-email"));
}

// STEP 2 - Population
if ($.cookie("client-financial")) {
     $(".client-financial").text($.cookie("client-financial"));
     $(".edit-client-form #client-financial").val($.cookie("client-financial"));
}
if ($.cookie("client-accommodation")) {
     $(".client-accommodation").text($.cookie("client-accommodation"));
     $(".edit-client-form #client-accommodation").val($.cookie("client-accommodation"));
}
if ($.cookie("client-medical-condition")) {
     $(".client-medical-condition-answer").text($.cookie("client-medical-condition"));
     $(".edit-client-form .client-medical-condition .jqte .jqte_editor").html($.cookie("client-medical-condition"));
     $(".edit-client-form #client-medical-condition").val($.cookie("client-medical-condition"));
}
if ($.cookie("client-marital-status")) {
     $(".client-marital-status").text($.cookie("client-marital-status"));
     $(".edit-client-form #client-marital-status").val($.cookie("client-marital-status"));
}
if ($.cookie("client-correspondence-email")) {
     $(".client-correspondence-email").text($.cookie("client-correspondence-email"));
}
if ($.cookie("client-correspondence-email") == 'Email') {
     $("#client-correspondence-email").parent().addClass('checked');
} else if ($.cookie("client-correspondence-email") == 'undefined') {
     $(".client-correspondence-email").hide();
} else {
     $("#client-correspondence-email").parent().removeClass('checked');
}
if ($.cookie("client-correspondence-phone")) {
     $(".client-correspondence-phone").text($.cookie("client-correspondence-phone"));
}
if ($.cookie("client-correspondence-phone") == 'Phone') {
     $("#client-correspondence-phone").parent().addClass('checked');
} else if ($.cookie("client-correspondence-phone") == 'undefined') {
     $(".client-correspondence-phone").hide();
} else {
     $("#client-correspondence-phone").parent().removeClass('checked');
}

if ($.cookie("client-correspondence-post")) {
     $(".client-correspondence-post").text($.cookie("client-correspondence-post"));
}
if ($.cookie("client-correspondence-post") == 'Post') {
     $("#client-correspondence-post").parent().addClass('checked');
} else if ($.cookie("client-correspondence-post") == 'undefined') {
     $(".client-correspondence-post").hide();
} else {
     $("#client-correspondence-post").parent().removeClass('checked');
}

if ($.cookie("client-correspondence-welsh")) {
     $(".client-correspondence-welsh").text($.cookie("client-correspondence-welsh"));
}
if ($.cookie("client-correspondence-welsh") == 'Welsh') {
     $("#client-correspondence-welsh").parent().addClass('checked');
} else if ($.cookie("client-correspondence-welsh") == 'undefined') {
     $(".client-correspondence-welsh").hide();
} else {
     $("#client-correspondence-welsh").parent().removeClass('checked');
}









// if ($.cookie("client-status")) { $(".client-status").text($.cookie("client-status")); }
//
// if ($.cookie("client-status-day")) {
//      $(".client-status-day").text($.cookie("client-status-day"));
//      $(".edit-client-form #client-status-day").val($.cookie("client-status-day"));
// }
// if ($.cookie("client-status-month")) {
//      $(".client-status-month").text($.cookie("client-status-month"));
//      $(".edit-client-form #client-status-month").val($.cookie("client-status-month"));
// }
// if ($.cookie("client-status-year")) {
//      $(".client-status-year").text($.cookie("client-status-year"));
//      $(".edit-client-form #client-status-year").val($.cookie("client-status-year"));
// }

// Edit client details
$("#edit-client").on("click", function (e) {
     $.cookie("edit-client", true, {path:'/'});
});

if ($.cookie("edit-client")) {
     setTimeout(function() {
          $("#edit-client-confirm").hide(500);
          $.cookie("edit-client", false, {path:'/'});
     }, 5000);
}

if ($.cookie("create-client-step-1") === 'true' && $.cookie("create-client-step-2") === 'true') {
     $('#edit-client-journey').attr('href', '../4-client-page/4c-new-client.html#NewClient');
}


// Client header options
if ($.cookie("client-violent-risk") == 'true') {
     $(".new-client #section-header").find("h1").addClass("violent-risk-message");
     // $(".client-violent-risk").text($.cookie("client-violent-risk"));
     // $(".new-client #section-header").find(".colour-wrapper").addClass("violent-risk-message");
}
if ($.cookie("client-correspondence-welsh") == 'Welsh') {
     $(".new-client #section-header").find("h1").addClass("welsh-message");
}
