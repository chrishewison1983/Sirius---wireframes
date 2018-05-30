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
     $('.order-specific-journey').attr('href', '../4-client-page/4a-new-client.html#PFA');
     $('.order-specific-journey').text('PFA | 14820940');

     // Correspondence Page
     $('#confirm-print-send').attr('href', '../4-client-page/4a-new-client.html#PFA')
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

// Cookies for the side panels
$(document).on('click', 'a.close-side-panel', function () {
     $.cookie("side-panel-hidden", true, {path:'/'});
});

$(document).on('click', 'a.show-side-panel', function () {
     $.cookie("side-panel-hidden", false, {path:'/'});
});

var sidePanelInit = false;

if ($.cookie("side-panel-hidden") === 'true') {
     $(".side-panel-parent").hide();
     $('#action-panel').removeClass('large-uncentered').addClass('large-centered, center-align');
     $("main").prepend('<a class="show-side-panel"></a>');
} else {
     $(".side-panel-parent").show();
     $('#action-panel').addClass('large-uncentered').removeClass('large-centered, center-align');
     $("main .show-side-panel").hide();

     if (!sidePanelInit) {
          $("#side-panel").pin({
                containerSelector: ".columns"
          });
          sidePanelInit = true;
     }
}
