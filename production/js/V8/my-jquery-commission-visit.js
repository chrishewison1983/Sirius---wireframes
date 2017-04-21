// =================================== Commission visit - JAVASCRIPT =================================== //
/////////////////// Step - 1 (6A-WHY?) ///////////////////
if ($('.visit-commission').hasClass('step-1')) {
     // Removes the HREF's from the progress bar
     $('ul li.step-2 a, ul li.step-3 a, ul li.step-4 a, ul li.step-5 a, ul li.step-6 a').removeAttr("href");
}

$("#visit-documents").keypress( function(){
     $('#cta-footer').slideDown('slow');
});

$("#visit-submitted-late-yes").click( function(){
     if($(this).is(':checked')) { $('.answer-1b').slideDown('slow'); }
});
$("#visit-submitted-late-no").click( function(){
     if($(this).is(':checked')) { $('.answer-1b').slideUp('slow'); }
});

$('#visit-why').bind('change', function (e) {
     if ($('#visit-why').val() == 'Non-compliance') {
          $('.why-answer-hidden').slideDown('slow');
     } else if ($('#visit-why').val() == 'Urgent') {
          $('.why-answer-hidden').slideDown('slow');
     } else if ($('#visit-why').val() == 'Sample visit') {
          $('.why-answer-hidden').slideUp('slow');
     } else if ($('#visit-why').val() == 'Requested by deputy') {
          $('.why-answer-hidden').slideUp('slow');
     } else {
          $('.why-answer-hidden').hide();
     }
}).trigger('change');

// $(document).ready(function() {
//
//      $('#third-why').change(function(e) {
//           e.preventDefault();
//           $('.place-holder-text').hide();
//           $("#why-commission-visit").append(`
//                <p class="type-of-visit">
//                     ${ $("#third-why option:selected").text() }
//                </p>`
//           );
//      });
//
// });

$('#commission-visit').hide();

/////////////////// Step - 2 (6B-WHO?) ///////////////////
if ($('.visit-commission').hasClass('step-2')) {
     $('ul li.step-1 .number span').text('').addClass('complete');

     // Removes the HREF's from the progress bar
     $('ul li.step-3 a, ul li.step-4 a, ul li.step-5 a, ul li.step-6 a').removeAttr("href");

     $('#commission-visit').show();
     // Show/hide #commission-visit contents
     // $('#step-1').show();
     // $('#step-2, #step-3, #step-4, #step-5, #step-6').hide();
}

function persistSelectedVisitor() {
     sessionStorage.setItem('selected-visitors', JSON.stringify($('#recipients li').map(function() {
          return $(this).text().trim();
     }).toArray()));
}

$('.visit-commission #cta-footer').hide();
$('.extra-info').hide();

$(document).ready(function() {

     $('ul#commission-visit-client li a, ul#commission-visit-deputies li a').on('click', function(e) {
          e.preventDefault();
          $(this).toggleClass('selected');
          $(this).siblings('button').toggleClass('selected');
          if ($(this).hasClass('selected')) {
               $('.place-holder-text').hide();
               $("#recipients").append(`
                    <li data-visit-id='${$(this).data('visit-id')}'>
                         ${ $(this).find('[data-value="name"]').text() }
                    </li>`
               );
               persistSelectedVisitor();

               $('#cta-footer').slideDown('slow');
          }
          else {
               e.preventDefault();
               var id = $(this).data('visit-id');
               $(`#recipients [data-visit-id="${id}"]`).remove();
          }
     });

});

$('#add-third-party-form').hide();
$('#commission-visit-third-parties').hide();

$('#add-third-party').click(function(e){
     e.preventDefault();
     $(this).hide('slow');
     $('#add-third-party-form').show('slow');
     $(this).parent().parent().find('.visitor-container').hide('slow');
     // $(this).find('.visitor-container').slideDown('slow');
});

