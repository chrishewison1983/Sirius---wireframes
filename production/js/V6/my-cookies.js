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
$('.deputies').hide();

// Create letter
$("#add-letter").on("click", function (e) {
     $.cookie("user-journey", 4, {path:'/'});
});

if ($.cookie("user-journey") == 4) {
     $("#tab-4.client-details").addClass('current');
     $("#tab-1.client-details, #tab-2.client-details, #tab-3.client-details, #tab-5.client-details").removeClass('current');
     $('.client-details .tab-link[data-tab="tab-4"]').addClass('current');
     $('.client-details .tab-link[data-tab="tab-1"], .client-details .tab-link[data-tab="tab-2"], .client-details .tab-link[data-tab="tab-3"], .client-details .tab-link[data-tab="tab-5"]').removeClass('current');
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
$("#login-button").on("click", function (e) {
     $.cookie("username", $("#username").val(), {path:'/'});
});

if ($.cookie("username")) {
     $(".sirius-user-id").text($.cookie("username"));
}

// Create client populate
$("#create-client").on("click", function (e) {
     $.cookie("client-title", $("#client-title").val(), {path:'/'});
     $.cookie("client-first-name", $("#client-first-name").val(), {path:'/'});
     $.cookie("client-last-name", $("#client-last-name").val(), {path:'/'});
     $.cookie("client-title", $("#client-phone-number").val(), {path:'/'});
     $.cookie("client-dob-day", $("#client-dob-day").val(), {path:'/'});
     $.cookie("client-dob-month", $("#client-dob-month").val(), {path:'/'});
     $.cookie("client-dob-year", $("#client-dob-year").val(), {path:'/'});
     $.cookie("client-telephone", $("#client-title").val(), {path:'/'});
     $.cookie("client-email", $("#client-email").val(), {path:'/'});
     $.cookie("client-medical-condition", $("#client-medical-condition").val(), {path:'/'});
     $.cookie("client-address", $("input[name=radio-inline-group-1]:checked").parent().text(), {path:'/'});
     $.cookie("client-violent-risk", $("#client-violent-risk").is(':checked'), {path:'/'});
     $.cookie("client-correspondence-welsh", $("#client-correspondence-welsh").is(':checked'), {path:'/'});
});

if ($.cookie("client-title")) {
     $(".client-title").text($.cookie("client-title"));
}
if ($.cookie("client-first-name")) {
     $(".client-first-name").text($.cookie("client-first-name"));
}
if ($.cookie("client-last-name")) {
     $(".client-last-name").text($.cookie("client-last-name"));
}
if ($.cookie("client-title")) {
     $(".client-title").text($.cookie("client-title"));
}
if ($.cookie("client-dob-day")) {
     $(".client-dob-day").text($.cookie("client-dob-day"));
}
if ($.cookie("client-dob-month")) {
     $(".client-dob-month").text($.cookie("client-dob-month"));
}
if ($.cookie("client-dob-year")) {
     $(".client-dob-year").text($.cookie("client-dob-year"));
}
if ($.cookie("client-email")) {
     $(".client-email").text($.cookie("client-email"));
}
if ($.cookie("client-telephone")) {
     $(".client-telephone").text($.cookie("client-telephone"));
}
if ($.cookie("client-medical-condition")) {
     $(".client-medical-condition").text($.cookie("client-medical-condition"));
}
if ($.cookie("client-address")) {
     $(".client-address").text($.cookie("client-address"));
}
if ($.cookie("client-violent-risk") == 'true') {
     $(".new-client #section-header").find("h1").addClass("violent-risk-message");
     $(".new-client #section-header").find(".colour-wrapper").addClass("violent-risk-message");
}
if ($.cookie("client-correspondence-welsh") == 'true') {
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
$("#add-deputy").on("click", function (e) {
     $.cookie("user-journey", 5, {path:'/'});
});

if ($.cookie("user-journey") == 5) {
     $("#tab-5.client-details").addClass('current');
     $("#tab-1.client-details, #tab-2.client-details, #tab-3.client-details, #tab-4.client-details").removeClass('current');
     $('.client-details .tab-link[data-tab="tab-5"]').addClass('current');
     $('.client-details .tab-link[data-tab="tab-1"], .client-details .tab-link[data-tab="tab-2"], .client-details .tab-link[data-tab="tab-3"], .client-details .tab-link[data-tab="tab-4"]').removeClass('current');
     $('#list-of-deputies .no-items').hide();
     $('.deputies').show();

     $("#list-of-deputies #deputy-confirmation").show();

     // This hides the confirmation box after 5 seconds
     setTimeout(function() {
          $("#list-of-deputies #deputy-confirmation").hide(500)
     }, 5000);
}

// Commission visit
$("#add-visitors-step-6").on("click", function (e) {
     $.cookie("user-journey", 2, {path:'/'});
});

$("#list-of-tasks #visit-commission").hide();

if ($.cookie("user-journey") == 2) {
     $("#tab-2.client-details").addClass('current');
     $("#tab-1.client-details, #tab-3.client-details, #tab-4.client-details, #tab-5.client-details").removeClass('current');
     $('.client-details .tab-link[data-tab="tab-2"]').addClass('current');
     $('.client-details .tab-link[data-tab="tab-1"], .client-details .tab-link[data-tab="tab-3"], .client-details .tab-link[data-tab="tab-4"], .client-details .tab-link[data-tab="tab-5"]').removeClass('current');
     $('#list-of-tasks .no-items').hide();

     $("#list-of-tasks #visit-commission").show();
     $("#list-of-tasks #visit-confirmation").show();

     // This hides the confirmation box after 5 seconds
     setTimeout(function() {
          $("#list-of-tasks #visit-confirmation").hide(500)
     }, 5000);

}

$("#add-visitors-step-1").on("click", function (e) {
     $.cookie("type-of-visit", $("#third-why").val(), {path:'/'});
});

$("#add-visitors-step-3").on("click", function (e) {
     $.cookie("visit-due-back-date", $("#datepicker").val(), {path:'/'});
});

if ($.cookie("type-of-visit")) {
     $(".type-of-visit").text($.cookie("type-of-visit"));
}

if ($.cookie("visit-due-back-date")) {
     $(".visit-due-back-date").text($.cookie("visit-due-back-date"));
}

// Commission visit - client page
