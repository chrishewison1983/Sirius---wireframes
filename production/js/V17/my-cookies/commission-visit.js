// =================================== Commission visit - COOKIES =================================== //
////////////////////////////////////// DEFINE USER JOURNEY //////////////////////////////////////

// $(".task").on("click", function (e) {
//      $.cookie("journey-task-led", true, {path:'/'});
// });

// if ($.cookie("journey-task-led") == 'true') {
//      // $("#add-visitors-step-6").attr('href','../dashboard.html');
//      // $('#confirmation-dashboard-visit').show();
// } else {
//      $("#add-visitors-step-6").attr('href','../4-client-page/4a-new-client.html');
// }

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
     /* textarea */ $.cookie("visit-why-answer", $(".visit-why-answer .jqte_editor").html(), {path:'/'});
     $.cookie("visit-urgent", $("input[name=visit-urgent]:checked").val(), {path:'/'});
     $.cookie("visit-commissioned-by", $("#visit-commissioned-by").val(), {path:'/'});
     $.cookie("visit-tick-health", $("#visit-tick-health:checked").parent().text(), {path:'/'});
     $.cookie("visit-tick-compliance", $("#visit-tick-compliance:checked").parent().text(), {path:'/'});
     $.cookie("visit-tick-deputy-supervision", $("#visit-tick-deputy-supervision:checked").parent().text(), {path:'/'});
     $.cookie("visit-tick-lay-supervision", $("#visit-tick-lay-supervision:checked").parent().text(), {path:'/'});
     $.cookie("visit-tick-professional-supervision", $("#visit-tick-professional-supervision:checked").parent().text(), {path:'/'});
     $.cookie("visit-tick-non-compliant", $("#visit-tick-non-compliant:checked").parent().text(), {path:'/'});
     $.cookie("visit-tick-hmcs", $("#visit-tick-hmcs:checked").parent().text(), {path:'/'});
     $.cookie("visit-submitted-late", $("input[name=radio-inline-group-1]:checked").parent().text(), {path:'/'});
     /* textarea */ $.cookie("visit-submitted-late-answer", $(".visit-submitted-late-answer .jqte_editor").html(), {path:'/'});

     // /* textarea */ $.cookie("visit-non-health-questions", $(".visit-non-health-questions .jqte_editor").html(), {path:'/'});

     $.cookie("visit-question-1", $("#visit-question-1").val(), {path:'/'});
     $.cookie("visit-question-2", $("#visit-question-2").val(), {path:'/'});
     $.cookie("visit-question-3", $("#visit-question-3").val(), {path:'/'});
     $.cookie("visit-question-4", $("#visit-question-4").val(), {path:'/'});
     $.cookie("visit-question-5", $("#visit-question-5").val(), {path:'/'});
     $.cookie("visit-question-6", $("#visit-question-6").val(), {path:'/'});
     $.cookie("visit-question-7", $("#visit-question-7").val(), {path:'/'});
     $.cookie("visit-question-8", $("#visit-question-8").val(), {path:'/'});
     $.cookie("visit-question-9", $("#visit-question-9").val(), {path:'/'});
     $.cookie("visit-question-10", $("#visit-question-10").val(), {path:'/'});

     /* textarea */ $.cookie("visit-documents", $(".visit-documents .jqte_editor").html(), {path:'/'});
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

if ($.cookie("visit-non-health-questions")) {  $(".visit-non-health-questions").text($.cookie("visit-non-health-questions"));  }
if ($.cookie("visit-documents")) {  $(".visit-documents").text($.cookie("visit-documents")); }

if ($.cookie("visit-question-1")) {
     $(".visit-question-1").text($.cookie("visit-question-1"));
}
if ($.cookie("visit-question-1") == 'undefined') {
     $(".visit-question-1").remove();
}

if ($.cookie("visit-question-2")) {
     $(".visit-question-2").text($.cookie("visit-question-2"));
}
if ($.cookie("visit-question-2") == 'undefined') {
     $(".visit-question-2").remove();
}

