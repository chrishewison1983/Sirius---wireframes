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
     $.cookie("create-report-step-2", false, {path:'/'});
     $.cookie("create-report-step-3", false, {path:'/'});

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

if ($.cookie("report-start-day")) {
     $(".report-start-day-answer").text($.cookie("report-start-day"));
     $("#report-start-day").val($.cookie("report-start-day"));
}
if ($.cookie("report-start-day") == 01 || $.cookie("report-start-day") == 21 || $.cookie("report-start-day") == 31) { $(".date-tense").text('st'); }
if ($.cookie("report-start-day") == 02 || $.cookie("report-start-day") == 22) { $(".date-tense").text('nd'); }
if ($.cookie("report-start-day") == 03 || $.cookie("report-start-day") == 23) { $(".date-tense").text('rd'); }
if ($.cookie("report-start-day") == 04 || $.cookie("report-start-day") == 05 || $.cookie("report-start-day") == 06 || $.cookie("report-start-day") == 07 || $.cookie("report-start-day") == 08 || $.cookie("report-start-day") == 09 || $.cookie("report-start-day") == 10 || $.cookie("report-start-day") == 11 || $.cookie("report-start-day") == 12 || $.cookie("report-start-day") == 13 || $.cookie("report-start-day") == 14 || $.cookie("report-start-day") == 15 || $.cookie("report-start-day") == 16 || $.cookie("report-start-day") == 17 || $.cookie("report-start-day") == 18 || $.cookie("report-start-day") == 19 || $.cookie("report-start-day") == 20 || $.cookie("report-start-day") == 24 || $.cookie("report-start-day") == 25 || $.cookie("report-start-day") == 26 || $.cookie("report-start-day") == 27 || $.cookie("report-start-day") == 28 || $.cookie("report-start-day") == 29 || $.cookie("report-start-day") == 30) { $(".date-tense").text('th'); }
if ($.cookie("report-start-month")) {
     $("#report-start-month").val($.cookie("report-start-month"));
}
if ($.cookie("report-start-year")) {
     $(".report-start-year-answer").text($.cookie("report-start-year"));
     $("#report-start-year").val($.cookie("report-start-year"));
}
if ($.cookie("report-start-month") == 01) { $(".report-start-month-answer").text('January'); }
if ($.cookie("report-start-month") == 02) { $(".report-start-month-answer").text('February'); }
if ($.cookie("report-start-month") == 03) { $(".report-start-month-answer").text('March'); }
if ($.cookie("report-start-month") == 04) { $(".report-start-month-answer").text('April'); }
if ($.cookie("report-start-month") == 05) { $(".report-start-month-answer").text('May'); }
if ($.cookie("report-start-month") == 06) { $(".report-start-month-answer").text('June'); }
if ($.cookie("report-start-month") == 07) { $(".report-start-month-answer").text('July'); }
if ($.cookie("report-start-month") == 08) { $(".report-start-month-answer").text('August'); }
if ($.cookie("report-start-month") == 09) { $(".report-start-month-answer").text('September'); }
if ($.cookie("report-start-month") == 10) { $(".report-start-month-answer").text('October'); }
if ($.cookie("report-start-month") == 11) { $(".report-start-month-answer").text('November'); }
if ($.cookie("report-start-month") == 12) { $(".report-start-month-answer").text('December'); }

