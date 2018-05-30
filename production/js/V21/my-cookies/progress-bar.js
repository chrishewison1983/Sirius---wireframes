// ============================================= VISIT COMMISSION - START ============================================= //
if ($.cookie("completed-step-1") == 'true') {
     // Progress bar classes
     $('nav.progress-bar .step-1 a').attr('href','6a-why.html');

     $('ul li.step-1').addClass('complete').removeClass('inactive').removeClass('current-incomplete');
     $('ul li.step-2').addClass('current-incomplete').removeClass('inactive');
     $('ul li.step-3, ul li.step-4, ul li.step-5, ul li.step-6').addClass('inactive');

     $('ul li.step-1 .number span').text('');

     $('.commission-visit .border').addClass('nineteen-percent').removeClass('thirty-eight-percent, sixty-percent, eighty-percent, one-hundred-percent');
}

if ($.cookie("completed-step-1") && $.cookie("completed-step-2") == 'true') {
     // Progress bar classes
     $('nav.progress-bar .step-1 a').attr('href','6a-why.html');
     $('nav.progress-bar .step-2 a').attr('href','6b-who.html');

     $('ul li.step-1, ul li.step-2').addClass('complete').removeClass('inactive').removeClass('current-incomplete');
     $('ul li.step-3').addClass('current-incomplete').removeClass('inactive');
     $('ul li.step-4, ul li.step-5, ul li.step-6').addClass('inactive');

     $('ul li.step-1 .number span, ul li.step-2 .number span').text('');

     $('.commission-visit .border').addClass('thirty-eight-percent').removeClass('nineteen-percent, sixty-percent, eighty-percent, one-hundred-percent');
}

if ($.cookie("completed-step-1") && $.cookie("completed-step-2") && $.cookie("completed-step-3") == 'true') {
     // Progress bar classes
     $('nav.progress-bar .step-1 a').attr('href','6a-why.html');
     $('nav.progress-bar .step-2 a').attr('href','6b-who.html');
     $('nav.progress-bar .step-3 a').attr('href','6c-where.html');

     $('ul li.step-1, ul li.step-2, ul li.step-3').addClass('complete').removeClass('inactive').removeClass('current-incomplete');
     $('ul li.step-4').addClass('current-incomplete').removeClass('inactive');
     $('ul li.step-5, ul li.step-6').addClass('inactive');

     $('ul li.step-1 .number span, ul li.step-2 .number span, ul li.step-3 .number span').text('');

     $('.commission-visit .border').addClass('sixty-percent').removeClass('nineteen-percent, thirty-eight-percent, eighty-percent, one-hundred-percent');
}

if ($.cookie("completed-step-1") && $.cookie("completed-step-2") && $.cookie("completed-step-3") && $.cookie("completed-step-4") == 'true') {
     // Progress bar classes
     $('nav.progress-bar .step-1 a').attr('href','6a-why.html');
     $('nav.progress-bar .step-2 a').attr('href','6b-who.html');
     $('nav.progress-bar .step-3 a').attr('href','6c-where.html');
     $('nav.progress-bar .step-4 a').attr('href','6d-case-details.html');

     $('ul li.step-1, ul li.step-2, ul li.step-3, ul li.step-4').addClass('complete').removeClass('inactive').removeClass('current-incomplete');
     $('ul li.step-5').addClass('current-incomplete').removeClass('inactive');
     $('ul li.step-6').addClass('inactive');

     $('ul li.step-1 .number span, ul li.step-2 .number span, ul li.step-3 .number span, ul li.step-4 .number span').text('');

     $('.commission-visit .border').addClass('eighty-percent').removeClass('nineteen-percent, thirty-eight-percent, sixty-percent, one-hundred-percent');
}

