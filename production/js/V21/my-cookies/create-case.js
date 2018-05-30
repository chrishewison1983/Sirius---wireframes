// =================================== Create case - COOKIES =================================== //
$(".edit-case-health").on("click", function (e) {
     $.cookie("order-type", 'Health and Welfare', {path:'/'});
});

$(".edit-case-pfa").on("click", function (e) {
     $.cookie("order-type", 'Property and finance', {path:'/'});
});

////////////////////////////////////// COLLECT COOKIES - THE ORDER - START //////////////////////////////////////
$("#create-case-button").on("click", function (e) {

     $.cookie("create-case-journey", true, {path:'/'});

     // Cookies for side bar - THE ORDER
     $.cookie("order-type", $("input[name=order-type]:checked").val(), {path:'/'});
     $.cookie("order-court-ref", $("#order-court-ref").val(), {path:'/'});
     $.cookie("order-date-day", $("#order-date-day").val(), {path:'/'});
     $.cookie("order-date-month", $("#order-date-month").val(), {path:'/'});
     $.cookie("order-date-year", $("#order-date-year").val(), {path:'/'});
     // $.cookie("order-deputy-type", $("#order-deputy-type").val(), {path:'/'});
     $.cookie("order-deputy-type", $("input[name=order-deputy-type]:checked").val(), {path:'/'});
     $.cookie("order-issue-day", $("#order-issue-day").val(), {path:'/'});
     $.cookie("order-issue-month", $("#order-issue-month").val(), {path:'/'});
     $.cookie("order-issue-year", $("#order-issue-year").val(), {path:'/'});
     $.cookie("order-expiry-day", $("#order-expiry-day").val(), {path:'/'});
     $.cookie("order-expiry-month", $("#order-expiry-month").val(), {path:'/'});
     $.cookie("order-expiry-year", $("#order-expiry-year").val(), {path:'/'});
     $.cookie("order-received-day", $("#order-received-day").val(), {path:'/'});
     $.cookie("order-received-month", $("#order-received-month").val(), {path:'/'});
     $.cookie("order-received-year", $("#order-received-year").val(), {path:'/'});
     $.cookie("order-title", $("#order-title").val(), {path:'/'});

     // Cookies for side bar - DEPUTY/DEPUTIES
     $.cookie("deputies-appointed", $("input[name=deputies-appointed]:checked").val(), {path:'/'});
     /* textarea */ $.cookie("order-notes", $(".order-notes .jqte_editor").html(), {path:'/'});
     // $.cookie("deputies-jointly", $("input[name=deputies-jointly]:checked").val(), {path:'/'});

});
////////////////////////////////////// COLLECT COOKIES - THE ORDER - END //////////////////////////////////////

////////////////////////////////////// CLEARS COOKIES - THE ORDER - START //////////////////////////////////////
$(".create-case").on("click", function (e) {

     $.cookie("create-case-journey", true, {path:'/'});

     // Cookies for side bar - THE ORDER
     $.cookie("order-type", '', {path:'/'});
     $.cookie("order-court-ref", '', {path:'/'});
     $.cookie("order-date-day", '', {path:'/'});
     $.cookie("order-date-month", '', {path:'/'});
     $.cookie("order-date-year", '', {path:'/'});
     $.cookie("order-deputy-type", '', {path:'/'});
     $.cookie("order-issue-day", '', {path:'/'});
     $.cookie("order-issue-month", '', {path:'/'});
     $.cookie("order-issue-year", '', {path:'/'});
     $.cookie("order-expiry-day", '', {path:'/'});
     $.cookie("order-expiry-month", '', {path:'/'});
     $.cookie("order-expiry-year", '', {path:'/'});
     $.cookie("order-received-day", '', {path:'/'});
     $.cookie("order-received-month", '', {path:'/'});
     $.cookie("order-received-year", '', {path:'/'});
     $.cookie("order-title", '', {path:'/'});

     // Cookies for side bar - DEPUTY/DEPUTIES
     $.cookie("deputies-appointed", '', {path:'/'});
     /* textarea */ $.cookie("order-notes", '', {path:'/'});
     // $.cookie("deputies-jointly", $("input[name=deputies-jointly]:checked").val(), {path:'/'});

});
////////////////////////////////////// CLEARS COOKIES - THE ORDER - END //////////////////////////////////////

