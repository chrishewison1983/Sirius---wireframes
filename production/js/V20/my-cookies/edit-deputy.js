// =================================== Edit deputy - COOKIES =================================== //
// Which deputy are we editing?
$(".edit-deputy-1-journey").on("click", function (e) {
     $.cookie("edit-deputy-1-journey", true, {path:'/'});
     $.cookie("edit-deputy-2-journey", false, {path:'/'});
     $.cookie("edit-deputy-3-journey", false, {path:'/'});
});

$(".edit-deputy-2-journey").on("click", function (e) {
     $.cookie("edit-deputy-1-journey", false, {path:'/'});
     $.cookie("edit-deputy-2-journey", true, {path:'/'});
     $.cookie("edit-deputy-3-journey", false, {path:'/'});
});

$(".edit-deputy-3-journey").on("click", function (e) {
     $.cookie("edit-deputy-1-journey", false, {path:'/'});
     $.cookie("edit-deputy-2-journey", false, {path:'/'});
     $.cookie("edit-deputy-3-journey", true, {path:'/'});
});

if ($.cookie("edit-deputy-1-journey") == 'true' || $.cookie("edit-deputy-2-journey") == 'true') {
     $('#add-deputy-step-3').attr('href', '../4-client-page/4a-new-client.html#HandW');
     $('#reset-deputy').attr('href', '../4-client-page/4a-new-client.html#HandW');

     $('ul.client-details.tabs li').removeClass('current');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"]').addClass('current');
}

if ($.cookie("edit-deputy-3-journey") == 'true') {
     $('#add-deputy-step-3').attr('href', '../4-client-page/4a-new-client.html#PFA');
     $('#reset-deputy').attr('href', '../4-client-page/4a-new-client.html#PFA');

     $('ul.client-details.tabs li').removeClass('current');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"]').addClass('current');
}



$("#confirm-unlink").on("click", function (e) {
     $.cookie("unlink-deputy", true, {path:'/'});
});

$('.tertiary.unlink').hide();

if ($.cookie("unlink-deputy") == 'true' && $.cookie("edit-deputy-1-journey") == 'true') {
     // Highlights the deputy tabs
     $('ul.client-details.tabs li').removeClass('current');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"]').addClass('current');
     $('#summary-tab-7').addClass('current');
     $('#summary-tab-1, #summary-tab-2, #summary-tab-3, #summary-tab-4, #summary-tab-5, #summary-tab-6').removeClass('current');

     // Adds class to table row
     $('#deputies-table tr[data-value="1"]').hide();
} else if ($.cookie("deputy-status") == 'Error' && $.cookie("edit-deputy-1-journey") == 'true' ) {
     // Highlights the deputy tabs
     $('ul.client-details.tabs li').removeClass('current');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"]').addClass('current');
     $('#summary-tab-7').addClass('current');
     $('#summary-tab-1, #summary-tab-2, #summary-tab-3, #summary-tab-4, #summary-tab-5, #summary-tab-6').removeClass('current');

     // Adds class to table row
     $('#deputies-table tr[data-value="1"]').addClass('error-row');
     $('#deputies-table tr[data-value="1"] .tertiary.unlink').show();
     $('#deputies-table tr[data-value="1"] .deputy-status-error').text('Error');
}

else if ($.cookie("unlink-deputy") == 'true' && $.cookie("edit-deputy-2-journey") == 'true') {
     // Highlights the deputy tabs
     $('ul.client-details.tabs li').removeClass('current');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"]').addClass('current');
     $('#summary-tab-7').addClass('current');
     $('#summary-tab-1, #summary-tab-2, #summary-tab-3, #summary-tab-4, #summary-tab-5, #summary-tab-6').removeClass('current');

     // Adds class to table row
     $('#deputies-table tr[data-value="2"]').hide();
} else if ($.cookie("deputy-status") == 'Error' && $.cookie("edit-deputy-2-journey") == 'true') {
     // Highlights the deputy tabs
     $('ul.client-details.tabs li').removeClass('current');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"]').addClass('current');
     $('#summary-tab-7').addClass('current');
     $('#summary-tab-1, #summary-tab-2, #summary-tab-3, #summary-tab-4, #summary-tab-5, #summary-tab-6').removeClass('current');

     // Adds class to table row
     $('#deputies-table tr[data-value="2"]').addClass('error-row');
     $('#deputies-table tr[data-value="2"] .tertiary.unlink').show();
     $('#deputies-table tr[data-value="2"] .deputy-status-error').text('Error');
}