if ($.cookie("report-end-day")) {
     $(".report-end-day-answer").text($.cookie("report-end-day"));
     $("#report-end-day").val($.cookie("report-end-day"));
}
if ($.cookie("report-end-month")) {
     $("#report-end-month").val($.cookie("report-end-month"));
}
if ($.cookie("report-end-year")) {
     $(".report-end-year-answer").text($.cookie("report-end-year"));
     $("#report-end-year").val($.cookie("report-end-year"));
}
if ($.cookie("report-end-month") == 01) { $(".report-end-month-answer").text('January'); }
if ($.cookie("report-end-month") == 02) { $(".report-end-month-answer").text('February'); }
if ($.cookie("report-end-month") == 03) { $(".report-end-month-answer").text('March'); }
if ($.cookie("report-end-month") == 04) { $(".report-end-month-answer").text('April'); }
if ($.cookie("report-end-month") == 05) { $(".report-end-month-answer").text('May'); }
if ($.cookie("report-end-month") == 06) { $(".report-end-month-answer").text('June'); }
if ($.cookie("report-end-month") == 07) { $(".report-end-month-answer").text('July'); }
if ($.cookie("report-end-month") == 08) { $(".report-end-month-answer").text('August'); }
if ($.cookie("report-end-month") == 09) { $(".report-end-month-answer").text('September'); }
if ($.cookie("report-end-month") == 10) { $(".report-end-month-answer").text('October'); }
if ($.cookie("report-end-month") == 11) { $(".report-end-month-answer").text('November'); }
if ($.cookie("report-end-month") == 12) { $(".report-end-month-answer").text('December'); }

if ($.cookie("create-report-step-1") == "true") {
     $('#reporting-period-completed h1').html('<span></span>The "<div>reporting period</div>" has now been <div>changed</div>');
}

// Page 2 - due date
$("#due-date-button, #create-report-step-2-button").on("click", function (e) {
     $.cookie("reporting-period-completed", true, {path:'/'});
     $.cookie("create-report-step-1", false, {path:'/'});
     $.cookie("create-report-step-2", true, {path:'/'});
     $.cookie("create-report-step-3", false, {path:'/'});

     $.cookie("report-due-date", $("#datepicker").val(), {path:'/'});
     /* textarea */ $.cookie("report-due-date-notes", $(".report-due-date-notes .jqte_editor").html(), {path:'/'});

});

if ($.cookie("report-due-date")) {
     $("#datepicker").val($.cookie("report-due-date"));
     $(".report-due-date-answer").text($.cookie("report-due-date"));
}

if ($.cookie("create-report-step-2") == "true") {
     $('#reporting-period-completed h1').html(`<span></span>The "<div>report due date</div>" has now been changed to <div>${$.cookie("report-due-date")}</div>`);
}

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


// Page 3 - level 102
$("#level-102-button, #create-report-step-3-button").on("click", function (e) {
     $.cookie("reporting-period-completed", true, {path:'/'});
     $.cookie("create-report-step-1", false, {path:'/'});
     $.cookie("create-report-step-2", false, {path:'/'});
     $.cookie("create-report-step-3", true, {path:'/'});

     $.cookie("report-level-gen", $("#report-level-gen:checked").val(), {path:'/'});
     /* textarea */ $.cookie("report-level-notes", $(".report-level-notes .jqte_editor").html(), {path:'/'});
});

// Changes report level
if ($.cookie("report-level-gen") == "Yes") {
     // Changes to client hub items
     $('.order-level, span.order-level').text('102');
     $('span.pfa-report-level').text('102');
     $('.complete-102').text('Change to a 103 report');
     $('.dashboard-row .item .date.due-date-property .edit-report-level').text('103 report');

     // Changes to report page text
     $('.report-type-text').text('103/104');

     // Changes table content
     $('.alpha-reports-V1 ul.report-list li.thumb-order-3 .main-info .report-type strong').text('102/104');
     // $('#reports-table tr.active-report .report-type').text('102/104');

     // Changes the confirmation panel
     $('#reporting-period-completed h1').html('<span></span>The "<div>report type</div>" has now been changed to a <div>102</div>');

} else {
     // Changes to client hub items
     $('.order-level, span.order-level').text('103');
     $('span.pfa-report-level').text('103');
     $('.complete-102').text('Complete a 102 report');
     $('.dashboard-row .item .date.due-date-property .edit-report-level').text('102 report');

     // Changes to report page text
     $('.report-type-text').text('102/104');

     // Changes table content
     $('.alpha-reports-V1 ul.report-list li.thumb-order-3 .main-info .report-type strong').text('103/104');
     // $('#reports-table tr.active-report .report-type').text('103/104');

     // Changes the confirmation panel
     // $('#reporting-period-completed h1').html('<span></span>The "<div>report type</div>" has now been changed to a <div>103</div>');
}


