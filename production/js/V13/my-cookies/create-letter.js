// =================================== Create letter page - COOKIES =================================== //
// Create letter
$('#letter-not-started').show();
$('#letter-started').hide();

$(".letter-title").on("click", function (e) {
     $.cookie("create-letter-started", true, {path:'/'});
});

if ($.cookie("create-letter-started") == 'true') {
     $('#letter-not-started').hide();
     $('#letter-started').show();
}

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
     $.cookie("document-title", $(this).find('.doc-title').text(), {path:'/'});
});

if ($.cookie("document-title")) {
     $(".document h3").text($.cookie("document-title"));
     $(".document-title").text($.cookie("document-title"));
     $('.current-document-title').text($.cookie("document-title"));
}

$("#create-letter").on("click", function (e) {
     $.cookie("recipients", $(this).val(), {path:'/'});
});

if ($.cookie("recipients")) {
     $("#recipients").val($.cookie("recipients"));
}

// Inserts
$('#inserts-section').hide();
$('#inserts-selected').hide();

$(".inserts-journey").on("click", function (e) {
     $.cookie("inserts-needed", true, {path:'/'});
});

if ($.cookie("inserts-needed") == 'true') {
     $("#inserts-section").show();
}

$(".insert").on("click", function (e) {
     $.cookie("inserts-added", true, {path:'/'});
});

if ($.cookie("inserts-added") == 'true') {
     $("#inserts-section .place-holder-text").hide();
     $('#inserts-selected').show();
}
