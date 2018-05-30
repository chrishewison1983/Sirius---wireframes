// =================================== Create contact page - PA - COOKIES =================================== //
$('.add-pro-contact').click(function(){
     $.cookie("add-pa-contact-journey", false, {path:'/'});
     $.cookie("add-pro-contact-journey", true, {path:'/'});
});

if ($.cookie("add-pro-contact-journey") == 'true') {
     $('#section-header.deputy-page.content-page nav.breadcrumb').html(`
          <a href="../index.html" class="user-type-link">Dashboard</a>
          <div class="separator"> > </div>
          <a href="../14-deputy-page/14b-deputy-page.html">Bob Loblaw Ltd</a>
          <div class="separator"> > </div>
          <span>Create an office</span>
     `);

     $('#section-header.deputy-page.content-page h1 .deputy-office-name').html(`
          Bob Loblaw Ltd
     `);

     watchFormChanges($('.add-deputy-contact-form'), $('#create-deputy-office'));
     $('#create-deputy-office').attr('href', '../14-deputy-page/14b-deputy-page.html');
}

// Save the contact details - PA
$("#create-deputy-office").on("click", function (e) {
     $.cookie("create-contact-pa", false, {path:'/'});
     $.cookie("create-contact-pro", true, {path:'/'});

     // DEPUTY PERSONAL DETAILS
     var fields = [
          { target: 'deputy-office-name-answer', items: [$("#deputy-office-name")] },
          { target: 'deputy-office-phone-number-answer', items: [$("#deputy-office-phone-number")] },
          { target: 'deputy-office-address-answer',
               items: [$("#deputy-office-address-line-1"),
                         $("#deputy-office-address-line-2"), $("#deputy-office-address-line-3"),
                         $("#deputy-office-address-town"), $("#deputy-office-address-county"),
                         $("#deputy-office-manual-postcode")]
          },
          // { target: 'deputy-office-clients-answer', items: [$("#deputy-office-clients")] },
     ];

     var contacts = $('.new-contact');

     var email = { target: 'new-contacts', items: [] };
     fields.push(email);

     for (var i = 0; i < contacts.length; i++) {
          var contact = {
               email: $(contacts[i]).find('input[name="myInputsEmailAddress"]').val(),
               phoneNumber: $(contacts[i]).find('input[name="myInputsPhoneNumber"]').val(),
               name: $(contacts[i]).find('input[name="myInputsFullName"]').val(),
               primary: $(contacts[i]).find('input[name="office-preferred-contact"]').attr('checked') ? true : false
          }
          email.items.push(contact);
     }

     var data = {};

     for (var i = 0; i < fields.length; i++) {
          var item = fields[i];
          var target = item.target;
          var val = '';

          if (fields[i].target === 'new-contacts')
               val = item.items;
          else
               val = item.items.map(item => item.val()).join(', ');

          data[target] = val;
     }

     data['deputy-office-pro-notes-answer'] = $(".deputy-office-pro-notes .jqte_editor").html();

     sessionStorage.setItem('new-office', JSON.stringify(data));

     // $.cookie("deputy-contact-email", $("#deputy-contact-email").val(), {path:'/'});
});

if ($.cookie("deputy-office-name")) { $(".deputy-office-name-answer").text($.cookie("deputy-office-name")); }
if ($.cookie("deputy-office-phone-number")) { $(".deputy-office-phone-number-answer").text($.cookie("deputy-office-phone-number")); }
if ($.cookie("deputy-office-address-line-1")) {
     $(".deputy-office-address-answer").text($.cookie("deputy-office-address-line-1") + ', ' + $.cookie("deputy-office-address-line-2") + ', ' + $.cookie("deputy-office-address-line-3") + ', ' + $.cookie("deputy-office-address-town") + ', ' + $.cookie("deputy-office-address-county") + ', ' + $.cookie("deputy-office-address-county") + '. ' + $.cookie("deputy-office-manual-postcode") + '.');
}
if ($.cookie("deputy-contact-notes")) { $(".deputy-contact-notes-answer").text($.cookie("deputy-contact-notes")); }



