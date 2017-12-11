// General cookie code
$(document).ready(function() {
     var url      = window.location.href;     // Returns full URL
     var pathname = window.location.pathname; // Returns path only
     $("#email-link").on("click", function (e) {
          $.cookie("url", url, {path:'/'});
          $.cookie("pathname", pathname, {path:'/'});
     });
});

// ==================== User journey's to populate the client tabs ==================== //
// Allocations or Supervision
$("#login-button").on("click", function (e) {
     $.cookie("user-type", $("#username").val(), {path:'/'});
     $.cookie("username", $("#username").val(), {path:'/'});
});

if ($.cookie("user-type") == "a-team") {
     $(".supervision").hide();
}

if ($.cookie("user-type") == "s-team") {
     $(".allocations").hide();
}

// Username populate
// $("#login-button").on("click", function (e) {
// });

if ($.cookie("username")) {
     $(".sirius-user-id").text($.cookie("username"));
     $("#visit-commissioned-by").val($.cookie("username"));
}

// Journey specific context
$('#client-health a').on('click', function(e) {
     $.cookie("order-journey", 'HandW', {path:'/'});
})

$('#client-property a').on('click', function(e) {
     $.cookie("order-journey", 'PFA', {path:'/'});
})

if ($.cookie("order-journey") === 'HandW') {
     $('.order-specific-journey').attr('href', '../4-client-page/4a-new-client.html#HandW');
     $('.order-specific-journey').text('H & W | 19273638');

     // Correspondence Page
     $('#confirm-print-send').attr('href', '../4-client-page/4a-new-client.html#HandW')
}

if ($.cookie("order-journey") === 'PFA') {
     $('.order-specific-journey').attr('href', '../4-client-page/4a-new-client.html#property');
     $('.order-specific-journey').text('PFA | 14820940');

     // Correspondence Page
     $('#confirm-print-send').attr('href', '../4-client-page/4a-new-client.html#property')
}

// Confirmation panels

// Letter sent
$('.finished-letter').on('click', function(e) {
     e.preventDefault();
     $.cookie("close-confirm-panels", true, {path:'/'});

     $(this).closest('.confirmation-panel').slideUp();
})

if ($.cookie("close-confirm-panels") === 'true') {
     $('#correspondence-sent').hide();
}
