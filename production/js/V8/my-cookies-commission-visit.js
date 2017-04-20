// =================================== Commission visit - COOKIES =================================== //
/////////////////// Step - 1 (6A-WHY?) ///////////////////
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
     $.cookie("visit-specific-questions", $("#visit-specific-questions").val(), {path:'/'});
     $.cookie("visit-documents", $("#visit-documents").val(), {path:'/'});
});

// Populate side bar
if ($.cookie("visit-why")) {  $(".visit-why").text($.cookie("visit-why"));  }
if ($.cookie("visit-why-answer")) {
     $(".visit-why-answer").text($.cookie("visit-why-answer"));
} else {
     $(".visit-why-answer").hide();
}
if ($.cookie("visit-urgent")) {
     $(".visit-urgent").text('No');
} else {

}
if ($.cookie("visit-commissioned-by")) {  $(".visit-commissioned-by").text($.cookie("visit-commissioned-by"));  }
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
if ($.cookie("visit-submitted-late")) {  $(".visit-submitted-late").text($.cookie("visit-submitted-late"));  }
if ($.cookie("visit-submitted-late-answer")) {
     $(".visit-submitted-late-answer").text($.cookie("visit-submitted-late-answer"));
} else {
     $(".visit-submitted-late-answer").hide();
}
if ($.cookie("visit-specific-questions")) {  $(".visit-specific-questions").text($.cookie("visit-specific-questions"));  }
if ($.cookie("visit-documents")) {  $(".visit-documents").text($.cookie("visit-documents"));  }

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

/////////////////// Step - 2 (6B-WHO?) ///////////////////
$("#add-visitors-step-2").on("click", function (e) {
     $.cookie("completed-step-2", true, {path:'/'});
});

/////////////////// Step - 3 (6C-WHERE?) ///////////////////
$("#add-visitors-step-3").on("click", function (e) {
     $.cookie("visit-due-back-date", $("#datepicker").val(), {path:'/'});
     $.cookie("completed-step-3", true, {path:'/'});
});

if ($.cookie("visit-due-back-date")) {
     $(".visit-due-back-date").text($.cookie("visit-due-back-date"));
}

///////////////////// Step - 4 (6D-CASE-SUMMARY-& ASSETS) ///////////////////
$("#add-visitors-step-4").on("click", function (e) {
     $.cookie("completed-step-4", true, {path:'/'});
});

if ($.cookie("user-journey") == 4) {
     $("#tab-4.client-details").addClass('current');
     $("#tab-1.client-details, #tab-2.client-details, #tab-3.client-details, #tab-5.client-details, #tab-6.client-details").removeClass('current');
     $('.client-details .tab-link[data-tab="tab-4"]').addClass('current');
     $('.client-details .tab-link[data-tab="tab-1"], .client-details .tab-link[data-tab="tab-2"], .client-details .tab-link[data-tab="tab-3"], .client-details .tab-link[data-tab="tab-5, .client-details .tab-link[data-tab="tab-6"]').removeClass('current');
     $('#list-of-timeline .no-items').hide();
     $('#list-of-tasks .no-items').hide();

     $("#list-of-timeline #task-list").show();
     $("#list-of-timeline #visit-confirmation").show();
     $('#list-of-tasks #task-list').show();

     // This hides the confirmation box after 5 seconds
     setTimeout(function() {
          $("#list-of-timeline #visit-confirmation").hide(500)
     }, 5000);

}

///////////////////// Step - 5 (6E-CASE-DETAILS) ///////////////////
$("#add-visitors-step-5").on("click", function (e) {
     $.cookie("completed-step-5", true, {path:'/'});
});

///////////////////// Step - 6 (6E-VISIT SUMMARY) ///////////////////
$("#add-visitors-step-6").on("click", function (e) {
     $.cookie("user-journey", 4, {path:'/'});
     $.cookie("completed-step-6", true, {path:'/'});
});

$("#list-of-timeline #task-list").hide();

if ($.cookie("user-journey") == 4) {
     $("#tab-4.client-details").addClass('current');
     $("#tab-1.client-details, #tab-2.client-details, #tab-3.client-details, #tab-5.client-details, #tab-6.client-details").removeClass('current');
     $('.client-details .tab-link[data-tab="tab-4"]').addClass('current');
     $('.client-details .tab-link[data-tab="tab-1"], .client-details .tab-link[data-tab="tab-2"], .client-details .tab-link[data-tab="tab-3"], .client-details .tab-link[data-tab="tab-5, .client-details .tab-link[data-tab="tab-6"]').removeClass('current');
     $('#list-of-timeline .no-items').hide();
     $('#list-of-tasks .no-items').hide();

     $("#list-of-timeline #task-list").show();
     $("#list-of-timeline #visit-confirmation").show();
     $('#list-of-tasks #task-list').show();

     // This hides the confirmation box after 5 seconds
     setTimeout(function() {
          $("#list-of-timeline #visit-confirmation").hide(500)
     }, 5000);

}

if ($.cookie("type-of-visit")) {
     $(".type-of-visit").text($.cookie("type-of-visit"));
}

// =================================== Progress bar - COOKIES =================================== //
if ($.cookie("completed-step-1") == 'true') {
     $('#step-1').show();
     $('#step-2, #step-3, #step-4, #step-5, #step-6').hide();
     $('ul li.step-1 .number span').text('').addClass('complete');
     $('.step-1 #cta-footer').show();
}

if ($.cookie("completed-step-2") == 'true') {
     $('#step-1, #step-2').show();
     $('#step-3, #step-4, #step-5, #step-6').hide();
     $('ul li.step-1 .number span, ul li.step-2 .number span').text('').addClass('complete');
     $('.step-1 #cta-footer, .step-2 #cta-footer').show();
}

if ($.cookie("completed-step-3") == 'true') {
     $('#step-1, #step-2, #step-3').show();
     $('#step-4, #step-5, #step-6').hide();
     $('ul li.step-1 .number span, ul li.step-2 .number span, ul li.step-3 .number span').text('').addClass('complete');
     $('.step-1 #cta-footer, .step-2 #cta-footer, .step-3 #cta-footer').show();
}

if ($.cookie("completed-step-4") == 'true') {
     $('#step-1, #step-2, #step-3, #step-4').show();
     $('#step-5, #step-6').hide();
     $('ul li.step-1 .number span, ul li.step-2 .number span, ul li.step-3 .number span, ul li.step-4 .number span').text('').addClass('complete');
     $('.step-1 #cta-footer, .step-2 #cta-footer, .step-3 #cta-footer, .step-4 #cta-footer').show();
}

if ($.cookie("completed-step-5") == 'true') {
     $('#step-1, #step-2, #step-3, #step-4, #step-5, #step-6').show();
     $('ul li.step-1 .number span, ul li.step-2 .number span, ul li.step-3 .number span, ul li.step-4 .number span, ul li.step-5 .number span').text('').addClass('complete');
     $('.step-1 #cta-footer, .step-2 #cta-footer, .step-3 #cta-footer, .step-4 #cta-footer, .step-5 #cta-footer').show();
}

if ($.cookie("completed-step-6") == 'true') {
     $('#step-1, #step-2, #step-3, #step-4, #step-5, #step-6').show();
     $('ul li.step-1 .number span, ul li.step-2 .number span, ul li.step-3 .number span, ul li.step-4 .number span, ul li.step-5 .number span, ul li.step-6 .number span').text('').addClass('complete');
     $('.step-1 #cta-footer, .step-2 #cta-footer, .step-3 #cta-footer, .step-4 #cta-footer, .step-5 #cta-footer, .step-6 #cta-footer').show();
}
