// Forms code
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

$('#address-manual').click(function(e){
     e.preventDefault();
     $('.address-list').hide();
     $('#manual-address-entry').toggle();
     $(this).text(function(i, text){
          return text === "Enter address manually" ? "Hide address manually" : "Enter address manually";
     })
});

$(".input-length").keyup(function () {
     if (this.value.length == this.maxLength) {
          $(this).next('.input-length').focus();
     }
});

// Address look-up
$(document).ready(function(){
     $('.address-list').hide();

     $('#find-postcode').click(function(){
     	$('.address-list').slideDown('slow');
          $('#manual-address-entry').hide();
          $('.postcode-value').text($('#third-party-postcode, #client-postcode, #postcode, #deputy-postcode').val());
     });
});


// Top nav search
$("label.switch span").click(function () {
     $(this).text(function(i, v){
          return v === 'Switch to: Supervision' ? 'Switch to: LPA' : 'Switch to: Supervision'
     })
});

$(function() {
     $(".user-cta").on("click", function(e) {
          $(this).addClass("active");
          e.stopPropagation();
          $('.user-settings').show();
     });
     $(document).on("click", function(e) {
          if ($(e.target).is(".user-cta") === false) {
               $(".user-cta").removeClass("active");
               $('.user-settings').hide();
          }
     });
});

// $(".user-cta").click(function () {
//      // $(this).toggleClass('active');
// });

$(".multiple").click(function () {
     $(this).addClass('current');
     $(this).siblings().removeClass('current');
});



// $('#autocomplete').keypress(function() {
//      $(this).addClass('focus');
// });

// $('#sirius-search').focus(function() {
//     /* to make this flexible, I'm storing the current width in an attribute*/
//     $(this).attr('data-default', $(this).width());
//     $(this).animate({ width: 600 }, 'slow');
// }).blur(function() {
//     /* lookup the original width */
//     // var w = $(this).attr('data-default');
//     $(this).animate({ width: 400 }, 'slow');
// });

// Log in code
$('input#password').click(function(){
     $("#login-button").removeClass("de-activate");
     $(this).siblings('.password').addClass("hide");
});

$('input#username').click(function(){
     $(this).siblings().addClass("hide");
});

$('input#password').keyup(function(){
     $(this).siblings('.password').addClass("hide");
     $("#login-button").removeClass("de-activate");
});

// Section header
$('.extra-content').hide();

$(document).ready(function(){
     $('#show-more').click(function(){
     	$('.extra-content').toggle('slow');
          $(this).toggleClass('close');
          $(this).text(function(i, text){
               return text === "Show more info" ? "Hide more info" : "Show more info";
          })
     });
});

// Client hub header
$(document).ready(function(){
     $('.show-client-info').click(function(){
     	$('#hidden-client-content').toggle();
          $(this).toggleClass('close');
          $(this).text(function(i, text){
               return text === "More client info" ? "Hide client info" : "More client info";
          })
     });
});


$('.client-home-button').click(function(){
     // Changes the horizontal tabs
     // $('.client-nav .client-details .tablinks.overview').addClass('active');
     // $('.client-nav .client-details .tablinks.health, .client-nav .client-details .tablinks.property').removeClass('active');

     // Changes the tab content
     // $('#client-overview').show();
     // $('#client-health, #client-property').hide();

     // Changes the view to see the client details
     // $('#client-overview .client-details.tabs li').removeClass('current');
     // $('#client-overview .client-details.tabs li[data-tab="summary-tab-1"]').addClass('current');

     // $('#client-overview .client-details.tab-content').removeClass('current');
     // $('#client-overview #summary-tab-1').addClass('current');

     // $('#client-overview li[data-tab="summary-tab-5"]').addClass('hide');
     $('#client-overview li[data-tab="summary-tab-5"] span').text('5');
     $('#client-overview li[data-tab="summary-tab-7"] span').text('4');

     $('.deputy-info-only').hide();

     // Remove the filter styles
     $('#hub-filter-panel .filter, #hub-filter-panel .wrapper').removeClass('checked');
     $('#hub-filter-panel .filter h2 .icon').addClass('white');

     $('nav.actions-nav ul li').removeClass('active');
     $('li[data-action="action-1"], li[data-action="action-3"], li[data-action="action-5"], li[data-action="action-10"], li[data-action="action-11"], li[data-action="action-13"], li[data-action="action-14"], li[data-action="action-15"]').addClass('active');

     $('.pfa-content-item').show();
     $('.handw-content-item').show();

     $('.client-content-item').show();

     // Orders content
     // $('.order-section .accordion-1').find('.number').text('2');
     // $('.order-section .accordion-3').find('.number').text('1');
     // $('.order-section .accordion-3').removeClass('inactive');
     // $('.order-section #accordion-3').hide();
     $('#client-overview li[data-tab="summary-tab-6"] span').text('4');

});