// Decides the user journey
$(".edit-property").on("click", function (e) {
     $.cookie("edit-property", true, {path:'/'});
});

$(".edit-health").on("click", function (e) {
     $.cookie("edit-property", false, {path:'/'});
});

// Confirmation panel
$('#reporting-period-completed').hide();

if ($.cookie("reporting-period-completed") == "true") {
     // Changes the tab styles
     $("#client-overview ul.client-details li").removeClass('current');
     $("#client-overview ul.client-details li[data-tab='summary-tab-4']").addClass('current');

     // Changes tabs
     $('#client-overview .tab-content').removeClass('current');
     $("#client-overview #summary-tab-4").addClass('current');

     $('#reporting-period-completed').show();
     setTimeout(function() {
          $("#reporting-period-completed").hide(500);
          $.cookie("reporting-period-completed", false, {path:'/'});
     }, 5000);
} else {
     $('#reporting-period-completed').hide();
}

// Page 4 - create report
$("#lodge-report-button, #create-report-save").on("click", function (e) {
     $.cookie("reporting-created-completed", true, {path:'/'});
     $.cookie("lodge-report", false, {path:'/'});

     $.cookie("report-digital-report", $("#report-digital-report:checked").val(), {path:'/'});

     $.cookie("report-lodged-day", $("#report-lodged-day").val(), {path:'/'});
     $.cookie("report-lodged-month", $("#report-lodged-month").val(), {path:'/'});
     $.cookie("report-lodged-year", $("#report-lodged-year").val(), {path:'/'});

     $.cookie("report-value-review-date-month", $("#report-value-review-date-month").val(), {path:'/'});
     $.cookie("report-value-review-date-year", $("#report-value-review-date-year").val(), {path:'/'});

     $.cookie("report-value-assets", $("#report-value-assets").val(), {path:'/'});
     $.cookie("report-value-debts", $("#report-value-debts").val(), {path:'/'});
     $.cookie("report-value-opening", $("#report-value-opening").val(), {path:'/'});
     $.cookie("report-value-closing", $("#report-value-closing").val(), {path:'/'});
     $.cookie("report-value-monthly-income", $("#report-value-monthly-income").val(), {path:'/'});
     $.cookie("report-value-monthly-expenditure", $("#report-value-monthly-expenditure").val(), {path:'/'});
     $.cookie("report-value-expenditure", $("#report-value-expenditure").val(), {path:'/'});
     $.cookie("report-value-care-expenses", $("#report-value-care-expenses").val(), {path:'/'});
     $.cookie("report-value-gifting", $("#report-value-gifting").val(), {path:'/'});

     /* textarea */ $.cookie("report-value-notes", $(".report-value-notes .jqte_editor").html(), {path:'/'});

});

$("#lodge-report-button").on("click", function (e) {
     $.cookie("reporting-created-completed", true, {path:'/'});
     $.cookie("lodge-report", true, {path:'/'});
});

$(".lodging-started").on("click", function (e) {
     $.cookie("lodging-started", true, {path:'/'});
});


$('.lodged-content, .report-fully-lodged').hide();
$('.unlodged-content, .report-not-lodged').show();

$('.info-container .lodged-content').show();

