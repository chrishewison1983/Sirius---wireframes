// =================================== Create report - COOKIES =================================== //
// Lodge report
$("#lodge-report-button").on("click", function (e) {
     $.cookie("lodge-report-completed", true, {path:'/'});
});

if ($.cookie("lodge-report-completed") == 'true') {

     // Changes the tab styles
     $("#client-overview ul.client-details li").removeClass('current');
     $("#client-overview ul.client-details li[data-tab='summary-tab-4']").addClass('current');

     // Changes the tab content
     $('#client-overview .tab-content').removeClass('current');
     $("#client-overview #summary-tab-4").addClass('current');

     // Changes the table content
     $('#reports-table tr[data-row="lodged-row"]').removeClass('active-report');
     $('#reports-table tr[data-row="lodged-row"] td.first-column').html('<span></span>Lodged');
     $('#reports-table tr[data-row="lodged-row"] .lodge-report-cta').hide();


     setTimeout(function() {
          $.cookie("lodge-report-completed", false, {path:'/'});
     }, 5000);

}

// Page 1 - reporting period
$("#reporting-period-button, #create-report-step-1-button").on("click", function (e) {
     $.cookie("reporting-period-completed", true, {path:'/'});
     $.cookie("create-report-step-1", true, {path:'/'});

     $.cookie("report-start-day", $("#report-start-day").val(), {path:'/'});
     $.cookie("report-start-month", $("#report-start-month").val(), {path:'/'});
     $.cookie("report-start-year", $("#report-start-year").val(), {path:'/'});
     $.cookie("report-end-day", $("#report-end-day").val(), {path:'/'});
     $.cookie("report-end-month", $("#report-end-month").val(), {path:'/'});
     $.cookie("report-end-year", $("#report-end-year").val(), {path:'/'});
     $.cookie("report-why", $("#report-why").val(), {path:'/'});
     /* textarea */ $.cookie("report-notes-section", $(".report-notes-section .jqte_editor").html(), {path:'/'});
     $.cookie("report-due-date", $("p.highlight").text(), {path:'/'});

});

if ($.cookie("report-start-day")) { $(".report-start-day-answer").text($.cookie("report-start-day")); }
if ($.cookie("report-start-month")) { $(".report-start-month-answer").text($.cookie("report-start-month")); }
if ($.cookie("report-start-year")) { $(".report-start-year-answer").text($.cookie("report-start-year")); }
if ($.cookie("report-end-day")) { $(".report-end-day-answer").text($.cookie("report-end-day")); }
if ($.cookie("report-end-month")) { $(".report-end-month-answer").text($.cookie("report-end-month")); }
if ($.cookie("report-end-year")) { $(".report-end-year-answer").text($.cookie("report-end-year")); }

// Page 2 - due date
$("#due-date-button, #create-report-step-2-button").on("click", function (e) {
     $.cookie("reporting-period-completed", true, {path:'/'});
     $.cookie("create-report-step-2", true, {path:'/'});

     $.cookie("report-due-date", $("#datepicker").val(), {path:'/'});
     /* textarea */ $.cookie("report-due-date-notes", $(".report-due-date-notes .jqte_editor").html(), {path:'/'});

});

if ($.cookie("report-due-date")) { $(".report-due-date-answer").text($.cookie("report-due-date")); }


