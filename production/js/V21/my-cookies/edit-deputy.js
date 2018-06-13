// =================================== Edit deputy - COOKIES =================================== //
// Which deputy are we editing?
$(".edit-deputy-1-journey").on("click", function (e) {
     $.cookie("edit-deputy-1-journey", true, {path:'/'});
     $.cookie("edit-deputy-2-journey", false, {path:'/'});
     $.cookie("edit-deputy-3-journey", false, {path:'/'});
     $.cookie("edit-deputy-4-journey", false, {path:'/'});
});

$(".edit-deputy-2-journey").on("click", function (e) {
     $.cookie("edit-deputy-1-journey", false, {path:'/'});
     $.cookie("edit-deputy-2-journey", true, {path:'/'});
     $.cookie("edit-deputy-3-journey", false, {path:'/'});
     $.cookie("edit-deputy-4-journey", false, {path:'/'});
});

$(".edit-deputy-3-journey").on("click", function (e) {
     $.cookie("edit-deputy-1-journey", false, {path:'/'});
     $.cookie("edit-deputy-2-journey", false, {path:'/'});
     $.cookie("edit-deputy-3-journey", true, {path:'/'});
     $.cookie("edit-deputy-4-journey", false, {path:'/'});
});

$(".edit-deputy-4-journey").on("click", function (e) {
     $.cookie("edit-deputy-1-journey", false, {path:'/'});
     $.cookie("edit-deputy-2-journey", false, {path:'/'});
     $.cookie("edit-deputy-3-journey", false, {path:'/'});
     $.cookie("edit-deputy-4-journey", true, {path:'/'});
});

if ($.cookie("edit-deputy-1-journey") == 'true' || $.cookie("edit-deputy-2-journey") == 'true') {
     $('#edit-deputy').attr('href', '../4-client-page/4a-new-client.html#HandW');
     $('#reset-deputy').attr('href', '../4-client-page/4a-new-client.html#HandW');

     $('ul.client-details.tabs li').removeClass('current');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"]').addClass('current');

     $('.client-details.tab-content').removeClass('current');
     $('.client-details.tab-content#summary-tab-7').addClass('current');

}

if ($.cookie("edit-deputy-3-journey") == 'true' || $.cookie("edit-deputy-4-journey") == 'true') {
     $('#edit-deputy').attr('href', '../4-client-page/4a-new-client.html#PFA');
     $('#reset-deputy').attr('href', '../4-client-page/4a-new-client.html#PFA');

     $('ul.client-details.tabs li').removeClass('current');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"]').addClass('current');

     $('.client-details.tab-content').removeClass('current');
     $('.client-details.tab-content#summary-tab-7').addClass('current');
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
     $('#deputies-table tr[data-value="3"]').hide();
} else if ($.cookie("deputy-status") == 'Error' && $.cookie("edit-deputy-3-journey") == 'true') {
     // Highlights the deputy tabs
     $('ul.client-details.tabs li').removeClass('current');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"]').addClass('current');
     $('#summary-tab-7').addClass('current');
     $('#summary-tab-1, #summary-tab-2, #summary-tab-3, #summary-tab-4, #summary-tab-5, #summary-tab-6').removeClass('current');

     // Adds class to table row
     $('#deputies-table tr[data-value="3"]').addClass('error-row');
     $('#deputies-table tr[data-value="3"] .tertiary.unlink').show();
     $('#deputies-table tr[data-value="3"] .deputy-status-error').text('Error');
}

