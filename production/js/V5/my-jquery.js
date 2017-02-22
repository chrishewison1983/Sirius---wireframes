// Checkbox code
$('input:checkbox').change(function(){
     if($(this).is(":checked")) {
          $(this).parent().addClass("checked");
     } else {
          $(this).parent().removeClass("checked");
     }
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