if ($.cookie("reporting-created-completed") == 'true' && $.cookie("lodge-report") == 'false') {
     // Sorts the tabs
     $('#client-overview ul.client-details li').removeClass('current');
     $('#client-overview ul.client-details li[data-tab="summary-tab-4"]').addClass('current');
     $('#client-overview .client-details.tab-content').removeClass('current');
     $('#client-overview .client-details.tab-content#summary-tab-4').addClass('current');

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
     $('ul.client-details li').removeClass('current');
     $('ul.client-details li[data-tab="summary-tab-4"]').addClass('current');
     $('#summary-tab-1, #summary-tab-2, #summary-tab-3, #summary-tab-5, #summary-tab-6, #summary-tab-7').removeClass('current');
     $('#summary-tab-4').addClass('current');

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
     $('ul.report-list li.thumb-order-3 .view-report').hide();
     $('ul.report-list li.thumb-order-3 .cta-row').hide();
     $('ul.report-list li.thumb-order-3 .lodging-section .place-holder-text').hide();
     $('ul.report-list li.thumb-order-3 .lodging-section').html(`
          <div class="content-wrapper">
               <div class="item">
                    <div class="wrapper">
                         <p>Digital report:</p>
                         <p class="highlight report-digital-report-answer">...</p>
                    </div>
               </div>
               <div class="item">
                    <div class="wrapper">
                         <p>Date report received:</p>
                         <p class="highlight report-lodged-date-answer">...</p>
                    </div>
               </div>
               <div class="item">
                    <div class="wrapper">
                         <p>Care plan review date:</p>
                         <p class="highlight report-value-review-date-answer">...</p>
                    </div>
               </div>
               <div class="item">
                    <div class="wrapper">
                         <p>Total assets:</p>
                         <p class="highlight report-value-assets-answer">...</p>
                    </div>
               </div>
          </div>
          <div class="content-wrapper">
               <div class="item">
                    <div class="wrapper">
                         <p>Client's debts:</p>
                         <p class="highlight report-value-debts-answer">...</p>
                    </div>
               </div>
               <div class="item">
                    <div class="wrapper">
                         <p>Opening balance:</p>
                         <p class="highlight report-value-opening-answer">...</p>
                    </div>
               </div>
               <div class="item">
                    <div class="wrapper">
                         <p>Closing balance:</p>
                         <p class="highlight report-value-closing-answer">...</p>
                    </div>
               </div>
               <div class="item">
                    <div class="wrapper">
                         <p>Total money in:</p>
                         <p class="highlight report-value-monthly-income-answer">...</p>
                    </div>
               </div>
          </div>
          <div class="content-wrapper">
               <div class="item">
                    <div class="wrapper">
                         <p>Total money out:</p>
                         <p class="highlight report-value-monthly-expenditure-answer">...</p>
                    </div>
               </div>
               <div class="item">
                    <div class="wrapper">
                         <p>Deputy expenditure:</p>
                         <p class="highlight report-value-expenditure-answer">...</p>
                    </div>
               </div>
               <div class="item">
                    <div class="wrapper">
                         <p>Care expenses:</p>
                         <p class="highlight report-value-care-expenses-answer">...</p>
                    </div>
               </div>
               <div class="item">
                    <div class="wrapper">
                         <p>Gifting:</p>
                         <p class="highlight report-value-gifting-answer">...</p>
                    </div>
               </div>
          </div>
          <div class="content-wrapper">
               <div class="item-notes">
                    <div class="wrapper">
                         <p>Reason for determination:</p>
                         <p class="highlight report-value-notes-answer">...</p>
                    </div>
               </div>
          </div>
     `);

}

$('.warning-message').hide();

if ($.cookie("lodging-started") == 'true') {
     $('#documents-viewer .page-1').hide();
     $('#documents-viewer .page-2').show();
     $('#documents-viewer .page-2 .control-panel h2').text('Reports_document_title_1.pdf');
}

if ($.cookie("report-digital-report")) {
     $(".report-digital-report-answer").text($.cookie("report-digital-report"));
     $('#report-digital-report').parent().addClass('checked');
     $('#report-digital-report').attr('checked', 'checked');
} else {
     $(".report-digital-report-answer").text('No');
     $('#report-digital-report').parent().removeClass('checked');
     $('#report-digital-report').removeAttr('checked');
}


if ($.cookie("report-lodged-day") && $.cookie("report-lodged-month") && $.cookie("report-lodged-year")) {
     $(".report-lodged-date-answer").text($.cookie("report-lodged-day") + '/' + $.cookie("report-lodged-month") + '/' + $.cookie("report-lodged-year"));
}

if ($.cookie("report-lodged-day")) { $('#report-lodged-day').val($.cookie("report-lodged-day")); }
if ($.cookie("report-lodged-month")) { $('#report-lodged-month').val($.cookie("report-lodged-month")); }
if ($.cookie("report-lodged-year")) { $('#report-lodged-year').val($.cookie("report-lodged-year")); }


