// =================================== Edit client - COOKIES =================================== //
// STEP 1
$("#edit-client").on("click", function (e) {
     $.cookie("create-client-step-1", true, {path:'/'});

     $.cookie("client-hybrid", $("input[name=client-hybrid]:checked").val(), {path:'/'});

     $.cookie("client-casarec", $("#client-casarec").val(), {path:'/'});

     $.cookie("client-title", $("#client-title").val(), {path:'/'});
     $.cookie("client-title-other", $("#client-title-other").val(), {path:'/'});
     $.cookie("client-first-name", $("#client-first-name").val(), {path:'/'});
     $.cookie("client-middle-name", $("#client-middle-name").val(), {path:'/'});
     $.cookie("client-last-name", $("#client-last-name").val(), {path:'/'});
     $.cookie("client-previous-name", $("#client-previous-name").val(), {path:'/'});
     $.cookie("client-dob-day", $("#client-dob-day").val(), {path:'/'});
     $.cookie("client-dob-month", $("#client-dob-month").val(), {path:'/'});
     $.cookie("client-dob-year", $("#client-dob-year").val(), {path:'/'});

     $.cookie("client-address-line-1", $("#client-address-line-1").val(), {path:'/'});
     $.cookie("client-address-line-2", $("#client-address-line-2").val(), {path:'/'});
     $.cookie("client-address-line-3", $("#client-address-line-3").val(), {path:'/'});
     $.cookie("client-address-town", $("#client-address-town").val(), {path:'/'});
     $.cookie("client-manual-postcode", $("#client-manual-postcode").val(), {path:'/'});
     $.cookie("client-country", $("#client-country").val(), {path:'/'});
     $.cookie("client-country-desc", $("#client-country-description").val(), {path:'/'});
     $.cookie("client-airmail", $("input[name=client-airmail]:checked").val(), {path:'/'});

     $.cookie("client-phone-number", $("#client-phone-number").val(), {path:'/'});
     $.cookie("client-mob-number", $("#client-mob-number").val(), {path:'/'});
     $.cookie("client-email", $("#client-email").val(), {path:'/'});

});

// Edit client details
$("#edit-client").on("click", function (e) {
     $.cookie("edit-client", true, {path:'/'});
});

if ($.cookie("edit-client")) {
     setTimeout(function() {
          $("#edit-client-confirm").hide(500);
          $.cookie("edit-client", false, {path:'/'});
     }, 5000);
}

if ($.cookie("create-client-step-1") === 'true' && $.cookie("create-client-step-2") === 'true') {
     $('#edit-client-journey').attr('href', '../4-client-hub/4c-new-client.html#NewClient');
}

// Hybrid code
if ($.cookie("client-hybrid") === 'Hybrid') {
     $('.check-details .client-hybrid').text('Yes');
     $('#section-header.client-page').addClass('hybrid-client');
     $('#section-header.client-page').prepend(`
          <div class="hyrbid-indicator">hybrid</div>
     `);
} else {
     $('.check-details .client-hybrid').text('No');
     $('#section-header.client-page').removeClass('hybrid-client');
}
