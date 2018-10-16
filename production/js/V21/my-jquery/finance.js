// =================================== Finance - JAVASCRIPT =================================== //
// $('.beta-finance').hide();
//
// $('input[name="finance-type"]').click(function() {
//      if ($(this).val() == 'Alpha') {
//           $('.alpha-finance').show();
//           $('.beta-finance').hide();
//      } else if ($(this).val() == 'Beta') {
//           $('.alpha-finance').show();
//           $('.beta-finance').hide();
//      }
// });

// Controls the invoice links
$('.invoice-content-link').click( function(e){
     e.preventDefault();
     var linkNumber = $(this).data('link');

     var items = $(this).siblings('.invoice-content-link');
     items.each(function() {
          $(this).text($(this).data('closed-text')).removeClass('close');
     });

     $(this).text($(this).text() == $(this).data('closed-text') ? $(this).data('open-text') : $(this).data('closed-text')).toggleClass('close');

     $(this).parent().siblings(`.invoice-content-section`).removeClass('open');

     if ($(this).hasClass('close')) {
          $(this).parent().siblings(`.invoice-content-section[data-link="${linkNumber}"]`).toggleClass('open');
     }
});


//////////////////// CREDIT AMOUNT - START ////////////////////
$("input[name='credit-payment-method']").click(function() {
     if (!this.value) {
          $('#credit-amount-button').addClass('de-activate').removeAttr('href');
     } else {
          $('#credit-amount-button').removeClass('de-activate').attr('href', '../4-client-hub/4a-new-client.html');
     }
});

// $("#credit-cc-number").keyup(function() {
//      if (!this.value) {
//           $('#credit-amount-button').addClass('de-activate').removeAttr('href');
//      } else {
//           $('#credit-amount-button').removeClass('de-activate').attr('href', '../4-client-hub/4a-new-client.html');
//      }
// });
//////////////////// CREDIT AMOUNT - END ////////////////////

//////////////////// WRITE OFF - START ////////////////////
$("#write-off-number").keyup(function() {
     if (!this.value) {
          $('#write-off-button').addClass('de-activate').removeAttr('href');
     } else {
          $('#write-off-button').removeClass('de-activate').attr('href', '../4-client-hub/4a-new-client.html');
     }
});
//////////////////// WRITE OFF - END ////////////////////

//////////////////// CREDIT ACCOUNT - START ////////////////////
$("input[name='credit-account-payment-method']").click(function() {
     if (!this.value) {
          $('#credit-account-button').addClass('de-activate').removeAttr('href');
     } else {
          $('#credit-account-button').removeClass('de-activate').attr('href', '../4-client-hub/4a-new-client.html');
     }
});
//////////////////// CREDIT ACCOUNT - END ////////////////////

//////////////////// REMOVE ACCOUNT CREDIT - START ////////////////////
$(".remove-account-comments").click(function() {
     $('#remove-account-button').removeClass('de-activate').attr('href', '../4-client-hub/4a-new-client.html');
});
//////////////////// REMOVE ACCOUNT CREDIT - END ////////////////////

//////////////////// CREDIT OVERPAYMENT ACCOUNT - START ////////////////////
$('#confirm-overpayment-account').click(function() {

     // Changes the intro credit
     var accountCredit = parseInt($('.finance-intro .account-amount-answer').text());
     $('.finance-intro .account-amount-answer').text(accountCredit + 320);
     $('.finance-intro .account-credit').removeClass('zero');

     // Changes the invoice li
     $('ul.invoice-list li[data-invoice="2"]').removeClass('overpaid').addClass('overpayment-complete');
     $('ul.invoice-list li[data-invoice="2"] .pay-account').hide();
     $('ul.invoice-list li[data-invoice="2"] .amount-due .chart-text.top').text('Paid in full');
     $('ul.invoice-list li[data-invoice="2"] .amount-due .chart-text.amount strong').text('£320');
     $('ul.invoice-list li[data-invoice="2"] .finance-chart.invoice-chart-five figcaption:after').text('£0');

});
//////////////////// CREDIT OVERPAYMENT ACCOUNT - END //////////////////////

//////////////////// CREDIT OVERPAYMENT ACCOUNT - START ////////////////////
$('#exemption-date').click(function() {

     $('#client-exemption-button').removeClass('de-activate').attr('href', '../4-client-hub/4a-new-client.html');

});
//////////////////// CREDIT OVERPAYMENT ACCOUNT - END //////////////////////