if ($.cookie("completed-step-1") && $.cookie("completed-step-2") && $.cookie("completed-step-3") && $.cookie("completed-step-4") && $.cookie("completed-step-5") == 'true') {
     // Progress bar classes
     $('nav.progress-bar .step-1 a').attr('href','6a-why.html');
     $('nav.progress-bar .step-2 a').attr('href','6b-who.html');
     $('nav.progress-bar .step-3 a').attr('href','6c-where.html');
     $('nav.progress-bar .step-4 a').attr('href','6d-case-details.html');
     $('nav.progress-bar .step-5 a').attr('href','6e-summary-of-case.html');
     $('nav.progress-bar .step-6 a').attr('href','6f-confirm-visit.html');

     $('ul li.step-1, ul li.step-2, ul li.step-3, ul li.step-4, ul li.step-5, ul li.step-6').addClass('complete').removeClass('inactive').removeClass('current-incomplete');
     $('ul li.step-6').addClass('current-incomplete').removeClass('complete');
     // $('ul li.step-6').addClass('inactive');
     $('ul li.step-1 .number span, ul li.step-2 .number span, ul li.step-3 .number span, ul li.step-4 .number span, ul li.step-5 .number span').text('');

     $('.commission-visit .border').addClass('one-hundred-percent').removeClass('nineteen-percent, thirty-eight-percent, sixty-percent, eighty-percent');
}

if ($.cookie("completed-step-1") && $.cookie("completed-step-2") && $.cookie("completed-step-3") && $.cookie("completed-step-4") && $.cookie("completed-step-5") && $.cookie("completed-step-6") == 'true') {
     // Progress bar classes
     $('nav.progress-bar .step-1 a').attr('href','6a-why.html');
     $('nav.progress-bar .step-2 a').attr('href','6b-who.html');
     $('nav.progress-bar .step-3 a').attr('href','6c-where.html');
     $('nav.progress-bar .step-4 a').attr('href','6d-case-details.html');
     $('nav.progress-bar .step-5 a').attr('href','6e-summary-of-case.html');
     $('nav.progress-bar .step-6 a').attr('href','6f-confirm-visit.html');

     $('ul li.step-1 .number span, ul li.step-2 .number span, ul li.step-3 .number span, ul li.step-4 .number span, ul li.step-5 .number span, ul li.step-6 .number span').text('').addClass('complete');
}
// ============================================= VISIT COMMISSION - END ============================================= //

// ============================================= CREATE CASE - START ============================================= //
if ($.cookie("create-case-step-1") == 'true') {
     // Progress bar classes
     $('nav.progress-bar .step-1 a').attr('href','1a-the-order.html');

     $('ul li.step-1').addClass('complete').removeClass('inactive').removeClass('current-incomplete');
     $('ul li.step-2').addClass('current-incomplete').removeClass('inactive');

     $('ul li.step-1 .number span').text('');

     $('.create-case .border').addClass('thirty-two-percent');
}

if ($.cookie("create-case-step-1") && $.cookie("create-case-step-2") == 'true') {
     // Progress bar classes
     $('nav.progress-bar .step-1 a').attr('href','1a-the-order.html');
     $('nav.progress-bar .step-2 a').attr('href','1b-the-bond.html');

     $('ul li.step-1, ul li.step-2').addClass('complete').removeClass('inactive').removeClass('current-incomplete');
     $('ul li.step-3').addClass('current-incomplete').removeClass('inactive');
     $('ul li.step-4').addClass('inactive');

     $('ul li.step-1 .number span, ul li.step-2 .number span').text('');

     $('.create-case .border').addClass('sixty-seven-percent');
}

if ($.cookie("create-case-step-1") && $.cookie("create-case-step-2") && $.cookie("create-case-step-3") == 'true') {
     // Progress bar classes
     $('nav.progress-bar .step-1 a').attr('href','1a-the-order.html');
     $('nav.progress-bar .step-2 a').attr('href','1b-the-bond.html');
     $('nav.progress-bar .step-3 a').attr('href','1c-the-files.html');

     $('ul li.step-1, ul li.step-2, ul li.step-3').addClass('complete').removeClass('inactive').removeClass('current-incomplete');
     $('ul li.step-4').addClass('current-incomplete').removeClass('inactive');

     $('ul li.step-1 .number span, ul li.step-2 .number span, ul li.step-3 .number span').text('');

     $('.create-case .border').addClass('one-hundred-percent');
}

