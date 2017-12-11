// =================================== Deputy death - COOKIES =================================== //
////////////////////////////////////// COLLECT COOKIES - DEPUTY DEATH - START //////////////////////////////////////
$("#confirm-client-death").on("click", function (e) {

     $.cookie("client-death", true, {path:'/'});

     // Cookies for side bar - DEPUTY DEATH
     $.cookie("client-death-date-day", $("#client-death-date-day").val(), {path:'/'});
     $.cookie("client-death-date-month", $("#client-death-date-month").val(), {path:'/'});
     $.cookie("client-death-date-year", $("#client-death-date-year").val(), {path:'/'});
     $.cookie("client-death-notified-date-day", $("#client-death-notified-date-day").val(), {path:'/'});
     $.cookie("client-death-notified-date-month", $("#client-death-notified-date-month").val(), {path:'/'});
     $.cookie("client-death-notified-date-year", $("#client-death-notified-date-year").val(), {path:'/'});
     $.cookie("client-death-notified", $("#client-death-notified").val(), {path:'/'});
     $.cookie("client-death-notified-other", $("#client-death-notified-other").val(), {path:'/'});
     $.cookie("client-death-how-notified", $("input[name=client-death-how-notified]:checked").val(), {path:'/'});
     $.cookie("client-death-proof", $("input[name=client-death-proof]:checked").val(), {path:'/'});
     $.cookie("client-death-letter-sent-day", $("#client-death-letter-sent-day").val(), {path:'/'});
     $.cookie("client-death-letter-sent-month", $("#client-death-letter-sent-month").val(), {path:'/'});
     $.cookie("client-death-letter-sent-year", $("#client-death-letter-sent-year").val(), {path:'/'});
     // $.cookie("client-death-records-office", $("input[name=client-death-records-office]:checked").val(), {path:'/'});
     $.cookie("client-death-certificate-received-day", $("#client-death-certificate-received-day").val(), {path:'/'});
     $.cookie("client-death-certificate-received-month", $("#client-death-certificate-received-month").val(), {path:'/'});
     $.cookie("client-death-certificate-received-year", $("#client-death-certificate-received-year").val(), {path:'/'});
     /* textarea */ $.cookie("client-death-notes", $(".client-death-notes .jqte_editor").html(), {path:'/'});

});
////////////////////////////////////// COLLECT COOKIES - DEPUTY DEATH - END //////////////////////////////////////

// Changes the header
if ($.cookie('client-death') == 'true' && $.cookie('client-death-proof') == 'No') {
     $('#confirm-client-death').removeClass('de-activate').text('Confirm client is deceased');
     $('#section-header').addClass('deceased-message');
     $('#section-header .type').hide();
     $('#section-header.client-page.deceased-message h1 .normal-status').hide();
     // $('#section-header.client-page.deceased-message h1 .normal-status').css('display', 'none !important');
     $('#section-header.client-page h1 .deceased').show();
     $('#section-header.client-page h1 .deceased').text('Death notified');
} else if ($.cookie('client-death') == 'true' && $.cookie('client-death-proof') == 'Yes') {
     $('#section-header').addClass('deceased-message');
     $('#section-header .type').hide();
     $('#section-header.client-page.deceased-message h1 .normal-status').hide();
     $('#section-header.client-page h1 .deceased').show();
     $('#section-header.client-page h1 .deceased').text('Client is deceased');
     $('.actions-nav.client-panel .client-death-button, .actions-nav.client-panel .client-death-seperator').hide();
} else {
     $('#section-header h1 .normal-status').show();
}

if ($.cookie('client-death-proof') === 'Yes') {
     $('#section-header.client-page .client-death-button').hide();
     // $('#confirm-client-deceased').text('The client is deceased');
} else if ($.cookie('client-death-proof') === 'No') {
     $('#section-header.client-page .client-death-button').show();
     // $('#confirm-client-deceased').text('Client death notified');
}

