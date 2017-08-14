// ============================================= VISIT COMMISSION - START ============================================= //
/////////////////// Step - 1 ///////////////////
if ($('.visit-commission').hasClass('step-1')) {
     $('ul li.step-1').removeClass("inactive");
     $('ul li.step-1').addClass("current");
     $('ul li.step-2, ul li.step-3, ul li.step-4, ul li.step-5, ul li.step-6').addClass("inactive");

     // Removes the HREF's from the progress bar
     $('ul li.step-2 a, ul li.step-3 a, ul li.step-4 a, ul li.step-5 a, ul li.step-6 a').removeAttr("href");
}

/////////////////// Step - 2 ///////////////////
if ($('.visit-commission').hasClass('step-2')) {
     $('ul li.step-1, ul li.step-2').removeClass("inactive");
     $('ul li.step-2').addClass("current");
     $('ul li.step-3, ul li.step-4, ul li.step-5, ul li.step-6').addClass("inactive");
     $('.border').addClass('nineteen-percent');

     // Removes the HREF's from the progress bar
     $('ul li.step-3 a, ul li.step-4 a, ul li.step-5 a, ul li.step-6 a').removeAttr("href");
}

/////////////////// Step - 3 ///////////////////
if ($('.visit-commission').hasClass('step-3')) {
     $('ul li.step-1, ul li.step-2, ul li.step-3').removeClass("inactive");
     $('ul li.step-3').addClass("current");
     $('ul li.step-4, ul li.step-5, ul li.step-6').addClass("inactive");
     $('.border').addClass('thirty-eight-percent');

     // Removes the HREF's from the progress bar
     $('ul li.step-4 a, ul li.step-5 a, ul li.step-6 a').removeAttr("href");
}

///////////////////// Step - 4  ///////////////////
if ($('.visit-commission').hasClass('step-4')) {
     $('ul li.step-1, ul li.step-2, ul li.step-3, ul li.step-4').removeClass("inactive");
     $('ul li.step-4').addClass("current");
     $('ul li.step-5, ul li.step-6').addClass("inactive");
     $('.border').addClass('sixty-percent');

     // Removes the HREF's from the progress bar
     $('ul li.step-5 a, ul li.step-6 a').removeAttr("href");
}

///////////////////// Step - 5 ///////////////////
if ($('.visit-commission').hasClass('step-5')) {
     $('ul li.step-1, ul li.step-2, ul li.step-3, ul li.step-4, ul li.step-5').removeClass("inactive");
     $('ul li.step-5').addClass("current");
     $('ul li.step-6').addClass("inactive");
     $('.border').addClass('eighty-percent');

     // Removes the HREF's from the progress bar
     $('ul li.step-6 a').removeAttr("href");
}

///////////////////// Step - 6 ///////////////////
if ($('.visit-commission').hasClass('step-6')) {
     $('ul li.step-1, ul li.step-2, ul li.step-3, ul li.step-4, ul li.step-5, ul li.step-6').removeClass("inactive");
     $('ul li.step-6').addClass("current");
     $('.border').addClass('one-hundred-percent');
}

// =================================== Progress bar - COOKIES =================================== //
if ($.cookie("completed-step-1") == 'true') {
     // Progress bar classes
     $('nav.progress-bar .step-1 a').attr('href','6a-why.html');

     $('ul li.step-1').addClass('complete').removeClass('inactive').removeClass('current-incomplete');
     $('ul li.step-2').addClass('current-incomplete').removeClass('inactive');
     $('ul li.step-3, ul li.step-4, ul li.step-5, ul li.step-6').addClass('inactive');

     $('ul li.step-1 .number span').text('');

     $('main.step-1 #cta-footer').show();

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

     $('main.step-1 #cta-footer, main.step-2 #cta-footer').show();

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
     $('main.step-1 #cta-footer, main.step-2 #cta-footer, main.step-3 #cta-footer').show();

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
     $('main.step-1 #cta-footer, main.step-2 #cta-footer, main.step-3 #cta-footer, main.step-4 #cta-footer').show();

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
     $('main.step-1 #cta-footer, main.step-2 #cta-footer, main.step-3 #cta-footer, main.step-4 #cta-footer, main.step-5 #cta-footer').show();

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
     $('.step-1 #cta-footer, .step-2 #cta-footer, .step-3 #cta-footer, .step-4 #cta-footer, .step-5 #cta-footer, .step-6 #cta-footer').show();
}
// ============================================= VISIT COMMISSION - END ============================================= //

// ============================================= CREATE CASE - START ============================================= //
/////////////////// Step - 1 ///////////////////
if ($('.create-case-journey').hasClass('step-1')) {
     $('ul li.step-1').removeClass("inactive");
     $('ul li.step-1').addClass("current");
     $('ul li.step-2, ul li.step-3, ul li.step-4').addClass("inactive");

     // Removes the HREF's from the progress bar
     $('ul li.step-2 a, ul li.step-3 a, ul li.step-4 a').removeAttr("href");
}

/////////////////// Step - 2 ///////////////////
if ($('.create-case-journey').hasClass('step-2')) {
     $('ul li.step-1, ul li.step-2').removeClass("inactive");
     $('ul li.step-2').addClass("current");
     $('ul li.step-3, ul li.step-4').addClass("inactive");
     $('.border').addClass('thirty-two-percent');

     // Removes the HREF's from the progress bar
     $('ul li.step-3 a, ul li.step-4 a').removeAttr("href");
}