if ($.cookie("create-case-step-1") && $.cookie("create-case-step-2") && $.cookie("create-case-step-3") && $.cookie("create-case-step-4") == 'true') {
     // Progress bar classes
     $('nav.progress-bar .step-1 a').attr('href','1a-the-order.html');
     $('nav.progress-bar .step-2 a').attr('href','1b-the-bond.html');
     $('nav.progress-bar .step-3 a').attr('href','1c-the-files.html');
     $('nav.progress-bar .step-4 a').attr('href','1d-deputies.html');

     $('ul li.step-1, ul li.step-2, ul li.step-3, ul li.step-4').addClass('complete').removeClass('inactive').removeClass('current-incomplete');

     $('ul li.step-1 .number span, ul li.step-2 .number span, ul li.step-3 .number span, ul li.step-4 .number span').text('');

     $('.create-case .border').addClass('one-hundred-percent');
}
// ============================================= CREATE CASE - END ============================================= //

// ============================================= CREATE DEPUTY - START ============================================= //
if ($.cookie("create-deputy-step-1") == 'true') {
     // Progress bar classes
     $('nav.progress-bar .step-1 a').attr('href','5b-deputy-details.html');

     $('ul li.step-1').addClass('complete').removeClass('inactive').removeClass('current-incomplete');
     $('ul li.step-2').addClass('current-incomplete').removeClass('inactive');

     $('ul li.step-1 .number span').text('');

     $('.create-deputy .border').addClass('fifty-percent');
}

if ($.cookie("create-deputy-step-1") && $.cookie("create-deputy-step-2") == 'true') {
     // Progress bar classes
     $('nav.progress-bar .step-1 a').attr('href','5b-deputy-details.html');
     $('nav.progress-bar .step-2 a').attr('href','5c-additional-info.html');

     $('ul li.step-1, ul li.step-2').addClass('complete').removeClass('inactive').removeClass('current-incomplete');
     $('ul li.step-3').addClass('current-incomplete').removeClass('inactive');

     $('ul li.step-1 .number span, ul li.step-2 .number span').text('');

     $('.create-deputy .border').addClass('one-hundred-percent');
}

if ($.cookie("create-deputy-step-1") && $.cookie("create-deputy-step-2") && $.cookie("create-deputy-step-3") == 'true') {
     // Progress bar classes
     $('nav.progress-bar .step-1 a').attr('href','5b-deputy-details.html');
     $('nav.progress-bar .step-2 a').attr('href','5c-additional-info.html');
     $('nav.progress-bar .step-3 a').attr('href','5d-case-details.html');

     $('ul li.step-1, ul li.step-2, ul li.step-3').addClass('complete').removeClass('inactive').removeClass('current-incomplete');

     $('ul li.step-1 .number span, ul li.step-2 .number span, ul li.step-3 .number span').text('');

     $('.create-deputy .border').addClass('one-hundred-percent');
}
// ============================================= CREATE DEPUTY - END ============================================= //

// ============================================= CREATE CLIENT - START ============================================= //
if ($.cookie("create-client-step-1") == 'true') {
     // Progress bar classes
     $('nav.progress-bar .step-1 a').attr('href','3a-create-client.html');

     $('ul li.step-1').addClass('complete').removeClass('inactive').removeClass('current-incomplete');
     $('ul li.step-2').addClass('current-incomplete').removeClass('inactive');

     $('ul li.step-1 .number span').text('');

     $('.create-client .border').addClass('one-hundred-percent');
}

if ($.cookie("create-client-step-1") && $.cookie("create-client-step-2") == 'true') {
     // Progress bar classes
     $('nav.progress-bar .step-1 a').attr('href','3a-create-client.html');
     $('nav.progress-bar .step-2 a').attr('href','3b-additional-details.html');

     $('ul li.step-1, ul li.step-2').addClass('complete').removeClass('inactive').removeClass('current-incomplete');
     $('ul li.step-3').addClass('current-incomplete').removeClass('inactive');

     $('ul li.step-1 .number span, ul li.step-2 .number span').text('');

     $('.create-client .border').addClass('one-hundred-percent');
}

