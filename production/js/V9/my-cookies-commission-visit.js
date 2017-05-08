// =================================== Commission visit - COOKIES =================================== //
////////////////////////////////////// DEFINE USER JOURNEY //////////////////////////////////////

$(".task").on("click", function (e) {
     $.cookie("journey-task-led", true, {path:'/'});
});

if ($.cookie("journey-task-led") == 'true') {
     $("#add-visitors-step-6").attr('href','../dashboard.html');
     $('#confirmation-dashboard-visit').show();

     $('#myTable').find("tr.link-for-commission-visit").addClass("complete");
     $('#myTable').find("tr.link-for-commission-visit").hide('slow').delay(1500);
     $('#myTable').closest("main").find('.tab-link.current span').html(function(i, val) { return +val-1 });

     // This hides the confirmation box after 5 seconds
     setTimeout(function() {
          $("#confirmation-dashboard-visit").hide(500)
     }, 5000);

} else {
     $("#add-visitors-step-6").attr('href','../4-client-page/4a-new-client.html');

     // $('main.new-client').find('.tab-link').removeClass('current');
     // $('main.new-client').find('.tab-link[data-tab="tab-6"]').addClass('current');
     //
     // $('main.new-client').find('.tab-content').removeClass('current');
     // $('main.new-client').find('#tab-6').addClass('current');

}

////////////////////////////////////// Step - 1 (6A-WHY?) //////////////////////////////////////
$("#add-visitors-step-1").on("click", function (e) {
     // $.cookie("type-of-visit", $("#third-why").val(), {path:'/'});
     // Set 1
     $.cookie("type-of-info-set-1", $("#visit-tick-health").is(':checked'), {path:'/'});
     // Set 2
     $.cookie("type-of-info-set-2", $("#visit-tick-lay-supervision, #visit-tick-professional-supervision").is(':checked'), {path:'/'});
     // Set 3
     $.cookie("type-of-info-set-3", $("#visit-tick-compliance, #visit-tick-deputy-supervision, #visit-tick-non-compliant, #visit-tick-hmcs").is(':checked'), {path:'/'});
     $.cookie("completed-step-1", true, {path:'/'});

     // Cookies for side bar
     $.cookie("visit-why", $("#visit-why").val(), {path:'/'});
     $.cookie("visit-why-answer", $("#visit-why-answer").val(), {path:'/'});
     $.cookie("visit-urgent", $("#visit-urgent:checked").val(), {path:'/'});
     $.cookie("visit-commissioned-by", $("#visit-commissioned-by").val(), {path:'/'});
     $.cookie("visit-tick-health", $("#visit-tick-health:checked").parent().text(), {path:'/'});
     $.cookie("visit-tick-compliance", $("#visit-tick-compliance:checked").parent().text(), {path:'/'});
     $.cookie("visit-tick-deputy-supervision", $("#visit-tick-deputy-supervision:checked").parent().text(), {path:'/'});
     $.cookie("visit-tick-lay-supervision", $("#visit-tick-lay-supervision:checked").parent().text(), {path:'/'});
     $.cookie("visit-tick-professional-supervision", $("#visit-tick-professional-supervision:checked").parent().text(), {path:'/'});
     $.cookie("visit-tick-non-compliant", $("#visit-tick-non-compliant:checked").parent().text(), {path:'/'});
     $.cookie("visit-tick-hmcs", $("#visit-tick-hmcs:checked").parent().text(), {path:'/'});
     $.cookie("visit-submitted-late", $("input[name=radio-inline-group-1]:checked").parent().text(), {path:'/'});
     $.cookie("visit-submitted-late-answer", $("#visit-submitted-late-answer").val(), {path:'/'});

     $.cookie("visit-special-requirements-1", $("#visit-special-requirements-1:checked").parent().text(), {path:'/'});
     $.cookie("visit-special-requirements-2", $("#visit-special-requirements-2:checked").parent().text(), {path:'/'});
     $.cookie("visit-special-requirements-3", $("#visit-special-requirements-3:checked").parent().text(), {path:'/'});
     $.cookie("visit-special-requirements-4", $("#visit-special-requirements-4:checked").parent().text(), {path:'/'});
     $.cookie("visit-special-requirements-5", $("#visit-special-requirements-5:checked").parent().text(), {path:'/'});
     $.cookie("visit-special-requirements-6", $("#visit-special-requirements-6:checked").parent().text(), {path:'/'});
     $.cookie("visit-special-requirements-7", $("#visit-special-requirements-7:checked").parent().text(), {path:'/'});
     $.cookie("visit-health-questions", $("#visit-health-questions").val(), {path:'/'});

     $.cookie("visit-non-health-questions", $("#visit-non-health-questions").val(), {path:'/'});
     $.cookie("visit-documents", $("#visit-documents").val(), {path:'/'});
});