if ($.cookie("report-value-review-date-month") && $.cookie("report-value-review-date-year")) {
     $(".report-value-review-date-answer").text($.cookie("report-value-review-date-month") + '/' + $.cookie("report-value-review-date-year"));
}

if ($.cookie("report-value-review-date-month")) { $('#report-value-review-date-month').val($.cookie("report-value-review-date-month")); }
if ($.cookie("report-value-review-date-year")) { $('#report-value-review-date-year').val($.cookie("report-value-review-date-year")); }

if ($.cookie("report-value-assets")) {
     $(".report-value-assets-answer").text($.cookie("report-value-assets"));
     $('#report-value-assets').val($.cookie("report-value-assets"));
}
// else {
//      $('li.thumb-order-3 .finance-container .item.three .figure').html('<span>...</span>');
//      $('li.thumb-order-3 .finance-container .item.three .growth').hide();
// }

if ($.cookie("report-value-debts")) {
     $(".report-value-debts-answer").text($.cookie("report-value-debts"));
     $('#report-value-debts').val($.cookie("report-value-debts"));
}
// else {
//      $('li.thumb-order-3 .finance-container .item.three .figure').html('<span>...</span>');
//      $('li.thumb-order-3 .finance-container .item.three .growth').hide();
// }
if ($.cookie("report-value-opening")) {
     $(".report-value-opening-answer").text($.cookie("report-value-opening"));
     $('#report-value-opening').val($.cookie("report-value-opening"));
}
// else {
//      $('li.thumb-order-3 .finance-container .item.one .figure').html('<span>...</span>');
//      $('li.thumb-order-3 .finance-container .item.one .growth').hide();
// }
if ($.cookie("report-value-closing")) {
     $(".report-value-closing-answer").text($.cookie("report-value-closing"));
     $('#report-value-closing').val($.cookie("report-value-closing"));
}
// else {
//      $('li.thumb-order-3 .finance-container .item.two .figure').html('<span>...</span>');
//      $('li.thumb-order-3 .finance-container .item.two .growth').hide();
// }
if ($.cookie("report-value-monthly-income")) {
     var value = $.cookie("report-value-monthly-income").replace("," , "");
     // var amount = parseFloat(value/12);
     // amount = amount/1000;
     // $(".report-value-monthly-income-graph").text(amount.toFixed(1));
     // $('#report-value-monthly-income').val($.cookie("report-value-monthly-income"));
     //
     $(".report-value-monthly-income-answer").text(value);

}
// else {
//      $('.charts-container .chart.section-1.three').addClass('empty');
//      $('.charts-container .chart.section-1.three .percentage').html('...');
// }
if ($.cookie("report-value-monthly-expenditure")) {
     var value = $.cookie("report-value-monthly-expenditure").replace("," , "");
     // var amount = parseFloat(value/12);
     // amount = amount/1000;
     // $(".report-value-monthly-expenditure-graph").text(amount.toFixed(1));
     // $('#report-value-monthly-expenditure').val($.cookie("report-value-monthly-expenditure"));

     $(".report-value-monthly-expenditure-answer").text(value);

}
// else {
//      $('.charts-container .chart.section-1.four').addClass('empty');
//      $('.charts-container .chart.section-1.four .percentage').html('...');
// }
if ($.cookie("report-value-expenditure")) {
     var value = $.cookie("report-value-expenditure").replace("," , "");
     // var amount = parseFloat(value);
     // amount = amount/1000;
     // $(".report-value-expenditure-graph").text(amount.toFixed(1));
     // $('#report-value-expenditure').val($.cookie("report-value-expenditure"));

     $(".report-value-expenditure-answer").text(value);
}
// else {
//      $('.charts-container .chart.section-1.two').addClass('empty');
//      $('.charts-container .chart.section-1.two .percentage').html('...');
// }
if ($.cookie("report-value-care-expenses")) {
     var value = $.cookie("report-value-care-expenses").replace("," , "");
     // var amount = parseFloat(value/12);
     // amount = amount/1000;
     // $(".report-value-care-expenses-graph").text(amount.toFixed(1));
     // $('#report-value-care-expenses').val($.cookie("report-value-care-expenses"));

     $(".report-value-care-expenses-answer").text(value);

     // $('#lodge-report-button').removeClass('de-activate').attr('href', '../4-client-hub/4a-new-client.html');
}
// else {
//      $('.charts-container .chart.section-1.five').addClass('empty');
//      $('.charts-container .chart.section-1.five .percentage').html('...');
// }
if ($.cookie("report-value-gifting")) {
     var value = $.cookie("report-value-gifting").replace("," , "");
     // var amount = parseFloat(value);
     // amount = amount/1000;
     // $(".report-value-gifting-graph").text(amount.toFixed(1));
     // $('#report-value-gifting').val($.cookie("report-value-gifting"));

     $(".report-value-gifting-answer").text(value);

}
// else {
//      $('.charts-container .chart.section-1.one').addClass('empty');
//      $('.charts-container .chart.section-1.one .percentage').html('...');
// }

