// =================================== Deputy death - COOKIES =================================== //
////////////////////////////////////// COLLECT COOKIES - DEPUTY DEATH - START //////////////////////////////////////
$("#confirm-deputy-death").on("click", function (e) {

     $.cookie("deputy-death", true, {path:'/'});

     // Cookies for side bar - DEPUTY DEATH
     $.cookie("deputy-death-date-day", $("#deputy-death-date-day").val(), {path:'/'});
     $.cookie("deputy-death-date-month", $("#deputy-death-date-month").val(), {path:'/'});
     $.cookie("deputy-death-date-year", $("#deputy-death-date-year").val(), {path:'/'});
     $.cookie("deputy-death-notified-date-day", $("#deputy-death-notified-date-day").val(), {path:'/'});
     $.cookie("deputy-death-notified-date-month", $("#deputy-death-notified-date-month").val(), {path:'/'});
     $.cookie("deputy-death-notified-date-year", $("#deputy-death-notified-date-year").val(), {path:'/'});
     $.cookie("deputy-death-notified", $("#deputy-death-notified").val(), {path:'/'});
     $.cookie("deputy-death-notified-other", $("#deputy-death-notified-other").val(), {path:'/'});
     $.cookie("deputy-death-how-notified", $("input[name=deputy-death-how-notified]:checked").val(), {path:'/'});
     $.cookie("deputy-death-proof", $("input[name=deputy-death-proof]:checked").val(), {path:'/'});
     $.cookie("deputy-death-letter-sent-day", $("#deputy-death-letter-sent-day").val(), {path:'/'});
     $.cookie("deputy-death-letter-sent-month", $("#deputy-death-letter-sent-month").val(), {path:'/'});
     $.cookie("deputy-death-letter-sent-year", $("#deputy-death-letter-sent-year").val(), {path:'/'});
     $.cookie("deputy-death-records-office", $("input[name=deputy-death-records-office]:checked").val(), {path:'/'});
     $.cookie("deputy-death-certificate-received-day", $("#deputy-death-certificate-received-day").val(), {path:'/'});
     $.cookie("deputy-death-certificate-received-month", $("#deputy-death-certificate-received-month").val(), {path:'/'});
     $.cookie("deputy-death-certificate-received-year", $("#deputy-death-certificate-received-year").val(), {path:'/'});
     /* textarea */ $.cookie("deputy-death-notes", $(".deputy-death-notes .jqte_editor").html(), {path:'/'});

});
////////////////////////////////////// COLLECT COOKIES - DEPUTY DEATH - END //////////////////////////////////////

// Changes the header
if ($.cookie('deputy-death') == 'true' && $.cookie('deputy-death-proof') == 'No') {
     $('#confirm-deputy-death').removeClass('de-activate').text('Confirm deputy is deceased');
     $('#section-header').addClass('deceased-message');
     $('#section-header .type').hide();
     $('#section-header.deputy-page h1 .normal-status').hide();
     $('#section-header.deputy-page h1 .deceased').show();
     $('#section-header.deputy-page h1 .deceased').text('Death notified');
     $('.deputy-status').hide();
} else if ($.cookie('deputy-death') == 'true' && $.cookie('deputy-death-proof') == 'Yes') {
     $('#section-header').addClass('deceased-message');
     $('#section-header .type').hide();
     $('#section-header.deputy-page h1 .normal-status').hide();
     $('#section-header.deputy-page h1 .deceased').show();
     $('#section-header.deputy-page h1 .deceased').text('deputy is deceased');
     $('.deputy-status').hide();
     $('.actions-nav.client-panel .deputy-death-button, .actions-nav.client-panel .deputy-death-seperator').hide();
} else {
     $('.deputy-status').css('display', 'inline-block');
}

if ($.cookie('deputy-death-proof') === 'Yes') {
     $('#section-header.deputy-page .deputy-death-button').hide();
} else if ($.cookie('deputy-death-proof') === 'No') {
     $('#section-header.deputy-page .deputy-death-button').show();
}