/////////////////// Step - 3 ///////////////////
if ($('.create-case-journey').hasClass('step-3')) {
     $('ul li.step-1, ul li.step-2, ul li.step-3').removeClass("inactive");
     $('ul li.step-3').addClass("current");
     $('ul li.step-4').addClass("inactive");
     $('.border').addClass('sixty-seven-percent');

     // Removes the HREF's from the progress bar
     $('ul li.step-4 a').removeAttr("href");
}

/////////////////// Step - 4 ///////////////////
if ($('.create-case-journey').hasClass('step-4')) {
     $('ul li.step-1, ul li.step-2, ul li.step-3, ul li.step-4').removeClass("inactive");
     $('ul li.step-4').addClass("current");
     $('.border').addClass('one-hundred-percent');

     // Removes the HREF's from the progress bar
     // $('ul li.step-4 a').removeAttr("href");
}
// =================================== Progress bar - COOKIES =================================== //
if ($.cookie("create-case-step-1") == 'true') {
     // Progress bar classes
     $('nav.progress-bar .step-1 a').attr('href','1a-the-order.html');

     $('ul li.step-1').addClass('complete').removeClass('inactive').removeClass('current-incomplete');
     $('ul li.step-2').addClass('current-incomplete').removeClass('inactive');

     $('ul li.step-1 .number span').text('');

     $('main.step-1 #cta-footer').show();

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

     $('main.step-1 #cta-footer, main.step-2 #cta-footer').show();

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

     $('main.step-1 #cta-footer, main.step-2 #cta-footer, main.step-3 #cta-footer').show();

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

     $('main.step-1 #cta-footer, main.step-2 #cta-footer, main.step-3 #cta-footer, main.step-4 #cta-footer').show();

     $('.create-case .border').addClass('one-hundred-percent');
}
// ============================================= CREATE CASE - END ============================================= //

// ============================================= CREATE DEPUTY - START ============================================= //
/////////////////// Step - 1 ///////////////////
if ($('.create-deputy-journery').hasClass('step-1')) {
     $('ul li.step-1').removeClass("inactive");
     $('ul li.step-1').addClass("current");
     $('ul li.step-2, ul li.step-3').addClass("inactive");

     // Removes the HREF's from the progress bar
     $('ul li.step-2 a, ul li.step-3 a').removeAttr("href");
}

/////////////////// Step - 2 ///////////////////
if ($('.create-deputy-journery').hasClass('step-2')) {
     $('ul li.step-1, ul li.step-2').removeClass("inactive");
     $('ul li.step-2').addClass("current");
     $('ul li.step-3').addClass("inactive");
     $('.border').addClass('fifty-percent');

     // Removes the HREF's from the progress bar
     $('ul li.step-3 a').removeAttr("href");
}

/////////////////// Step - 3 ///////////////////
if ($('.create-deputy-journey').hasClass('step-3')) {
     $('ul li.step-1, ul li.step-2, ul li.step-3').removeClass("inactive");
     $('ul li.step-3').addClass("current");
     $('.border').addClass('one-hundred-percent');

     // Removes the HREF's from the progress bar
     // $('ul li.step-4 a').removeAttr("href");
}

// =================================== Progress bar - COOKIES =================================== //
if ($.cookie("create-deputy-step-1") == 'true') {
     // Progress bar classes
     $('nav.progress-bar .step-1 a').attr('href','5b-deputy-details.html');

     $('ul li.step-1').addClass('complete').removeClass('inactive').removeClass('current-incomplete');
     $('ul li.step-2').addClass('current-incomplete').removeClass('inactive');

     $('ul li.step-1 .number span').text('');

     $('main.step-1 #cta-footer').show();

     $('.create-deputy .border').addClass('fifty-percent');
}

if ($.cookie("create-deputy-step-1") && $.cookie("create-deputy-step-2") == 'true') {
     // Progress bar classes
     $('nav.progress-bar .step-1 a').attr('href','5b-deputy-details.html');
     $('nav.progress-bar .step-2 a').attr('href','5c-case-details.html');

     $('ul li.step-1, ul li.step-2').addClass('complete').removeClass('inactive').removeClass('current-incomplete');
     $('ul li.step-3').addClass('current-incomplete').removeClass('inactive');

     $('ul li.step-1 .number span, ul li.step-2 .number span').text('');

     $('main.step-1 #cta-footer, main.step-2 #cta-footer').show();

     $('.create-deputy .border').addClass('one-hundred-percent');
}

if ($.cookie("create-deputy-step-1") && $.cookie("create-deputy-step-2") && $.cookie("create-deputy-step-3") == 'true') {
     // Progress bar classes
     $('nav.progress-bar .step-1 a').attr('href','5b-deputy-details.html');
     $('nav.progress-bar .step-2 a').attr('href','5c-case-details.html');
     $('nav.progress-bar .step-3 a').attr('href','5d-additional-info.html');

     $('ul li.step-1, ul li.step-2, ul li.step-3').addClass('complete').removeClass('inactive').removeClass('current-incomplete');

     $('ul li.step-1 .number span, ul li.step-2 .number span, ul li.step-3 .number span').text('');

     $('main.step-1 #cta-footer, main.step-2 #cta-footer, main.step-3 #cta-footer').show();

     $('.create-deputy .border').addClass('one-hundred-percent');
}
// ============================================= CREATE DEPUTY - END ============================================= //
