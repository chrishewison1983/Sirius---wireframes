// =================================== Supervision Level - JAVASCRIPT =================================== //
// $('.supervision-level-journey #cta-footer').hide();
//
// $(".supervision-level-notes").click( function(){
//      $('#cta-footer').show();
// });

$('input[name="supervision-level-asset"]').change(function(){
     if($(this).is(":checked")) {
          $('#supervision-level-button').removeClass("de-activate").attr('href', '../4-client-page/4a-new-client.html#PFA');
     } else {
          $('#supervision-level-button').addClass("de-activate").removeAttr('href');
     }
});

// Removes the read only states
$('#confirm-supervision-level-edit').click(function(){
     $('.edit-supervision-level').find('.form-group').removeClass('read-only');
     $('.edit-supervision-level').find('.form-group').find('input, select, textarea').removeAttr('disabled');
});
