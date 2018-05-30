// =================================== Order Status - JAVASCRIPT =================================== //
// $('.closed-reason').css('display', 'none');

$("#order-status-hw, #order-status-pfa").on("change", function (e) {
     if ($(this).val() === 'Closed') {
          $('.closed-reason').slideDown().css('display', 'inline-block');
     } else {
          $('.closed-reason').slideUp().css('display', 'none');
     }
});

// PFA page
$("#order-status-pfa").on("change", function (e) {
     if ($(this).val() === 'Closed') {
          $('#order-status-button-pfa').addClass('de-activate').removeAttr('href');
     } else {
          $('#order-status-button-pfa').removeClass('de-activate').attr('href', '../4-client-page/4a-new-client.html#PFA');
     }
});

$("#order-status-pfa-closed").on("change", function (e) {
     $('#order-status-button-pfa').removeClass('de-activate').attr('href', '../4-client-page/4a-new-client.html#PFA');
});

// H&W page
$("#order-status-hw").on("change", function (e) {
     if ($(this).val() === 'Closed') {
          $('#order-status-button-hw').addClass('de-activate').removeAttr('href');
     } else {
          $('#order-status-button-hw').removeClass('de-activate').attr('href', '../4-client-page/4a-new-client.html#HandW');
     }
});

$("#order-status-hw-closed").on("change", function (e) {
     $('#order-status-button-hw').removeClass('de-activate').attr('href', '../4-client-page/4a-new-client.html#HandW');
});
