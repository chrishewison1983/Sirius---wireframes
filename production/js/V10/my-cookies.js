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

// Create letter
$("#add-letter, #save-and-exit").on("click", function (e) {
     $.cookie("user-journey", 6, {path:'/'});
});

if ($.cookie("user-journey") == 6) {
     $("#tab-6.client-details").addClass('current');
     $("#tab-1.client-details, #tab-2.client-details, #tab-3.client-details, #tab-4.client-details, #tab-5.client-details").removeClass('current');
     $('.client-details .tab-link[data-tab="tab-6"]').addClass('current');
     $('.client-details .tab-link[data-tab="tab-1"], .client-details .tab-link[data-tab="tab-2"], .client-details .tab-link[data-tab="tab-3"], .client-details .tab-link[data-tab="tab-4"], .client-details .tab-link[data-tab="tab-5"]').removeClass('current');
     $('#list-of-documents .no-items').hide();
     $('#document-confirmation').slideDown('slow');
}

$(".document-item").on("click", function (e) {
     $.cookie("document-title", $(this).text(), {path:'/'});
});

if ($.cookie("document-title")) {
     $(".document h3").text($.cookie("document-title"));
     $(".document-title").text($.cookie("document-title"));
}

$("#create-letter").on("click", function (e) {
     $.cookie("recipients", $(this).val(), {path:'/'});
});

if ($.cookie("recipients")) {
     $("#recipients").val($.cookie("recipients"));
}

// Username populate
// $("#login-button").on("click", function (e) {
// });

if ($.cookie("username")) {
     $(".sirius-user-id").text($.cookie("username"));
     $("#visit-commissioned-by").val($.cookie("username"));
}

// Create & Edit client populate
$("#create-client, #edit-client").on("click", function (e) {
     $.cookie("client-status", $("input[name=client-status]:checked").val(), {path:'/'});
     $.cookie("client-status-day", $("#client-status-day").val(), {path:'/'});
     $.cookie("client-status-month", $("#client-status-month").val(), {path:'/'});
     $.cookie("client-status-year", $("#client-status-year").val(), {path:'/'});
     $.cookie("client-title", $("#client-title").val(), {path:'/'});
     $.cookie("client-first-name", $("#client-first-name").val(), {path:'/'});
     $.cookie("client-middle-name", $("#client-middle-name").val(), {path:'/'});
     $.cookie("client-last-name", $("#client-last-name").val(), {path:'/'});
     $.cookie("client-dob-day", $("#client-dob-day").val(), {path:'/'});
     $.cookie("client-dob-month", $("#client-dob-month").val(), {path:'/'});
     $.cookie("client-dob-year", $("#client-dob-year").val(), {path:'/'});
     $.cookie("client-previous-name", $("#client-previous-name").val(), {path:'/'});
     $.cookie("client-country", $("#client-country").val(), {path:'/'});
     $.cookie("client-postcode", $("#client-postcode").val(), {path:'/'});
     $.cookie("client-address", $("input[name=client-address]:checked").val(), {path:'/'});
     $.cookie("client-address-line-1", $("#client-address-line-1").val(), {path:'/'});
     $.cookie("client-address-line-2", $("#client-address-line-2").val(), {path:'/'});
     $.cookie("client-address-line-3", $("#client-address-line-3").val(), {path:'/'});
     $.cookie("client-address-town", $("#client-address-town").val(), {path:'/'});
     $.cookie("client-manual-postcode", $("#client-manual-postcode").val(), {path:'/'});

     $.cookie("client-airmail", $("input[name=client-airmail]:checked").val(), {path:'/'});
     $.cookie("client-phone-number", $("#client-phone-number").val(), {path:'/'});
     $.cookie("client-mob-number", $("#client-mob-number").val(), {path:'/'});
     $.cookie("client-email", $("#client-email").val(), {path:'/'});
     $.cookie("client-financial", $("#client-financial").val(), {path:'/'});
     $.cookie("client-casarec", $("#client-casarec").val(), {path:'/'});
     $.cookie("client-accommodation", $("#client-accommodation").val(), {path:'/'});
     /* textarea */ $.cookie("client-medical-condition", $(".client-medical-condition .jqte_editor").html(), {path:'/'});
     $.cookie("client-marital-status", $("#client-marital-status").val(), {path:'/'});
     $.cookie("client-correspondence-post", $("#client-correspondence-post:checked").val(), {path:'/'});
     $.cookie("client-correspondence-phone", $("#client-correspondence-phone:checked").val(), {path:'/'});
     $.cookie("client-correspondence-email", $("#client-correspondence-email:checked").val(), {path:'/'});
     $.cookie("client-correspondence-welsh", $("#client-correspondence-welsh:checked").val(), {path:'/'});
     $.cookie("client-violent-risk", $("#client-violent-risk").is(':checked'), {path:'/'});
});

