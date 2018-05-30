// =================================== Create contact - COOKIES =================================== //
// Add contact populate
$("#create-contact").on("click", function (e) {

     $.cookie("contact-added", true, {path:'/'});
     $.cookie("create-letter-journey", false, {path:'/'});

     // contact PERSONAL DETAILS
     $.cookie("contact-type", $("#contact-type").val(), {path:'/'});
     $.cookie("contact-type-other", $("#contact-type-other").val(), {path:'/'});
     $.cookie("contact-title", $("#contact-title").val(), {path:'/'});
     $.cookie("contact-first-name", $("#contact-first-name").val(), {path:'/'});
     $.cookie("contact-last-name", $("#contact-last-name").val(), {path:'/'});
     /* textarea */ $.cookie("contact-notes", $(".contact-notes .jqte_editor").html(), {path:'/'});
     $.cookie("contact-company-name", $("#contact-company-name").val(), {path:'/'});
     $.cookie("contact-company-ref", $("#contact-company-ref").val(), {path:'/'});
     $.cookie("contact-address-line-1", $("#contact-address-line-1").val(), {path:'/'});
     $.cookie("contact-address-line-2", $("#contact-address-line-2").val(), {path:'/'});
     $.cookie("contact-address-line-3", $("#contact-address-line-3").val(), {path:'/'});
     $.cookie("contact-address-town", $("#contact-address-town").val(), {path:'/'});
     $.cookie("contact-address-county", $("#contact-address-county").val(), {path:'/'});
     $.cookie("contact-manual-postcode", $("#contact-manual-postcode").val(), {path:'/'});
     $.cookie("contact-country", $("#contact-country").val(), {path:'/'});
     $.cookie("contact-country-desc", $("#contact-country-description").val(), {path:'/'});
     $.cookie("contact-airmail", $("input[name=contact-airmail]:checked").val(), {path:'/'});
     $.cookie("contact-phone-number", $("#contact-phone-number").val(), {path:'/'});
     $.cookie("contact-mob-number", $("#contact-mob-number").val(), {path:'/'});
     $.cookie("contact-email", $("#contact-email").val(), {path:'/'});
     $.cookie("contact-correspondence-post", $("#contact-correspondence-post:checked").val(), {path:'/'});
     $.cookie("contact-correspondence-phone", $("#contact-correspondence-phone:checked").val(), {path:'/'});
     $.cookie("contact-correspondence-email", $("#contact-correspondence-email:checked").val(), {path:'/'});
     $.cookie("contact-correspondence-welsh", $("#contact-correspondence-welsh:checked").val(), {path:'/'});
     $.cookie("contact-special-audio", $("#contact-special-audio:checked").val(), {path:'/'});
     $.cookie("contact-special-print", $("#contact-special-print:checked").val(), {path:'/'});
     $.cookie("contact-special-hearing", $("#contact-special-hearing:checked").val(), {path:'/'});
     $.cookie("contact-special-spelling", $("#contact-special-spelling:checked").val(), {path:'/'});
     $.cookie("contact-interpreter", $("input[name=contact-interpreter]:checked").val(), {path:'/'});
     $.cookie("contact-interpreter-details", $("#contact-interpreter-details").val(), {path:'/'});

});