// if ($.cookie("deputy-contact-email")) {
//      $(".deputy-contact-email-answer").text($.cookie("deputy-contact-email"));
//      $('.deputy-contact-email-list').prepend(`
//           <li><a href="#" class="deputy-contact-email-answer">${$.cookie("deputy-contact-email")}</a></li>
//      `);
// }

$('#create-deputy-office').click(function(){
     if (!$(this).hasClass('de-activate')) {
          if ($.cookie("create-contact-pro") == 'true') {
               window.location.href = '../14-deputy-page/14b-deputy-page.html';
               setTimeout(function() {
                    $.cookie("create-contact-pro", false, {path:'/'});
               }, 5000);
          }
     }
});

if ($.cookie("create-contact-pro") == 'true' && $.cookie("add-pro-contact-journey") == 'true') {

     setTimeout(function() {
          $.cookie("create-contact-pro", false, {path:'/'});
     }, 5000);

     // Changes the tabs
     $('.deputy-details-page.professional ul.deputy-tabs li').removeClass('current');
     $('.deputy-details-page.professional ul.deputy-tabs li[data-tab="tab-3"]').addClass('current');
     $('.deputy-details-page.professional .tab-content').removeClass('current');
     $('.deputy-details-page.professional .tab-content#tab-3').addClass('current');

     var contactNumber = parseInt($('ul.deputy-tabs li[data-tab="tab-3"] span').text());
     $('ul.deputy-tabs li[data-tab="tab-3"] span').text(contactNumber + 1);

     // Add the contact to the Deputy
     var html = $(`
          <tr class="summary-row" data-value="0">
               <td>
                    <div class="name">
                         <span class="icon company"></span>
                         <div class="contact-name-value">
                              <div class="deputy-office-name-answer"></div>
                         </div>
                    </div><br>
                    <div class="address">
                         <div class="deputy-office-address-answer"></div>
                    </div>
                    <div class="phone-number">
                         <div class="deputy-office-phone-number-answer"></div>
                    </div>
                    <a href="#" class="full-details" data-value="0">View full details</a>
               </td>
               <td>
                    <span class="number deputy-office-clients-answer">0</span>
               </td>
               <td>
                    <div class="preferred-contact">
                         <div class="name">Maisie O'donnell</div>
                         <div class="phone-number">02056 127550</div>
                         <div class="email"><a href="#">maisie.odonnell@bobloblaw.lawblog.com</a></div>
                    </div>
               </td>
               <td>
                    <a href="#" class="main-cta tertiary edit">Edit</a>
               </td>
          </tr>

          <tr class="details-row" data-value="0">
               <td colspan="4">

                    <h2 class="description-title">Alternative contacts</h2>

                    <div class="details-wrap alternative-contacts">

                    </div>

                    <hr>

                    <div class="details-wrap full-width">

                         <div class="person-detail-item full-width">
                              <p class="item">Notes:</p>
                              <p class="answer deputy-office-pro-notes-answer"></p>
                         </div>

                    </div>

               </td>
          </tr>
     `);

     var data = JSON.parse(sessionStorage.getItem('new-office'));

     for (var key in data) {
          html.find('.' + key).text(data[key]);
     }

     var emails = data['new-contacts'];
     for (var i = 0; i < emails.length; i++) {
          if (emails[i].primary) {
               prefix = '.preferred-contact';

               html.find(prefix + ' .email').text(emails[i].email);
               html.find(prefix + ' .phone-number').text(emails[i].phoneNumber);
               html.find(prefix + ' .name').text(emails[i].name);
          } else {
               html.find('.alternative-contacts').append($(`<div class="info-section"><div class="alternative-contact">
                    <div class="name">${emails[i].name}</div>
                    <div class="phone-number">${emails[i].phoneNumber}</div>
                    <div class="email"><a href="#">${emails[i].email}</a></div>
               </div></div>`));
          }
     }

     $('#contact-list-deputy tbody').prepend(html);
}
