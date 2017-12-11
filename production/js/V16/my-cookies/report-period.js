// =================================== Create Task - COOKIES =================================== //
$("#reporting-period-button").on("click", function (e) {
     $.cookie("reporting-period-completed", true, {path:'/'});

     $.cookie("report-start-day", $("#report-start-day").val(), {path:'/'});
     $.cookie("report-start-month", $("#report-start-month").val(), {path:'/'});
     $.cookie("report-start-year", $("#report-start-year").val(), {path:'/'});
     $.cookie("report-end-day", $("#report-end-day").val(), {path:'/'});
     $.cookie("report-end-month", $("#report-end-month").val(), {path:'/'});
     $.cookie("report-end-year", $("#report-end-year").val(), {path:'/'});
     $.cookie("report-why", $("#report-why").val(), {path:'/'});
     /* textarea */ $.cookie("report-notes-section", $(".report-notes-section .jqte_editor").html(), {path:'/'});
     $.cookie("report-due-date", $("#datepicker").val(), {path:'/'});

});

if ($.cookie("report-end-day")) { $(".report-end-day-answer").text($.cookie("report-end-day")); }
if ($.cookie("report-end-month")) { $(".report-end-month-answer").text($.cookie("report-end-month")); }
if ($.cookie("report-end-year")) { $(".report-end-year-answer").text($.cookie("report-end-year")); }

// Page 2 - due date
$("#due-date-button").on("click", function (e) {
     $.cookie("reporting-period-completed", true, {path:'/'});

     $.cookie("report-due-date", $("#datepicker").val(), {path:'/'});
     /* textarea */ $.cookie("report-due-date-notes", $(".report-due-date-notes .jqte_editor").html(), {path:'/'});

});

// Page 3 - level 102
$("#level-102-button").on("click", function (e) {
     $.cookie("reporting-period-completed", true, {path:'/'});

     $.cookie("report-level-gen", $("#report-level-gen:checked").val(), {path:'/'});
     /* textarea */ $.cookie("report-level-notes", $(".report-level-notes .jqte_editor").html(), {path:'/'});
});

// Decides the user journey
$(".edit-property").on("click", function (e) {
     $.cookie("edit-property", true, {path:'/'});
});

$(".edit-health").on("click", function (e) {
     $.cookie("edit-property", false, {path:'/'});
});

if ($.cookie("edit-property") == "true") {
     $(".report-level").show();
     $('#confirm-report-edit').attr('href', '../4-client-page/4a-new-client.html#property');
} else {
     $(".report-level").hide();
     $('#confirm-report-edit').attr('href', '../4-client-page/4a-new-client.html#HandW');
}

// Populate the dates on the summary page
if ($.cookie("edit-property") == "true" && $.cookie("reporting-period-completed") == "true") {
     if ($.cookie("report-due-date")) { $(".tablinks.property .due-date strong").html($.cookie("report-due-date")); }
} else if ($.cookie("edit-property") == "false" && $.cookie("reporting-period-completed") == "true") {
     if ($.cookie("report-due-date")) { $(".tablinks.health .due-date strong").html($.cookie("report-due-date")); }
}

// Changes report level
if ($.cookie("report-level-gen") == "Yes") {
     $('span.pfa-report-level').text('102');
     $('.complete-102').text('Change to a 103 report');
} else {
     $('span.pfa-report-level').text('103');
     $('.complete-102').text('Complete a 102 report');
}

// Confirmation panel
$('#reporting-period-completed').hide();

if ($.cookie("reporting-period-completed") == "true") {
     $('#reporting-period-completed').show();
     setTimeout(function() {
          $("#reporting-period-completed").hide(500)
     }, 5000);
} else {
     $('#reporting-period-completed').hide();
}

// Changes report due date
if ($.cookie("report-due-date")) { $("#datepicker").val($.cookie("report-due-date")); }
