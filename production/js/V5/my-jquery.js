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
$(document).ready(function(){
     $('.correspondent').click(function(){
          $(this).appendTo("#selected").slideDown('slow');
     })
});

// Sticky item
// Cache selectors outside callback for performance.
var $window = $(window),
     $stickyEl = $('#document-viewer'),
     elTop = $stickyEl.offset().top;

$window.scroll(function() {
     $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
});
