// =================================== Search - JAVASCRIPT =================================== //
$('.pagination a').click( function(e){
     e.preventDefault();
     $(this).addClass('selected');
     $(this).parent().siblings().find('a').removeClass('selected');
});
