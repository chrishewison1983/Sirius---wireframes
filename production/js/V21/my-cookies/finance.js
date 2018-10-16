// =================================== Finance - JAVASCRIPT =================================== //
$('.invoice-details, .write-off-details').hide();

//////////////////// CREDIT AMOUNT - START ////////////////////
$("#credit-amount-button").on("click", function (e) {

     $.cookie("credit-amount-completed", true, {path:'/'});

     // Cookies for side bar
     $.cookie("credit-amount", $("#credit-amount").val(), {path:'/'});
     $.cookie("credit-date-by", $("#credit-date-by").val(), {path:'/'});
     $.cookie("credit-sent-date", $("#credit-sent-date").val(), {path:'/'});
     $.cookie("credit-cc-number", $("#credit-cc-number").val(), {path:'/'});
     $.cookie("credit-payment-method", $("#credit-payment-method").val(), {path:'/'});
     $.cookie("credit-memo", $("#credit-memo").val(), {path:'/'});
     /* textarea */ $.cookie("credit-comments", $(".credit-comments .jqte_editor").html(), {path:'/'});

});

$('.invoice-details').hide();

if ($.cookie("credit-amount-completed") == 'true') {

     // Populates form
     // $('#credit-amount').val($.cookie("credit-amount"));
     // $('#credit-date-by').val($.cookie("credit-date-by"));
     // $('#credit-sent-date').val($.cookie("credit-sent-date"));
     // $('#credit-cc-number').val($.cookie("credit-cc-number"));
     // $('#credit-memo').val($.cookie("credit-memo"));
     // $('.credit-comments .jqte_editor').val($.cookie("credit-comments"));

     // Adds pending class
     $('ul.invoice-list li[data-invoice="2"]').addClass('pending').removeClass('outstanding');
     $('ul.invoice-list li[data-invoice="2"] .invoice-status').addClass('hide');
     $('ul.invoice-list li[data-invoice="2"] .invoice-status[data-tag="3"]').removeClass('hide');

     $('.credit-amount-answer').text($.cookie("credit-amount"));

     setTimeout(function() {
          // Removes pending class
          $('ul.invoice-list li[data-invoice="2"]').removeClass('pending');
          $('ul.invoice-list li[data-invoice="2"] .invoice-status[data-tag="3"]').addClass('hide');

          // Populates the invoice list
          $('.credit-date-by-answer').text($.cookie("credit-date-by"));
          $('.credit-sent-date-answer').text($.cookie("credit-sent-date"));
          $('.credit-cc-number-answer').text($.cookie("credit-cc-number"));
          $('.credit-payment-method-answer').text($.cookie("credit-payment-method"));
          $('.credit-memo-answer').text($.cookie("credit-memo"));
          $('.credit-comments-answer').text($.cookie("credit-comments"));

          $('ul.invoice-list li[data-invoice="2"] .invoice-content-section .place-holder-text').hide();
          $('ul.invoice-list li[data-invoice="2"] .invoice-content-section .write-off-details').hide();
          $('ul.invoice-list li[data-invoice="2"] .invoice-content-section .invoice-details').show();
     }, 7500);

}

if ($.cookie("credit-amount-completed") == 'true' && $.cookie("credit-amount") == '120') {
     setTimeout(function() {
          $('ul.invoice-list li[data-invoice="2"]').addClass('outstanding');

          $('ul.invoice-list li[data-invoice="2"] .cta-row figure').removeClass('invoice-chart-one').addClass('invoice-chart-four');
          $('ul.invoice-list li[data-invoice="2"] .cta-row figure .chart-text.amount strong').text('£' + $.cookie("credit-amount"));

          $('ul.invoice-list li[data-invoice="2"] .invoice-status').addClass('hide');
          $('ul.invoice-list li[data-invoice="2"] .invoice-status[data-tag="1"]').removeClass('hide');
     }, 7500);
}

if ($.cookie("credit-amount-completed") == 'true' && $.cookie("credit-amount") == '200' || $.cookie("credit-amount-completed") == 'true' && $.cookie("credit-amount") == '320') {
     setTimeout(function() {
          $('ul.invoice-list li[data-invoice="2"]').addClass('completed-invoice').removeClass('outstanding');
          $('ul.invoice-list li[data-invoice="2"] .cta-row figure').removeClass('invoice-chart-one').addClass('invoice-chart-two');
          $('ul.invoice-list li[data-invoice="2"] .pay-invoice').hide();
          $('ul.invoice-list li[data-invoice="2"] .amount-due .chart-text.top').text('Paid in full');
          $('ul.invoice-list li[data-invoice="2"] .invoice-status').addClass('hide');
          $('ul.invoice-list li[data-invoice="2"] .invoice-status[data-tag="2"]').removeClass('hide');
     }, 7500);
}