$('.deputy-home-button').click(function(){
     // Changes the view to see the client details
     $('.client-details.tabs li[data-tab="tab-1"]').addClass('current');
     $('.client-details.tabs li[data-tab="tab-2"], .client-details.tabs li[data-tab="tab-3"], .client-details.tabs li[data-tab="tab-4"], .client-details.tabs li[data-tab="tab-5"]').removeClass('current');
     $('#tab-1').addClass('current');
     $('#tab-2, #tab-3, #tab-4, #tab-5').removeClass('current');
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

     // $('.details').hide();

});

function openTab(evt, tabName) {
     // Declare all variables
     var i, tabcontent, tablinks;

     // Get all elements with class="tabcontent" and hide them
     tabcontent = document.getElementsByClassName("tabcontent");
     for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
     }

     // Get all elements with class="tablinks" and remove the class "active"
     tablinks = document.getElementsByClassName("tablinks");
     for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
     }

     // Show the current tab, and add an "active" class to the button that opened the tab
     document.getElementById(tabName).style.display = "block";
     evt.currentTarget.className += " active";
}

// Forms
$(document).ready(function(){
     $('input, select').on('focus', function(e) {
          $(this).siblings().addClass('selected');
     });

     $('input, select').on('focusout', function(e) {
          $(this).siblings().removeClass('selected');
     });

     $('.date-wrapper input').on('focus', function(e) {
          $(this).parent().siblings().addClass('selected');
          $(this).siblings().addClass('selected');
     });

     $('.date-wrapper input').on('focusout', function(e) {
          $(this).parent().siblings().removeClass('selected');
          $(this).siblings().removeClass('selected');
     });

});


// Clear -Forms
// var form = document.getElementById("add-third-party-form");
// form.reset();

// Create client
// function persistSelectedLetter() {
//      sessionStorage.setItem('selected-letter', JSON.stringify($('.document-item .doc-title').map(function() {
//           return $(this).text().trim();
//      }).toArray()));
// }

function persistSelectedLetters() {
     sessionStorage.setItem('selected-letter', JSON.stringify($('#draft-list li').map(function() {
          return $(this).text().trim();
     }).toArray()));
}

function persistSelectedInserts() {
     sessionStorage.setItem('selected-inserts', JSON.stringify($('#inserts-selected li').map(function() {
          return $(this).text().trim();
     }).toArray()));
}

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

// Accordion
$(document).ready(function() {
     function close_accordion_section() {
          $('.accordion .accordion-section').removeClass('active');
          $('.accordion .accordion-section-title').removeClass('active');
          $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
     }

     $('.accordion-section-title').click(function(e) {
          // Grab current anchor value
          var currentAttrValue = $(this).attr('href');

          if ($(e.target).is('.active')) {
               close_accordion_section();
          } else {
               close_accordion_section();

               // Add active class to section title
               $(this).parent().addClass('active');
               $(this).addClass('active');
               // Open up the hidden content panel
               $('.accordion ' + currentAttrValue).css('display', 'inline-block').addClass('open');
          }

          e.preventDefault();
     });
});

// Dashboard
$(document).ready(function() {

     $('.open').on('click', function(e) {
          e.preventDefault();
          $(this).parent().parent().siblings('.description').toggleClass('open-description');
          $(this).toggleClass('close');
     });

});