if ($.cookie("visit-question-3")) {
     $(".visit-question-3").text($.cookie("visit-question-3"));
}
if ($.cookie("visit-question-3") == 'undefined') {
     $(".visit-question-3").remove();
}

if ($.cookie("visit-question-4")) {
     $(".visit-question-4").text($.cookie("visit-question-4"));
}
if ($.cookie("visit-question-4") == 'undefined') {
     $(".visit-question-4").remove();
}

if ($.cookie("visit-question-5")) {
     $(".visit-question-5").text($.cookie("visit-question-5"));
}
if ($.cookie("visit-question-5") == 'undefined') {
     $(".visit-question-5").remove();
}

if ($.cookie("visit-question-6")) {
     $(".visit-question-6").text($.cookie("visit-question-6"));
}
if ($.cookie("visit-question-6") == 'undefined') {
     $(".visit-question-6").remove();
}

if ($.cookie("visit-question-7")) {
     $(".visit-question-7").text($.cookie("visit-question-7"));
}
if ($.cookie("visit-question-7") == 'undefined') {
     $(".visit-question-7").remove();
}

if ($.cookie("visit-question-8")) {
     $(".visit-question-8").text($.cookie("visit-question-8"));
}
if ($.cookie("visit-question-8") == 'undefined') {
     $(".visit-question-8").remove();
}

if ($.cookie("visit-question-9")) {
     $(".visit-question-9").text($.cookie("visit-question-9"));
}
if ($.cookie("visit-question-9") == 'undefined') {
     $(".visit-question-9").remove();
}

if ($.cookie("visit-question-10")) {
     $(".visit-question-10").text($.cookie("visit-question-10"));
}
if ($.cookie("visit-question-10") == 'undefined') {
     $(".visit-question-10").remove();
}

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
     $.cookie("visit-location", $("input[name=visit-location]:checked").parent().text(), {path:'/'});

});

if ($.cookie("visit-location")) {  $(".visit-location").text($.cookie("visit-location"));  }

////////////////////////////////////// Step - 3 (6C-WHERE?) //////////////////////////////////////
$("#add-visitors-step-3").on("click", function (e) {
     $.cookie("visit-due-back-day", $("#visit-report-day").val(), {path:'/'});
     $.cookie("visit-due-back-month", $("#visit-report-month").val(), {path:'/'});
     $.cookie("visit-due-back-year", $("#visit-report-year").val(), {path:'/'});
     // $.cookie("visit-due-back-month", $("#visit-report-month").val(), {path:'/'});
     // $.cookie("visit-due-back-year", $("#visit-report-year").val(), {path:'/'});
     $.cookie("completed-step-3", true, {path:'/'});

     /* textarea */ $.cookie("third-party-needed", $(".third-party-needed .jqte_editor").html(), {path:'/'});
});

if ($.cookie("visit-due-back-day")) { $(".visit-due-back-day").text($.cookie("visit-due-back-day") + '/' + $.cookie("visit-due-back-month") + '/' + $.cookie("visit-due-back-year"));  }

/////////////////// ======================== !!!!!!!!!! CHANGE BASED ON DATE OF TEST - START !!!!!!!!!! ======================== ///////////////////
$('.weeks-6, .weeks-12').css('display', 'none');

// ADD 6 WEEKS
if ($.cookie("visit-urgent") === 'Yes') {
     $("#visit-report-day").val('30');
     $("#visit-report-month").val('07');
     $("#visit-report-year").val('2017');
     // $("#visit-report-month").val('07');
     // $("#visit-report-year").val('2017');
     $('.weeks-6').css('display', 'inline-block');
     $('.weeks-12').css('display', 'none');
}
// ADD 12 WEEKS
else if ($.cookie("visit-urgent") == 'undefined') {
     $("#visit-report-day").val('11');
     $("#visit-report-month").val('08');
     $("#visit-report-year").val('2017');
     // $("#visit-report-month").val('08');
     // $("#visit-report-year").val('2017');
     $('.weeks-6').css('display', 'none');
     $('.weeks-12').css('display', 'inline-block');
}
/////////////////// ======================== !!!!!!!!!! CHANGE BASED ON DATE OF TEST - END !!!!!!!!!! ======================== ///////////////////