else if ($.cookie("unlink-deputy") == 'true' && $.cookie("edit-deputy-4-journey") == 'true') {
     // Highlights the deputy tabs
     $('ul.client-details.tabs li').removeClass('current');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"]').addClass('current');
     $('#summary-tab-7').addClass('current');
     $('#summary-tab-1, #summary-tab-2, #summary-tab-3, #summary-tab-4, #summary-tab-5, #summary-tab-6').removeClass('current');

     // Adds class to table row
     $('#deputies-table tr[data-value="4"]').hide();
} else if ($.cookie("deputy-status") == 'Error' && $.cookie("edit-deputy-4-journey") == 'true') {
     // Highlights the deputy tabs
     $('ul.client-details.tabs li').removeClass('current');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"]').addClass('current');
     $('#summary-tab-7').addClass('current');
     $('#summary-tab-1, #summary-tab-2, #summary-tab-3, #summary-tab-4, #summary-tab-5, #summary-tab-6').removeClass('current');

     // Adds class to table row
     $('#deputies-table tr[data-value="4"]').addClass('error-row');
     $('#deputies-table tr[data-value="4"] .tertiary.unlink').show();
     $('#deputies-table tr[data-value="4"] .deputy-status-error').text('Error');
}

else if ($.cookie("deputy-status") == 'Discharged' && $.cookie("edit-deputy-1-journey") == 'true' || $.cookie("deputy-status") == 'Discharged' && $.cookie("edit-deputy-2-journey") == 'true' || $.cookie("deputy-status") == 'Discharged' && $.cookie("edit-deputy-3-journey") == 'true' || $.cookie("deputy-status") == 'Discharged' && $.cookie("edit-deputy-4-journey") == 'true') {
     $('ul.client-details.tabs li').removeClass('current');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"]').addClass('current');
     $('#summary-tab-7').addClass('current');
     $('#summary-tab-1, #summary-tab-2, #summary-tab-3, #summary-tab-4, #summary-tab-5, #summary-tab-6').removeClass('current');
} else if ($.cookie("deputy-status") == 'Suspended' && $.cookie("edit-deputy-1-journey") == 'true' || $.cookie("deputy-status") == 'Suspended' && $.cookie("edit-deputy-2-journey") == 'true' || $.cookie("deputy-status") == 'Suspended' && $.cookie("edit-deputy-3-journey") == 'true' || $.cookie("deputy-status") == 'Suspended' && $.cookie("edit-deputy-4-journey") == 'true') {
     $('ul.client-details.tabs li').removeClass('current');
     $('ul.client-details.tabs li[data-tab="summary-tab-7"]').addClass('current');
     $('#summary-tab-7').addClass('current');
     $('#summary-tab-1, #summary-tab-2, #summary-tab-3, #summary-tab-4, #summary-tab-5, #summary-tab-6').removeClass('current');
}

if ($.cookie("edit-deputy-1-journey") == 'true') {
     $('#unlink-complete h1 div').text('Mrs Lara Stevens');
     $('#deputy-updated-complete h1 div').text('Mrs Lara Stevens');

     $('#deputy-updated-complete').slideDown();
     setTimeout(function() {
          $("#deputy-updated-complete").slideUp();
     }, 5000);
}

if ($.cookie("edit-deputy-2-journey") == 'true') {
     $('#unlink-complete h1 div').text('Bob Loblaw Ltd');
     $('#deputy-updated-complete h1 div').text('Bob Loblaw Ltd');

     $('#deputy-updated-complete').slideDown();
     setTimeout(function() {
          $("#deputy-updated-complete").slideUp();
     }, 5000);
}

if ($.cookie("edit-deputy-3-journey") == 'true') {
     $('#unlink-complete h1 div').text('Mrs Carla Frith');
     $('#deputy-updated-complete h1 div').text('Mrs Carla Frith');

     $('#deputy-updated-complete').slideDown();
     setTimeout(function() {
          $("#deputy-updated-complete").slideUp();
     }, 5000);
}

if ($.cookie("edit-deputy-4-journey") == 'true') {
     $('#unlink-complete h1 div').text('Mrs Melanie Rand');
     $('#deputy-updated-complete h1 div').text('Mrs Melanie Rand');

     $('#deputy-updated-complete').slideDown();
     setTimeout(function() {
          $("#deputy-updated-complete").slideUp();
     }, 5000);
}

