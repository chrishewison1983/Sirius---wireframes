// =================================== Edit deputy - COOKIES =================================== //
// Unlink deputy code
$('.action.unlink').hide();

if ($.cookie("deputy-status") == 'Error') {
     // Shows the CTA
     $('.main-cta.unlink').show();

     // Highlights the deputy tabs
     $('ul.tabs li[data-tab="health-tab-4"]').addClass('current');
     $('#health-tab-4').addClass('current');
     $('ul.tabs li[data-tab="health-tab-1"], ul.tabs li[data-tab="health-tab-2"], ul.tabs li[data-tab="health-tab-3"], ul.tabs li[data-tab="health-tab-5"], ul.tabs li[data-tab="health-tab-6"], ul.tabs li[data-tab="health-tab-7"]').removeClass('current');
     $('#health-tab-1, #health-tab-2, #health-tab-3, #health-tab-5, #health-tab-6, #health-tab-7').removeClass('current');

     // Adds class to table row
     $('#deputies-table tr[data-value="2"]').addClass('error-row');

     // Changes table content
     $('.deputy-status-error').text('Error');
} else {
     // Hides the CTA
     $('.main-cta.unlink').hide();

     // Highlights the deputy tabs
     $('ul.tabs li[data-tab="health-tab-1"]').addClass('current');
     $('ul.tabs li[data-tab="health-tab-2"], ul.tabs li[data-tab="health-tab-3"], ul.tabs li[data-tab="health-tab-4"], ul.tabs li[data-tab="health-tab-5"], ul.tabs li[data-tab="health-tab-6"], ul.tabs li[data-tab="health-tab-7"]').removeClass('current');
     $('#health-tab-1').addClass('current');
     $('#health-tab-2, #health-tab-3, #health-tab-4, #health-tab-5, #health-tab-6, #health-tab-7').removeClass('current');

     // Removes class to table row
     $('#deputies-table tr[data-value="2"]').removeClass('error-row');

     // Changes table content
     $('.deputy-status-error').text('Active');
}

// White deputy is being edited
$(".edit-lay-deputy").on("click", function (e) {
     $.cookie("edit-deputy-journey", 'lay', {path:'/'});
}

$(".edit-pro-deputy").on("click", function (e) {
     $.cookie("edit-deputy-journey", 'pro', {path:'/'});
}

$(".edit-public-deputy").on("click", function (e) {
     $.cookie("edit-deputy-journey", 'public', {path:'/'});
}

// Activate the confirm button