////////////////////////////////////// POPULATE COOKIES - THE ORDER - START //////////////////////////////////////
$('.file-location-info').hide();
// $('.bond-info').hide();
$('.dispense').hide();

if (window.location.href.indexOf("EditCase") != -1) {

     // $('.state').text('Edit order');

     // Order type
     if ($.cookie('order-type') === 'Health and Welfare' ) {
          $('#order-type-welfare').parent().addClass('checked');
          $('#order-type-welfare').attr('checked', 'checked');
          $('#order-type-property').parent().removeClass('checked');
          $('#order-type-property').removeAttr('checked');
          $('.breadcrumb').html(`
               <a href="../index.html" class="user-type-link">Dashboard</a>
               <div class="separator"> &gt; </div>
               <a href="../4-client-page/4a-new-client.html">
                    <div class="client-title">Mr</div>
                    <div class="client-first-name">Gerald</div>
                    <div class="client-last-name">Brackens</div>
               </a>
               <div class="separator"> &gt; </div>
               <a href="../4-client-page/4a-new-client.html#HandW">H&W | 14820940</a>
               <div class="separator"> &gt; </div>
               <span class="state">Edit order</span>
          `);

          $('#order-court-ref').val('14820940');
          // $('#bond-details-section').hide();

          // Modal info on edit Case
          $('#edit-case-modal h2').text('H&W | 14820940');

          // CTA on the edit page url
          $('#create-case-button').attr('href', '../4-client-page/4a-new-client.html#HandW');
     }
     if ($.cookie('order-type') === 'Property and finance' ) {
          $('#order-type-property').parent().addClass('checked');
          $('#order-type-property').attr('checked', 'checked');
          $('#order-type-welfare').parent().removeClass('checked');
          $('#order-type-welfare').removeAttr('checked');
          $('.breadcrumb').html(`
               <a href="../index.html" class="user-type-link">Dashboard</a>
               <div class="separator"> &gt; </div>
               <a href="../4-client-page/4a-new-client.html">
                    <div class="client-title">Mr</div>
                    <div class="client-first-name">Gerald</div>
                    <div class="client-last-name">Brackens</div>
               </a>
               <div class="separator"> &gt; </div>
               <a href="../4-client-page/4a-new-client.html#PFA">PFA | 14820940</a>
               <div class="separator"> &gt; </div>
               <span class="state">Edit order</span>
          `);

          $('#order-court-ref').val('14820940');
          // $('#bond-details-section').show();

          // Modal info on edit Case
          $('#edit-case-modal h2').text('PFA | 14820940');

          // CTA on the edit page url
          $('#create-case-button').attr('href', '../4-client-page/4a-new-client.html#PFA');
     }

     // Court reference
     if ($.cookie("order-court-ref")) {
          $('#order-court-ref').val($.cookie("order-court-ref"));
     } else if ($.cookie("client-casarec")) {
          $("#order-court-ref").val($.cookie("client-casarec"));
     }
     // else {
     //      $('#order-court-ref').val('14820940');
     // }

     // Order date
     if ($.cookie("order-day")) {
          $('#order-day').val($.cookie("order-day"));
     } else {
          $('#order-day').val('28');
     }
     if ($.cookie("order-month")) {
          $('#order-month').val($.cookie("order-month"));
     } else {
          $('#order-month').val('08');
     }
     if ($.cookie("order-year")) {
          $('#order-year').val($.cookie("order-year"));
     } else {
          $('#order-year').val('2018');
     }

     // Order date
     if ($.cookie("order-date-day")) {
          $('#order-date-day').val($.cookie("order-date-day"));
     } else {
          $('#order-date-day').val('28');
     }
     if ($.cookie("order-date-month")) {
          $('#order-date-month').val($.cookie("order-date-month"));
     } else {
          $('#order-date-month').val('08');
     }
     if ($.cookie("order-date-year")) {
          $('#order-date-year').val($.cookie("order-date-year"));
     } else {
          $('#order-date-year').val('2017');
     }

     // Order deputy type
     if ($.cookie("order-deputy-type")) {
          $('.order-deputy-type-answer').val($.cookie("order-deputy-type"));
     }
     if ($.cookie("order-deputy-type") === 'Lay') {
          $('input[value="Lay"]').attr('checked', 'checked').parent().addClass('checked');
          $('input[value="Professional"], input[value="Public authority"]').removeAttr('checked').parent().addClass('checked');
     } else if ($.cookie("order-deputy-type") === 'Professional') {
          $('input[value="Professional"]').attr('checked', 'checked').parent().addClass('checked');
          $('input[value="Lay"], input[value="Public authority"]').removeAttr('checked').parent().addClass('checked');
     } else if ($.cookie("order-deputy-type") === 'Public authority') {
          $('input[value="Public authority"]').attr('checked', 'checked').parent().addClass('checked');
          $('input[value="Lay"], input[value="Professional"]').removeAttr('checked').parent().addClass('checked');
     }

     // Order issue date
     if ($.cookie("order-issue-day")) {
          $('#order-issue-day').val($.cookie("order-issue-day"));
     } else {
          $('#order-issue-day').val('28');
     }
     if ($.cookie("order-issue-month")) {
          $('#order-issue-month').val($.cookie("order-issue-month"));
     } else {
          $('#order-issue-month').val('08');
     }
     if ($.cookie("order-issue-year")) {
          $('#order-issue-year').val($.cookie("order-issue-year"));
     } else {
          $('#order-issue-year').val('2017');
     }

     // Order expiry date
     if ($.cookie("order-expiry-day")) {
          $('#order-expiry-day').val($.cookie("order-expiry-day"));
     } else {
          $('#order-expiry-day').val('28');
     }
     if ($.cookie("order-expiry-month")) {
          $('#order-expiry-month').val($.cookie("order-expiry-month"));
     } else {
          $('#order-expiry-month').val('08');
     }
     if ($.cookie("order-expiry-year")) {
          $('#order-expiry-year').val($.cookie("order-expiry-year"));
     } else {
          $('#order-expiry-year').val('2019');
     }

     // Order received date
     if ($.cookie("order-received-day")) {
          $('#order-received-day').val($.cookie("order-received-day"));
     } else {
          $('#order-received-day').val('28');
     }
     if ($.cookie("order-received-month")) {
          $('#order-received-month').val($.cookie("order-received-month"));
     } else {
          $('#order-received-month').val('08');
     }
     if ($.cookie("order-received-year")) {
          $('#order-received-year').val($.cookie("order-received-year"));
     } else {
          $('#order-received-year').val('2017');
     }

     // Order title
     if ($.cookie("order-title")) {
          $('#order-title').val($.cookie("order-title"));
     } else {
          $('#order-title').val('Order title');
     }

     // Deputies jointly severally
     if ($.cookie('deputies-appointed') === 'Sole' ) {
          $('#deputies-appointed-sole').parent().addClass('checked');
          $('#deputies-appointed-sole').attr('checked', 'checked');
          $('#deputies-appointed-joint, #deputies-appointed-joint-severally').parent().removeClass('checked');
     } else if ($.cookie('deputies-appointed') === 'Joint' ) {
          $('#deputies-appointed-joint').parent().addClass('checked');
          $('#deputies-appointed-joint').attr('checked', 'checked');
          $('#deputies-appointed-sole, #deputies-appointed-joint-severally').parent().removeClass('checked');
     } else if ($.cookie('deputies-appointed') === 'Joint & severally' ) {
          $('#deputies-appointed-joint-severally').parent().addClass('checked');
          $('#deputies-appointed-joint-severally').attr('checked', 'checked');
          $('#deputies-appointed-sole, #deputies-appointed-joint').parent().removeClass('checked');
     } else {
          $('#deputies-appointed-joint').parent().addClass('checked');
          $('#deputies-appointed-joint').attr('checked', 'checked');
          $('#deputies-appointed-sole, #deputies-appointed-joint-severally').parent().removeClass('checked');
     }

     if ($.cookie("order-notes")) {
          $(".order-notes .jqte .jqte_editor").text($.cookie("order-notes"));
     } else {
          $(".order-notes .jqte .jqte_editor").text(`
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at volutpat dui. Quisque eu pellentesque dui.
               Proin efficitur rutrum fermentum. Curabitur ut enim quis velit tempus hendrerit. Etiam nec imperdiet tortor.
               Aenean vel nisi ex. Vivamus interdum eu sem sed porta. Sed in metus mollis, consectetur magna non, viverra nunc.
          `);
     }

}

