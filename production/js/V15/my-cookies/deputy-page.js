// =================================== Deputy page - COOKIES =================================== //
// Populates header
$(".summary-deputy-name").on("click", function (e) {
     $.cookie("summary-deputy-name", $("#deputy-name").val(), {path:'/'});
});

if ($.cookie("summary-deputy-name")) {
     $(".summary-deputy-name").text($.cookie("summary-deputy-name"));
}

// Changes header when deputy is dead
$('.deceased').hide();
$('#section-header .deputy-status').css('display', 'inline-block');

if ($.cookie("deputy-death") == 'true') {
     $('#section-header').addClass('deceased-message');
     $('#section-header .deputy-status').css('display', 'none !important');
     $('#section-header .deceased').show();
     $('#section-header .type').hide();
     $('.deputy-status-deceased').text('Deceased');
     $('.deputy-details-page .deputy-death-button').hide();
     $('.deputy-details-page .actions-nav .seperator').hide();
}
