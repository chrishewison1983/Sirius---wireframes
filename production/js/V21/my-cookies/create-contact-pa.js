// =================================== Create contact page - PA - COOKIES =================================== //
$('.add-pa-contact').click(function(){
     $.cookie("add-pa-contact-journey", true, {path:'/'});
     $.cookie("add-pro-contact-journey", false, {path:'/'});
});

if ($.cookie("add-pa-contact-journey") == 'true') {
     $('#section-header.deputy-page.content-page nav.breadcrumb').html(`
          <a href="../index.html" class="user-type-link">Dashboard</a>
          <div class="separator"> > </div>
          <a href="../14-deputy-page/14c-deputy-page.html">Weston Parpenham</a>
          <div class="separator"> > </div>
          <span>Create an office</span>
     `);

     $('#section-header.deputy-page.content-page h1 .deputy-office-name').html(`
          Weston Parpenham
     `);

     watchFormChanges($('.add-deputy-contact-form'), $('#create-deputy-contact'));
     $('#create-deputy-contact').attr('href', '../14-deputy-page/14c-deputy-page.html');
}

// Save the contact details - PA
$("#create-deputy-contact").on("click", function (e) {
     $.cookie("create-contact-pa", true, {path:'/'});
     $.cookie("create-contact-pro", false, {path:'/'});

     // DEPUTY PERSONAL DETAILS
     // $.cookie("deputy-type", $("#deputy-type").val(), {path:'/'});
     $.cookie("deputy-contact-team", $("input[name=deputy-contact-team]:checked").val(), {path:'/'});
     $.cookie("deputy-contact-title", $("#deputy-contact-title").val(), {path:'/'});
     $.cookie("deputy-contact-title-other", $("#deputy-contact-title-other").val(), {path:'/'});
     $.cookie("deputy-contact-first-name", $("#deputy-contact-first-name").val(), {path:'/'});
     $.cookie("deputy-contact-last-name", $("#deputy-contact-last-name").val(), {path:'/'});
     $.cookie("deputy-contact-team-name", $("#deputy-contact-team-name").val(), {path:'/'});
     $.cookie("deputy-contact-phone-number", $("#deputy-contact-phone-number").val(), {path:'/'});
     $.cookie("deputy-contact-mob-number", $("#deputy-contact-mob-number").val(), {path:'/'});
     $.cookie("deputy-contact-email", $("#deputy-contact-email").val(), {path:'/'});

     $.cookie("deputy-contact-correspondence-post", $("#deputy-contact-correspondence-post:checked").val(), {path:'/'});
     $.cookie("deputy-contact-correspondence-phone", $("#deputy-contact-correspondence-phone:checked").val(), {path:'/'});
     $.cookie("deputy-contact-correspondence-email", $("#deputy-contact-correspondence-email:checked").val(), {path:'/'});
     $.cookie("deputy-contact-correspondence-welsh", $("#deputy-contact-correspondence-welsh:checked").val(), {path:'/'});
     $.cookie("deputy-contact-special-audio", $("#deputy-contact-special-audio:checked").val(), {path:'/'});
     $.cookie("deputy-contact-special-print", $("#deputy-contact-special-print:checked").val(), {path:'/'});
     $.cookie("deputy-contact-special-hearing", $("#deputy-contact-special-hearing:checked").val(), {path:'/'});
     $.cookie("deputy-contact-special-spelling", $("#deputy-contact-special-spelling:checked").val(), {path:'/'});

     /* textarea */ $.cookie("deputy-contact-notes", $(".deputy-contact-notes .jqte_editor").html(), {path:'/'});
});

