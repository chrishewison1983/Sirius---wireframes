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

// ================================ FILTERS THE TASK LIST ================================ //
$('.dashboard-item.user-summary .main-cta').click(function() {
     // Changes the tabs
     $('.dashboard-tabs li.tab-link').removeClass('current');
     $('.dashboard-tabs li[data-tab="tab-1"]').addClass('current');

     // Changes the tab content
     $('.content-wrapper.dashboard .tab-content.dashboard').removeClass('current');
     $('.content-wrapper.dashboard .tab-content.dashboard#tab-1').addClass('current');

     // Chnages the filter
     $('.filter-panel.task-controller #filter-tasks-category').val('My teams tasks');
     $('.filter-panel.task-controller .main-filter').addClass('re-assign-active filter-active');
     $('.filter-panel.task-controller .filter').show();
     $('.filter-panel.task-controller .filter .step-1.filter-a').show().addClass('step-1-filter-active');
     $('.filter-panel.task-controller .filter-select-all-clear').show();

});

// JOE BLOGGS
$('.filter-joe-bloggs').click(function() {
     // Table content
     $('#dashboard-tasks-table tbody tr').hide();
     $('#dashboard-tasks-table tbody tr.joe-bloggs').show();

     // Filter content
     $('.filter-panel.task-controller .tasks-team-user-in-team').val('Joe Bloggs');

     // Task title
     $('.content-wrapper.dashboard .tab-content.dashboard#tab-1 .description-title').html(`Tasks: <strong>Joe Bloggs</strong>`);
});

// SIMON CARTER
$('.filter-simon-carter').click(function() {
     // Table content
     $('#dashboard-tasks-table tbody tr').hide();
     $('#dashboard-tasks-table tbody tr.simon-carter').show();

     // Filter content
     $('.filter-panel.task-controller .tasks-team-user-in-team').val('Simon Carter');

     // Task title
     $('.content-wrapper.dashboard .tab-content.dashboard#tab-1 .description-title').html(`Tasks: <strong>Simon Carter</strong>`);
});

// DAVID HARPER
$('.filter-david-harper').click(function() {
     // Table content
     $('#dashboard-tasks-table tbody tr').hide();
     $('#dashboard-tasks-table tbody tr.david-harper').show();

     // Filter content
     $('.filter-panel.task-controller .tasks-team-user-in-team').val('David Harper');

     // Task title
     $('.content-wrapper.dashboard .tab-content.dashboard#tab-1 .description-title').html(`Tasks: <strong>David Harper</strong>`);
});

// SIOBHAN MCDERMOT
$('.filter-siobhan-mcdermot').click(function() {
     // Table content
     $('#dashboard-tasks-table tbody tr').hide();
     $('#dashboard-tasks-table tbody tr.siobhan-mcdermot').show();

     // Filter content
     $('.filter-panel.task-controller .tasks-team-user-in-team').val('Siobhan McDermot');

     // Task title
     $('.content-wrapper.dashboard .tab-content.dashboard#tab-1 .description-title').html(`Tasks: <strong>Siobhan McDermot</strong>`);
});

// HANNAH NIXON
$('.filter-hannah-nixon').click(function() {
     // Table content
     $('#dashboard-tasks-table tbody tr').hide();
     $('#dashboard-tasks-table tbody tr.hannah-nixon').show();

     // Filter content
     $('.filter-panel.task-controller .tasks-team-user-in-team').val('Hannah Nixon');

     // Task title
     $('.content-wrapper.dashboard .tab-content.dashboard#tab-1 .description-title').html(`Tasks: <strong>Hannah Nixon</strong>`);
});

// TOM WATSON
$('.filter-tom-watson').click(function() {
     // Table content
     $('#dashboard-tasks-table tbody tr').hide();
     $('#dashboard-tasks-table tbody tr.tom-watson').show();

     // Filter content
     $('.filter-panel.task-controller .tasks-team-user-in-team').val('Tom Watson');

     // Task title
     $('.content-wrapper.dashboard .tab-content.dashboard#tab-1 .description-title').html(`Tasks: <strong>Tom Watson</strong>`);
});
