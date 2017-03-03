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
     	$('.extra-content').toggle();
     })
});



// Tabs code
$(document).ready(function(){
     $('ul.tabs li').click(function(){
     	var tab_id = $(this).attr('data-tab');

     	$('ul.tabs li').removeClass('current');
     	$('.tab-content').removeClass('current');

     	$(this).addClass('current');
     	$("#"+tab_id).addClass('current');
     })
});

// Correspondant
$(document).ready(function() {

     $('#suggested ul li a').click(function() {
          createLi($('#selected-list'), $(this).text(), 'sel');
          $(this.parentNode).remove();
          event.preventDefault();
     });

     $('#selected-list li a').click(function() {
          event.preventDefault();
          // $(this).removeClass('checked');
          // alert('working');
     });

     var createLi = function(el, txt, type) {
          $(el).append($('<li></li>')
                    .append($('<a class="correspondent"></a>')
                         .text(txt)
                         // .attr('href', '#')
                         .click(function() {
                              switch (type) {
                                   case 'sug':
                                   createLi($('#selected-list'), txt, 'sel');
                                   break;
                                   case 'sel':
                                   createLi($('#suggested ul'), txt, 'sug');
                                   break;
                              }
                              $(this.parentNode).remove();
                         }
                    )
               )
          );
     };

});

function removeItem(el) {
     $('#suggested ul').append('<li><a class="correspondent"">' + $(el).html() + '</a></li>');
     $(el.parentNode).remove();
}

// Address look-up
$(document).ready(function(){
     $('.address-list').hide();

     $('#find-postcode').click(function(){
     	$('.address-list').slideDown('slow');
     })
});


// ===================================== ALL JAVASCRIPT MUST COME AFTER THIS LINE ===================================== //

// Sticky item
// Cache selectors outside callback for performance.
var $window = $(window),
     $stickyEl = $('#document-viewer, #document-summary'),
     elTop = $stickyEl.offset().top;

$window.scroll(function() {
     $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
});