if ($.cookie("visit-due-back-day")) {
     $(".visit-due-back-day").text($.cookie("visit-due-back-day"));
}
if ($.cookie("visit-due-back-month")) {
     $(".visit-due-back-month").text($.cookie("visit-due-back-month"));
}
if ($.cookie("visit-due-back-year")) {
     $(".visit-due-back-year").text($.cookie("visit-due-back-year"));
}


//////////////////////////////////////// Step - 4 (6D-CASE-SUMMARY-& ASSETS) //////////////////////////////////////
$("#add-visitors-step-4").on("click", function (e) {
     $.cookie("completed-step-4", true, {path:'/'});

     $.cookie("visit-assurance", $("input[name=visit-assurance]:checked").parent().text(), {path:'/'});
     $.cookie("visit-order", $("input[name=order-provided]:checked").parent().text(), {path:'/'});
     $.cookie("visit-file-name", $(".file-name").text(), {path:'/'});
     $.cookie("visit-enclosure", $("input[name=visit-enclosure]:checked").parent().text(), {path:'/'});

});

if ($.cookie("visit-assurance")) {
     $(".visit-assurance").text($.cookie("visit-assurance"));
} else {
     $(".visit-assurance").hide();
}

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
     /* textarea */ $.cookie("visit-deputy-order-10", $(".visit-deputy-order-10 .jqte_editor").val(), {path:'/'});

     $.cookie("visit-safeguarding", $("input[name=visit-safeguarding]:checked").parent().text(), {path:'/'});
     /* textarea */ $.cookie("visit-safeguarding-answer", $(".visit-safeguarding-answer .jqte_editor").val(), {path:'/'});

     $.cookie("visit-deputyship-order", $("input[name=visit-deputyship-order]:checked").parent().text(), {path:'/'});
     /* textarea */ $.cookie("visit-deputyship-order-answer", $(".visit-deputyship-order-answer .jqte_editor").val(), {path:'/'});

     $.cookie("visit-first", $("input[name=visit-first]:checked").parent().text(), {path:'/'});
     $.cookie("visit-last-visit-day", $("#visit-last-visit-day").val(), {path:'/'});
     $.cookie("visit-last-visit-month", $("#visit-last-visit-month").val(), {path:'/'});
     $.cookie("visit-last-visit-year", $("#visit-last-visit-year").val(), {path:'/'});
     // $.cookie("visit-last-visit-month", $("#visit-last-visit-month").val(), {path:'/'});
     // $.cookie("visit-last-visit-year", $("#visit-last-visit-year").val(), {path:'/'});
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
if ($.cookie("visit-deputy-order-10")) { $(".visit-deputy-order-10").text($.cookie("visit-deputy-order-10")); }
else { $(".visit-deputy-order-10").hide(); }


if ($.cookie("visit-safeguarding")) {  $(".visit-safeguarding").text($.cookie("visit-safeguarding")); }
if ($.cookie("visit-safeguarding-answer")) {
     $(".visit-safeguarding-answer-text").text($.cookie("visit-safeguarding-answer"));
} else {
     $(".visit-safeguarding-answer-text").hide();
}

if ($.cookie("visit-deputyship-order")) {  $(".visit-deputyship-order").text($.cookie("visit-deputyship-order")); }
if ($.cookie("visit-deputyship-order-answer")) {
     $(".visit-deputyship-order-answer").text($.cookie("visit-deputyship-order-answer"));
} else {
     $(".visit-deputyship-order-answer").hide();
}

