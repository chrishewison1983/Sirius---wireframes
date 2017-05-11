// =================================== Commission visit - JAVASCRIPT =================================== //
////////////////////////////////////// Step - 1 (6A-WHY?) //////////////////////////////////////
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

$('.health-welfare').hide();
$('.non-health-welfare').show();

$('#visit-tick-health').change(function(){
     if(this.checked) {
          $('.health-welfare').slideDown('slow');
          $('.non-health-welfare').hide();
     } else {
          $('.health-welfare').slideUp('slow');
          $('.non-health-welfare').show();
     }
});

// Side panel content
$('.accordion').find('#step-1, #step-2, #step-3, #step-4, #step-5, #step-6').addClass('inactive');
$('.accordion').find('.place-holder-text').show();
$('.accordion').find('.commission-visit-info').hide();

////////////////////////////////////// Step - 2 (6B-WHO?) //////////////////////////////////////
$('.visit-commission #cta-footer').hide();
$('.extra-info').hide();

function persistSelectedVisitor() {
     sessionStorage.setItem('selected-visitors', JSON.stringify($('#recipients li').map(function() {
          return $(this).text().trim();
     }).toArray()));
}

$(document).ready(function() {

     $('ul#commission-visit-client li a, ul#commission-visit-deputies li a').on('click', function(e) {
          e.preventDefault();
          $(this).toggleClass('selected');
          $(this).siblings('button').toggleClass('selected');
          if ($(this).hasClass('selected')) {
               $('.place-holder-text').hide();
               $("#recipients").append(`
                    <li data-visit-id='${$(this).data('visit-id')}' class="answer">
                         <span>${ $(this).find('[data-value="name"]').text() }</span><br>
                    </li>`
                    // <span class="address">${ $(this).find('[data-value="address"]').text() }</span>
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

$('#add-documents-link').click(function(e){
     e.preventDefault();
     $(this).closest("#action-panel").parent().find("[data-tab='tab-4']").addClass('current');
     $(this).closest("#action-panel").parent().find("[data-tab='tab-1'], [data-tab='tab-2'], [data-tab='tab-3']").removeClass('current');
     $(this).closest("#action-panel").parent().find("#tab-4").addClass('current');
     $(this).closest("#action-panel").parent().find("#tab-4 .section-title").text('Add case documents to visit:');
     $(this).closest("#action-panel").parent().find("#tab-1, #tab-2, #tab-3").removeClass('current');
});

// Side panel content
if ($.cookie("completed-step-1") == 'true') {
     $('.accordion').find('#step-1').removeClass('inactive');
     $('.accordion #step-1').find('.place-holder-text').hide();
     $('.accordion #step-1').find('.commission-visit-info').show();
}

////////////////////////////////////// Step - 3 (6C-WHERE?) //////////////////////////////////////
$(".report #datepicker").click( function(){
     $('#cta-footer').slideDown('slow');
});

$(document).ready(function() {

     $('#visit-accomodation').click( function(){
          var accomodationID = $(this).data('visit-accomodation');
          console.log($('#visit-accomodation option:selected').val());
     });

     $('#visitor-list .location').click( function(){
          $(this).addClass('selected');
          $(this).siblings().addClass('selected');
          $(this).parent().siblings().find('.location').removeClass('selected');
          $(this).parent().siblings().find('.location-form').removeClass('selected');
          persistSelectedVisitor();
     });

     $('#visitor-list input:radio').change(function(){
          if($(this).is(":checked")) {
               $(this).parent().addClass("checked");
          } else {
               $(this).parent().removeClass("checked");
          }
     });

     $('#visitor-list a').click(function(e){
          e.preventDefault();
          $("#visit-location").append(`
               <li>
                    ${ $(this).find('[data-value="name"]').text() }
               </li>`
          );
     });

});

if ($('.visit-name').html() == 'Mr Gerald Brackens (Client)') {
     $(this).siblings('.address').html('sdfweffwefwefwefwefwef');
}

$('#add-visitors-step-3').click(function(e){
     persistSelectedLocation();
});

function persistSelectedLocation() {
     sessionStorage.setItem('selected-location', JSON.stringify($('#visit-location li').map(function() {
          return $(this).text().trim();
     }).toArray()));
}
// Side panel content
if ($.cookie("completed-step-1") && $.cookie("completed-step-2") == 'true') {
     $('.accordion').find('#step-1, #step-2').removeClass('inactive');
     $('.accordion #step-1, .accordion #step-2').find('.place-holder-text').hide();
     $('.accordion #step-1, .accordion #step-2').find('.commission-visit-info').show();
}

////////////////////////////////////// Step - 4 (6D-CASE-SUMMARY-& ASSETS) //////////////////////////////////////
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
               <span class="title">
                    <div class="type">${ $("#assets").find('#visit-asset-type').val() }</div>:
                    <div class="description">${ $("#assets").find('#visit-asset').val() }</div>
               </span>
               <span>Value: <strong>&pound;${ $("#assets").find('#visit-asset-value').val() }</strong>,</span>
               <span>Date: <strong>${ $("#assets").find('#datepicker').val() }</strong></span>
               <span class="edit"></span>
               <span class="remove"></span>
          </li>`
     );
     $("#asset-summary").append(`
          <li data-asset-id="${(++assetList)}">
               <span class="title">${ $("#assets").find('#visit-asset-type').val() + ': ' + $("#assets").find('#visit-asset').val() }</span>
               <br>
               <span>Value: <strong>&pound;${ $("#assets").find('#visit-asset-value').val() }</strong>,</span>
               <span>Date: <strong>${ $("#assets").find('#datepicker').val() }</strong></span>
               <span class="remove"></span>
          </li>`
     );
});

$('#documents-list').hide();
$('#documents-list-intro').hide();

$('#add-to-visit-1, #add-to-visit-2, #add-to-visit-3, #add-to-visit-4, #add-to-visit-5, #add-to-visit-6, #add-to-visit-7').click(function(e){
     // alert($(this).parent().parent().parent().find('a').text());
     $('#documents-list-intro').show();
     $('#documents-list').show().append(`
               <li>${ $(this).parent().parent().parent().find('a').text() }</li>
          `
     );
});

// $(".add-to-visit").change(function() {
//      // If checked
//      var value = $(this).val(),
//           $list = $("#documents-list");
//      if (this.checked) {
//           //add to the right
//           $list.show().append("<li data-value='" + value + "'>" + value + "</li>");
//           $('#documents-list-intro').show();
//      }
//      else {
//           //hide to the right
//           $list.find('li[data-value="' + value + '"]').slideUp("fast", function() {
//                $(this).remove();
//           });
//           $('#documents-list-intro').hide();
//      }
// });

// $('#add-to-visit-1, #add-to-visit-2, #add-to-visit-3, #add-to-visit-4, #add-to-visit-5, #add-to-visit-6, #add-to-visit-7').parent().click(function(e){
//      // alert($(this).parent().parent().parent().find('a').text());
//      $('#documents-list-intro').show();
//      $('#documents-list').show().remove(`
//                <li>${ $(this).parent().parent().parent().find('a').text() }</li>
//           `
//      );
// });

$("#asset-list").on("click", ".remove", function(){
     $(this).parent().remove();
     var match = $(this).parent().data('asset-id');
     $(`#asset-summary [data-asset-id="${match}"]`).remove();
});

$("#asset-list").on("click", ".edit", function(){
     $(this).parent().parent().siblings('h3').text('Edit asset');
     $(this).parent().parent().siblings('.cta-row').hide();
     $(this).parent().remove();
     $('#assets').slideDown('slow');
     $('#assets #confirm-add-asset').attr('id','confirm-edit-asset').text('Edit');

     var itemToChange = $(this).parent().attr('data-asset-id');

     // 1 - Populates the "Asset type"
     var inputType = $(this).siblings('.title').find('.type').text();
     var input1 = $('#visit-asset-type');
     input1.val(inputType);

     // 2 - Populates the "Asset description"
     var inputDesc = $(this).siblings('.title').find('.description').text();
     var input2 = $('#visit-asset');
     input2.val(inputDesc);

     // 3 - Populates the "Asset value"
     var inputValue = $(this).siblings().find('[data-asset-info="value"]').text();
     var input3 = $('#visit-asset-value');
     input3.val(inputValue);

     // 4 - Populates the "Asset date"
     var inputDate = $(this).siblings().find('[data-asset-info="date"]').text();
     var input4 = $('#datepicker');
     input4.val(inputDate);

});

// $("#confirm-edit-asset").on("click", function(){
//      $(this).addClass('test');
// });

$('#add-visitors-step-3').click(function(e){
     persistSelectedAssets();
});

function persistSelectedAssets() {
     sessionStorage.setItem('selected-assets', JSON.stringify($('#asset-summary li').map(function() {
          return $(this).text().trim();
     }).toArray()));
}

// Side panel content
if ($.cookie("completed-step-1") && $.cookie("completed-step-2") && $.cookie("completed-step-3") == 'true') {
     $('.accordion').find('#step-1, #step-2, #step-3').removeClass('inactive');
     $('.accordion #step-1, .accordion #step-2, .accordion #step-3').find('.place-holder-text').hide();
     $('.accordion #step-1, .accordion #step-2, .accordion #step-3').find('.commission-visit-info').show();
}

////////////////////////////////////// Step - 5 (6E-CASE-DETAILS) //////////////////////////////////////
$('.answer-1b, .answer-2b, .answer-3b, .answer-4b, .answer-5b, .answer-6b').hide();

$("#visit-deputy-order-yes").click( function(){
     if($(this).is(':checked')) { $('.answer-1b').slideDown('slow'); }
});
$("#visit-deputy-order-no").click( function(){
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

// Side panel content
if ($.cookie("completed-step-1") && $.cookie("completed-step-2") && $.cookie("completed-step-3") && $.cookie("completed-step-4") == 'true') {
     $('.accordion').find('#step-1, #step-2, #step-3, #step-4').removeClass('inactive');
     $('.accordion #step-1, .accordion #step-2, .accordion #step-3, .accordion #step-4').find('.place-holder-text').hide();
     $('.accordion #step-1, .accordion #step-2, .accordion #step-3, .accordion #step-4').find('.commission-visit-info').show();
}
////////////////////////////////////// Step - 6 (6E-VISIT SUMMARY) //////////////////////////////////////
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

$("#visit-family-background").keypress( function(){
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

// Side panel content
if ($.cookie("completed-step-1") && $.cookie("completed-step-2") && $.cookie("completed-step-3") && $.cookie("completed-step-4") && $.cookie("completed-step-5") == 'true') {
     $('.accordion').find('#step-1, #step-2, #step-3, #step-4, #step-5').removeClass('inactive');
     $('.accordion #step-1, .accordion #step-2, .accordion #step-3, .accordion #step-4, .accordion #step-5').find('.place-holder-text').hide();
     $('.accordion #step-1, .accordion #step-2, .accordion #step-3, .accordion #step-4, .accordion #step-5').find('.commission-visit-info').show();
}

////////////////////////////////////// VISIT COMMISSION FORM COMPLETE //////////////////////////////////////
// Side panel content
if ($.cookie("completed-step-1") && $.cookie("completed-step-2") && $.cookie("completed-step-3") && $.cookie("completed-step-4") && $.cookie("completed-step-5") && $.cookie("completed-step-6") == 'true') {
     $('.accordion').find('#step-1, #step-2, #step-3, #step-4, #step-5, #step-6').removeClass('inactive');
     $('.accordion #step-1, .accordion #step-2, .accordion #step-3, .accordion #step-4, .accordion #step-5, .accordion #step-6').find('.place-holder-text').hide();
     $('.accordion #step-1, .accordion #step-2, .accordion #step-3, .accordion #step-4, .accordion #step-5, .accordion #step-6').find('.commission-visit-info').show();
}


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
