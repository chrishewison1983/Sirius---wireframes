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
     // $.cookie("client-death-how-notified", $("input[name=client-death-how-notified]:checked").val(), {path:'/'});
     $.cookie("client-death-how-notified", $("#client-death-how-notified").val(), {path:'/'});
     $.cookie("client-death-proof", $("input[name=client-death-proof]:checked").val(), {path:'/'});
     $.cookie("client-death-letter-sent", $("#datepicker").val(), {path:'/'});
     // $.cookie("client-death-records-office", $("input[name=client-death-records-office]:checked").val(), {path:'/'});
     $.cookie("client-death-certificate-received-day", $("#client-death-certificate-received-day").val(), {path:'/'});
     $.cookie("client-death-certificate-received-month", $("#client-death-certificate-received-month").val(), {path:'/'});
     $.cookie("client-death-certificate-received-year", $("#client-death-certificate-received-year").val(), {path:'/'});
     /* textarea */ $.cookie("client-death-notes", $(".client-death-notes .jqte_editor").html(), {path:'/'});

});
////////////////////////////////////// COLLECT COOKIES - DEPUTY DEATH - END //////////////////////////////////////

$('#client-has-died').hide();

// Changes the header
if ($.cookie('client-death') == 'true' && $.cookie('client-death-proof') == 'No') {
     $('#confirm-client-death').text('Confirm client is deceased');
     $('#section-header.client-page').addClass('deceased-message');
     $('#section-header.client-page .type').hide();
     $('#section-header.client-page.deceased-message h1 .normal-status').hide();
     // $('#section-header.client-page.deceased-message h1 .normal-status').css('display', 'none !important');
     $('#section-header.client-page h1 .deceased').show();
     $('#section-header.client-page h1 .deceased').text('Client\'s death notified');
     $('#section-header.client-page .client-death-button').show();
     $('.actions-nav .client-death-button, .actions-nav .client-death-seperator').show();

     $('.actions-nav .client-death-button .deputy-death').html('<span></span>Confirm client death');

     // Changes the text across the client page
     $('.death-text').text('Record proof of death notification');
     $('.person-detail-item .answer.client-status').text('Client\'s death notified');
     $('.client-status-info h1').text('Death notified');

     // Show's the confirmation panel
     $('#client-has-died').show();
     $('#client-has-died h2 div').text('Death notified');

     // Changes form items
     $('.info-cant-change').addClass('read-only');
     $('.info-cant-change input').attr('disabled', 'disabled');
} else if ($.cookie('client-death') == 'true' && $.cookie('client-death-proof') == 'Yes') {
     $('#section-header.client-page').addClass('deceased-message');
     $('#section-header.client-page .type').hide();
     $('#section-header.client-page.deceased-message h1 .normal-status').hide();
     $('#section-header.client-page h1 .deceased').show();
     $('#section-header.client-page h1 .deceased').text('Client is deceased');

     // Changes the text across the client page
     $('.person-detail-item .answer.client-status').text('Client is deceased');
     $('.client-status-info h1').text('Deceased');

     // Show's the confirmation panel
     $('#client-has-died').show();
     $('#client-has-died h2 div').text('DECEASED');

     $('.actions-nav .client-death-button, .actions-nav .client-death-seperator').hide();
     $('#section-header.client-page .client-death-button').hide();

     // Changes the invoice
     $('#finance-details ul.invoice-list li[data-invoice="1"] .cta-row figure').addClass('client-death');
     $('#invoice-warning-message').slideDown();

     $('#write-off-amount').val('160.00');
     $('ul.invoice-list li[data-invoice="1"] .chart-text.amount strong').text('£0');

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
if ($.cookie("client-death-how-notified")) { $("#client-death-how-notified").val($.cookie("client-death-how-notified")); }
// if ($.cookie("client-death-how-notified") == 'Email') {
//      $("#client-death-how-notified-email").parent().addClass('checked');
//      $("#client-death-how-notified-email").attr('checked', 'checked');
// }
// if ($.cookie("client-death-how-notified") == 'Phone') {
//      $("#client-death-how-notified-phone").parent().addClass('checked');
//      $("#client-death-how-notified-phone").attr('checked', 'checked');
// }
// if ($.cookie("client-death-how-notified") == 'Letter') {
//      $("#client-death-how-notified-letter").parent().addClass('checked');
//      $("#client-death-how-notified-letter").attr('checked', 'checked');
// }
// if ($.cookie("client-death-how-notified") == 'Order') {
//      $("#client-death-how-notified-order").parent().addClass('checked');
//      $("#client-death-how-notified-order").attr('checked', 'checked');
// }
// if ($.cookie("client-death-how-notified") == 'Fax') {
//      $("#client-death-how-notified-fax").parent().addClass('checked');
//      $("#client-death-how-notified-fax").attr('checked', 'checked');
// }
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