// Populate side bar
if ($.cookie("visit-why")) {  $(".visit-why").text($.cookie("visit-why")); }
if ($.cookie("visit-why-answer")) {
     $(".visit-why-answer").text($.cookie("visit-why-answer"));
} else {
     $(".visit-why-answer").hide();
}
if ($.cookie("visit-urgent")) {
     $(".visit-urgent").text('Yes');
} else {
     $(".visit-urgent").text('No');
}
if ($.cookie("visit-commissioned-by")) {  $(".visit-commissioned-by").text($.cookie("visit-commissioned-by")); }
if ($.cookie("visit-tick-health")) {
     $(".visit-tick-health").text($.cookie("visit-tick-health"));
} else {
     $(".visit-tick-health").hide();
}
if ($.cookie("visit-tick-compliance")) {
     $(".visit-tick-compliance").text($.cookie("visit-tick-compliance"));
} else {
     $(".visit-tick-compliance").hide();
}
if ($.cookie("visit-tick-deputy-supervision")) {
     $(".visit-tick-deputy-supervision").text($.cookie("visit-tick-deputy-supervision"));
} else {
     $(".visit-tick-deputy-supervision").hide();
}
if ($.cookie("visit-tick-lay-supervision")) {
     $(".visit-tick-lay-supervision").text($.cookie("visit-tick-lay-supervision"));
} else {
     $(".visit-tick-lay-supervision").hide();
}
if ($.cookie("visit-tick-professional-supervision")) {
     $(".visit-tick-professional-supervision").text($.cookie("visit-tick-professional-supervision"));
} else {
     $(".visit-tick-professional-supervision").hide();
}
if ($.cookie("visit-tick-non-compliant")) {
     $(".visit-tick-non-compliant").text($.cookie("visit-tick-non-compliant"));
} else {
     $(".visit-tick-non-compliant").hide();
}
if ($.cookie("visit-tick-hmcs")) {
     $(".visit-tick-hmcs").text($.cookie("visit-tick-hmcs"));
} else {
     $(".visit-tick-hmcs").hide();
}
if ($.cookie("visit-submitted-late")) {  $(".visit-submitted-late").text($.cookie("visit-submitted-late")); }
if ($.cookie("visit-submitted-late-answer")) {
     $(".visit-submitted-late-answer").text($.cookie("visit-submitted-late-answer"));
} else {
     $(".visit-submitted-late-answer").hide();
}

if ($.cookie("visit-special-requirements-1")) { $(".visit-special-requirements-1").text($.cookie("visit-special-requirements-1")); }
else { $(".visit-special-requirements-1").hide(); }

if ($.cookie("visit-special-requirements-2")) { $(".visit-special-requirements-2").text($.cookie("visit-special-requirements-2")); }
else { $(".visit-special-requirements-2").hide(); }

if ($.cookie("visit-special-requirements-3")) { $(".visit-special-requirements-3").text($.cookie("visit-special-requirements-3")); }
else { $(".visit-special-requirements-3").hide(); }

if ($.cookie("visit-special-requirements-4")) { $(".visit-special-requirements-4").text($.cookie("visit-special-requirements-4")); }
else { $(".visit-special-requirements-4").hide(); }

if ($.cookie("visit-special-requirements-5")) { $(".visit-special-requirements-5").text($.cookie("visit-special-requirements-5")); }
else { $(".visit-special-requirements-5").hide(); }

if ($.cookie("visit-special-requirements-6")) { $(".visit-special-requirements-6").text($.cookie("visit-special-requirements-6")); }
else { $(".visit-special-requirements-6").hide(); }

