// =================================== Dashboard - summary - JAVASCRIPT =================================== //
$('.summary-sirius-review').hide();

$('input[name="summary-type"]').click(function() {
     if ($(this).val() == 'Team') {
          $('.summary-intro-text').html('Your <strong>teams</strong> weekly snapshot');
          $('.summary-sirius-review').hide();
          $('.summary-team-review').show();
     } else if ($(this).val() == 'Sirius') {
          $('.summary-intro-text').html('<strong>Sirius</strong> weekly snapshot');
          $('.summary-sirius-review').show();
          $('.summary-team-review').hide();
     }
     // $('input:radio[name='+$(this).attr('name')+']').parent().removeClass('checked');
     // $(this).parent().addClass('checked');
});
