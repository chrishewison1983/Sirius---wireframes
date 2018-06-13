// =================================== Create letter page - COOKIES =================================== //
// Create letter
$('#letter-not-started').show();
$('#letter-started').hide();

$(".letter-title").on("click", function (e) {
     $.cookie("create-letter-started", true, {path:'/'});
});

if ($.cookie("create-letter-started") == 'true') {
     $('#letter-not-started').hide();
     $('#letter-started').show();
}

$("#add-letter, #save-and-exit").on("click", function (e) {
     $.cookie("user-journey", 6, {path:'/'});
});

if ($.cookie("user-journey") == 6) {
     $("#tab-6.client-details").addClass('current');
     $("#tab-1.client-details, #tab-2.client-details, #tab-3.client-details, #tab-4.client-details, #tab-5.client-details").removeClass('current');
     $('.client-details .tab-link[data-tab="tab-6"]').addClass('current');
     $('.client-details .tab-link[data-tab="tab-1"], .client-details .tab-link[data-tab="tab-2"], .client-details .tab-link[data-tab="tab-3"], .client-details .tab-link[data-tab="tab-4"], .client-details .tab-link[data-tab="tab-5"]').removeClass('current');
     $('#list-of-documents .no-items').hide();
     $('#document-confirmation').slideDown('slow');
}

$(".document-item").on("click", function (e) {
     $.cookie("document-title", $(this).find('.doc-title').text(), {path:'/'});
});

if ($.cookie("document-title")) {
     $(".document h3").text($.cookie("document-title"));
     $(".document-title").text($.cookie("document-title"));
     $('.current-document-title').text($.cookie("document-title"));
}

$("#create-letter").on("click", function (e) {
     $.cookie("recipients", $(this).val(), {path:'/'});
     $.cookie("create-letter-journey", false, {path:'/'});
     $.cookie("completed-letter", true, {path:'/'});
});

if ($.cookie("recipients")) {
     $("#recipients").val($.cookie("recipients"));
}

if ($.cookie("completed-letter") == 'true') {
     $("#drafts .place-holder-text").hide();
}

// Inserts
$('#inserts-section').hide();
$('#inserts-selected').hide();

$(".inserts-journey").on("click", function (e) {
     $.cookie("inserts-needed", true, {path:'/'});
});

if ($.cookie("inserts-needed") == 'true') {
     $("#inserts-section").show();
}

$(".insert").on("click", function (e) {
     $.cookie("inserts-added", true, {path:'/'});
});

if ($.cookie("inserts-added") == 'true') {
     $("#inserts-section .place-holder-text").hide();
     $('#inserts-selected').show();
}

// Send to print
$("#confirm-print-send").on("click", function (e) {
     $.cookie("sent-to-print", true, {path:'/'});
     $.cookie("create-letter-started", false, {path:'/'});
     $.cookie("create-letter-journey", false, {path:'/'});
     $.cookie("drafts-left", false, {path:'/'});
});

if ($.cookie("sent-to-print") == 'true') {
     $("#correspondence-sent").show();

     // Changes tabs to documents
     $('#client-health .client-details.tabs .tab-link').removeClass('current');
     $('#client-health .client-details.tabs .tab-link[data-tab="health-tab-7"]').addClass('current');
     $('#client-health #health-tab-7').addClass('current');
     $('#client-health #health-tab-1').removeClass('current');

     // Add letters sent to the documents list
     $('#documents-viewer table.livelink-documents tbody').append(`
          <tr>
          	<td><a href="#" class="hide-page-1">${ 'Recipients_Name-' + JSON.parse(sessionStorage.getItem('selected-letter')) }</a></td>
          	<!-- <td>7000-0000-2563</td> -->
          	<td>IT-SS-ORDER</td>
          	<!-- <td>DEP - PFA</td> -->
          	<td>Outgoing</td>
          	<td>27/08/2017 11:07:13</td>
          </tr>
     `);

}

// Retrieve drafts
$('#save-and-exit').click(function(e) {
     $.cookie("drafts-left", true, {path:'/'});
});

if ($.cookie("drafts-left") == 'true') {
     $('.retrieve-drafts').show();
} else {
     $('.retrieve-drafts').hide();
}