// if ($.cookie("create-client-step-1") && $.cookie("create-client-step-2") && $.cookie("create-client-step-3") == 'true') {
//      // Progress bar classes
//      $('nav.progress-bar .step-1 a').attr('href','3a-create-client.html');
//      $('nav.progress-bar .step-2 a').attr('href','3b-additional-details.html');
//      $('nav.progress-bar .step-3 a').attr('href','3c-order-details.html');
//
//      $('ul li.step-1, ul li.step-2, ul li.step-3').addClass('complete').removeClass('inactive').removeClass('current-incomplete');
//
//      $('ul li.step-1 .number span, ul li.step-2 .number span, ul li.step-3 .number span').text('');
//
//      $('.create-client .border').addClass('one-hundred-percent');
// }
// ============================================= CREATE CLIENT - END ============================================= //


// ============================================= CREATE REPORT - START ============================================= //
if ($.cookie("create-report-step-1") == 'true') {
     // Progress bar classes
     $('nav.progress-bar .step-1 a').attr('href','18a-reporting-period.html');

     $('ul li.step-1').addClass('complete').removeClass('inactive').removeClass('current-incomplete');
     $('ul li.step-2').addClass('current-incomplete').removeClass('inactive');

     $('ul li.step-1 .number span').text('');

     $('.create-report .border').addClass('thirty-two-percent');
}

if ($.cookie("create-report-step-1") && $.cookie("create-report-step-2") == 'true') {
     // Progress bar classes
     $('nav.progress-bar .step-1 a').attr('href','18a-reporting-period.html');
     $('nav.progress-bar .step-2 a').attr('href','18b-due-date.html');

     $('ul li.step-1, ul li.step-2').addClass('complete').removeClass('inactive').removeClass('current-incomplete');
     $('ul li.step-3').addClass('current-incomplete').removeClass('inactive');
     $('ul li.step-4').addClass('inactive');

     $('ul li.step-1 .number span, ul li.step-2 .number span').text('');

     $('.create-report .border').addClass('sixty-seven-percent');
}

if ($.cookie("create-report-step-1") && $.cookie("create-report-step-2") && $.cookie("create-report-step-3") == 'true') {
     // Progress bar classes
     $('nav.progress-bar .step-1 a').attr('href','18a-reporting-period.html');
     $('nav.progress-bar .step-2 a').attr('href','18b-due-date.html');
     $('nav.progress-bar .step-3 a').attr('href','18c-level-102.html');

     $('ul li.step-1, ul li.step-2, ul li.step-3').addClass('complete').removeClass('inactive').removeClass('current-incomplete');
     $('ul li.step-4').addClass('current-incomplete').removeClass('inactive');

     $('ul li.step-1 .number span, ul li.step-2 .number span, ul li.step-3 .number span').text('');

     $('.create-report .border').addClass('one-hundred-percent');
}

if ($.cookie("create-report-step-1") && $.cookie("create-report-step-2") && $.cookie("create-report-step-3") && $.cookie("create-report-step-4") == 'true') {
     // Progress bar classes
     $('nav.progress-bar .step-1 a').attr('href','18a-reporting-period.html');
     $('nav.progress-bar .step-2 a').attr('href','18b-due-date.html');
     $('nav.progress-bar .step-3 a').attr('href','18c-level-102.html');
     $('nav.progress-bar .step-4 a').attr('href','18d-create-report.html');

     $('ul li.step-1, ul li.step-2, ul li.step-3, ul li.step-4').addClass('complete').removeClass('inactive').removeClass('current-incomplete');

     $('ul li.step-1 .number span, ul li.step-2 .number span, ul li.step-3 .number span, ul li.step-4 .number span').text('');

     $('.create-report .border').addClass('one-hundred-percent');
}
// ============================================= CREATE REPORT - END ============================================= //
