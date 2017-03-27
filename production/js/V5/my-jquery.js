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
     });
});

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


// ===================================== ALL JAVASCRIPT MUST COME AFTER THIS LINE ===================================== //

// Sticky item
// Cache selectors outside callback for performance.
var $window = $(window),
     $stickyEl = $('#document-summary'),
     elTop = $stickyEl.offset().top;

$window.scroll(function() {
     $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
});
