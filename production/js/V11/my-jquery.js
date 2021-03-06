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
          return v === 'Supervision' ? 'LPA' : 'Supervision'
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
$(document).ready(function(){
     $('input, select').on('focus', function(e) {
          $(this).siblings().addClass('selected');
     });

     $('input, select').on('focusout', function(e) {
          $(this).siblings().removeClass('selected');
     });
});

// Add deputy
$(document).ready(function(){
     $('#deputy-added').hide();

     $('#add-another-deputy').click(function(){
     	$('#deputy-added').slideDown('slow');
     });
});

// CREATE LETTER
$(document).ready(function(){
     $('.preview').click(function(e){
          e.preventDefault();
          var docName = $(this).siblings().find('h2').text();
          $('#preview-doc').find('h1').text(docName);
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
// var acc = document.getElementsByClassName("accordion");
// var i;
//
// for (i = 0; i < acc.length; i++) {
//      acc[i].onclick = function(){
//           /* Toggle between adding and removing the "active" class,
//           to highlight the button that controls the panel */
//           this.classList.toggle("active");
//
//           /* Toggle between hiding and showing the active panel */
//           var panel = this.nextElementSibling;
//           if (panel.style.display === "inline-block") {
//                panel.style.display = "none";
//           } else {
//                panel.style.display = "inline-block";
//           }
//           // $(this).siblings().removeClass('active');
//           // $(this).nextElementSibling().hide();
//      }
// }

// Side panel
// $('.minimise').on('click', function(e) {
//      if ($(this).hasClass('open')) {
//           $(this).removeClass('open');
//           $(this).parent().parent().removeClass('shrink');
//           $(this).parent().parent().parent().find('main').removeClass('full-width');
//           $('nav').find('.create-client, .user-cta').show();
//           $('nav').find('.logo').html('<img src="../../../production/img/V11/sirius-logo.svg" alt="Sirius">');
//           $('nav').find('.sign-out').html('<span class="nav-icon"></span> Sign out');
//           $(this).parent().parent().parent().find('.row').removeClass('full-width-row');
//           $(this).closest('body').find('nav.client-nav').removeClass('full-width');
//      } else {
//           $(this).addClass('open');
//           $(this).parent().parent().addClass('shrink');
//           $(this).parent().parent().parent().find('main').addClass('full-width');
//           $('nav').find('.create-client, .user-cta').hide();
//           $('nav').find('.sign-out').html('<span class="nav-icon"></span>');
//           $('nav').find('.logo').html('');
//           $(this).parent().parent().parent().find('.row').addClass('full-width-row');
//           $(this).closest('body').find('nav.client-nav').addClass('full-width');
//      }
//      return false;
// })

// Dashboard
$(document).ready(function() {

     $('.open').on('click', function(e) {
          e.preventDefault();
          $(this).closest('td').find('.description').toggle();
          $(this).toggleClass('close');
     })

     // $('#completed-tasks-table').hide();

     // $('#myTable input:checkbox').change(function(){
     //      if($(this).is(":checked")) {
     //           $(this).closest("tr").addClass("complete");
     //           $(this).closest("tr").hide('slow').delay(1500);
     //           $(this).closest("main").find('.tab-link.current span').html(function(i, val) { return +val-1 });
     //      } else {
     //           $(this).closest("tr").removeClass("complete");
     //      }
     // });
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

// Error messaging
$(document).ready(function () {

     if (window.location.href.indexOf("error-message") != -1) {
          // Show's the error message
          $('#error-message').show();

          // Add anchor links to the selected groups
          $('#client-dob').closest('.form-group').attr('id', 'dob-error').addClass('error-field');
          $('#client-mob-number').closest('.form-group').attr('id', 'mobile-error').addClass('error-field');
          $('#client-email').closest('.form-group').attr('id', 'email-error').addClass('error-field');

     }

});