if ($.cookie("create-contact-pa") == 'true' && $.cookie("add-pa-contact-journey") == 'true') {

     // setTimeout(function() {
     //      $.cookie("create-contact-pa", false, {path:'/'});
     // }, 5000);

     // Changes the tabs
     $('.deputy-details-page.public ul.deputy-tabs li').removeClass('current');
     $('.deputy-details-page.public ul.deputy-tabs li[data-tab="tab-3"]').addClass('current');
     $('.deputy-details-page.public .tab-content').removeClass('current');
     $('.deputy-details-page.public .tab-content#tab-3').addClass('current');

     var contactNumber = parseInt($('ul.deputy-tabs li[data-tab="tab-3"] span').text());
     $('ul.deputy-tabs li[data-tab="tab-3"] span').text(contactNumber + 1);

     // Add the contact to the Deputy
     $('#contact-list-deputy-pa tbody').prepend(`
          <tr class="summary-row" data-value="0">
               <td>
                    <div class="name">
                         <span class="icon deputy"></span>
                         <span class="icon company"></span>
                         <div class="contact-name-value">
                              <div class="deputy-contact-team-name-answer">TrustMe</div>
                              <div class="deputy-contact-title-answer">TrustMe</div>
                              <div class="deputy-contact-first-name-answer">TrustMe</div>
                              <div class="deputy-contact-last-name-answer">Limited</div>
                         </div>
                    </div><br>
                    <div class="address">
                         <div class="deputy-contact-team-name-answer">TrustMe</div>
                         <div class="deputy-contact-title-answer">TrustMe</div>
                         <div class="deputy-contact-first-name-answer">TrustMe</div>
                         <div class="deputy-contact-last-name-answer">Limited</div>
                    </div>
                    <div class="phone-number">
                         <span class="deputy-contact-mob-number-answer"></span>
                    </div>
                    <a href="#" class="full-details" data-value="0">View full details</a>
               </td>
               <td>
                    <a href="#" class="deputy-contact-email-answer">N/A</a>
               </td>
               <td>
                    <a href="#" class="main-cta tertiary edit">Edit</a>
                    <a href="#delete-contact" rel="modal:open" class="main-cta tertiary delete delete-contact">Delete</a>
               </td>
          </tr>

          <tr class="details-row" data-value="0">
               <td colspan="3">

                    <div class="details-wrap">

                         <div class="person-detail-item">
                              <p class="item">Phone number:</p>
                              <p class="answer deputy-contact-phone-number-answer"></p>
                         </div>

                         <div class="person-detail-item">
                              <p class="item">Mobile number:</p>
                              <p class="answer deputy-contact-mob-number-answer"></p>
                         </div>

                         <div class="person-detail-item">
                              <p class="item">How would they like to be contacted?:</p>
                              <ul class="answer">
                                   <li class="deputy-contact-placeholder-contact">None</li>
                                   <li class="deputy-contact-correspondence-post-answer"></li>
                                   <li class="deputy-contact-correspondence-phone-answer"></li>
                                   <li class="deputy-contact-correspondence-email-answer"></li>
                                   <li class="deputy-contact-correspondence-welsh-answer"></li>
                              </ul>
                         </div>

                         <div class="person-detail-item">
                              <p class="item">Special correspondence requirements:</p>
                              <ul class="answer special-info-answer">
                                   <li class="deputy-contact-placeholder-special">None</li>
                                   <li class="deputy-contact-special-audio-answer"></li>
                                   <li class="deputy-contact-special-print-answer"></li>
                                   <li class="deputy-contact-special-hearing-answer"></li>
                                   <li class="deputy-contact-special-spelling-answer"></li>
                              </ul>
                         </div>

                    </div>

                    <div class="details-wrap full-width">

                         <div class="person-detail-item full-width">
                              <p class="item">Notes:</p>
                              <p class="answer deputy-contact-notes-answer"></p>
                         </div>

                    </div>

               </td>
          </tr>
     `);
}

if ($.cookie("deputy-contact-team") == 'No') {
     $('#contact-list-deputy-pa tbody tr[data-value="0"] .name').find('.company').hide();
     $('#contact-list-deputy-pa tbody tr[data-value="0"] .name .contact-name-value').find('.deputy-contact-team-name-answer').hide();
     $('#contact-list-deputy-pa tbody tr[data-value="0"] .address').find('.deputy-contact-title-answer, .deputy-contact-first-name-answer, .deputy-contact-last-name-answer').hide();
}  else if ($.cookie("deputy-contact-team") == 'Yes') {
     $('#contact-list-deputy-pa tbody tr[data-value="0"] .name').find('.deputy').hide();
     $('#contact-list-deputy-pa tbody tr[data-value="0"] .name .contact-name-value').find('.deputy-contact-title-answer, .deputy-contact-first-name-answer, .deputy-contact-last-name-answer').hide();
     $('#contact-list-deputy-pa tbody tr[data-value="0"] .address').find('.deputy-contact-team-name-answer').hide();
}
if ($.cookie("deputy-contact-title")) { $(".deputy-contact-title-answer").text($.cookie("deputy-contact-title")); }
if ($.cookie("deputy-contact-title-other")) { $(".deputy-contact-title-other-answer").text($.cookie("deputy-contact-title-other")); }
if ($.cookie("deputy-contact-first-name")) { $(".deputy-contact-first-name-answer").text($.cookie("deputy-contact-first-name")); }
if ($.cookie("deputy-contact-last-name")) { $(".deputy-contact-last-name-answer").text($.cookie("deputy-contact-last-name")); }
if ($.cookie("deputy-contact-team-name")) { $(".deputy-contact-team-name-answer").text($.cookie("deputy-contact-team-name")); }
if ($.cookie("deputy-contact-phone-number")) { $(".deputy-contact-phone-number-answer").text($.cookie("deputy-contact-phone-number")); }
if ($.cookie("deputy-contact-mob-number")) { $(".deputy-contact-mob-number-answer").text($.cookie("deputy-contact-mob-number")); }
if ($.cookie("deputy-contact-email")) {
     $(".deputy-contact-email-answer").text($.cookie("deputy-contact-email"));
     $('.deputy-contact-email-list').prepend(`
          <li><a href="#" class="deputy-contact-email-answer">${$.cookie("deputy-contact-email")}</a></li>
     `);

}