if ($.cookie("visit-special-requirements-7")) { $(".visit-special-requirements-7").text($.cookie("visit-special-requirements-7")); }
else { $(".visit-special-requirements-7").hide(); }

if ($.cookie("visit-health-questions")) { $(".visit-health-questions").text($.cookie("visit-health-questions")); }
else { $(".visit-health-questions").hide(); }

if ($.cookie("visit-non-health-questions")) {  $(".visit-non-health-questions").text($.cookie("visit-non-health-questions"));  }
if ($.cookie("visit-documents")) {  $(".visit-documents").text($.cookie("visit-documents")); }

// Only show for SET-1
if ($.cookie("type-of-info-set-1") == 'true') {
     $(".set-1").show();
} else {
     $(".set-1").hide();
}

// Only show for SET-2
if ($.cookie("type-of-info-set-2") === 'true') {
     $(".set-2").show();
} else {
     $(".set-2").hide();
}

// Only show for SET-3
if ($.cookie("type-of-info-set-3") == 'true') {
     $(".set-3").show();
} else {
     $(".set-3").hide();
}

////////////////////////////////////// Step - 2 (6B-WHO?) //////////////////////////////////////
$("#add-visitors-step-2").on("click", function (e) {
     $.cookie("completed-step-2", true, {path:'/'});
});

////////////////////////////////////// Step - 3 (6C-WHERE?) //////////////////////////////////////
$("#add-visitors-step-3").on("click", function (e) {
     $.cookie("visit-due-back-date", $("#datepicker").val(), {path:'/'});
     $.cookie("completed-step-3", true, {path:'/'});
});

if ($.cookie("visit-due-back-date")) {  $(".visit-due-back-date").text($.cookie("visit-due-back-date"));  }

/////////////////// ======================== !!!!!!!!!! CHANGE BASED ON DATE OF TEST - START !!!!!!!!!! ======================== ///////////////////
$('.weeks-6, .weeks-12').css('display', 'none');

// ADD 6 WEEKS
if ($.cookie("visit-urgent") === 'Yes') {
     $("#datepicker").val('Thu Jun 08 2017');
     $('.weeks-6').css('display', 'inline-block');
     $('.weeks-12').css('display', 'none');
}
// ADD 12 WEEKS
else if ($.cookie("visit-urgent") == 'undefined') {
     $("#datepicker").val('Thu Jul 20 2017');
     $('.weeks-6').css('display', 'none');
     $('.weeks-12').css('display', 'inline-block');
}
/////////////////// ======================== !!!!!!!!!! CHANGE BASED ON DATE OF TEST - END !!!!!!!!!! ======================== ///////////////////

if ($.cookie("visit-due-back-date")) {
     $(".visit-due-back-date").text($.cookie("visit-due-back-date"));
}

//////////////////////////////////////// Step - 4 (6D-CASE-SUMMARY-& ASSETS) //////////////////////////////////////
$("#add-visitors-step-4").on("click", function (e) {
     $.cookie("completed-step-4", true, {path:'/'});

     $.cookie("visit-assurance", $("input[name=visit-assurance]:checked").parent().text(), {path:'/'});
     $.cookie("visit-order", $("input[name=order-provided]:checked").parent().text(), {path:'/'});
     $.cookie("visit-file-name", $(".file-name").text(), {path:'/'});
     $.cookie("visit-enclosure", $("input[name=visit-enclosure]:checked").parent().text(), {path:'/'});

});

if ($.cookie("visit-assurance")) {  $(".visit-assurance").text($.cookie("visit-assurance")); }

if ($.cookie("visit-order")) {  $(".visit-order").text($.cookie("visit-order")); }
if ($.cookie("visit-file-name")) {  $(".visit-file-name").text($.cookie("visit-file-name")); }

if ($.cookie("visit-enclosure")) {  $(".visit-enclosure").text($.cookie("visit-enclosure")); }
// if ($.cookie("visit-submitted-late-answer")) {
//      $(".visit-submitted-late-answer").text($.cookie("visit-submitted-late-answer"));
// } else {
//      $(".visit-submitted-late-answer").hide();
// }

