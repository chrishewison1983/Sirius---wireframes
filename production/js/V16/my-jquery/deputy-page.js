// =================================== Client Page - JAVASCRIPT =================================== //
// Client summary
// $('.contact-info').hide();

$('.view-full-details').click( function(e){
     e.preventDefault();
     var dataValue = $(this).data('value');
     // $('.details-row').toggle();
     // $('.summary-row').removeClass('open');
     $(this).toggleClass('close');
     $(`#clients-table tr.summary-row[data-value="${dataValue}"]`).toggleClass('open');
     $(`#clients-table tr.details-row[data-value="${dataValue}"]`).toggle();
     // $(this).closest('tr').toggleClass('open');
     $(this).text($(this).text() == 'View full details' ? 'Hide full details' : 'View full details');
     // $(this).siblings('.contact-info').toggle();
});