// Page 3 - level 102
$("#level-102-button, #create-report-step-3-button").on("click", function (e) {
     $.cookie("reporting-period-completed", true, {path:'/'});
     $.cookie("create-report-step-3", true, {path:'/'});

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

// if ($.cookie("edit-property") == "true") {
//      $(".report-level").show();
//      $('#confirm-report-edit').attr('href', '../4-client-page/4a-new-client.html#PFA');
// } else {
//      $(".report-level").hide();
//      $('#confirm-report-edit').attr('href', '../4-client-page/4a-new-client.html#HandW');
// }

// Populate the dates on the summary page
if ($.cookie("edit-property") == "true" && $.cookie("reporting-period-completed") == "true") {
     if ($.cookie("report-due-date")) {
          $(".tablinks.property .due-date strong").html($.cookie("report-due-date"));
          $(".due-date-property .date-wrapper").html($.cookie("report-due-date"));
     }
} else if ($.cookie("edit-property") == "false" && $.cookie("reporting-period-completed") == "true") {
     if ($.cookie("report-due-date")) {
          $(".tablinks.health .due-date strong").html($.cookie("report-due-date"));
          $(".due-date-health-welfare .date-wrapper").html($.cookie("report-due-date"));
     }
}

// Changes report level
if ($.cookie("report-level-gen") == "Yes") {
     // Changes to client hub items
     $('span.pfa-report-level').text('102');
     $('#pfa-actions .order-level').text('102');
     $('.complete-102').text('Change to a 103 report');
     $('.dashboard-row .item .date.due-date-property .edit-report-level').text('103 report');

     // Changes to report page text
     $('.report-type-text').text('103/104');

     // Changes table content
     $('#reports-table tr.active-report .report-type').text('102/104');
} else {
     // Changes to client hub items
     $('span.pfa-report-level').text('103');
     $('#pfa-actions .order-level').text('103');
     $('.complete-102').text('Complete a 102 report');
     $('.dashboard-row .item .date.due-date-property .edit-report-level').text('102 report');

     // Changes to report page text
     $('.report-type-text').text('102/104');

     // Changes table content
     $('#reports-table tr.active-report .report-type').text('103/104');

}

// Confirmation panel
$('#reporting-period-completed').hide();

if ($.cookie("reporting-period-completed") == "true") {
     $('#reporting-period-completed').show();
     setTimeout(function() {
          $("#reporting-period-completed").hide(500);
          $.cookie("reporting-period-completed", false, {path:'/'});
     }, 5000);
} else {
     $('#reporting-period-completed').hide();
}

// Changes report due date
if ($.cookie("report-due-date")) { $("#datepicker").val($.cookie("report-due-date")); }


// Page 4 - create report
$("#create-report-step-4-button, #create-report-save").on("click", function (e) {
     $.cookie("reporting-created-completed", true, {path:'/'});
     $.cookie("lodge-report", false, {path:'/'});

     // $.cookie("report-value-status", $("#report-value-status").val(), {path:'/'});
     $.cookie("report-value-non-compliant", $("input[name=report-value-non-compliant]:checked").val(), {path:'/'});
     $.cookie("report-value-staff-review", $("input[name=report-staff-review]:checked").val(), {path:'/'});
     $.cookie("report-value-assets", $("#report-value-assets").val(), {path:'/'});
     $.cookie("report-value-debts", $("#report-value-debts").val(), {path:'/'});
     $.cookie("report-value-opening", $("#report-value-opening").val(), {path:'/'});
     $.cookie("report-value-closing", $("#report-value-closing").val(), {path:'/'});
     $.cookie("report-value-gifting", $("#report-value-gifting").val(), {path:'/'});
     $.cookie("report-value-expenditure", $("#report-value-expenditure").val(), {path:'/'});
     $.cookie("report-value-monthly-income", $("#report-value-monthly-income").val(), {path:'/'});
     $.cookie("report-value-monthly-expenditure", $("#report-value-monthly-expenditure").val(), {path:'/'});
     $.cookie("report-value-care-expenses", $("#report-value-care-expenses").val(), {path:'/'});
     // $.cookie("report-value-review-date-day", $("#report-value-review-date-day").val(), {path:'/'});
     $.cookie("report-value-review-date-month", $("#report-value-review-date-month").val(), {path:'/'});
     $.cookie("report-value-review-date-year", $("#report-value-review-date-year").val(), {path:'/'});

     /* textarea */ $.cookie("report-value-notes", $(".report-value-notes .jqte_editor").html(), {path:'/'});

});

$("#create-report-step-4-button").on("click", function (e) {
     $.cookie("reporting-created-completed", true, {path:'/'});
     $.cookie("lodge-report", true, {path:'/'});
});

$(".lodging-started").on("click", function (e) {
     $.cookie("lodging-started", true, {path:'/'});
});


if ($.cookie("report-value-non-compliant") == 'Yes') {
     // Changes the list item
     $('.thumb-order-3').addClass('non-compliant').addClass('alert');

     // Checks the form item
     $('#report-value-non-compliant').parent().addClass('checked');
     $('#report-value-non-compliant').attr('checked','checked');
} else {
     $('.thumb-order-3').removeClass('non-compliant');
}

if ($.cookie("report-value-staff-review") == 'Yes') {
     // Changes the list item
     $('.staff-review').show();

     // Checks the form item
     $('#report-value-staff-review').parent().addClass('checked');
     $('#report-value-staff-review').attr('checked','checked');
} else {
     $('.staff-review').hide();
}


$('.lodged-content, .report-fully-lodged').hide();
$('.unlodged-content, .report-not-lodged').show();

if ($.cookie("reporting-created-completed") == 'true' && $.cookie("lodge-report") == 'false') {
     // Sorts the tabs
     $('li[data-tab="summary-tab-1"], li[data-tab="summary-tab-2"], li[data-tab="summary-tab-3"], li[data-tab="summary-tab-4"], li[data-tab="summary-tab-5"], li[data-tab="summary-tab-6"]').removeClass('current');
     $('li[data-tab="summary-tab-7"]').addClass('current');
     $('#summary-tab-1, #summary-tab-2, #summary-tab-3, #summary-tab-4, #summary-tab-5, #summary-tab-6').removeClass('current');
     $('#summary-tab-7').addClass('current');

     // Clears the Cookies
     setTimeout(function() {
          $.cookie("reporting-created-completed", false, {path:'/'});
          $.cookie("lodge-report", false, {path:'/'});
     }, 5000);

     // Ammends the Client Hub page
     $('.report-fully-lodged, .unlodged-content').hide();
     $('.report-not-lodged, .lodged-content').show();

} else if ($.cookie("reporting-created-completed") == 'true' && $.cookie("lodge-report") == 'true') {
     // Sorts the tabs
     $('li[data-tab="summary-tab-1"], li[data-tab="summary-tab-2"], li[data-tab="summary-tab-3"], li[data-tab="summary-tab-4"], li[data-tab="summary-tab-5"], li[data-tab="summary-tab-6"]').removeClass('current');
     $('li[data-tab="summary-tab-7"]').addClass('current');
     $('#summary-tab-1, #summary-tab-2, #summary-tab-3, #summary-tab-4, #summary-tab-5, #summary-tab-6').removeClass('current');
     $('#summary-tab-7').addClass('current');

     // Clears the Cookies
     setTimeout(function() {
          $.cookie("reporting-created-completed", false, {path:'/'});
          $.cookie("lodge-report", false, {path:'/'});
     }, 5000);

     // Ammends the Client Hub page
     $('.lodged-content, .report-fully-lodged').show();
     $('.unlodged-content, .report-not-lodged').hide();

     // Changes the state of the report li
     $(".report-value-status-answer").text('Lodged');
     $('.thumb-order-3').removeClass('active').addClass('lodged');
}

$('.warning-message').hide();

if ($.cookie("lodging-started") == 'true') {
     $('#documents-viewer .page-1').hide();
     $('#documents-viewer .page-2').show();
     $('#documents-viewer .page-2 .control-panel h2').text('Reports_document_title_1.pdf');

}

// if ($.cookie("report-value-gifting") >= '7500' && $.cookie("report-value-expenditure") >= '10000') {
//      // Chanages the outer li
//      $('.thumb-order-3').addClass('alert');
//      $('.thumb-order-3 .view-report .main-cta').addClass('delete-action');
//
//      // Changes the chart
//      $('.charts-container .charts .chart.one, .charts-container .charts .chart.two').addClass('alert');
//      $('.charts-container .charts').addClass('message-shown');
//      $('.warning-message').show();
// }

// if ($.cookie("report-value-status")) { $(".report-value-status-answer").text($.cookie("report-value-status")); }
if ($.cookie("report-value-assets")) {
     $(".report-value-assets-answer").text($.cookie("report-value-assets"));
     $('#report-value-assets').val($.cookie("report-value-assets"));
} else {
     $('li.thumb-order-3 .finance-container .item.three .figure').html('<span>...</span>');
     $('li.thumb-order-3 .finance-container .item.three .growth').hide();
}
if ($.cookie("report-value-debts")) {
     $(".report-value-debts-answer").text($.cookie("report-value-debts"));
     $('#report-value-debts').val($.cookie("report-value-debts"));
} else {
     $('li.thumb-order-3 .finance-container .item.three .figure').html('<span>...</span>');
     $('li.thumb-order-3 .finance-container .item.three .growth').hide();
}
if ($.cookie("report-value-opening")) {
     $(".report-value-opening-answer").text($.cookie("report-value-opening"));
     $('#report-value-opening').val($.cookie("report-value-opening"));
} else {
     $('li.thumb-order-3 .finance-container .item.one .figure').html('<span>...</span>');
     $('li.thumb-order-3 .finance-container .item.one .growth').hide();
}
if ($.cookie("report-value-closing")) {
     $(".report-value-closing-answer").text($.cookie("report-value-closing"));
     $('#report-value-closing').val($.cookie("report-value-closing"));
} else {
     $('li.thumb-order-3 .finance-container .item.two .figure').html('<span>...</span>');
     $('li.thumb-order-3 .finance-container .item.two .growth').hide();
}
if ($.cookie("report-value-gifting")) {
     var value = $.cookie("report-value-gifting").replace("," , "");
     var amount = parseFloat(value);
     amount = amount/1000;
     $(".report-value-gifting-graph").text(amount.toFixed(1));
     $('#report-value-gifting').val($.cookie("report-value-gifting"));
} else {
     $('.charts-container .chart.section-1.one').addClass('empty');
     $('.charts-container .chart.section-1.one .percentage').html('...');
}
if ($.cookie("report-value-expenditure")) {
     var value = $.cookie("report-value-expenditure").replace("," , "");
     var amount = parseFloat(value);
     amount = amount/1000;
     $(".report-value-expenditure-graph").text(amount.toFixed(1));
     $('#report-value-expenditure').val($.cookie("report-value-expenditure"));
} else {
     $('.charts-container .chart.section-1.two').addClass('empty');
     $('.charts-container .chart.section-1.two .percentage').html('...');
}
if ($.cookie("report-value-monthly-income")) {
     var value = $.cookie("report-value-monthly-income").replace("," , "");
     var amount = parseFloat(value/12);
     amount = amount/1000;
     $(".report-value-monthly-income-graph").text(amount.toFixed(1));
     $('#report-value-monthly-income').val($.cookie("report-value-monthly-income"));
} else {
     $('.charts-container .chart.section-1.three').addClass('empty');
     $('.charts-container .chart.section-1.three .percentage').html('...');
}
if ($.cookie("report-value-monthly-expenditure")) {
     var value = $.cookie("report-value-monthly-expenditure").replace("," , "");
     var amount = parseFloat(value/12);
     amount = amount/1000;
     $(".report-value-monthly-expenditure-graph").text(amount.toFixed(1));
     $('#report-value-monthly-expenditure').val($.cookie("report-value-monthly-expenditure"));
} else {
     $('.charts-container .chart.section-1.four').addClass('empty');
     $('.charts-container .chart.section-1.four .percentage').html('...');
}
if ($.cookie("report-value-care-expenses")) {
     var value = $.cookie("report-value-care-expenses").replace("," , "");
     var amount = parseFloat(value/12);
     amount = amount/1000;
     $(".report-value-care-expenses-graph").text(amount.toFixed(1));
     $('#report-value-care-expenses').val($.cookie("report-value-care-expenses"));

     $('#create-report-step-4-button').removeClass('de-activate').attr('href', '../4-client-page/4a-new-client.html');
} else {
     $('.charts-container .chart.section-1.five').addClass('empty');
     $('.charts-container .chart.section-1.five .percentage').html('...');
}
// if ($.cookie("report-value-review-date-day")) {
//      $(".report-value-review-date-day-answer").text($.cookie("report-value-review-date-day"));
//      $('#report-value-review-date-day').val($.cookie("report-value-review-date-day"));
// }
if ($.cookie("report-value-review-date-month")) {
     $(".report-value-review-date-month-answer").text($.cookie("report-value-review-date-month"));
     $('#report-value-review-date-month').val($.cookie("report-value-review-date-month"));
}
if ($.cookie("report-value-review-date-year")) {
     $(".report-value-review-date-year-answer").text($.cookie("report-value-review-date-year"));
     $('#report-value-review-date-year').val($.cookie("report-value-review-date-year"));
}

if ($.cookie("report-value-notes")) {
     $('.view-notes').show();
     $('.notes-section p').text($.cookie("report-value-notes"));
} else {
     $('.view-notes').hide();
}

// if ($.cookie("report-value-status") == 'Active') {
//      $("ul.report-list .thumb-order-3").addClass('active');
//      $('.report-value-status-answer').text('Active');
// } else if ($.cookie("report-value-status") == 'Lodged') {
//      $("ul.report-list .thumb-order-3").addClass('');
//      $('.report-value-status-answer').text('Lodged');
// } else if ($.cookie("report-value-status") == 'Pending') {
//      $("ul.report-list .thumb-order-3").addClass('pending');
//      $('.report-value-status-answer').text('Pending');
// }