if ($.cookie("order-journey") == 'PFA') {
     $('#order-type-property').parent().addClass('checked');
     $('#order-type-property').attr('checked', 'checked');
     $('#order-type-welfare').parent().removeClass('checked');
     $('#order-type-welfare').removeAttr('checked');
} if ($.cookie("order-journey") == 'HandW') {
     $('#order-type-welfare').parent().addClass('checked');
     $('#order-type-welfare').attr('checked', 'checked');
     $('#order-type-property').parent().removeClass('checked');
     $('#order-type-property').removeAttr('checked');
}

// Populate side bar - THE ORDER
if ($.cookie('order-type') === 'Health and Welfare' ) {
     $('#order-type-welfare').parent().addClass('checked');
     $('#order-type-welfare').attr('checked', 'checked');
     $('#order-type-property').parent().removeClass('checked');
     $('#order-type-property').removeAttr('checked');
     // $('#bond-details-section').hide();
}
if ($.cookie('order-type') === 'Property and finance' ) {
     $('#order-type-property').parent().addClass('checked');
     $('#order-type-property').attr('checked', 'checked');
     $('#order-type-welfare').parent().removeClass('checked');
     $('#order-type-welfare').removeAttr('checked');
     // $('#bond-details-section').show();
}
if ($.cookie("order-type")) {
     $(".order-type-answer").text($.cookie("order-type"));
}
if ($.cookie("order-court-ref")) { $(".order-court-ref-answer").text($.cookie("order-court-ref")); }
if ($.cookie("order-day")) {
     $(".order-day-answer").text($.cookie("order-day"));
     $('#bond-renewal-day').val($.cookie("order-day"));
}
if ($.cookie("order-month")) {
     $(".order-month-answer").text($.cookie("order-month"));
     $('#bond-renewal-month').val($.cookie("order-month"));
}
if ($.cookie("order-year")) {
     $(".order-year-answer").text($.cookie("order-year"));
     $('#bond-renewal-year').val($.cookie("order-year"));
}
if ($.cookie("order-issue-day")) { $(".order-issue-day-answer").text($.cookie("order-issue-day")); }
if ($.cookie("order-issue-month")) { $(".order-issue-month-answer").text($.cookie("order-issue-month")); }
if ($.cookie("order-issue-year")) { $(".order-issue-year-answer").text($.cookie("order-issue-year")); }
if ($.cookie("order-expiry-day")) { $(".order-expiry-day-answer").text($.cookie("order-expiry-day")); }
if ($.cookie("order-expiry-month")) { $(".order-expiry-month-answer").text($.cookie("order-expiry-month")); }
if ($.cookie("order-expiry-year")) { $(".order-expiry-year-answer").text($.cookie("order-expiry-year")); }
if ($.cookie("order-received-day")) { $(".order-received-day-answer").text($.cookie("order-received-day")); }
if ($.cookie("order-received-month")) { $(".order-received-month-answer").text($.cookie("order-received-month")); }
if ($.cookie("order-received-year")) { $(".order-received-year-answer").text($.cookie("order-received-year")); }
if ($.cookie("order-title")) { $(".order-title-answer").text($.cookie("order-title")); }