//////////////////////////////////////// Step - 5 (6E-CASE-DETAILS) //////////////////////////////////////
$("#add-visitors-step-5").on("click", function (e) {
     $.cookie("completed-step-5", true, {path:'/'});

     // Cookies for side bar
     $.cookie("visit-deputy-order", $("input[name=visit-deputy-order]:checked").parent().text(), {path:'/'});
     $.cookie("visit-deputy-order-1", $("#visit-deputy-order-1:checked").parent().text(), {path:'/'});
     $.cookie("visit-deputy-order-2", $("#visit-deputy-order-2:checked").parent().text(), {path:'/'});
     $.cookie("visit-deputy-order-3", $("#visit-deputy-order-3:checked").parent().text(), {path:'/'});
     $.cookie("visit-deputy-order-4", $("#visit-deputy-order-4:checked").parent().text(), {path:'/'});
     $.cookie("visit-deputy-order-5", $("#visit-deputy-order-5:checked").parent().text(), {path:'/'});
     $.cookie("visit-deputy-order-6", $("#visit-deputy-order-6:checked").parent().text(), {path:'/'});
     $.cookie("visit-deputy-order-7", $("#visit-deputy-order-7:checked").parent().text(), {path:'/'});
     $.cookie("visit-deputy-order-8", $("#visit-deputy-order-8:checked").parent().text(), {path:'/'});
     $.cookie("visit-deputy-order-9", $("#visit-deputy-order-9:checked").parent().text(), {path:'/'});

     $.cookie("visit-safeguarding", $("input[name=visit-safeguarding]:checked").parent().text(), {path:'/'});
     $.cookie("visit-safeguarding-answer", $("#visit-safeguarding-answer").val(), {path:'/'});

     $.cookie("visit-deputyship-order", $("input[name=visit-deputyship-order]:checked").parent().text(), {path:'/'});
     $.cookie("visit-deputyship-order-answer", $("#visit-deputyship-order-answer").val(), {path:'/'});

     $.cookie("visit-first", $("input[name=visit-first]:checked").parent().text(), {path:'/'});
     $.cookie("visit-first-date", $("#datepicker").val(), {path:'/'});
});

if ($.cookie("visit-deputy-order")) {  $(".visit-deputy-order").text($.cookie("visit-deputy-order")); }
if ($.cookie("visit-deputy-order-1")) { $(".visit-deputy-order-1").text($.cookie("visit-deputy-order-1")); }
else { $(".visit-deputy-order-1").hide(); }
if ($.cookie("visit-deputy-order-2")) { $(".visit-deputy-order-2").text($.cookie("visit-deputy-order-2")); }
else { $(".visit-deputy-order-2").hide(); }
if ($.cookie("visit-deputy-order-3")) { $(".visit-deputy-order-3").text($.cookie("visit-deputy-order-3")); }
else { $(".visit-deputy-order-3").hide(); }
if ($.cookie("visit-deputy-order-4")) { $(".visit-deputy-order-4").text($.cookie("visit-deputy-order-4")); }
else { $(".visit-deputy-order-4").hide(); }
if ($.cookie("visit-deputy-order-5")) { $(".visit-deputy-order-5").text($.cookie("visit-deputy-order-5")); }
else { $(".visit-deputy-order-5").hide(); }
if ($.cookie("visit-deputy-order-6")) { $(".visit-deputy-order-6").text($.cookie("visit-deputy-order-6")); }
else { $(".visit-deputy-order-6").hide(); }
if ($.cookie("visit-deputy-order-7")) { $(".visit-deputy-order-7").text($.cookie("visit-deputy-order-7")); }
else { $(".visit-deputy-order-7").hide(); }
if ($.cookie("visit-deputy-order-8")) { $(".visit-deputy-order-8").text($.cookie("visit-deputy-order-8")); }
else { $(".visit-deputy-order-8").hide(); }
if ($.cookie("visit-deputy-order-9")) { $(".visit-deputy-order-9").text($.cookie("visit-deputy-order-9")); }
else { $(".visit-deputy-order-9").hide(); }

