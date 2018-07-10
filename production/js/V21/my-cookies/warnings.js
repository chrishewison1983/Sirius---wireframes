// =================================== Warnings - COOKIES =================================== //
$("#new-warning-button").on("click", function (e) {

     $.cookie("new-warning-completed", true, {path:'/'});

     // Cookies for side bar
     $.cookie("warning-type", $("#warning-type").val(), {path:'/'});
     /* textarea */ $.cookie("warning-notes", $(".warning-notes .jqte_editor").html(), {path:'/'});

});

// $('#client-overview .client-details.tabs li[data-tab="summary-tab-1"], #client-overview .client-details.tabs li[data-tab="summary-tab-2"], #client-overview .client-details.tabs li[data-tab="summary-tab-3"], #client-overview .client-details.tabs li[data-tab="summary-tab-4"], #client-overview .client-details.tabs li[data-tab="summary-tab-5"], .client-nav .client-details .tablinks.health, .client-nav .client-details .tablinks.property').on("click", function (e) {
//      $.cookie("new-warning-completed", false, {path:'/'});
// });

// Changes header info
// if ($.cookie("order-journey") == 'HandW') {
//      $('#new-warning-button').attr('href', '../4-client-hub/4a-new-client.html#HandW');
//      $('.cancel').attr('href', '../4-client-hub/4a-new-client.html#HandW')
// } else if ($.cookie("order-journey") == 'PFA') {
//      $('#new-warning-button').attr('href', '../4-client-hub/4a-new-client.html#PFA');
//      $('.cancel').attr('href', '../4-client-hub/4a-new-client.html#PFA')
// }

function timeStamp(){
     Stamp = new Date();
     year = Stamp.getYear();
     if (year < 2000) year = 1900 + year;
     document.write('<div class="date-text"> - ' + (Stamp.getMonth() + 1) +"/"+Stamp.getDate()+ "/"+ year + '</div>');
     var Hours;
     var Mins;
     var Time;
     Hours = Stamp.getHours();
     if (Hours >= 12) {
          Time = " P.M.";
     }
     else {
          Time = " A.M.";
     }
     if (Hours > 12) {
          Hours -= 12;
     }
     if (Hours == 0) {
          Hours = 12;
     }
     Mins = Stamp.getMinutes();
          if (Mins < 10) {
          Mins = "0" + Mins;
     }
     document.write('<div class="time-text">, ' + Hours + ":" + Mins + Time + '</div>');
}

// Populates the important documents lists
if ($.cookie("new-warning-completed") == 'true') {
     var warningNumber = parseInt($('#client-overview ul.client-details li[data-tab="summary-tab-2"] span').text());
     $('#client-overview ul.client-details li[data-tab="summary-tab-2"] span').text(warningNumber + 1);

     $('.warnings-overview-list').prepend(`
          <li data-value="1">
               <p class="remark-title">
                    <span class="warning-type-answer"></span>
                    <a href="#delete-important-remark-modal" rel="modal:open" class="main-cta tertiary delete-remark-list">Remove</a>
               </p>
               <p class="date">
                    <span class="icon date"></span>
                    Date created:
                    <strong>Today - 12:03PM</strong>
               </p>
               <p class="answer warning-notes-answer"></p>
          </li>
     `);
     $('#important-remarks tbody').prepend(`
          <tr data-value="1">
               <td>
                    <p class="remark-title">
                         <span class="warning-type-answer"></span>
                    </p>
                    <p class="date">
                         <span class="icon date"></span>
                         Date created:
                         <strong>Today - 12:03PM</strong>
                    </p>
                    <p class="answer warning-notes-answer"></p>
               </td>
               <td>
                    <a href="#delete-important-remark-modal" rel="modal:open" class="main-cta tertiary delete-important-remark">Remove</a>
               </td>
          </tr>
     `);

     // Changes the tab information
     $('#client-overview li[data-tab="summary-tab-1"]').addClass('current');
     $('#client-overview li[data-tab="summary-tab-2"], #client-overview li[data-tab="summary-tab-3"], #client-overview li[data-tab="summary-tab-4"], #client-overview li[data-tab="summary-tab-5"], #client-overview li[data-tab="summary-tab-6"], #client-overview li[data-tab="summary-tab-7"], #client-overview li[data-tab="summary-tab-8"]').removeClass('current');
     $('#client-overview #summary-tab-1').addClass('current');
     $('#client-overview #summary-tab-2, #client-overview #summary-tab-3, #client-overview #summary-tab-4, #client-overview #summary-tab-5, #client-overview #summary-tab-6, #client-overview #summary-tab-7, #client-overview #summary-tab-8').removeClass('current');

     setTimeout(function() {
          $.cookie("new-warning-completed", false, {path:'/'});
     }, 5000);

}

if ($.cookie("warning-type")) { $(".warning-type-answer").text($.cookie("warning-type")); }
if ($.cookie("warning-notes")) { $(".warning-notes-answer").text($.cookie("warning-notes")); }

// Warning of violent client
if ($.cookie("warning-type") == 'Potentially violent') {
     $("#section-header h1 span.violent").show();
     $('#section-header.client-page').addClass('violent-risk-message');
}
// if ($.cookie("client-violent-risk") == 'true') {
//      $(".new-client #section-header").find("h1").addClass("violent-risk-message");
//      // $(".client-violent-risk").text($.cookie("client-violent-risk"));
//      // $(".new-client #section-header").find(".colour-wrapper").addClass("violent-risk-message");
// }