if ($.cookie("visit-first")) {  $(".visit-first").text($.cookie("visit-first")); }
if ($.cookie("visit-last-visit-day")) {
     $(".visit-first-day").text($.cookie("visit-last-visit-day"));
} else {
     $(".visit-first-day").hide();
}
if ($.cookie("visit-last-visit-month")) {
     $(".visit-first-month").text($.cookie("visit-last-visit-month"));
} else {
     $(".visit-first-month").hide();
}
if ($.cookie("visit-last-visit-year")) {
     $(".visit-first-year").text($.cookie("visit-last-visit-year"));
} else {
     $(".visit-first-year").hide();
}
//////////////////////////////////////// Step - 6 (6E-VISIT SUMMARY) //////////////////////////////////////
$("#add-visitors-step-6").on("click", function (e) {
     $.cookie("user-journey", 6, {path:'/'});
     $.cookie("completed-step-6", true, {path:'/'});

     // Cookies for side bar
     $.cookie("visit-dangers", $("input[name=visit-dangers]:checked").parent().text(), {path:'/'});
     /* textarea */ $.cookie("visit-dangers-answer", $(".visit-dangers-answer .jqte_editor").html(), {path:'/'});

     $.cookie("visit-assist-visitor", $("input[name=visit-assist-visitor]:checked").parent().text(), {path:'/'});
     /* textarea */ $.cookie("visit-assist-visitor-answer", $(".visit-assist-visitor-answer .jqte_editor").html(), {path:'/'});

     /* textarea */ $.cookie("visit-medical-background", $(".visit-medical-background .jqte_editor").html(), {path:'/'});
     /* textarea */ $.cookie("visit-family-background", $(".visit-family-background .jqte_editor").html(), {path:'/'});

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

// $("#list-of-timeline #task-list").hide();

if ($.cookie("user-journey") == 6) {
     $("#tab-6.client-details").addClass('current');
     $("#tab-1.client-details, #tab-2.client-details, #tab-3.client-details, #tab-4.client-details, #tab-5.client-details, #tab-7.client-details").removeClass('current');
     $('.client-details .tab-link[data-tab="tab-6"]').addClass('current');
     $('.client-details .tab-link[data-tab="tab-1"], .client-details .tab-link[data-tab="tab-2"], .client-details .tab-link[data-tab="tab-3"], .client-details .tab-link[data-tab="tab-4, .client-details .tab-link[data-tab="tab-5"], .client-details .tab-link[data-tab="tab-7"]').removeClass('current');
     $('#list-of-timeline .no-items').hide();
     $('#list-of-tasks .no-items').hide();

     // $("#list-of-timeline #task-list").show();
     $("#list-of-timeline #visit-confirmation").show();
     $('#list-of-tasks #task-list').show();

     // DASHBOARD - This hides the confirmation box after 5 seconds
     $("#confirmation-dashboard-visit").show();

     setTimeout(function() {
          $("#confirmation-dashboard-visit").hide(500);
     }, 5000);

     $('.dashboard-item-container .no-items').hide();

     // DASHBOARD - Completed task List
     $('#completed-tasks-table').show();
     $('#completed-tasks-table').find("thead tr").show();
     $('#completed-tasks-table').find("tbody tr").hide();
     $('#completed-tasks-table').find("tbody tr.link-for-commission-visit").show().addClass("complete");
     $('#completed-tasks-table').closest("main").find('.tab-link.completed span').html(function(i, val) { return +val+1 });

     // var today = new Date();
     // document.getElementById('time').innerHTML=today;

     // n =  new Date();
     // y = n.getFullYear();
     // m = n.getMonth() + 1;
     // d = n.getDate();
     // document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

     // DASHBOARD - Task List
     $('#tasks-table').find("tr.link-for-commission-visit").addClass("complete");
     $('#tasks-table').find("tr.link-for-commission-visit").hide('slow').delay(1500);
     $('#tasks-table').closest("main").find('.tab-link.current span').html(function(i, val) { return +val-1 });

     // This hides the confirmation box after 5 seconds
     setTimeout(function() {
          $("#list-of-timeline #visit-confirmation").hide(500);
     }, 5000);

}

if ($.cookie("type-of-visit")) {
     $(".type-of-visit").text($.cookie("type-of-visit"));
}
