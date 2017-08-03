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

// Full width
// $('.minimise').on('click', function() {
//     $(this).toggle();
// });
$('.minimise').on('click', function(e) {
     $.cookie("full-width", true, {path:'/'});
})

$('.minimise').on('click', function(e) {
     $.cookie("full-width-close", true, {path:'/'});
})

if ($.cookie("full-width") === 'true') {
     // alert('working');
     $('.minimise').addClass('open');
     $('.minimise').parent().parent().addClass('shrink');
     $('.minimise').parent().parent().parent().find('main').addClass('full-width');
     $('nav').find('.create-client, .user-cta').hide();
     $('nav').find('.sign-out').html('<span class="nav-icon"></span>');
     $('nav').find('.logo').html('');
     $('.minimise').parent().parent().parent().find('.row').addClass('full-width-row');
     $('nav.client-nav').addClass('full-width');
}
// if ($.cookie("full-width-close") === 'true') {
//      $('.minimise').removeClass('open');
//      $('.minimise').parent().parent().removeClass('shrink');
//      $('.minimise').parent().parent().parent().find('main').removeClass('full-width');
//      $('nav').find('.create-client, .user-cta').show();
//      $('nav').find('.logo').html('<img src="../../../production/img/V9/sirius-logo.svg" alt="Sirius">');
//      $('.minimise').parent().parent().parent().find('.row').removeClass('full-width-row');
// }