if ($.cookie("credit-amount-completed") == 'true' && $.cookie("credit-amount") == '640') {
     setTimeout(function() {
          $('ul.invoice-list li[data-invoice="2"]').addClass('completed-invoice overpaid').removeClass('outstanding');
          $('ul.invoice-list li[data-invoice="2"] .cta-row figure').removeClass('invoice-chart-one').addClass('invoice-chart-two');
          $('ul.invoice-list li[data-invoice="2"] .pay-invoice').hide();
          $('ul.invoice-list li[data-invoice="2"] .pay-account').show();
          $('ul.invoice-list li[data-invoice="2"] .amount-due .chart-text.top').text('Overpaid');
          $('ul.invoice-list li[data-invoice="2"] .invoice-status').addClass('hide');
          $('ul.invoice-list li[data-invoice="2"] .invoice-status[data-tag="2"]').removeClass('hide');

          $('ul.invoice-list li[data-invoice="2"] .amount-due .finance-chart').removeClass('invoice-chart-two').addClass('invoice-chart-five');

          $('ul.invoice-list li[data-invoice="2"] .amount-due .chart-text.amount strong').text('£640');
     }, 7500);
}

//////////////////// CREDIT AMOUNT - END ////////////////////

//////////////////// WRITE OFF - START ////////////////////
$("#write-off-button").on("click", function (e) {

     $.cookie("write-off-completed", true, {path:'/'});

     // Cookies for side bar
     $.cookie("write-off-amount", $("#write-off-amount").val(), {path:'/'});
     $.cookie("write-off-date", $("#write-off-date").val(), {path:'/'});
     $.cookie("write-off-number", $("#write-off-number").val(), {path:'/'});
     /* textarea */ $.cookie("write-off-comments", $(".write-off-comments .jqte_editor").html(), {path:'/'});

});

if ($.cookie("write-off-completed") == 'true') {

     // Populates form
     $('#write-off-amount').val($.cookie("write-off-amount"));
     $('#write-off-date').val($.cookie("write-off-date"));
     $('#write-off-number').val($.cookie("write-off-number"));
     $('.write-off-comments .jqte_editor').val($.cookie("write-off-comments"));

     // Adds pending class
     $('ul.invoice-list li[data-invoice="1"]').addClass('pending').removeClass('alert');
     $('ul.invoice-list li[data-invoice="1"] .invoice-status').addClass('hide');
     $('ul.invoice-list li[data-invoice="1"] .invoice-status[data-tag="3"]').removeClass('hide');

     setTimeout(function() {
          // Removes pending class
          $('ul.invoice-list li[data-invoice="1"]').removeClass('pending');
          $('ul.invoice-list li[data-invoice="1"] .invoice-status[data-tag="3"]').addClass('hide');

          // Populates the invoice list
          $('.write-off-amount-answer').html($.cookie("write-off-amount"));
          $('.write-off-date-answer').text($.cookie("write-off-date"));
          $('.write-off-number-answer').text($.cookie("write-off-number"));
          $('.write-off-comments-answer').text($.cookie("write-off-comments"));

          // Changes the invoice list
          $('ul.invoice-list li[data-invoice="1"]').addClass('alert');
          $('ul.invoice-list li[data-invoice="1"] .pay-invoice').hide();
          $('ul.invoice-list li[data-invoice="1"] .amount-due .chart-text.top').text('written off');
          $('ul.invoice-list li[data-invoice="1"] .invoice-status[data-tag="1"]').addClass('hide');
          $('ul.invoice-list li[data-invoice="1"] .invoice-status[data-tag="2"]').removeClass('hide');

          $('ul.invoice-list li[data-invoice="1"] .invoice-content-section .place-holder-text').hide();
          $('ul.invoice-list li[data-invoice="1"] .invoice-content-section .write-off-details').show();
          $('ul.invoice-list li[data-invoice="1"] .invoice-content-section .invoice-details').hide();

          $('ul.invoice-list li[data-invoice="1"] .cta-row figure .chart-text.amount').html(`
               Amount paid<br><strong>£0</strong>
          `);
     }, 7500);

}
//////////////////// WRITE OFF - END ////////////////////

if ($.cookie("write-off-completed") == 'true' && $.cookie("credit-amount-completed") == 'true') {

     // Changes the status of the li
     $('ul.invoice-list li[data-invoice="2"]').addClass('completed-invoice').removeClass('outstanding pending');
     $('ul.invoice-list li[data-invoice="2"] .cta-row figure').removeClass('invoice-chart-one').addClass('invoice-chart-two');
     $('ul.invoice-list li[data-invoice="2"] .pay-invoice').hide();
     $('ul.invoice-list li[data-invoice="2"] .amount-due .chart-text.top').text('Paid in full');
     $('ul.invoice-list li[data-invoice="2"] .invoice-status').addClass('hide');
     $('ul.invoice-list li[data-invoice="2"] .invoice-status[data-tag="2"]').removeClass('hide');

     // Populates the invoice list
     $('.credit-amount-answer').text($.cookie("credit-amount"));
     $('.credit-date-by-answer').text($.cookie("credit-date-by"));
     $('.credit-sent-date-answer').text($.cookie("credit-sent-date"));
     $('.credit-cc-number-answer').text($.cookie("credit-cc-number"));
     $('.credit-payment-method-answer').text($.cookie("credit-payment-method"));
     $('.credit-memo-answer').text($.cookie("credit-memo"));
     $('.credit-comments-answer').text($.cookie("credit-comments"));
}