$('#confirm-add-third-party').click(function(e){
     e.preventDefault();
     $('#add-third-party-form').hide('slow');
     $(this).parent().parent().parent().find('.visitor-container').show('slow');
     $('#add-third-party').show('slow');

     // $('input[type="text"]').val('');

     $('#cta-footer').slideDown('slow');

     $('.extra-info').hide();
     $('#commission-visit-third-parties').show('slow');

     $('.place-holder-text').hide();
     $("#recipients").append(`
          <li data-visit-id='${$("#add-third-party-form").data('visit-id')}'>
               ${ $("#add-third-party-form").find('#third-party-title').val() + ' ' + $("#add-third-party-form").find('#third-party-first-name').val() + ' ' + $("#add-third-party-form").find('#third-party-last-name').val() + ' ' }
               (Third party contact)
          </li>`
     );
     $("#commission-visit-third-parties").append(`
          <li>
               <div class="wrapper">
                    <a class="visitor selected" data-visit-id='${$("#add-third-party-form").data('visit-id')}'>
                         <span>
                              ${ $("#add-third-party-form").find('#third-party-title').val() + ' ' + $("#add-third-party-form").find('#third-party-first-name').val() + ' ' + $("#add-third-party-form").find('#third-party-last-name').val() }
                         </span>
                         <br>
                         <span class="sub-text">
                              ${ $("#add-third-party-form").find('input:checked').parent().text() }
                         </span>
                    </a>
                    <button class="view-more close"><span>More info</span></button>
               </div>
               <div class="extra-info">
                    <span class="border-top"></span>

                    <div class="item-detail">
                         <p class="item">Country:</p>
                         <p class="answer">United Kingdom</p>
                    </div>

                    <div class="item-detail">
                         <p class="item">Daytime telephone:</p>
                         <p class="answer">${ $("#add-third-party-form").find('#third-party-phone-number').val() }</p>
                    </div>

                    <div class="item-detail">
                         <p class="item">Mobile telephone:</p>
                         <p class="answer">${ $("#add-third-party-form").find('#third-party-mob-number').val() }</p>
                    </div>

                    <div class="item-detail">
                         <p class="item">Email address:</p>
                         <p class="answer">${ $("#add-third-party-form").find('#third-party-email').val() }</p>
                    </div>

                    <div class="item-detail">
                         <p class="item">Why is contact needed?:</p>
                         <p class="answer">${ $("#add-third-party-form").find('#third-party-needed').val() }</p>
                    </div>

                    <div class="item-detail">
                         <p class="item">Questions:</p>
                         <p class="answer">${ $("#add-third-party-form").find('#third-party-questions').val() }</p>
                    </div>

               </div>
          </li>`
     );
     persistSelectedVisitor();

});

$('#cancel-third-party').click(function(e){
     e.preventDefault();
     // $(this).find('.visitor-container').hide('slow');
     $('#add-third-party-form').hide('slow');
     $('#add-third-party').show('slow');
     $(this).parent().parent().parent().find('.visitor-container').show('slow');
});

$('.view-more').click(function(e){
     e.preventDefault();
     $(this).toggleClass('close');
     $(this).siblings().toggleClass('open');
     $(this).parent().siblings('.extra-info').toggle('slow');
     // $(this).parent().parent().parent().find('.visitor-container').show('slow');
});

/////////////////// Step - 3 (6C-WHERE?) ///////////////////
if ($('.visit-commission').hasClass('step-3')) {
     $('ul li.step-1 .number span, ul li.step-2 .number span').text('').addClass('complete');

     // Removes the HREF's from the progress bar
     $('ul li.step-4 a, ul li.step-5 a, ul li.step-6 a').removeAttr("href");

     $('#commission-visit').show();
     // Show/hide #commission-visit contents
     // $('#step-1, #step-2').show();
     // $('#step-3, #step-4, #step-5, #step-6').hide();
}

$(".report #datepicker").click( function(){
     $('#cta-footer').slideDown('slow');
});

$(document).ready(function() {

     $('#visit-accomodation').click( function(){
          var accomodationID = $(this).data('visit-accomodation');
          console.log($('#visit-accomodation option:selected').val());
     });

});


///////////////////// Step - 4 (6D-CASE-SUMMARY-& ASSETS) ///////////////////
if ($('.visit-commission').hasClass('step-4')) {
     $('ul li.step-1 .number span, ul li.step-2 .number span, ul li.step-3 .number span').text('').addClass('complete');

     // Removes the HREF's from the progress bar
     $('ul li.step-5 a, ul li.step-6 a').removeAttr("href");

     $('#commission-visit').show();
     // Show/hide #commission-visit contents
     // $('#step-1, #step-2, #step-3').show();
     // $('#step-4, #step-5, #step-6').hide();
}

$('#assets').hide();

$('#add-asset').click(function(e){
     e.preventDefault();
     $(this).hide('slow');
     $('#assets').show('slow');
     $(this).parent().parent().find('.visitor-container').hide('slow');
     // $(this).find('.visitor-container').slideDown('slow');
});

$("#visit-enclosure-yes, #visit-enclosure-no").click( function(){
     if( $(this).is(':checked') ) $('#cta-footer').slideDown('slow');
});

var assetCounter = 2;
var assetList = 2;

$('#confirm-add-asset').click(function(e){
     e.preventDefault();
     $("#asset-list").slideDown('slow');
     $("#asset-list").append(`
          <li data-asset-id="${(++assetCounter)}">
               <span class="title">${ $("#assets").find('#visit-asset').val() }</span>
               <span>Value: <strong>&pound;${ $("#assets").find('#visit-asset-value').val() }</strong>,</span>
               <span>Date: <strong>${ $("#assets").find('#datepicker').val() }</strong></span>
               <span class="remove"></span>
          </li>`
     );
     $("#asset-summary").append(`
          <li data-asset-id="${(++assetList)}">
               <span class="title">${ $("#assets").find('#visit-asset').val() }</span>
               <br>
               <span>Value: <strong>&pound;${ $("#assets").find('#visit-asset-value').val() }</strong>,</span>
               <span>Date: <strong>${ $("#assets").find('#datepicker').val() }</strong></span>
               <span class="remove"></span>
          </li>`
     );
});