if ($.cookie("deputy-contact-correspondence-post") == 'undefined') {
     $(".deputy-contact-correspondence-post-answer").hide();
} else if ($.cookie("deputy-contact-correspondence-post")) {
     $(".deputy-contact-correspondence-post-answer").text($.cookie("deputy-contact-correspondence-post"));
     $('.deputy-contact-placeholder-contact').hide();
}
if ($.cookie("deputy-contact-correspondence-phone") == 'undefined') {
     $(".deputy-contact-correspondence-phone-answer").hide();
} else if ($.cookie("deputy-contact-correspondence-phone")) {
     $(".deputy-contact-correspondence-phone-answer").text($.cookie("deputy-contact-correspondence-phone"));
     $('.deputy-contact-placeholder-contact').hide();
}
if ($.cookie("deputy-contact-correspondence-email") == 'undefined') {
     $(".deputy-contact-correspondence-email-answer").hide();
} else if ($.cookie("deputy-contact-correspondence-email")) {
     $(".deputy-contact-correspondence-email-answer").text($.cookie("deputy-contact-correspondence-email"));
     $('.deputy-contact-placeholder-contact').hide();
}
if ($.cookie("deputy-contact-correspondence-welsh") == 'undefined') {
     $(".deputy-contact-correspondence-welsh-answer").hide();
} else if ($.cookie("deputy-contact-correspondence-welsh")) {
     $(".deputy-contact-correspondence-welsh-answer").text($.cookie("deputy-contact-correspondence-welsh"));
     $('.deputy-contact-placeholder-contact').hide();
}

if ($.cookie("deputy-contact-special-audio") == 'undefined') {
     $(".deputy-contact-special-audio-answer").hide();
} else if ($.cookie("deputy-contact-special-audio")) {
     $(".deputy-contact-special-audio-answer").text($.cookie("deputy-contact-special-audio"));
     $('.deputy-contact-placeholder-special').hide();
}
if ($.cookie("deputy-contact-special-print") == 'undefined') {
     $(".deputy-contact-special-print-answer").hide();
} else if ($.cookie("deputy-contact-special-print")) {
     $(".deputy-contact-special-print-answer").text($.cookie("deputy-contact-special-print"));
     $('.deputy-contact-placeholder-special').hide();
}
if ($.cookie("deputy-contact-special-hearing") == 'undefined') {
     $(".deputy-contact-special-hearing-answer").hide();
} else if ($.cookie("deputy-contact-special-hearing")) {
     $(".deputy-contact-special-hearing-answer").text($.cookie("deputy-contact-special-hearing"));
     $('.deputy-contact-placeholder-special').hide();
}
if ($.cookie("deputy-contact-special-spelling") == 'undefined') {
     $(".deputy-contact-special-spelling-answer").hide();
} else if ($.cookie("deputy-contact-special-spelling")) {
     $(".deputy-contact-special-spelling-answer").text($.cookie("deputy-contact-special-spelling"));
     $('.deputy-contact-placeholder-special').hide();
}
if ($.cookie("deputy-contact-notes")) { $(".deputy-contact-notes-answer").text($.cookie("deputy-contact-notes")); }

$('#create-deputy-contact').click(function(){
     if (!$(this).hasClass('de-activate')) {
          if ($.cookie("create-contact-pa") == 'true') {
               window.location.href = '../14-deputy-page/14c-deputy-page.html';
               setTimeout(function() {
                    $.cookie("create-contact-pa", false, {path:'/'});
               }, 5000);
          }
     }
});