if (window.location.href.indexOf("4a-new-client.html") != -1) {
     // Clears cookie values
     $.cookie("edit-deputy-1-journey", false, {path:'/'});
     $.cookie("edit-deputy-2-journey", false, {path:'/'});
     $.cookie("edit-deputy-3-journey", false, {path:'/'});
     $.cookie("edit-deputy-4-journey", false, {path:'/'});
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
     $('#edit-deputy').hide();
});

// Clears deputy journey
// $(document).ready(function() {
//      setTimeout(function() {
//           $.cookie("edit-deputy-1-journey", false, {path:'/'});
//           $.cookie("edit-deputy-2-journey", false, {path:'/'});
//           $.cookie("edit-deputy-3-journey", false, {path:'/'});
//      }, 5000);
// });

// Creates the Pro deputy
$("#edit-deputy").on("click", function (e) {
     $.cookie("deputy-type-order", $("#deputy-type-order").val(), {path:'/'});
     $.cookie("deputy-relationship", $("#deputy-relationship").val(), {path:'/'});
     $.cookie("deputy-professional-contact", $("#deputy-professional-contact").val(), {path:'/'});
     $.cookie("deputy-professional-contact-details", $("#deputy-professional-contact-details").val(), {path:'/'});

     // $.cookie("deputy-status", $("#deputy-status").val(), {path:'/'});
     // $.cookie("deputy-status-date", $("#datepicker").val(), {path:'/'});
     // /* textarea */ $.cookie("deputy-status-notes", $(".deputy-status-notes .jqte_editor").html(), {path:'/'});

     $.cookie("deputy-fee-payer", $("#deputy-fee-payer:checked").val(), {path:'/'});
     $.cookie("deputy-main-correspondent", $("#deputy-main-correspondent:checked").val(), {path:'/'});

     // Change the office
     $.cookie("deputy-professional-contact", $("#deputy-professional-contact").val(), {path:'/'});
     // $.cookie("deputy-professional-contact-details", $("#deputy-professional-contact-details").val(), {path:'/'});

});