else if ($.cookie("unlink-deputy") == 'true' && $.cookie("edit-deputy-3-journey") == 'true') {
     // Highlights the deputy tabs
     $('ul.client-details.tabs li').removeClass('current');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"]').addClass('current');
     $('#summary-tab-7').addClass('current');
     $('#summary-tab-1, #summary-tab-2, #summary-tab-3, #summary-tab-4, #summary-tab-5, #summary-tab-6').removeClass('current');

     // Adds class to table row
     $('#deputies-table tr[data-value="2"]').hide();
} else if ($.cookie("deputy-status") == 'Error' && $.cookie("edit-deputy-3-journey") == 'true') {
     // Highlights the deputy tabs
     $('ul.client-details.tabs li').removeClass('current');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"]').addClass('current');
     $('#summary-tab-7').addClass('current');
     $('#summary-tab-1, #summary-tab-2, #summary-tab-3, #summary-tab-4, #summary-tab-5, #summary-tab-6').removeClass('current');

     // Adds class to table row
     $('#deputies-table tr[data-value="2"]').addClass('error-row');
     $('#deputies-table tr[data-value="2"] .tertiary.unlink').show();
     $('#deputies-table tr[data-value="2"] .deputy-status-error').text('Error');
} else if ($.cookie("deputy-status") == 'Discharged' && $.cookie("edit-deputy-1-journey") == 'true' || $.cookie("deputy-status") == 'Discharged' && $.cookie("edit-deputy-2-journey") == 'true' || $.cookie("deputy-status") == 'Discharged' && $.cookie("edit-deputy-3-journey") == 'true') {
     $('ul.client-details.tabs li').removeClass('current');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"]').addClass('current');
     $('#summary-tab-7').addClass('current');
     $('#summary-tab-1, #summary-tab-2, #summary-tab-3, #summary-tab-4, #summary-tab-5, #summary-tab-6').removeClass('current');
} else if ($.cookie("deputy-status") == 'Suspended' && $.cookie("edit-deputy-1-journey") == 'true' || $.cookie("deputy-status") == 'Suspended' && $.cookie("edit-deputy-2-journey") == 'true' || $.cookie("deputy-status") == 'Suspended' && $.cookie("edit-deputy-3-journey") == 'true') {
     $('ul.client-details.tabs li').removeClass('current');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"]').addClass('current');
     $('#summary-tab-7').addClass('current');
     $('#summary-tab-1, #summary-tab-2, #summary-tab-3, #summary-tab-4, #summary-tab-5, #summary-tab-6').removeClass('current');
}

if ($.cookie("edit-deputy-1-journey") == 'true' && $.cookie("edit-deputy-2-journey") == 'false' && $.cookie("edit-deputy-3-journey") == 'false') {
     $('#unlink-complete h1 div').text('Mrs Lara Stevens');
     $('#deputy-updated-complete h1 div').text('Mrs Lara Stevens');

     $('#deputy-updated-complete').slideDown();
     setTimeout(function() {
          $("#deputy-updated-complete").slideUp()
     }, 5000);

} else if ($.cookie("edit-deputy-1-journey") == 'false' && $.cookie("edit-deputy-2-journey") == 'true' && $.cookie("edit-deputy-3-journey") == 'false') {
     $('#unlink-complete h1 div').text('Mrs Carla Frith');
     $('#deputy-updated-complete h1 div').text('Mrs Carla Frith');

     $('#deputy-updated-complete').slideDown();
     setTimeout(function() {
          $("#deputy-updated-complete").slideUp()
     }, 5000);

} else if ($.cookie("edit-deputy-1-journey") == 'false' && $.cookie("edit-deputy-2-journey") == 'false' && $.cookie("edit-deputy-3-journey") == 'true') {
     $('#unlink-complete h1 div').text('Mrs Melanie Rand');
     $('#deputy-updated-complete h1 div').text('Mrs Melanie Rand');

     $('#deputy-updated-complete').slideDown();
     setTimeout(function() {
          $("#deputy-updated-complete").slideUp()
     }, 5000);

}