// Add to contact list
if ($.cookie("contact-added") == 'true') {
     $('#contact-list tbody').append(`
          <tr class="summary-row" data-value="3">
               <td>
                    <div class="name">
                         <div class="contact-name-value"><div class="contact-first-name-answer">TrustMe</div> <div class="contact-last-name-answer">Limited</div></div>
                    </div><br>
                    <div class="address">
                         <p>
                              <strong class="contact-address-line-1-answer"></strong>,
                              <strong class="contact-address-line-2-answer"></strong>
                              <strong class="contact-address-line-3-answer"></strong>
                              <strong class="contact-address-town-answer"></strong>,
                              <strong class="contact-address-county-answer"></strong>,
                              <strong class="contact-manual-postcode-answer"></strong>
                              <strong class="contact-country-answer"></strong>
                         </p>
                    </div>
                    <a href="#" class="full-details" data-value="3">View full details</a>
               </td>
               <td>
                    <span class="contact-mob-number-answer"></span>
               </td>
               <td>
                    <p>
                         Company name:
                         <strong class="contact-company-name-answer">TrustMe</strong>
                         <br><br>
                         Company ref:
                         <strong class="contact-last-name-answer">Limited</strong>
                    </p>
               </td>
               <td>
                    <a href="#" class="main-cta tertiary edit">Edit</a>
                    <a href="#delete-contact" rel="modal:open" class="main-cta tertiary delete delete-contact">Delete</a>
               </td>
          </tr>

          <tr class="details-row" data-value="3">
               <td colspan="4">

                    <div class="details-wrap">

                         <div class="person-detail-item">
                              <p class="item">Phone number:</p>
                              <p class="answer contact-phone-number-answer"></p>
                         </div>

                         <div class="person-detail-item">
                              <p class="item">Mobile number:</p>
                              <p class="answer contact-mob-number-answer"></p>
                         </div>

                         <div class="person-detail-item">
                              <p class="item">Email:</p>
                              <p class="answer contact-email-answer"></p>
                         </div>

                         <div class="person-detail-item">
                              <p class="item">Preferences:</p>
                              <p class="answer">
                                   <strong class="contact-placeholder">None</strong>
                                   <strong class="contact-correspondence-post-answer"></strong>
                                   <strong class="contact-correspondence-phone-answer"></strong>
                                   <strong class="contact-correspondence-email-answer"></strong>
                                   <strong class="contact-correspondence-welsh-answer"></strong>
                                   <strong class="contact-special-audio-answer"></strong>
                                   <strong class="contact-special-print-answer"></strong>
                                   <strong class="contact-special-hearing-answer"></strong>
                                   <strong class="contact-special-spelling-answer"></strong>
                              </p>
                         </div>

                         <div class="person-detail-item full-width">
                              <p class="item">Notes:</p>
                              <p class="answer contact-notes-answer"></p>
                         </div>

                    </div>

               </td>
          </tr>
     `);
     $('#selected-list').append(`
          <li data-correspondent-id="10">
               <a class="correspondent">
                    <span><strong class="contact-title-answer"></strong> <strong class="contact-first-name-answer"></strong> <strong class="contact-last-name-answer"></strong></span><br>
                    <span class="type contact-type-answer"></span><br>
                    <span class="sub-text">
                         <div class="contact-address-line-1-answer"></div>,
                         <div class="contact-address-line-2-answer"></div>
                         <div class="contact-address-line-3-answer"></div>
                         <div class="contact-address-town-answer"></div>,
                         <div class="contact-address-county-answer"></div>,
                         <div class="contact-manual-postcode-answer"></div>
                         <div class="contact-country-answer"></div>
                    </span>
                    <span class="communication-preferences" style="display: none;">undefined</span>
                    <span class="requirement-preferences" style="display: none;">undefined</span>
               </a>
		</li>
     `);

     // Changes the tabs
     $('#client-overview .tabs .tab-link').removeClass('current');
     $('#client-overview .tabs .tab-link[data-tab="summary-tab-5"]').addClass('current');
     $('#summary-tab-1, #summary-tab-2, #summary-tab-3, #summary-tab-4, #summary-tab-5, #summary-tab-6, #summary-tab-7, #summary-tab-8, #summary-tab-9, #summary-tab-10, #summary-tab-11').removeClass('current');
     $('#summary-tab-5').addClass('current');

     // Adds a number to the counter
     $('.contacts-number').text('3');
} else {

}

// CONTACT DETAILS
if ($.cookie("contact-type")) { $(".contact-type-answer").text($.cookie("contact-type")); }

if ($.cookie("contact-title")) {  }
if ($.cookie("contact-title") == 'Other') {
     $(".contact-title-answer").text($.cookie("contact-title-other"));
} else if ($.cookie("contact-title")) {
     $(".contact-title-answer").text($.cookie("contact-title-other"));
}

if ($.cookie("contact-first-name")) { $(".contact-first-name-answer").text($.cookie("contact-first-name")); }
if ($.cookie("contact-last-name")) { $(".contact-last-name-answer").text($.cookie("contact-last-name")); }
if ($.cookie("contact-notes")) { $(".contact-notes-answer").text($.cookie("contact-notes")); }

if ($.cookie("contact-company-name")) {
     $(".contact-company-name-answer").text($.cookie("contact-company-name"));
} else {
     $('.company-name').hide();
}
if ($.cookie("contact-company-ref")) {
     $(".contact-company-ref-answer").text($.cookie("contact-company-ref"));
} else {
     $('.company-name').hide();
}