//////////////////// CREDIT ACCOUNT - START ////////////////////
$("#credit-account-button").click(function() {

     $.cookie("credit-account-completed", true, {path:'/'});

     // Cookies for side bar
     $.cookie("credit-account-amount", $("#credit-account-amount").val(), {path:'/'});
     $.cookie("credit-account-payment-method", $("input[name='credit-account-payment-method']").val(), {path:'/'});
     /* textarea */ $.cookie("credit-account-comments", $(".credit-account-comments .jqte_editor").html(), {path:'/'});

});

if ($.cookie("credit-account-completed") == 'true') {

     $('.finance-intro .account-credit').removeClass('zero');

     // Populates the account section
     $('.finance-intro .account-amount-answer').text($.cookie("credit-account-amount"));

}

$(document).ready(function() {
     if ($.cookie("credit-account-completed") == 'true' && $('.account-amount-answer').text('0')) {
          $('.finance-intro .account-credit').addClass('zero');
     }
});

setTimeout(function() {
     $.cookie("credit-account-completed", false, {path:'/'});
}, 5000);
//////////////////// CREDIT ACCOUNT - END ////////////////////

//////////////////// REMOVE ACCOUNT CREDIT - START ////////////////////
$("#remove-account-button").click(function() {

     $.cookie("remove-account-completed", true, {path:'/'});

     // Cookies for side bar
     $.cookie("remove-account-amount", $("#remove-account-amount").val(), {path:'/'});
     /* textarea */ $.cookie("remove-account-comments", $(".remove-account-comments .jqte_editor").html(), {path:'/'});

});

if ($.cookie("remove-account-completed") == 'true') {

     var accountCredit = parseInt($('.finance-intro .account-amount-answer').text());

     // Populates the account section
     $('.finance-intro .account-amount-answer').text(accountCredit - $.cookie("remove-account-amount"));

}

setTimeout(function() {
     $.cookie("remove-account-completed", false, {path:'/'});
}, 5000);
//////////////////// REMOVE ACCOUNT CREDIT - END ////////////////////

//////////////////// CREDIT OVERPAYMENT ACCOUNT - START ////////////////////
// $('#confirm-overpayment-account').click(function() {
//      $.cookie("confirm-overpayment-account", true, {path:'/'});
// });
//
// if ($.cookie("confirm-overpayment-account") == 'true') {
//      // Changes the intro credit
//      var accountCredit = parseInt($('.finance-intro .account-amount-answer').text());
//      $('.finance-intro .account-amount-answer').text(accountCredit + 320);
//      $('.finance-intro .account-credit').removeClass('zero');
//
//      // Changes the invoice li
//      $('ul.invoice-list li[data-invoice="2"]').removeClass('overpaid');
//      $('ul.invoice-list li[data-invoice="2"] .pay-account').hide();
//
// }
//////////////////// CREDIT OVERPAYMENT ACCOUNT - END //////////////////////

//////////////////// ADD EXEMPTION ACCOUNT - START ////////////////////
$('#client-exemption-button').click(function() {
     $.cookie("client-exemption-completed", true, {path:'/'});

     $.cookie("exemption-type", $("input[name=exemption-type]").val(), {path:'/'});
     $.cookie("exemption-date", $("#exemption-date").val(), {path:'/'});
     $.cookie("exemption-hardship-application", $("input[name=exemption-hardship]:checked").val(), {path:'/'});

});

if ($.cookie("client-exemption-completed") == 'true') {

     $('#client-exemption-info-confirm').show();

     $('.exemption-type').text($.cookie("exemption-type"));
     $('.exemption-date').text($.cookie("exemption-date"));

     $('ul.invoice-list li[data-invoice="1"] .amount-due .chart-text.top').text($.cookie("exemption-type"));

     $('ul.invoice-list li[data-invoice="1"] .invoice-status').addClass('hide');
     $('ul.invoice-list li[data-invoice="1"] .invoice-status[data-tag="4"]').removeClass('hide');

}

if ($.cookie("client-exemption-completed") == 'true' && $.cookie("exemption-type") == 'Remission') {

     $('ul.invoice-list li[data-invoice="1"] .cta-row figure').removeClass('invoice-chart-one').addClass('invoice-chart-half-discount');

}

if ($.cookie("client-exemption-completed") == 'true' && $.cookie("exemption-type") == 'Exemption') {

     $('ul.invoice-list li[data-invoice="1"] .pay-invoice').hide();
     $('ul.invoice-list li[data-invoice="1"]').addClass('completed-invoice exemption');
     $('ul.invoice-list li[data-invoice="1"] .cta-row figure').removeClass('invoice-chart-one').addClass('invoice-chart-full-discount');

     $('ul.invoice-list li[data-invoice="1"] .main-info .show-hide-link').hide();

}

//////////////////// ADD EXEMPTION ACCOUNT - END ////////////////////