// Populate side bar - DEPUTY/DEPUTIES
if ($.cookie('deputies-appointed') === 'Sole' ) {
     $('#deputies-appointed-sole').parent().addClass('checked');
     $('#deputies-appointed-sole').attr('checked', 'checked');
     $('#deputies-appointed-joint, #deputies-appointed-joint-severally').parent().removeClass('checked');
} else if ($.cookie('deputies-appointed') === 'Joint' ) {
     $('#deputies-appointed-joint').parent().addClass('checked');
     $('#deputies-appointed-joint').attr('checked', 'checked');
     $('#deputies-appointed-sole, #deputies-appointed-joint-severally').parent().removeClass('checked');
} else if ($.cookie('deputies-appointed') === 'Joint & severally' ) {
     $('#deputies-appointed-joint-severally').parent().addClass('checked');
     $('#deputies-appointed-joint-severally').attr('checked', 'checked');
     $('#deputies-appointed-sole, #deputies-appointed-joint').parent().removeClass('checked');
} else {
     $('#deputies-appointed-joint').parent().addClass('checked');
     $('#deputies-appointed-joint').attr('checked', 'checked');
     $('#deputies-appointed-sole, #deputies-appointed-joint-severally').parent().removeClass('checked');
}
if ($.cookie("deputies-appointed")) { $(".deputies-appointed-answer").text($.cookie("deputies-appointed")); }
if ($.cookie("order-notes")) { $(".order-notes-answer").text($.cookie("order-notes")); }
// if ($.cookie("deputies-jointly")) { $(".deputies-jointly-answer").text($.cookie("deputies-jointly")); }
////////////////////////////////////// POPULATE COOKIES - THE ORDER - END //////////////////////////////////////