if ($.cookie("contact-address-line-1")) { $(".contact-address-line-1-answer").text($.cookie("contact-address-line-1")); }
if ($.cookie("contact-address-line-2") == '' || $.cookie("contact-address-line-2") == null || $.cookie("contact-address-line-2") == 'undefined') {
     $(".contact-address-line-2-answer").hide();
} else if ($.cookie("contact-address-line-2")) {
     $(".contact-address-line-2-answer").html($.cookie("contact-address-line-2") + ',');
}
if ($.cookie("contact-address-line-3") == '' || $.cookie("contact-address-line-3") == null || $.cookie("contact-address-line-3") == 'undefined') {
     $(".contact-address-line-3-answer").hide();
} else if ($.cookie("contact-address-line-3")) {
     $(".contact-address-line-3-answer").html($.cookie("contact-address-line-3") + ',');
}
if ($.cookie("contact-address-town")) { $(".contact-address-town-answer").text($.cookie("contact-address-town")); }
if ($.cookie("contact-address-county")) { $(".contact-address-county-answer").text($.cookie("contact-address-county")); }
if ($.cookie("contact-manual-postcode")) {
     $(".contact-manual-postcode-answer").html($.cookie("contact-manual-postcode") + '.');
}
if ($.cookie("contact-country")) {
     $(".contact-country-answer").html($.cookie("contact-country") + '.');
     $('.contact-outside-uk, .contact-airmail, .contact-airmail--answer').hide();
} else if ($.cookie("contact-country") == 'Outside') {
     $('.contact-outside-uk, .contact-airmail, .contact-airmail-answer').show();
     $(".contact-country-answer").html($.cookie("contact-country-desc") + '.');
}
if ($.cookie("contact-airmail") == '' || $.cookie("contact-airmail") == null || $.cookie("contact-airmail") == 'undefined') {
     $(".contact-airmail-answer").text('No');
} else if ($.cookie("contact-airmail")) {
     $(".contact-airmail-answer").text($.cookie("contact-airmail"));
}

if ($.cookie("contact-phone-number")) { $(".contact-phone-number-answer").text($.cookie("contact-phone-number")); }
if ($.cookie("contact-mob-number")) { $(".contact-mob-number-answer").text($.cookie("contact-mob-number")); }
if ($.cookie("contact-email")) { $(".contact-email-answer").text($.cookie("contact-email")); }

$('.contact-placeholder').show();

