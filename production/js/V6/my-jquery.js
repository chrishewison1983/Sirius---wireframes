// Checkbox code
$('input:checkbox').change(function(){
     if($(this).is(":checked")) {
          $(this).parent().addClass("checked");
     } else {
          $(this).parent().removeClass("checked");
     }
});

$('input:radio').click(function() {
     $('input:radio[name='+$(this).attr('name')+']').parent().removeClass('checked');
          $(this).parent().addClass('checked');
});

// Top nav search
$('#sirius-search').focus(function() {
    /* to make this flexible, I'm storing the current width in an attribute*/
    $(this).attr('data-default', $(this).width());
    $(this).animate({ width: 350 }, 'slow');
}).blur(function() {
    /* lookup the original width */
    // var w = $(this).attr('data-default');
    $(this).animate({ width: 200 }, 'slow');
});

// Log in code
$('input#password').click(function(){
     $("#login-button").removeClass("de-activate");
});

$('input#username').click(function(){
     $(this).siblings().addClass("hide");
});

$('input#password').click(function(){
     $(this).siblings().addClass("hide");
});

// Section header
$('.extra-content').hide();

$(document).ready(function(){
     $('#show-more').click(function(){
     	$('.extra-content').toggle('slow');
          $(this).toggleClass('close');
     });
});

// Tabs code
$(document).ready(function(){
     $('ul.tabs li').click(function(){
     	var tab_id = $(this).attr('data-tab');

     	$('ul.tabs li').removeClass('current');
     	$('.tab-content').removeClass('current');

     	$(this).addClass('current');
     	$("#"+tab_id).addClass('current');
     });

     $('.details').hide();

     $('#visit-commission .more-info').click(function(){
          $(this).siblings('.details').toggle('slow');
          $(this).toggleClass('open');
          e.preventDefault();
     });

     $('label').click( function(){
          $(this).parent().parent().parent().addClass('complete').removeClass('outstanding');
          $('.status').text('Done');
     });

});

// Correspondant
$(document).ready(function() {

     $('#suggested ul li a').click(function(e) {
          e.preventDefault();
          $(this).hide();
          $("#selected-list").append(`
               <li data-correspondant-id='${$(this).data('correspondant-id')}'>
                    <a class="correspondent">
                         <span>${ $(this).find('[data-value="name"]').text() }</span>
                         <br>
                         <span class="sub-text">${ $(this).find('[data-value="address"]').text() }</span>
                    </a>
               </li>`
          );
          $("#recipients").append(`
               <li data-correspondant-id='${$(this).data('correspondant-id')}'>
                    ${ $(this).find('[data-value="name"]').text() }
               </li>`
          );
          persistSelectedRecipients();
     });

     $('#selected-list').on('click', 'a', function(e) {
          e.preventDefault();
          var id = $(this).parent().data('correspondant-id');
          $(this).remove();
          $(`#recipients [data-correspondant-id="${id}"]`).remove();
          $(`#suggested [data-correspondant-id="${id}"]`).show();
          persistSelectedRecipients();
     });

});

// Forms
$('input, select').on('focus', function(e) {
     $(this).siblings().addClass('selected');
});

$('input, select').on('focusout', function(e) {
     $(this).siblings().removeClass('selected');
});

// Add deputy
$(document).ready(function(){
     $('#deputy-added').hide();

     $('#add-another-deputy').click(function(){
     	$('#deputy-added').slideDown('slow');
     });
});

// Address look-up
$(document).ready(function(){
     $('.address-list').hide();

     $('#find-postcode').click(function(){
     	$('.address-list').slideDown('slow');
          $('.postcode-value').text($('#third-party-postcode, #client-postcode, #postcode').val());
     });

});

// Clear -Forms
// var form = document.getElementById("add-third-party-form");
// form.reset();

// Add edit deputies
// $('.remove-deputy').click(function(){
//      $('h2.case-number').append($(this).parent().parent().find('h2').text());
// });
//
$('#confirm-remove-1').click(function(){
     $('.case-item[data-case-id="1"]').hide('slow', function(){ $(this).remove(); });
});
$('#confirm-remove-2').click(function(){
     $('.case-item[data-case-id="2"]').hide('slow', function(){ $(this).remove(); });
});
$('#confirm-remove-3').click(function(){
     $('.case-item[data-case-id="3"]').hide('slow', function(){ $(this).remove(); });
});
$('#confirm-remove-4').click(function(){
     $('.case-item[data-case-id="4"]').hide('slow', function(){ $(this).remove(); });
});

// $('#edit-deputy').click(function(){
//      $("#edit-title, .edit-deputy-form").show('slow');
//      $("#check-details-title").hide('slow');
// });


// Exisiting deputies
$('#exisiting-deputies').hide();

$(document).ready(function(){
     $('#deputy-last-name').keypress(function(){
     	$('#add-new-deputy').removeClass('de-activate');
          $('#exisiting-deputies').slideDown('slow');
     });
     $("#deputy-first-name").keyup(function(event) {
          var stt = $(this).val();
          $(".deputy-first-name").text(stt);
     });
     $("#deputy-last-name").keyup(function(event) {
          var stt = $(this).val();
          $(".deputy-last-name").text(stt);
     });
});