////////////////////////////////////// POPULATE COOKIES - ORDER TABLE - START //////////////////////////////////////
if ($.cookie('create-case-journey') === 'true' ) {

     var orderNumber = parseInt($('#client-overview ul.client-details.tabs li[data-tab="summary-tab-6"] span').text());
     $('#client-overview ul.client-details.tabs li[data-tab="summary-tab-6"] span').text(contactNumber + 1);

     $('#client-order-table tbody').prepend(`
          <tr class="summary-row" data-value="0">
               <td>
				<h2 class="title">
					<span class="icon"></span>
                         <div><div class="table-order-type">H&amp;W</div> <strong>-</strong> <div class="order-court-ref-answer">14820940</div></div>
                         <br>
                         <div class="sub-text">(7000-0000-1458)</div>
				</h2>
                    <div class="appointed">Order date: <strong class="case-order-date-answer">28/08/2018</strong></div>
                    <div class="appointed"></div>
                    <br>
                    <div class="info"><span class="number">0</span>Tasks</div>
				<div class="info"><span class="number">0</span>Deputies</div>
                    <a href="#" class="full-details" data-value="0">View full details</a>
               </td>
			<td>
				<div class="table-order-type">H&amp;W</div>
			</td>
			<td>
                    Open
               </td>
			<td>
                    <div class="order-deputy-type-answer">Lay</div>
               </td>
			<td>
                    <div class="deputies-appointed-answer">Joint</div>
               </td>
               <td>
				<div class="security-bond-answer">N/A</div>
               </td>
               <td>
				<a class="main-cta tertiary edit" href="#">Edit order</a>
                    <a class="main-cta tertiary edit" href="#">Edit order status</a>
				<a class="main-cta tertiary edit supervision-level" href="#">Edit supervision level</a>
                    <a class="main-cta tertiary edit add-bond" href="#">Add bond</a>
               </td>
          </tr>

          <tr class="details-row" data-value="0">
               <td colspan="7">

                    <h2 class="description-title">Order details:</h2>

                    <div class="details-wrap">

					<div class="info-section">
						<p>Order type:</p>
						<p class="answer order-type-answer">Health &amp; welfare</p>
					</div>

					<div class="info-section">
						<p>Court reference:</p>
						<p class="answer order-court-ref-answer">14820940</p>
					</div>

					<div class="info-section">
						<p>Order date:</p>
						<p class="answer">${$.cookie("order-date-day") + '/' + $.cookie("order-date-month") + '/' + $.cookie("order-date-year")}</p>
					</div>

					<div class="info-section">
						<p>Type of deputy:</p>
						<p class="answer order-deputy-type-answer">Lay</p>
					</div>

					<div class="info-section">
						<p>Order status:</p>
						<p class="answer">Open</p>
					</div>

					<div class="info-section">
						<p>Status date:</p>
						<p class="answer">05/04/2018</p>
					</div>

					<div class="info-section">
						<p>Order issue date:</p>
						<p class="answer">${$.cookie("order-issue-day") + '/' + $.cookie("order-issue-month") + '/' + $.cookie("order-issue-year")}</p>
					</div>

                         <div class="info-section">
                              <p>Order expiry date:</p>
                              <p class="answer">${$.cookie("order-expiry-day") + '/' + $.cookie("order-expiry-month") + '/' + $.cookie("order-expiry-year")}</p>
                         </div>

					<div class="info-section">
						<p>Order received date:</p>
						<p class="answer">${$.cookie("order-received-day") + '/' + $.cookie("order-received-month") + '/' + $.cookie("order-received-year")}</p>
					</div>

					<div class="info-section">
						<p>Order title:</p>
						<p class="answer order-title-answer">Order title</p>
					</div>

					<div class="info-section">
						<p>How have the deputy/deputies been appointed?:</p>
						<p class="answer deputies-appointed-answer">Joint</p>
					</div>

                    </div>

                    <div class="details-wrap full-width">
                         <div class="info-section">
                              <p>Notes:</p>
                              <p class="answer order-notes-answer">None</p>
                         </div>
                    </div>

                    <h2 class="description-title">Order status:</h2>

                    <div class="details-wrap">

					<div class="info-section">
						<p>Order status:</p>
						<p class="answer">Open</p>
					</div>

					<div class="info-section">
						<p>Status date:</p>
						<p class="answer">05/04/2018</p>
					</div>

					<div class="info-section">
						<p>Order status notes:</p>
						<p class="answer">None</p>
					</div>

                    </div>

                    <h2 class="description-title table-bond-details">The bond:</h2>

                    <div class="details-wrap table-bond-details">

                         <div class="info-section">
                              <p>Security bond?:</p>
                              <p class="answer">No</p>
                         </div>

                    </div>

               </td>
          </tr>
     `);

     if ($.cookie("order-type") == 'Property and finance') {
          $('#client-order-table tbody tr.summary-row[data-value="0"]').addClass('pfa-content-item');
          $('#client-order-table tbody tr.summary-row[data-value="0"] .title .icon').addClass('property');
          $('#client-order-table tbody tr.summary-row[data-value="0"] .title .table-order-type').text('PFA');
          $('#client-order-table tbody tr.summary-row[data-value="0"] .table-order-type').text('PFA');
          $('#client-order-table tbody tr.summary-row[data-value="0"] .security-bond-answer').text('No');
          $('#client-order-table tbody tr.summary-row[data-value="0"] .supervision-level').show();
          $('#client-order-table tbody tr.summary-row[data-value="0"] .add-bond').show();
          $('#client-order-table tbody tr.details-row[data-value="0"] .table-bond-details').show();
          $('#client-overview ul.client-details.tabs li[data-tab="summary-tab-6"] span').text('2');
     }

     if ($.cookie("order-type") == 'Health and Welfare') {
          $('#client-order-table tbody tr.summary-row[data-value="0"]').addClass('handw-content-item');
          $('#client-order-table tbody tr.summary-row[data-value="0"] .title .icon').addClass('welfare');
          $('#client-order-table tbody tr.summary-row[data-value="0"] .title .table-order-type').text('H&W');
          $('#client-order-table tbody tr.summary-row[data-value="0"] .table-order-type').text('H&W');
          $('#client-order-table tbody tr.summary-row[data-value="0"] .security-bond-answer').text('N/A');
          $('#client-order-table tbody tr.summary-row[data-value="0"] .supervision-level').hide();
          $('#client-order-table tbody tr.summary-row[data-value="0"] .add-bond').hide();
          $('#client-order-table tbody tr.details-row[data-value="0"] .table-bond-details').hide();
          $('#client-overview ul.client-details.tabs li[data-tab="summary-tab-6"] span').text('3');
     }

}
////////////////////////////////////// POPULATE COOKIES - ORDER TABLE - END //////////////////////////////////////