// Document viewer
$(document).ready(function() {
     $(".hide-page-1").click(function(e){
          e.preventDefault();
          $(this).closest(".page-1").hide();
          $(this).closest(".page-1").siblings('.page-2').show();
          // $(".page-1").hide();
          // $(".page-2").show();
          var documentText = $(this).text();
          $(this).closest(".page-1").siblings('.page-2').find('h2').text(documentText);
     });
     $(".back").click(function(e){
          e.preventDefault();
          $(this).closest(".page-2").siblings('.page-1').show();
          $(this).closest(".page-2").hide();
     });
     $(".compare").click(function(e){
          e.preventDefault();
          // $('.compare-icon').show();
          $('.close').show();
          $(".document-1, .document-2").show();
          $('.document-2, .document-1').addClass('compare');
          $(this).closest('.doc-container').siblings().find('.page-1').show();
          $(this).closest('.doc-container').siblings().find('.page-2').hide();
     });
     $(".close").click(function(e){
          e.preventDefault();
          // $('.compare-icon').hide();
          $(this).closest(".doc-container").hide();
          $('.document-2, .document-1').removeClass('compare');
          $('.document-2, .document-1').removeClass('float-right');
          $('.document-2, .document-1').removeClass('float-left');
     });
     $(".document-1 .close").click(function(e){
          e.preventDefault();
          $('.compare-icon').hide();
          $('.document-2 .close').hide();
     });
     $(".document-2 .close").click(function(e){
          e.preventDefault();
          $('.compare-icon').hide();
          $('.document-1 .close').hide();
     });
     $(".document-2 .compare").click(function(e){
          e.preventDefault();
          $('.document-1').addClass('float-right');
          $('.document-2').addClass('float-left');

     });

});

// Dashboard
$(document).ready(function() {

     $('.close-panel').on('click', function(e) {
          $(this).parent().slideUp();
     })

});

// Secondary navigation
$('ul.secondary-nav').hide();

$('.has-secondary-nav').click(function(e){
     e.preventDefault();
     $(this).toggleClass('open');
     $(this).siblings('ul.secondary-nav').toggle();
});

// Check of page has scroll bar
$(window).scroll(function() {
    // User is scrolling
    $('#animated-example').fadeOut('slow');
});
// $(function(){
//      $('#animated-example').hide().hasScrollBar();
// });
//
// (function($) {
//      $.fn.hasScrollBar = function() {
//           return this.get(0).scrollHeight > this.height();
//      }
// })(jQuery);

// Close the side-panel
var sidePanelInit = false;

$(document).ready(function() {

     $('#side-panel').prepend('<a class="close close-side-panel"></a>');

     $(document).on('click', 'a.close-side-panel', function () {
          $(".side-panel-parent").hide("slide", { direction: "left" }, 1000, function() {
               $("#action-panel").show("slide", { direction: "left" }, 1000);
               $('#action-panel').removeClass('large-uncentered').addClass('large-centered, center-align');
               // $("#side-panel").parent().siblings(":visible").hide("slide", { direction: "left" }, 1000);
               $("main").prepend('<a class="show-side-panel"></a>').show(500);
          });
     });

     $(document).on('click', 'a.show-side-panel', function () {
          $('#action-panel').addClass('large-uncentered').removeClass('large-centered, center-align');
          $(".side-panel-parent").show(1000, function() {
               $("#action-panel").show("slide", { direction: "left" }, 1000);
               // $("#side-panel").parent().siblings(":visible").hide("slide", { direction: "left" }, 1000);
               $('main .show-side-panel').hide(500);

               if (!sidePanelInit) {
                    $("#side-panel").pin({
                          containerSelector: ".columns"
                    });
                    sidePanelInit = true;
               }
          });

     });

});

// New confirmation panel
$('#new-confirmation-message').click(function(e){
     e.preventDefault();
     $('#new-confirmation-message-panel').toggle();
});

// HELPS change the validation for forms with mulitple options and required fields
var handlers = [];
function watchFormChanges(form, disableDis) {
     $(form).find('input[type="text"]').off('keyup', '**');
     $(form).find('input[type="text"]').keyup(function() { handleTrigger(form, disableDis); });

     $(form).find('input[type="radio"]').off('change', '**');
     $(form).find('input[type="radio"]').change(function() { handleTrigger(form, disableDis); });
}

function handleTrigger(form, disableDis) {
     var valid = true;
     var inputs = $(form).find('input');
     for (var i = 0; i < inputs.length; i++) {
          var input = $(inputs[i]);
          if (input.parents('.form-group').find('.required:visible').length > 0) {
               var val = input.val();
               if (val == null || val == '') {
                    valid = false;
                    break;
               }
          }
     }

     if (valid) {
          disableDis.removeClass('de-activate');
     }
     else {
          disableDis.addClass('de-activate');
     }
}