$("#asset-list").on("click", ".remove", function(){
     $(this).parent().remove();
     var match = $(this).parent().data('asset-id');
     $(`#asset-summary [data-asset-id="${match}"]`).remove();
});


$('#add-visitors-step-4').click(function(e){
     persistSelectedAssets();
});

function persistSelectedAssets() {
     sessionStorage.setItem('selected-assets', JSON.stringify($('#asset-summary li').map(function() {
          return $(this).text().trim();
     }).toArray()));
}

///////////////////// Step - 5 (6E-CASE-DETAILS) ///////////////////
if ($('.visit-commission').hasClass('step-5')) {
     $('ul li.step-1 .number span, ul li.step-2 .number span, ul li.step-3 .number span, ul li.step-4 .number span').text('').addClass('complete');

     // Removes the HREF's from the progress bar
     $('ul li.step-6 a').removeAttr("href");

     $('#commission-visit').show();
     // Show/hide #commission-visit contents
     // $('#step-1, #step-2, #step-3, #step-4').show();
     // $('#step-5, #step-6').hide();
}

$('.answer-1b, .answer-2b, .answer-3b, .answer-4b, .answer-5b, .answer-6b').hide();

$("#visit-special-requirements-yes").click( function(){
     if($(this).is(':checked')) { $('.answer-1b').slideDown('slow'); }
});
$("#visit-special-requirements-no").click( function(){
     if($(this).is(':checked')) { $('.answer-1b').slideUp('slow'); }
});

$("#visit-safeguarding-yes").click( function(){
     if($(this).is(':checked')) { $('.answer-2b').slideDown('slow'); }
});
$("#visit-safeguarding-no").click( function(){
     if($(this).is(':checked')) { $('.answer-2b').slideUp('slow'); }
});

$("#visit-deputyship-order-yes").click( function(){
     if($(this).is(':checked')) { $('.answer-3b').slideDown('slow'); }
});
$("#visit-deputyship-order-no").click( function(){
     if($(this).is(':checked')) { $('.answer-3b').slideUp('slow'); }
});

$("#visit-first-no").click( function(){
     if($(this).is(':checked')) { $('.answer-4b').slideDown('slow'); }
});
$("#visit-first-yes").click( function(){
     if($(this).is(':checked')) { $('.answer-4b').slideUp('slow'); }
});

$("#visit-first-yes, #visit-first-no").click( function(){
     $('#cta-footer').slideDown('slow');
});


// $("#third-medical-background").keypress( function(){
//      $('#cta-footer').slideDown('slow');
// });

///////////////////// Step - 6 (6E-VISIT SUMMARY) ///////////////////
if ($('.visit-commission').hasClass('step-6')) {
     $('ul li.step-1 .number span, ul li.step-2 .number span, ul li.step-3 .number span, ul li.step-4 .number span, ul li.step-5 .number span').text('').addClass('complete');
     $('#commission-visit').show();
     // Show/hide #commission-visit contents
     // $('#step-1, #step-2, #step-3, #step-4, #step-5').show();
     // $('#step-6').hide();
}

$("#visit-assist-visitor-yes").click( function(){
     if($(this).is(':checked')) { $('.answer-6b').slideDown('slow'); }
});
$("#visit-assist-visitor-no").click( function(){
     if($(this).is(':checked')) { $('.answer-6b').slideUp('slow'); }
});

$("#visit-dangers-yes").click( function(){
     if($(this).is(':checked')) { $('.answer-5b').slideDown('slow'); }
});
$("#visit-dangers-no").click( function(){
     if($(this).is(':checked')) { $('.answer-5b').slideUp('slow'); }
});

$("#third-family-background").keypress( function(){
     $('#cta-footer').slideDown('slow');
});

// Document viewer
$(document).ready(function() {
     $(".hide-page-1").click(function(){
          $("#page-1").animate({width: 'toggle'}, "slow");
          setTimeout(function() {
               $("#page-2").animate({width: 'toggle'}, "slow");
          }, 500);
     });
     $("#back").click(function(){
          $("#page-2").animate({width: 'toggle'}, "slow");
          setTimeout(function() {
               $("#page-1").animate({width: 'toggle'}, "slow");
          }, 500);
     });

});

// $('.hide-page-1').click(function() {
//      // $("#page-1").toggle("slide");
//      $("#page-1").show("slide", { direction: "left" }, 1000);
// });


// ===================================== ALL JAVASCRIPT MUST COME AFTER THIS LINE ===================================== //

// Populates the client page with list of 4a - recipients and document people
JSON.parse(sessionStorage.getItem('selected-visitors')).forEach(function(recipient) {
     $('#visiting').append(`
          <li> ${ recipient }, </li>
     `);
     $('#visits').append(`
          <li> ${ recipient }, </li>
     `);
});

JSON.parse(sessionStorage.getItem('selected-recipients')).forEach(function(recipient) {
     $('#document-recipients').append('<li>' + recipient + '</li>');
});