// Create client
function persistSelectedRecipients() {
     sessionStorage.setItem('selected-recipients', JSON.stringify($('#recipients li').map(function() {
          return $(this).text().trim();
     }).toArray()));
}

function outputSelectedRecipients() {}

$("#left, #right").each(function() {
     $(this).data("standardWidth", $(this).width());
});

$("#left, #right").hover(function() {
     $(this).animate({
          width: "70%"
     }, 300 );
     $(this).parent().children().not(this).animate({
          width: "30%"
     }, 300 );
}, function() {
     $(this).parent().children().each(function() {
          $(this).animate({
               width: $(this).data("standardWidth")
          }, 300 );
     });
});

// Commission visit - step - 1 (WHY?)
$("#visit-assist-visitor-yes, #visit-assist-visitor-no").click( function(){
     $('#cta-footer').slideDown('slow');
});

$("#visit-submitted-late-yes").click( function(){
     if($(this).is(':checked')) { $('.answer-1b').slideDown('slow'); }
});
$("#visit-submitted-late-no").click( function(){
     if($(this).is(':checked')) { $('.answer-1b').slideUp('slow'); }
});

$("#visit-dangers-yes").click( function(){
     if($(this).is(':checked')) { $('.answer-5b').slideDown('slow'); }
});
$("#visit-dangers-no").click( function(){
     if($(this).is(':checked')) { $('.answer-5b').slideUp('slow'); }
});

$("#visit-assist-visitor-yes").click( function(){
     if($(this).is(':checked')) { $('.answer-6b').slideDown('slow'); }
});
$("#visit-assist-visitor-no").click( function(){
     if($(this).is(':checked')) { $('.answer-6b').slideUp('slow'); }
});

$('#third-why').bind('change', function (e) {
     if ($('#third-why').val() == 'Non-compliance') {
          $('.why-answer-hidden').slideDown('slow');
     } else if ($('#third-why').val() == 'Urgent') {
          $('.why-answer-hidden').slideDown('slow');
     } else if ($('#third-why').val() == 'Sample visit') {
          $('.why-answer-hidden').slideUp('slow');
     } else if ($('#third-why').val() == 'Requested by deputy') {
          $('.why-answer-hidden').slideUp('slow');
     } else {
          $('.why-answer-hidden').hide();
     }
}).trigger('change');

$(document).ready(function() {

     $('#third-why').change(function(e) {
          e.preventDefault();
          $('.place-holder-text').hide();
          $("#why-commission-visit").append(`
               <p class="type-of-visit">
                    ${ $("#third-why option:selected").text() }
               </p>`
          );
     });

});

// Commission visit - step - 2 (WHO?)
if ($('.visit-commission').hasClass('step-2')) {
     $('ul li.step-1 .number span').text('').addClass('complete');
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
                    <button class="view-more close">More info</button>
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

// Commission visit - step - 3 (WHERE?)
if ($('.visit-commission').hasClass('step-3')) {
     $('ul li.step-1 .number span, ul li.step-2 .number span').text('').addClass('complete');
}

$(".report #datepicker").click( function(){
     $('#cta-footer').slideDown('slow');
});

// Commission visit - step - 4 (CASE SUMMARY)
if ($('.visit-commission').hasClass('step-4')) {
     $('ul li.step-1 .number span, ul li.step-2 .number span, ul li.step-3 .number span').text('').addClass('complete');
}

$("#visit-enclosure-yes, #visit-enclosure-no").click( function(){
     if( $(this).is(':checked') ) $('#cta-footer').slideDown('slow');
});

// $("#asset-list").hide();

var counter = 0;

$('#add-asset').click(function(e){
     e.preventDefault();
     $("#asset-list").slideDown('slow');
     $("#asset-list").append(`
          <li data-asset-id="${(++counter)}">
               <span class="title">${ $("#assets").find('#visit-asset').val() }</span>
               <span>Value: <strong>&pound;${ $("#assets").find('#visit-asset-value').val() }</strong>,</span>
               <span>Date: <strong>${ $("#assets").find('#datepicker').val() }</strong></span>
               <span class="remove"></span>
          </li>`
     );
});

$("#asset-list").on("click", ".remove", function(){
     $(this).parent().remove();
});

// Commission visit - step - 5 (CASE DETAILS)
if ($('.visit-commission').hasClass('step-5')) {
     $('ul li.step-1 .number span, ul li.step-2 .number span, ul li.step-3 .number span, ul li.step-4 .number span').text('').addClass('complete');
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

$("#third-medical-background").keypress( function(){
     $('#cta-footer').slideDown('slow');
});

// Commission visit - step - 6 (CONFIRM VIST)
if ($('.visit-commission').hasClass('step-6')) {
     $('ul li.step-1 .number span, ul li.step-2 .number span, ul li.step-3 .number span, ul li.step-4 .number span, ul li.step-5 .number span').text('').addClass('complete');
}

$("#confirm-read").click( function(){
     if( $(this).is(':checked') ) $('#cta-footer').slideDown('slow');
});


// ===================================== ALL JAVASCRIPT MUST COME AFTER THIS LINE ===================================== //

// Sticky item
// Cache selectors outside callback for performance.
var $window = $(window),
     $stickyEl = $('#document-summary'),
     elTop = $stickyEl.offset().top;

$window.scroll(function() {
     $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
});