if ($.cookie("report-value-notes")) {
     $('.view-notes').show();
     $('.notes-section p').text($.cookie("report-value-notes"));

     $(".report-value-notes-answer").text($.cookie("report-value-notes"));

} else {
     $('.view-notes').hide();
}

// Abandon report
$("#abandon-report-button").on("click", function (e) {
     $.cookie("abandoned-report", true, {path:'/'});

     $.cookie("report-abandoned-date", $("#datepicker").val(), {path:'/'});

     // $.cookie("report-abandoned-day", $("#report-abandoned-day").val(), {path:'/'});
     // $.cookie("report-abandoned-month", $("#report-abandoned-month").val(), {path:'/'});
     // $.cookie("report-abandoned-year", $("#report-abandoned-year").val(), {path:'/'});

     /* textarea */ $.cookie("report-abandoned-notes", $(".report-abandoned-notes .jqte_editor").html(), {path:'/'});

});

$('.report-content-link[data-link="4"]').hide();

if ($.cookie("abandoned-report") == 'true') {
     // Hides the cta
     $(".abandon-report-link").hide();

     // Show details link
     $('.alpha-reports-V1 ul.report-list li.thumb-order-3 .report-content-link[data-link="4"]').show();
     $('.alpha-reports-V1 ul.report-list li.thumb-order-3 .report-content-link[data-link="3"]').hide();

     // Changes the tab styles
     $("#client-overview ul.client-details li").removeClass('current');
     $("#client-overview ul.client-details li[data-tab='summary-tab-4']").addClass('current');

     // Changes tabs
     $('#client-overview .tab-content').removeClass('current');
     $("#client-overview #summary-tab-4").addClass('current');

     // Changes the row items
     $('.alpha-reports-V1 ul.report-list li.thumb-order-3').addClass('alert').removeClass('active');
     $('.alpha-reports-V1 ul.report-list li.thumb-order-3 .report-value-status-answer').html('Abandoned');
     $('.alpha-reports-V1 ul.report-list li.thumb-order-3 .view-report').hide();
     // $('.alpha-reports-V1 ul.report-list li.thumb-order-3 .cta-row').find('.non-abandoned-link').hide();
     // $('.alpha-reports-V1 ul.report-list li.thumb-order-3 .main-info').css('width', '71%');

     // Populates the cookie values
     $(".report-abandoned-date-answer").text($.cookie("report-abandoned-date"));
     // $(".report-abandoned-date-answer").text($.cookie("report-abandoned-day") + '/' + $.cookie("report-abandoned-month") + '/' + $.cookie("report-abandoned-year"));
     $(".report-abandoned-notes-answer").text($.cookie("report-abandoned-notes"));

     // $('#reports-table tr[data-row="lodged-row"]').addClass('abandoned-report').removeClass('active-report');
     // $('#reports-table tr[data-row="lodged-row"] td.first-column').html('<strong>Abandoned</strong>');

     // Clears the Cookies
     setTimeout(function() {
          $.cookie("abandoned-report", false, {path:'/'});
          $('#reporting-period-completed').slideUp();
     }, 5000);

     $('#reporting-period-completed').slideDown();
     $('#reporting-period-completed h1').html('<span></span>The report has been <div>abandoned</div>');

}