// Populates the fields
if ($.cookie("deputy-death-date-day")) { $("#deputy-death-date-day").val($.cookie("deputy-death-date-day")); }
if ($.cookie("deputy-death-date-month")) { $("#deputy-death-date-month").val($.cookie("deputy-death-date-month")); }
if ($.cookie("deputy-death-date-year")) { $("#deputy-death-date-year").val($.cookie("deputy-death-date-year")); }
if ($.cookie("deputy-death-notified-date-day")) { $("#deputy-death-notified-date-day").val($.cookie("deputy-death-notified-date-day")); }
if ($.cookie("deputy-death-notified-date-month")) { $("#deputy-death-notified-date-month").val($.cookie("deputy-death-notified-date-month")); }
if ($.cookie("deputy-death-notified-date-year")) { $("#deputy-death-notified-date-year").val($.cookie("deputy-death-notified-date-year")); }
if ($.cookie("deputy-death-notified") == "Other") {
     $("#deputy-death-notified").val($.cookie("deputy-death-notified"));
     $('.other-notified-by').show();
} else if ($.cookie("deputy-death-notified")) {
     $("#deputy-death-notified").val($.cookie("deputy-death-notified"));
     $('.other-notified-by').hide();
}
if ($.cookie("deputy-death-notified-other")) { $("#deputy-death-notified-other").val($.cookie("deputy-death-notified-other")); }
if ($.cookie("deputy-death-how-notified") == 'Email') {
     $("#deputy-death-how-notified-email").parent().addClass('checked');
     $("#deputy-death-how-notified-email").attr('checked', 'checked');
}
if ($.cookie("deputy-death-how-notified") == 'Phone') {
     $("#deputy-death-how-notified-phone").parent().addClass('checked');
     $("#deputy-death-how-notified-phone").attr('checked', 'checked');
}
if ($.cookie("deputy-death-how-notified") == 'Letter') {
     $("#deputy-death-how-notified-letter").parent().addClass('checked');
     $("#deputy-death-how-notified-letter").attr('checked', 'checked');
}
if ($.cookie("deputy-death-how-notified") == 'Order') {
     $("#deputy-death-how-notified-order").parent().addClass('checked');
     $("#deputy-death-how-notified-order").attr('checked', 'checked');
}
if ($.cookie("deputy-death-how-notified") == 'Fax') {
     $("#deputy-death-how-notified-fax").parent().addClass('checked');
     $("#deputy-death-how-notified-fax").attr('checked', 'checked');
}
if ($.cookie("deputy-death-proof") == 'Yes') {
     $("#deputy-death-proof-yes").parent().addClass('checked');
     $("#deputy-death-proof-yes").attr('checked', 'checked');
     $('.deputy-death-proof-yes').css('display', 'inline-block');
     $('.deputy-death-proof-no').hide();
     // $('#confirm-deputy-deceased').text('The deputy is deceased');
} else if ($.cookie("deputy-death-proof") == 'No') {
     $("#deputy-death-proof-no").parent().addClass('checked');
     $("#deputy-death-proof-no").attr('checked', 'checked');
     $('.deputy-death-proof-no').css('display', 'inline-block');
     $('.deputy-death-proof-yes').hide();
     // $('#confirm-deputy-deceased').text('Deputy death notified');
}
if ($.cookie("deputy-death-letter-sent-day")) { $("#deputy-death-letter-sent-day").val($.cookie("deputy-death-letter-sent-day")); }
if ($.cookie("deputy-death-letter-sent-month")) { $("#deputy-death-letter-sent-month").val($.cookie("deputy-death-letter-sent-month")); }
if ($.cookie("deputy-death-letter-sent-year")) { $("#deputy-death-letter-sent-year").val($.cookie("deputy-death-letter-sent-year")); }
if ($.cookie("deputy-death-certificate-received-day")) { $("#deputy-death-certificate-received-day").val($.cookie("deputy-death-certificate-received-day")); }
if ($.cookie("deputy-death-certificate-received-month")) { $("#deputy-death-certificate-received-month").val($.cookie("deputy-death-certificate-received-month")); }
if ($.cookie("deputy-death-certificate-received-year")) { $("#deputy-death-certificate-received-year").val($.cookie("deputy-death-certificate-received-year")); }
if ($.cookie("deputy-death-notes")) { $("#deputy-death-details .deputy-death-notes .jqte .jqte_editor").html($.cookie("deputy-death-notes")); }





// Changes header when deputy is dead
// $('.deceased').hide();
// $('#section-header .deputy-status').css('display', 'inline-block');

// if ($.cookie("client-death-proof") == 'Yes') {
//
// } else if ($.cookie("client-death-proof") == 'No') {
//      $('#section-header.deceased-message .deceased').show().text('');
//      $('.deputy-status').hide();
// } else {
//      $('.deputy-status').css('display', 'inline-block');
// }

// if ($.cookie("deputy-death") == 'true') {
//      $('#section-header').addClass('deceased-message');
//      $('#section-header .deputy-status').css('display', 'none !important');
//      $('#section-header .deceased').show();
//      $('#section-header .type').hide();
//      $('.deputy-status-deceased').text('Deceased');
//      // $('.deputy-details-page .deputy-death-button').hide();
//      $('.deputy-details-page .actions-nav .seperator').hide();
// } else {
//      $('.deputy-status').css('display', 'inline-block');
// }
