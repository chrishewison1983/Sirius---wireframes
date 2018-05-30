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
// ============================================= CREATE DEPUTY - END ============================================= //

// ============================================= CREATE CLIENT - START ============================================= //
/////////////////// Step - 1 ///////////////////
if ($('.create-client-journery').hasClass('step-1')) {
     $('ul li.step-1').removeClass("inactive");
     $('ul li.step-1').addClass("current");
     $('ul li.step-2, ul li.step-3').addClass("inactive");

     // Removes the HREF's from the progress bar
     $('ul li.step-2 a, ul li.step-3 a').removeAttr("href");
}

/////////////////// Step - 2 ///////////////////
if ($('.create-client-journery').hasClass('step-2')) {
     $('ul li.step-1, ul li.step-2').removeClass("inactive");
     $('ul li.step-2').addClass("current");
     $('ul li.step-3').addClass("inactive");
     $('.border').addClass('fifty-percent');

     // Removes the HREF's from the progress bar
     $('ul li.step-3 a').removeAttr("href");
}

/////////////////// Step - 3 ///////////////////
// if ($('.create-client-journey').hasClass('step-3')) {
//      $('ul li.step-1, ul li.step-2, ul li.step-3').removeClass("inactive");
//      $('ul li.step-3').addClass("current");
//      $('.border').addClass('one-hundred-percent');
// }
// ============================================= CREATE CLIENT - END ============================================= //

// ============================================= CREATE REPORT - START ============================================= //
/////////////////// Step - 1 ///////////////////
if ($('.reporting-period-journey').hasClass('step-1')) {
     $('ul li.step-1').removeClass("inactive");
     $('ul li.step-1').addClass("current");
     $('ul li.step-2, ul li.step-3, ul li.step-4').addClass("inactive");

     // Removes the HREF's from the progress bar
     $('ul li.step-2 a, ul li.step-3 a, ul li.step-4 a').removeAttr("href");
}

/////////////////// Step - 2 ///////////////////
if ($('.reporting-period-journey').hasClass('step-2')) {
     $('ul li.step-1, ul li.step-2').removeClass("inactive");
     $('ul li.step-2').addClass("current");
     $('ul li.step-3, ul li.step-4').addClass("inactive");
     $('.border').addClass('thirty-two-percent');

     // Removes the HREF's from the progress bar
     $('ul li.step-3 a, ul li.step-4 a').removeAttr("href");
}

/////////////////// Step - 3 ///////////////////
if ($('.reporting-period-journey').hasClass('step-3')) {
     $('ul li.step-1, ul li.step-2, ul li.step-3').removeClass("inactive");
     $('ul li.step-3').addClass("current");
     $('ul li.step-4').addClass("inactive");
     $('.border').addClass('sixty-seven-percent');

     // Removes the HREF's from the progress bar
     $('ul li.step-4 a').removeAttr("href");
}

/////////////////// Step - 4 ///////////////////
if ($('.reporting-period-journey').hasClass('step-4')) {
     $('ul li.step-1, ul li.step-2, ul li.step-3, ul li.step-4').removeClass("inactive");
     $('ul li.step-4').addClass("current");
     $('.border').addClass('one-hundred-percent');

     // Removes the HREF's from the progress bar
     // $('ul li.step-4 a').removeAttr("href");
}
// ============================================= CREATE REPORT - END ============================================= //