if ($.cookie("deputy-professional-contact") === 'Head office - London') {
     $('#deputies-table tr[data-value="2"] .address').html('<strong>Head office - London</strong>, 84 Crown Street, London, SW19 5GQ.');
     $('#deputies-table tr[data-value="2"] .office-contact-address').html(`
          <p class="item">Address:</p>
          <p class="answer">
               <span class="deputy-office-location"><strong>Head office - London</strong></span>,<br>
               <span class="deputy-address-line-1-answer">84 Crown Street</span>,<br>
               <span class="deputy-address-town-answer">London</span>,<br>
               <span class="deputy-manual-postcode-answer">SW19 5GQ</span>.<br>
               <span class="deputy-country-answer">United Kingdom</span>
          </p>
     `);
     $('#deputies-table tr[data-value="2"] .office-contact-emails').html(`
          <p class="item">Email address:</p>
          <ul class="answer">
               <li class="deputy-email-answer"><a href="#">maisie.odonnell@bobloblaw.lawblog.com</a></li>
               <li><a href="#">keira.white@bobloblaw.lawblog.com</a></li>
               <li><a href="#">reece.bowen@bobloblaw.lawblog.com</a></li>
          </ul>
     `);
} else if ($.cookie("deputy-professional-contact") === 'Coventry') {
     $('#deputies-table tr[data-value="2"] .address').html('<strong>Coventry office</strong>, 81 Whatlington Road, Coventry, CV1 5NS.');
     $('#deputies-table tr[data-value="2"] .office-contact-address').html(`
          <p class="item">Address:</p>
          <p class="answer">
               <span class="deputy-office-location"><strong>Coventry office</strong></span>,<br>
               <span class="deputy-address-line-1-answer">81 Whatlington Road</span>,<br>
               <span class="deputy-address-town-answer">Coventry</span>,<br>
               <span class="deputy-manual-postcode-answer">CV1 5NS</span>.<br>
               <span class="deputy-country-answer">United Kingdom</span>
          </p>
     `);
     $('#deputies-table tr[data-value="2"] .office-contact-emails').html(`
          <p class="item">Email address:</p>
          <ul class="answer">
               <li class="deputy-email-answer"><a href="#">harvey.burgess@bobloblaw.lawblog.com</a></li>
               <li><a href="#">yasmin.west@bobloblaw.lawblog.com</a></li>
               <li><a href="#">tilly.steele@bobloblaw.lawblog.com</a></li>
          </ul>
     `);
} else if ($.cookie("deputy-professional-contact") === 'Birmingham') {
     $('#deputies-table tr[data-value="2"] .address').html('<strong>Birmingham office</strong>, 57 Boroughbridge Road, Birmingham, B5 2SY.');
     $('#deputies-table tr[data-value="2"] .office-contact-address').html(`
          <p class="item">Address:</p>
          <p class="answer">
               <span class="deputy-office-location"><strong>Birmingham office</strong></span>,<br>
               <span class="deputy-address-line-1-answer">57 Boroughbridge Road</span>,<br>
               <span class="deputy-address-town-answer">Birmingham</span>,<br>
               <span class="deputy-manual-postcode-answer">B5 2SY</span>.<br>
               <span class="deputy-country-answer">United Kingdom</span>
          </p>
     `);
     $('#deputies-table tr[data-value="2"] .office-contact-emails').html(`
          <p class="item">Email address:</p>
          <ul class="answer">
               <li class="deputy-email-answer"><a href="#">max.bird@bobloblaw.lawblog.com</a></li>
               <li><a href="#">nicholas.bruce@bobloblaw.lawblog.com</a></li>
          </ul>
     `);
} else if ($.cookie("deputy-professional-contact") === 'Newcastle') {
     $('#deputies-table tr[data-value="2"] .address').html('<strong>Newcastle office</strong>, 25 Lairg Road, Newcastle Upon Tyne, NE7 1YX.');
     $('#deputies-table tr[data-value="2"] .office-contact-address').html(`
          <p class="item">Address:</p>
          <p class="answer">
               <span class="deputy-office-location"><strong>Newcastle office</strong></span>,<br>
               <span class="deputy-address-line-1-answer">25 Lairg Road</span>,<br>
               <span class="deputy-address-town-answer">Newcastle Upon Tyne</span>,<br>
               <span class="deputy-manual-postcode-answer">NE7 1YX</span>.<br>
               <span class="deputy-country-answer">United Kingdom</span>
          </p>
     `);
     $('#deputies-table tr[data-value="2"] .office-contact-emails').html(`
          <p class="item">Email address:</p>
          <ul class="answer">
               <li class="deputy-email-answer"><a href="#">mia.storey@bobloblaw.lawblog.com</a></li>
               <li><a href="#">brooke.quinn@bobloblaw.lawblog.com</a></li>
          </ul>
     `);
} else if ($.cookie("deputy-professional-contact") === 'Liverpool') {
     $('#deputies-table tr[data-value="2"] .address').html('<strong>Liverpool office</strong>, 27 Overton Circle, Liverpool, L3 8FH.');
     $('#deputies-table tr[data-value="2"] .office-contact-address').html(`
          <p class="item">Address:</p>
          <p class="answer">
               <span class="deputy-office-location"><strong>Liverpool office</strong></span>,<br>
               <span class="deputy-address-line-1-answer">27 Overton Circle</span>,<br>
               <span class="deputy-address-town-answer">Liverpool</span>,<br>
               <span class="deputy-manual-postcode-answer">L3 8FH</span>.<br>
               <span class="deputy-country-answer">United Kingdom</span>
          </p>
     `);
     $('#deputies-table tr[data-value="2"] .office-contact-emails').html(`
          <p class="item">Email address:</p>
          <ul class="answer">
               <li class="deputy-email-answer"><a href="#">ellis.may@bobloblaw.lawblog.com</a></li>
               <li><a href="#">anthony.haynes@bobloblaw.lawblog.com</a></li>
               <li><a href="#">natasha.tucker@bobloblaw.lawblog.com</a></li>
          </ul>
     `);
} else if ($.cookie("deputy-professional-contact") === 'Manchester') {
     $('#deputies-table tr[data-value="2"] .address').html('<strong>Manchester office</strong>, 63 Cunnery Rd, Manchester, M3 8WT.');
     $('#deputies-table tr[data-value="2"] .office-contact-address').html(`
          <p class="item">Address:</p>
          <p class="answer">
               <span class="deputy-office-location"><strong>Manchester office</strong></span>,<br>
               <span class="deputy-address-line-1-answer">63 Cunnery Rd</span>,<br>
               <span class="deputy-address-town-answer">Manchester</span>,<br>
               <span class="deputy-manual-postcode-answer">M3 8WT</span>.<br>
               <span class="deputy-country-answer">United Kingdom</span>
          </p>
     `);
     $('#deputies-table tr[data-value="2"] .office-contact-emails').html(`
          <p class="item">Email address:</p>
          <ul class="answer">
               <li class="deputy-email-answer"><a href="#">victoria.holden@bobloblaw.lawblog.com</a></li>
               <li><a href="#">holly.abbott@bobloblaw.lawblog.com</a></li>
               <li><a href="#">kai.steele@bobloblaw.lawblog.com</a></li>
               <li><a href="#">elizabeth.reed@bobloblaw.lawblog.com</a></li>
          </ul>
     `);
} else if ($.cookie("deputy-professional-contact") === 'New office') {
     var data = JSON.parse(sessionStorage.getItem('new-office'));
     $('#deputies-table tr[data-value="2"] .address').html(`<strong>${data['deputy-office-name-answer']}</strong>, ${data['deputy-office-address-answer']}`);
     $('#deputies-table tr[data-value="2"] .office-contact-address').html(`
          <p class="item">Address:</p>
          <p class="answer">
               <span class="deputy-office-location"><strong>${data['deputy-office-name-answer']}</strong></span>,<br>
               ${data['deputy-office-address-answer'].split(', ').filter(item => item.trim() !== '').join(',<br/>')}
          </p>
     `);
     var emails = data['new-contacts'];
     var p = $('<p class="item">Email address:</p>')
     var list = $(`
          <ul class="answer">

          </ul>
     `);

     for (var i = 0; i < emails.length; i++) {
          list.append($(`<li><a href="#">${emails[i].email}</a></li>`))
     }

     $('#deputies-table tr[data-value="2"] .office-contact-emails').html('').append(p).append(list);

}