// New office code
if ($.cookie("deputy-professional-contact") === 'Head office - London') {
     $('#suggested ul li.bobloblaw a').find("span[data-value='address']").html(`
          <strong>Head office - London</strong>, 84 Crown Street, London, SW19 5GQ.
     `);
     $('#suggested ul li.bobloblaw a').find("span[data-value='preferred-contact']").html(`Maisie O'Donnell`);
     $('#suggested ul li.bobloblaw').find("#letter-alternative-contact").html(`
          <option value="Maisie O'Donnell" selected>* Maisie O'Donnell</option>
          <option value="Keira White">Keira White</option>
          <option value="Reece Bowen">Reece Bowen</option>
     `);
} else if ($.cookie("deputy-professional-contact") === 'Coventry') {
     $('#suggested ul li.bobloblaw a').find("span[data-value='address']").html(`
          <strong>Coventry office</strong>, 81 Whatlington Road, Coventry, CV1 5NS.
     `);
     $('#suggested ul li.bobloblaw a').find("span[data-value='preferred-contact']").html(`Harvey Burgess`);
     $('#suggested ul li.bobloblaw').find("#letter-alternative-contact").html(`
          <option value="Harvey Burgess" selected>* Harvey Burgess</option>
          <option value="Yasmin West">Yasmin West</option>
          <option value="Tilly Steele">Tilly Steele</option>
     `);
} else if ($.cookie("deputy-professional-contact") === 'Birmingham') {
     $('#suggested ul li.bobloblaw a').find("span[data-value='address']").html(`
          <strong>Birmingham office</strong>, 57 Boroughbridge Road, Birmingham, B5 2SY.
     `);
     $('#suggested ul li.bobloblaw a').find("span[data-value='preferred-contact']").html(`Max Bird`);
     $('#suggested ul li.bobloblaw').find("#letter-alternative-contact").html(`
          <option value="Max Bird" selected>* Max Bird</option>
          <option value="Nicholas Bruce">Nicholas Bruce</option>
     `);
} else if ($.cookie("deputy-professional-contact") === 'Newcastle') {
     $('#suggested ul li.bobloblaw a').find("span[data-value='address']").html(`
          <strong>Newcastle office</strong>, 25 Lairg Road, Newcastle Upon Tyne, NE7 1YX.
     `);
     $('#suggested ul li.bobloblaw a').find("span[data-value='preferred-contact']").html(`Mia Storey`);
     $('#suggested ul li.bobloblaw').find("#letter-alternative-contact").html(`
          <option value="Mia Storey" selected>* Mia Storey</option>
     `);
} else if ($.cookie("deputy-professional-contact") === 'Liverpool') {
     $('#suggested ul li.bobloblaw a').find("span[data-value='address']").html(`
          <strong>Liverpool office</strong>, 27 Overton Circle, Liverpool, L3 8FH.
     `);
     $('#suggested ul li.bobloblaw a').find("span[data-value='preferred-contact']").html(`Ellis May`);
     $('#suggested ul li.bobloblaw').find("#letter-alternative-contact").html(`
          <option value="Ellis May" selected>* Ellis May</option>
          <option value="Anthony Haynes">Anthony Haynes</option>
          <option value="Natasha Tucker">Natasha Tucker</option>
     `);
} else if ($.cookie("deputy-professional-contact") === 'Manchester') {
     $('#suggested ul li.bobloblaw a').find("span[data-value='address']").html(`
          <strong>Manchester office</strong>, 63 Cunnery Rd, Manchester, M3 8WT.
     `);
     $('#suggested ul li.bobloblaw a').find("span[data-value='preferred-contact']").html(`Victoria Holden`);
     $('#suggested ul li.bobloblaw').find("#letter-alternative-contact").html(`
          <option value="Victoria Holden" selected>* Victoria Holden</option>
          <option value="Holly Abbott">Holly Abbott</option>
          <option value="Kai Steele">Kai Steele</option>
          <option value="Elizabeth Reed">Elizabeth Reed</option>
     `);
} else if ($.cookie("deputy-professional-contact") === 'New office') {
     var data = JSON.parse(sessionStorage.getItem('new-office'));
     $('#suggested ul li.bobloblaw a').find("span[data-value='address']").html(`
          <strong>${data['deputy-office-name-answer']}</strong>, ${data['deputy-office-address-answer'].split(', ').filter(item => item.trim() !== '').join(', ')}
     `);
     // $('#suggested ul li.bobloblaw a').find("span[data-value='preferred-contact']").text(`${emails[0].name}`);

     var emails = data['new-contacts'];
     var list = $(`#letter-alternative-contact`);

     for (var i = 0; i < emails.length; i++) {
          if (emails[i].primary) {
               list.append($(`<option value="${emails[0].name}">${'* ' + emails[0].name}</option>`))
          } else {
               list.append($(`<option value="${emails[i].name}">${emails[i].name}</option>`));
          }
     }

     $('#suggested ul li.bobloblaw #letter-alternative-contact').append(list);

     $('#suggested ul li.bobloblaw a').find("span[data-value='preferred-contact']").html(`
          ${emails[0].name}
     `);

}

$('body').on('change', '#letter-alternative-contact', function(e){
     var contactName = $(this).val();
     $('li.bobloblaw a').find("span[data-value='preferred-contact']").html(contactName);
});




// =================================== Create letter journey - COOKIES =================================== //
// $(".create-letter-journey-button").on("click", function (e) {
//      $.cookie("create-letter-journey", true, {path:'/'});
// });
//
// if ($.cookie("create-letter-journey") == 'true') {
//      // 4a - Changes client page HTML
//      $('#client-health .tab-link').removeClass('current');
//      $('#client-health .tab-link[data-tab="health-tab-7"]').addClass('current');
//      $('#client-health .tab-content').removeClass('current');
//      $('#client-health #health-tab-7').addClass('current');
//
//      // 4a - shows the document
//      $('#documents-viewer .document-1 .page-1').hide();
//      $('#documents-viewer .document-1 .page-2').show();
//      $('#documents-viewer .document-1 .page-2 .control-panel h2').text('Application_correspondence.pdf');
//
//      // 2a - shows the documents tab
//      $('#side-panel .tab-link').removeClass('current');
//      $('#side-panel .tab-link[data-tab="tab-6"]').addClass('current');
//      $('#side-panel .tab-content').removeClass('current');
//      $('#side-panel #tab-6').addClass('current');
// }