$("#edit-client").on("click", function (e) {
     $.cookie("edit-client", true, {path:'/'});
});

if ($.cookie("edit-client")) {
     setTimeout(function() {
          $("#edit-client-confirm").hide(500)
     }, 5000);
}


if ($.cookie("client-status")) { $(".client-status").text($.cookie("client-status")); }
if ($.cookie("client-status") == 'Active') {
     $('#client-status-active').parent().addClass('checked');
     $('#client-status-deceased, #client-status-202').parent().removeClass('checked');
}
if ($.cookie("client-status") == 'Deceased') {
     $('#client-status-deceased').parent().addClass('checked');
     $('#client-status-active, #client-status-202').parent().removeClass('checked');
}
if ($.cookie("client-status") == 'Rule 202') {
     $('#client-status-202').parent().addClass('checked');
     $('#client-status-active, #client-status-deceased').parent().removeClass('checked');
}

if ($.cookie("client-status-day")) {
     $(".client-status-day").text($.cookie("client-status-day"));
     $(".edit-client-form #client-status-day").val($.cookie("client-status-day"));
}
if ($.cookie("client-status-month")) {
     $(".client-status-month").text($.cookie("client-status-month"));
     $(".edit-client-form #client-status-month").val($.cookie("client-status-month"));
}
if ($.cookie("client-status-year")) {
     $(".client-status-year").text($.cookie("client-status-year"));
     $(".edit-client-form #client-status-year").val($.cookie("client-status-year"));
}
if ($.cookie("client-title")) {
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
if ($.cookie("client-previous-name")) {
     $(".client-previously-known-as").text($.cookie("client-previous-name"));
     $(".edit-client-form #client-previous-name").val($.cookie("client-previous-name"));
}
if ($.cookie("client-country")) {
     $(".client-country").text($.cookie("client-country"));
     $(".edit-client-form #client-country").val($.cookie("client-country"));
}
if ($.cookie("client-postcode")) {
     $(".client-postcode").text($.cookie("client-postcode"));
     $(".edit-client-form #client-postcode").val($.cookie("client-postcode"));
}
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
if ($.cookie("client-manual-postcode")) {
     $(".client-manual-postcode").text($.cookie("client-manual-postcode"));
     $(".edit-client-form #client-manual-postcode").val($.cookie("client-manual-postcode"));
}
if ($.cookie("client-airmail")) { $(".client-airmail").text($.cookie("client-airmail")); }
if ($.cookie("client-airmail") == 'Yes' ) {
     $("#client-airmail-yes").parent().addClass('checked');
     $("#client-airmail-no").parent().removeClass('checked');
}
if ($.cookie("client-airmail") == 'No' ) {
     $("#client-airmail-yes").parent().removeClass('checked');
     $("#client-airmail-no").parent().addClass('checked');
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
if ($.cookie("client-financial")) {
     $(".client-financial").text($.cookie("client-financial"));
     $(".edit-client-form #client-financial").val($.cookie("client-financial"));
}
if ($.cookie("client-casarec")) {
     $(".client-casarec").text($.cookie("client-casarec"));
     $(".edit-client-form #client-casarec").val($.cookie("client-casarec"));
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
if ($.cookie("client-correspondence-post")) {
     $(".client-correspondence-post").text($.cookie("client-correspondence-post"));
}
if ($.cookie("client-correspondence-post") == 'Post') {
     $("#client-correspondence-post").parent().addClass('checked');
} else {
     $("#client-correspondence-post").parent().removeClass('checked');
}

if ($.cookie("client-correspondence-phone")) {
     $(".client-correspondence-phone").text($.cookie("client-correspondence-phone"));
}
if ($.cookie("client-correspondence-phone") == 'Phone') {
     $("#client-correspondence-phone").parent().addClass('checked');
} else {
     $("#client-correspondence-phone").parent().removeClass('checked');
}

if ($.cookie("client-correspondence-email")) {
     $(".client-correspondence-email").text($.cookie("client-correspondence-email"));
}
if ($.cookie("client-correspondence-email") == 'Email') {
     $("#client-correspondence-email").parent().addClass('checked');
} else {
     $("#client-correspondence-email").parent().removeClass('checked');
}

if ($.cookie("client-correspondence-welsh")) {
     $(".client-correspondence-welsh").text($.cookie("client-correspondence-welsh"));
}
if ($.cookie("client-correspondence-welsh") == 'Welsh') {
     $("#client-correspondence-welsh").parent().addClass('checked');
} else {
     $("#client-correspondence-welsh").parent().removeClass('checked');
}

if ($.cookie("client-violent-risk") == 'true') {
     $("#client-violent-risk").parent().addClass('checked');
     $('.client-violent-risk').html('Yes');
} else {
     $("#client-violent-risk").parent().removeClass('checked');
     $('.client-violent-risk').html('No');
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

// Add deputy populate
$("#add-new-deputy, #add-another-deputy, .check-edit").on("click", function (e) {
     $.cookie("deputy-first-name", $("#deputy-first-name").val(), {path:'/'});
     $.cookie("deputy-last-name", $("#deputy-last-name").val(), {path:'/'});
});

if ($.cookie("deputy-first-name")) {
     $("#deputy-first-name").val($.cookie("deputy-first-name"));
     $(".deputy-first-name").text($.cookie("deputy-first-name"));
}
if ($.cookie("deputy-last-name")) {
     $("#deputy-last-name").val($.cookie("deputy-last-name"));
     $(".deputy-last-name").text($.cookie("deputy-last-name"));
}

// $('.remove-deputy').click(function(){
//      $.cookie("remove-case-number", $("h2").text(), {path:'/'});
// });

// Add/edit deputies
$('.deputies-list').hide();

$("#add-deputy").on("click", function (e) {
     $.cookie("user-journey", 2, {path:'/'});
});

if ($.cookie("user-journey") == 2) {
     $("#tab-2.client-details").addClass('current');
     $("#tab-1.client-details, #tab-3.client-details, #tab-4.client-details, #tab-5.client-details, #tab-6.client-details").removeClass('current');
     $('.client-details .tab-link[data-tab="tab-2"]').addClass('current');
     $('.client-details .tab-link[data-tab="tab-1"], .client-details .tab-link[data-tab="tab-3"], .client-details .tab-link[data-tab="tab-4"], .client-details .tab-link[data-tab="tab-5"], .client-details .tab-link[data-tab="tab-6"]').removeClass('current');
     $('#list-of-deputies .no-items').hide();
     $('.deputies-list').show();

     $("#list-of-deputies #deputy-confirmation").show();

     // This hides the confirmation box after 5 seconds
     setTimeout(function() {
          $("#list-of-deputies #deputy-confirmation").hide(500)
     }, 5000);
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