// if ($.cookie("deputy-professional-contact-details")) {
//      $('#deputies-table tr[data-value="2"] .office-contact-emails').html(`
//           <p class="item">Email address:</p>
//           <ul class="answer">
//                <li class="deputy-email-answer"><a href="#">max.bird@bobloblaw.lawblog.com</a></li>
//                <li><a href="#">nicholas.bruce@bobloblaw.lawblog.com</a></li>
//           </ul>
//      `);
// }

// if ($.cookie("deputy-professional-contact-details") === 'Max Bird') {
//      $('#deputies-table tr[data-value="2"] .office-contact-name').html(`
//           <p class="item">Correspondence name:</p>
//           <p class="answer">
//                <span class="deputy-title-answer">Mr</span>
//                <span class="deputy-first-name-answer">Max</span>
//                <span class="deputy-middle-name-answer">Stephen</span>
//                <span class="deputy-last-name-answer">Bird</span>
//           </p>
//      `);
// } else if ($.cookie("deputy-professional-contact-details") === 'Nicholas Bruce') {
//      $('#deputies-table tr[data-value="2"] .office-contact-name').html(`
//           <p class="item">Correspondence name:</p>
//           <p class="answer">
//                <span class="deputy-title-answer">Mr</span>
//                <span class="deputy-first-name-answer">Nicholas</span>
//                <span class="deputy-middle-name-answer">Robert</span>
//                <span class="deputy-last-name-answer">Bruce</span>
//           </p>
//      `);
// }


// if ($.cookie("order-journey") == 'HandW') {
//      $('#confirm-unlink').attr('href', '../4-client-page/4a-new-client.html#HandW');
// }