if ($.cookie("contact-correspondence-post") == 'post') {
     $(".contact-correspondence-post-answer").text($.cookie("contact-correspondence-post") + ',');
     $('.contact-placeholder').hide();
} else if ($.cookie("contact-correspondence-post") == '' || $.cookie("contact-correspondence-post") == 'null' || $.cookie("contact-correspondence-post") == 'undefined') {
     $(".contact-correspondence-post-answer").hide();
}
if ($.cookie("contact-correspondence-phone") == 'phone') {
     $(".contact-correspondence-phone-answer").text($.cookie("contact-correspondence-phone") + ',');
     $('.contact-placeholder').hide();
} else if ($.cookie("contact-correspondence-phone") == '' || $.cookie("contact-correspondence-phone") == 'null' || $.cookie("contact-correspondence-phone") == 'undefined') {
     $(".contact-correspondence-phone-answer").hide();
}
if ($.cookie("contact-correspondence-email") == 'email') {
     $(".contact-correspondence-email-answer").text($.cookie("contact-correspondence-email") + ',');
     $('.contact-placeholder').hide();
} else if ($.cookie("contact-correspondence-email") == '' || $.cookie("contact-correspondence-email") == 'null' || $.cookie("contact-correspondence-email") == 'undefined') {
     $(".contact-correspondence-email-answer").hide();
}
if ($.cookie("contact-correspondence-welsh") == 'welsh') {
     $(".contact-correspondence-welsh-answer").text($.cookie("contact-correspondence-welsh") + ',');
     $('.contact-placeholder').hide();
} else if ($.cookie("contact-correspondence-welsh") == '' || $.cookie("contact-correspondence-welsh") == 'null' || $.cookie("contact-correspondence-welsh") == 'undefined') {
     $(".contact-correspondence-welsh-answer").hide();
}
if ($.cookie("contact-special-audio") == 'audio') {
     $(".contact-special-audio-answer").text($.cookie("contact-special-audio") + ',');
     $('.contact-placeholder').hide();
} else if ($.cookie("contact-special-audio") == '' || $.cookie("contact-special-audio") == 'null' || $.cookie("contact-special-audio") == 'undefined') {
     $(".contact-special-audio-answer").hide();
}
if ($.cookie("contact-special-print") == 'print') {
     $(".contact-special-print-answer").text($.cookie("contact-special-print") + ',');
     $('.contact-placeholder').hide();
} else if ($.cookie("contact-special-print") == '' || $.cookie("contact-special-print") == 'null' || $.cookie("contact-special-print") == 'undefined') {
     $(".contact-special-print-answer").hide();
}
if ($.cookie("contact-special-hearing") == 'hearing') {
     $(".contact-special-hearing-answer").text($.cookie("contact-special-hearing") + ',');
     $('.contact-placeholder').hide();
} else if ($.cookie("contact-special-hearing") == '' || $.cookie("contact-special-hearing") == 'null' || $.cookie("contact-special-hearing") == 'undefined') {
     $(".contact-special-hearing-answer").hide();
}
if ($.cookie("contact-special-spelling") == 'spelling') {
     $(".contact-special-spelling-answer").text($.cookie("contact-special-spelling") + ',');
     $('.contact-placeholder').hide();
} else if ($.cookie("contact-special-spelling") == '' || $.cookie("contact-special-spelling") == 'null' || $.cookie("contact-special-spelling") == 'undefined') {
     $(".contact-special-spelling-answer").hide();
}
if ($.cookie("contact-interpreter") == 'Yes') {
     $(".contact-interpreter-answer").text($.cookie("contact-interpreter"));
     $('.contact-interpreter-details-answer').show();
} else if ($.cookie("contact-interpreter") == 'No') {
     $(".contact-interpreter-answer").text($.cookie("contact-interpreter"));
     $('.contact-interpreter-details-answer').hide();
}
if ($.cookie("contact-interpreter-details")) {
     $(".contact-interpreter-details-answer").text(', ' + $.cookie("contact-interpreter-details"));
} else if ($.cookie("contact-interpreter-details")) {
     $(".contact-interpreter-details-answer").hide();
}



if ($.cookie("contact-newsletter") == 'Yes') {
     $(".contact-newsletter-answer").text($.cookie("contact-interpreter"));
} else if ($.cookie("contact-newsletter") == 'No') {
     $(".contact-newsletter-answer").text($.cookie("contact-interpreter"));
}

// Creates the journey
$(".add-contact-journey").on("click", function (e) {
     $.cookie("add-contact-journey", true, {path:'/'});
});

$(".letter-contact-journey, .create-letter").on("click", function (e) {
     $.cookie("add-contact-journey", false, {path:'/'});
});

if ($.cookie("add-contact-journey") == 'true') {
     $('li[data-tab="tab-1"], li[data-tab="tab-2"]').hide();
     $('li[data-tab="tab-5"]').addClass('current');
     $('li[data-tab="tab-1"], li[data-tab="tab-2"], li[data-tab="tab-3"], li[data-tab="tab-4"], li[data-tab="tab-6"]').removeClass('current');
     $('#tab-1, #tab-2').hide();
     $('#tab-5').addClass('current');
     $('#tab-1, #tab-2, #tab-3, #tab-4, #tab-6').removeClass('current');
     (function() {
          $('#contact-first-name, #contact-last-name').keyup(function() {

               var empty = false;
               $('#contact-first-name, #contact-last-name').each(function() {
                    if ($(this).val() == '') {
                         empty = true;
                    }
               });

               if (empty) {
                    $('#create-contact').removeAttr('href').addClass('de-activate');
               } else {
                    $('#create-contact').attr('href', '../4-client-page/4a-new-client.html').removeClass('de-activate');
               }
          });
     })()
} else {
     (function() {
          $('#contact-first-name, #contact-last-name').keyup(function() {

               var empty = false;
               $('#contact-first-name, #contact-last-name').each(function() {
                    if ($(this).val() == '') {
                         empty = true;
                    }
               });

               if (empty) {
                    $('#create-contact').removeAttr('href').addClass('de-activate');
               } else {
                    $('#create-contact').attr('href', '2b-add-correspondance.html').removeClass('de-activate');
               }
          });
     })()
}