if ($.cookie("visit-safeguarding")) {  $(".visit-safeguarding").text($.cookie("visit-safeguarding")); }
if ($.cookie("visit-safeguarding-answer")) {
     $(".visit-safeguarding-answer").text($.cookie("visit-safeguarding-answer"));
} else {
     $(".visit-safeguarding-answer").hide();
}

if ($.cookie("visit-deputyship-order")) {  $(".visit-deputyship-order").text($.cookie("visit-deputyship-order")); }
if ($.cookie("visit-deputyship-order-answer")) {
     $(".visit-deputyship-order-answer").text($.cookie("visit-deputyship-order-answer"));
} else {
     $(".visit-deputyship-order-answer").hide();
}

if ($.cookie("visit-first")) {  $(".visit-first").text($.cookie("visit-first")); }
if ($.cookie("visit-first-date")) {
     $(".visit-first-date").text($.cookie("visit-first-date"));
} else {
     $(".visit-first-date").hide();
}

//////////////////////////////////////// Step - 6 (6E-VISIT SUMMARY) //////////////////////////////////////
$("#add-visitors-step-6").on("click", function (e) {
     $.cookie("user-journey", 6, {path:'/'});
     $.cookie("completed-step-6", true, {path:'/'});

     // Cookies for side bar
     $.cookie("visit-dangers", $("input[name=visit-dangers]:checked").parent().text(), {path:'/'});
     $.cookie("visit-dangers-answer", $("#visit-dangers-answer").val(), {path:'/'});

     $.cookie("visit-assist-visitor", $("input[name=visit-assist-visitor]:checked").parent().text(), {path:'/'});
     $.cookie("visit-assist-visitor-answer", $("#visit-assist-visitor-answer").val(), {path:'/'});

     $.cookie("visit-medical-background", $("#visit-medical-background").val(), {path:'/'});

     $.cookie("visit-family-background", $("#visit-family-background").val(), {path:'/'});

});

if ($.cookie("visit-dangers")) {  $(".visit-dangers").text($.cookie("visit-dangers")); }
if ($.cookie("visit-dangers-answer")) {
     $(".visit-dangers-answer").text($.cookie("visit-dangers-answer"));
} else {
     $(".visit-dangers-answer").hide();
}

if ($.cookie("visit-assist-visitor")) {  $(".visit-assist-visitor").text($.cookie("visit-assist-visitor")); }
if ($.cookie("visit-assist-visitor-answer")) {
     $(".visit-assist-visitor-answer").text($.cookie("visit-assist-visitor-answer"));
} else {
     $(".visit-assist-visitor-answer").hide();
}

if ($.cookie("visit-medical-background")) { $(".visit-medical-background").text($.cookie("visit-medical-background")); }

if ($.cookie("visit-family-background")) { $(".visit-family-background").text($.cookie("visit-family-background")); }

$("#list-of-timeline #task-list").hide();

if ($.cookie("user-journey") == 6) {
     $("#tab-6.client-details").addClass('current');
     $("#tab-1.client-details, #tab-2.client-details, #tab-3.client-details, #tab-4.client-details, #tab-5.client-details, #tab-7.client-details").removeClass('current');
     $('.client-details .tab-link[data-tab="tab-6"]').addClass('current');
     $('.client-details .tab-link[data-tab="tab-1"], .client-details .tab-link[data-tab="tab-2"], .client-details .tab-link[data-tab="tab-3"], .client-details .tab-link[data-tab="tab-4, .client-details .tab-link[data-tab="tab-5"], .client-details .tab-link[data-tab="tab-7"]').removeClass('current');
     $('#list-of-timeline .no-items').hide();
     $('#list-of-tasks .no-items').hide();

     $("#list-of-timeline #task-list").show();
     $("#list-of-timeline #visit-confirmation").show();
     $('#list-of-tasks #task-list').show();

     $("#confirmation-dashboard-visit").show();

     // This hides the confirmation box after 5 seconds
     setTimeout(function() {
          $("#confirmation-dashboard-visit").hide(500)
     }, 5000);


     // This hides the confirmation box after 5 seconds
     setTimeout(function() {
          $("#list-of-timeline #visit-confirmation").hide(500)
     }, 5000);

}

if ($.cookie("type-of-visit")) {
     $(".type-of-visit").text($.cookie("type-of-visit"));
}