// Populates the fields
if ($.cookie("client-death-date-day")) { $("#client-death-date-day").val($.cookie("client-death-date-day")); }
if ($.cookie("client-death-date-month")) { $("#client-death-date-month").val($.cookie("client-death-date-month")); }
if ($.cookie("client-death-date-year")) { $("#client-death-date-year").val($.cookie("client-death-date-year")); }
if ($.cookie("client-death-notified-date-day")) { $("#client-death-notified-date-day").val($.cookie("client-death-notified-date-day")); }
if ($.cookie("client-death-notified-date-month")) { $("#client-death-notified-date-month").val($.cookie("client-death-notified-date-month")); }
if ($.cookie("client-death-notified-date-year")) { $("#client-death-notified-date-year").val($.cookie("client-death-notified-date-year")); }
if ($.cookie("client-death-notified") == "Other") {
     $("#client-death-notified").val($.cookie("client-death-notified"));
     $('.other-notified-by').show();
} else if ($.cookie("client-death-notified")) {
     $("#client-death-notified").val($.cookie("client-death-notified"));
     $('.other-notified-by').hide();
}
if ($.cookie("client-death-notified-other")) { $("#client-death-notified-other").val($.cookie("client-death-notified-other")); }
if ($.cookie("client-death-how-notified") == 'Email') {
     $("#client-death-how-notified-email").parent().addClass('checked');
     $("#client-death-how-notified-email").attr('checked', 'checked');
}
if ($.cookie("client-death-how-notified") == 'Phone') {
     $("#client-death-how-notified-phone").parent().addClass('checked');
     $("#client-death-how-notified-phone").attr('checked', 'checked');
}
if ($.cookie("client-death-how-notified") == 'Letter') {
     $("#client-death-how-notified-letter").parent().addClass('checked');
     $("#client-death-how-notified-letter").attr('checked', 'checked');
}
if ($.cookie("client-death-how-notified") == 'Order') {
     $("#client-death-how-notified-order").parent().addClass('checked');
     $("#client-death-how-notified-order").attr('checked', 'checked');
}
if ($.cookie("client-death-how-notified") == 'Fax') {
     $("#client-death-how-notified-fax").parent().addClass('checked');
     $("#client-death-how-notified-fax").attr('checked', 'checked');
}
if ($.cookie("client-death-proof") == 'Yes') {
     $("#client-death-proof-yes").parent().addClass('checked');
     $("#client-death-proof-yes").attr('checked', 'checked');
     $('.client-death-proof-yes').css('display', 'inline-block');
     $('.client-death-proof-no').hide();
} else if ($.cookie("client-death-proof") == 'No') {
     $("#client-death-proof-no").parent().addClass('checked');
     $("#client-death-proof-no").attr('checked', 'checked');
     $('.client-death-proof-no').css('display', 'inline-block');
     $('.client-death-proof-yes').hide();
}

if ($.cookie("client-death-letter-sent-day")) { $("#client-death-letter-sent-day").val($.cookie("client-death-letter-sent-day")); }
if ($.cookie("client-death-letter-sent-month")) { $("#client-death-letter-sent-month").val($.cookie("client-death-letter-sent-month")); }
if ($.cookie("client-death-letter-sent-year")) { $("#client-death-letter-sent-year").val($.cookie("client-death-letter-sent-year")); }
if ($.cookie("client-death-certificate-received-day")) { $("#client-death-certificate-received-day").val($.cookie("client-death-certificate-received-day")); }
if ($.cookie("client-death-certificate-received-month")) { $("#client-death-certificate-received-month").val($.cookie("client-death-certificate-received-month")); }
if ($.cookie("client-death-certificate-received-year")) { $("#client-death-certificate-received-year").val($.cookie("client-death-certificate-received-year")); }
if ($.cookie("client-death-notes")) { $("#client-death-details .client-death-notes .jqte .jqte_editor").html($.cookie("client-death-notes")); }