// else {
//      // Highlights the deputy tabs
//      $('ul.tabs li[data-tab="health-tab-1"]').addClass('current');
//      $('ul.tabs li[data-tab="health-tab-2"], ul.tabs li[data-tab="health-tab-3"], ul.tabs li[data-tab="health-tab-4"], ul.tabs li[data-tab="health-tab-5"], ul.tabs li[data-tab="health-tab-6"], ul.tabs li[data-tab="health-tab-7"]').removeClass('current');
//      $('#health-tab-1').addClass('current');
//      $('#health-tab-2, #health-tab-3, #health-tab-4, #health-tab-5, #health-tab-6, #health-tab-7').removeClass('current');
//
//      // Removes class to table row
//      $('#deputies-table tr[data-value="2"]').removeClass('error-row');
//
//      // Changes table content
//      $('.deputy-status-error').text('Active');
// }

// Which deputy is being edited
$(".edit-lay-deputy").on("click", function (e) {
     $.cookie("edit-deputy-journey", 'lay', {path:'/'});
});

$(".edit-pro-deputy").on("click", function (e) {
     $.cookie("edit-deputy-journey", 'pro', {path:'/'});
});

$(".edit-public-deputy").on("click", function (e) {
     $.cookie("edit-deputy-journey", 'public', {path:'/'});
});

// Activate the confirm button
if ($.cookie("edit-deputy-journey") == 'lay') {
     // Shows the confirmation panel
     $('#deputy-edited').show();
     setTimeout(function() {
          $("#deputy-edited").hide(500);
     }, 5000);

     // Shows relevant details
     $('#deputy-edited .edit-lay').show();
     $('#deputy-edited .edit-pro, #deputy-edited .edit-public').hide();
} else if ($.cookie("edit-deputy-journey") == 'pro') {
     // Shows the confirmation panel
     $('#deputy-edited').show();
     setTimeout(function() {
          $("#deputy-edited").hide(500);
     }, 5000);

     // Shows relevant details
     $('#deputy-edited .edit-pro').show();
     $('#deputy-edited .edit-lay, #deputy-edited .edit-public').hide();
} else if ($.cookie("edit-deputy-journey") == 'public') {
     // Shows the confirmation panel
     $('#deputy-edited').show();
     setTimeout(function() {
          $("#deputy-edited").hide(500);
     }, 5000);

     // Shows relevant details
     $('#deputy-edited .edit-public').show();
     $('#deputy-edited .edit-lay, #deputy-edited .edit-pro').hide();
} else {
     $('#deputy-edited').hide();
}

// Changes the URL
if ($.cookie("order-journey") == 'HandW') {
     $('#confirm-unlink').attr('href', '../4-client-page/4a-new-client.html#HandW');
} else if ($.cookie("order-journey") == 'PFA') {
     $('#confirm-unlink').attr('href', '../4-client-page/4a-new-client.html#PFA');
} else {
     $('#confirm-unlink').attr('href', '../4-client-page/4a-new-client.html');
}

// Deputy status
$('#reset-deputy').hide();

$(".revert-form-item-status").on("click", function (e) {
     $.cookie("deputy-status", 'Active', {path:'/'});
     $('#reset-deputy').show();
     $('#add-deputy-step-3').hide();
});

// Clears deputy journey
// $(document).ready(function() {
//      setTimeout(function() {
//           $.cookie("edit-deputy-1-journey", false, {path:'/'});
//           $.cookie("edit-deputy-2-journey", false, {path:'/'});
//           $.cookie("edit-deputy-3-journey", false, {path:'/'});
//      }, 5000);
// });
