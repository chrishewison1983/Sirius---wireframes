// =================================== Edit deputy - COOKIES =================================== //
// Which deputy are we editing?
$(".edit-deputy-1-journey").on("click", function (e) {
     $.cookie("edit-deputy-1-journey", true, {path:'/'});
     $.cookie("edit-deputy-2-journey", false, {path:'/'});
});

$(".edit-deputy-2-journey").on("click", function (e) {
     $.cookie("edit-deputy-1-journey", false, {path:'/'});
     $.cookie("edit-deputy-2-journey", true, {path:'/'});
});

// Unlink deputy code
$('#unlink-deputy-modal').hide();

$("#deputy-status").change(function () {
     if ($(this).val() == 'Error') {
          $('#unlink-deputy-modal').show();
     } else {
          $('#unlink-deputy-modal').hide();
     }
});

$("#confirm-unlink").on("click", function (e) {
     $.cookie("unlink-deputy", true, {path:'/'});
});

$('.tertiary.unlink').hide();

if ($.cookie("unlink-deputy") == 'true' && $.cookie("edit-deputy-1-journey") == 'true') {
     // Highlights the deputy tabs
     $('ul.tabs li[data-tab="health-tab-4"]').addClass('current');
     $('#health-tab-4').addClass('current');
     $('ul.tabs li[data-tab="health-tab-1"], ul.tabs li[data-tab="health-tab-2"], ul.tabs li[data-tab="health-tab-3"], ul.tabs li[data-tab="health-tab-5"], ul.tabs li[data-tab="health-tab-6"], ul.tabs li[data-tab="health-tab-7"]').removeClass('current');
     $('#health-tab-1, #health-tab-2, #health-tab-3, #health-tab-5, #health-tab-6, #health-tab-7').removeClass('current');

     // Adds class to table row
     $('#deputies-table tr[data-value="1"]').hide();
} else if ($.cookie("deputy-status") == 'Error' && $.cookie("edit-deputy-1-journey") == 'true') {
     // Highlights the deputy tabs
     $('ul.tabs li[data-tab="health-tab-4"]').addClass('current');
     $('#health-tab-4').addClass('current');
     $('ul.tabs li[data-tab="health-tab-1"], ul.tabs li[data-tab="health-tab-2"], ul.tabs li[data-tab="health-tab-3"], ul.tabs li[data-tab="health-tab-5"], ul.tabs li[data-tab="health-tab-6"], ul.tabs li[data-tab="health-tab-7"]').removeClass('current');
     $('#health-tab-1, #health-tab-2, #health-tab-3, #health-tab-5, #health-tab-6, #health-tab-7').removeClass('current');

     // Adds class to table row
     $('#deputies-table tr[data-value="1"]').addClass('error-row');
     $('#deputies-table tr[data-value="1"] .tertiary.unlink').show();
     $('#deputies-table tr[data-value="1"] .deputy-status-error').text('Error');

} else if ($.cookie("unlink-deputy") == 'true' && $.cookie("edit-deputy-2-journey") == 'true') {
     // Highlights the deputy tabs
     $('ul.tabs li[data-tab="health-tab-4"]').addClass('current');
     $('#health-tab-4').addClass('current');
     $('ul.tabs li[data-tab="health-tab-1"], ul.tabs li[data-tab="health-tab-2"], ul.tabs li[data-tab="health-tab-3"], ul.tabs li[data-tab="health-tab-5"], ul.tabs li[data-tab="health-tab-6"], ul.tabs li[data-tab="health-tab-7"]').removeClass('current');
     $('#health-tab-1, #health-tab-2, #health-tab-3, #health-tab-5, #health-tab-6, #health-tab-7').removeClass('current');

     // Adds class to table row
     $('#deputies-table tr[data-value="2"]').hide();
} else if ($.cookie("deputy-status") == 'Error' && $.cookie("edit-deputy-2-journey") == 'true') {
     // Highlights the deputy tabs
     $('ul.tabs li[data-tab="health-tab-4"]').addClass('current');
     $('#health-tab-4').addClass('current');
     $('ul.tabs li[data-tab="health-tab-1"], ul.tabs li[data-tab="health-tab-2"], ul.tabs li[data-tab="health-tab-3"], ul.tabs li[data-tab="health-tab-5"], ul.tabs li[data-tab="health-tab-6"], ul.tabs li[data-tab="health-tab-7"]').removeClass('current');
     $('#health-tab-1, #health-tab-2, #health-tab-3, #health-tab-5, #health-tab-6, #health-tab-7').removeClass('current');

     // Adds class to table row
     $('#deputies-table tr[data-value="2"]').addClass('error-row');
     $('#deputies-table tr[data-value="2"] .tertiary.unlink').show();
     $('#deputies-table tr[data-value="2"] .deputy-status-error').text('Error');
}

if ($.cookie("edit-deputy-1-journey") == 'true' && $.cookie("edit-deputy-2-journey") == 'false') {
     $('#unlink-complete h2 div').text('Mrs Lara Stevens');
} else if ($.cookie("edit-deputy-1-journey") == 'false' && $.cookie("edit-deputy-2-journey") == 'true') {
     $('#unlink-complete h2 div').text('Mrs Carla Frith');
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
          $("#deputy-edited").hide(500)
     }, 5000);

     // Shows relevant details
     $('#deputy-edited .edit-lay').show();
     $('#deputy-edited .edit-pro, #deputy-edited .edit-public').hide();
} else if ($.cookie("edit-deputy-journey") == 'pro') {
     // Shows the confirmation panel
     $('#deputy-edited').show();
     setTimeout(function() {
          $("#deputy-edited").hide(500)
     }, 5000);

     // Shows relevant details
     $('#deputy-edited .edit-pro').show();
     $('#deputy-edited .edit-lay, #deputy-edited .edit-public').hide();
} else if ($.cookie("edit-deputy-journey") == 'public') {
     // Shows the confirmation panel
     $('#deputy-edited').show();
     setTimeout(function() {
          $("#deputy-edited").hide(500)
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
     $('#confirm-unlink').attr('href', '../4-client-page/4a-new-client.html#property');
}
