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
$('.dashboard-item.user-summary .main-cta, #dashboard-worker-table .main-cta, .dashboard-item.user-summary #chart1, .dashboard-item.user-summary #chart2, .dashboard-item.user-summary #chart3, .dashboard-item.user-summary #chart4, .dashboard-item.user-summary #chart5, .dashboard-item.user-summary #chart6, .dashboard-item.user-summary .joe-bloggs-overdue, .dashboard-item.user-summary .hannah-nixon-overdue').click(function() {
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

     // Hide the filters
     $('.filter-b').show();
     $('.filter-c, .filter-d, .filter-e').hide();
});

$('#chart1').click(function() {
     // Table content
     $('#dashboard-tasks-table tbody tr').hide();
     $('#dashboard-tasks-table tbody tr.joe-bloggs.correspondence').show();

     // Filter content
     $('.filter-panel.task-controller .tasks-team-user-in-team').val('Joe Bloggs');

     // Task title
     $('.content-wrapper.dashboard .tab-content.dashboard#tab-1 .description-title').html(`Tasks: <strong>Joe Bloggs</strong>  > <strong>Correspondence</strong>`);

     // Hide the filters
     $('.filter-b').show().addClass('step-1-filter-active');
     $('.filter-panel.task-controller .filter-type-task').val('Correspondence');
     $('.filter-c, .filter-d, .filter-e').hide();
});

$('.joe-bloggs-overdue').click(function() {
     // Table content
     $('#dashboard-tasks-table tbody tr').hide();
     $('#dashboard-tasks-table tbody tr.joe-bloggs.urgent-row').show();

     // Filter content
     $('.filter-panel.task-controller .tasks-team-user-in-team').val('Joe Bloggs');

     // Task title
     $('.content-wrapper.dashboard .tab-content.dashboard#tab-1 .description-title').html(`Tasks: <strong>Joe Bloggs</strong>  > <strong>Overdue tasks</strong>`);

     // Hide the filters
     $('.filter-b').show().addClass('step-1-filter-active');
     $('.filter-c, .filter-d, .filter-e').hide();
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

     // Hide the filters
     $('.filter-b').show();
     $('.filter-c, .filter-d, .filter-e').hide();
});

$('#chart2').click(function() {
     // Table content
     $('#dashboard-tasks-table tbody tr').hide();
     $('#dashboard-tasks-table tbody tr.simon-carter.correspondence').show();

     // Filter content
     $('.filter-panel.task-controller .tasks-team-user-in-team').val('Simon Carter');

     // Task title
     $('.content-wrapper.dashboard .tab-content.dashboard#tab-1 .description-title').html(`Tasks: <strong>Simon Carter</strong>  > <strong>Correspondence</strong>`);

     // Hide the filters
     $('.filter-b').show().addClass('step-1-filter-active');
     $('.filter-panel.task-controller .filter-type-task').val('Correspondence');
     $('.filter-c, .filter-d, .filter-e').hide();
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

     // Hide the filters
     $('.filter-b').show();
     $('.filter-c, .filter-d, .filter-e').hide();
});

$('#chart3').click(function() {
     // Table content
     $('#dashboard-tasks-table tbody tr').hide();
     $('#dashboard-tasks-table tbody tr.david-harper.correspondence').show();

     // Filter content
     $('.filter-panel.task-controller .tasks-team-user-in-team').val('David Harper');

     // Task title
     $('.content-wrapper.dashboard .tab-content.dashboard#tab-1 .description-title').html(`Tasks: <strong>David Harper</strong>  > <strong>Correspondence</strong>`);

     // Hide the filters
     $('.filter-b').show().addClass('step-1-filter-active');
     $('.filter-panel.task-controller .filter-type-task').val('Correspondence');
     $('.filter-c, .filter-d, .filter-e').hide();
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

     // Hide the filters
     $('.filter-b').show();
     $('.filter-c, .filter-d, .filter-e').hide();
});

$('#chart4').click(function() {
     // Table content
     $('#dashboard-tasks-table tbody tr').hide();
     $('#dashboard-tasks-table tbody tr.siobhan-mcdermot.correspondence').show();

     // Filter content
     $('.filter-panel.task-controller .tasks-team-user-in-team').val('Siobhan McDermot');

     // Task title
     $('.content-wrapper.dashboard .tab-content.dashboard#tab-1 .description-title').html(`Tasks: <strong>Siobhan McDermot</strong>  > <strong>Correspondence</strong>`);

     // Hide the filters
     $('.filter-b').show().addClass('step-1-filter-active');
     $('.filter-panel.task-controller .filter-type-task').val('Correspondence');
     $('.filter-c, .filter-d, .filter-e').hide();
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

     // Hide the filters
     $('.filter-b').show();
     $('.filter-c, .filter-d, .filter-e').hide();
});

$('#chart5').click(function() {
     // Table content
     $('#dashboard-tasks-table tbody tr').hide();
     $('#dashboard-tasks-table tbody tr.hannah-nixon.correspondence').show();

     // Filter content
     $('.filter-panel.task-controller .tasks-team-user-in-team').val('Hannah Nixon');

     // Task title
     $('.content-wrapper.dashboard .tab-content.dashboard#tab-1 .description-title').html(`Tasks: <strong>Hannah Nixon</strong>  > <strong>Correspondence</strong>`);

     // Hide the filters
     $('.filter-b').show().addClass('step-1-filter-active');
     $('.filter-panel.task-controller .filter-type-task').val('Correspondence');
     $('.filter-c, .filter-d, .filter-e').hide();
});

$('.hannah-nixon-overdue').click(function() {
     // Table content
     $('#dashboard-tasks-table tbody tr').hide();
     $('#dashboard-tasks-table tbody tr.hannah-nixon.urgent-row').show();

     // Filter content
     $('.filter-panel.task-controller .tasks-team-user-in-team').val('Hannah Nixon');

     // Task title
     $('.content-wrapper.dashboard .tab-content.dashboard#tab-1 .description-title').html(`Tasks: <strong>Hannah Nixon</strong> > <strong>Overdue tasks</strong>`);

     // Hide the filters
     $('.filter-b').show().addClass('step-1-filter-active');
     $('.filter-c, .filter-d, .filter-e').hide();
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

     // Hide the filters
     $('.filter-b').show();
     $('.filter-c, .filter-d, .filter-e').hide();
});

$('#chart6').click(function() {
     // Table content
     $('#dashboard-tasks-table tbody tr').hide();
     $('#dashboard-tasks-table tbody tr.tom-watson.correspondence').show();

     // Filter content
     $('.filter-panel.task-controller .tasks-team-user-in-team').val('Tom Watson');

     // Task title
     $('.content-wrapper.dashboard .tab-content.dashboard#tab-1 .description-title').html(`Tasks: <strong>Tom Watson</strong>  > <strong>Correspondence</strong>`);

     // Hide the filters
     $('.filter-b').show().addClass('step-1-filter-active');
     $('.filter-panel.task-controller .filter-type-task').val('Correspondence');
     $('.filter-c, .filter-d, .filter-e').hide();
});

// ====================== SORT WORKERS - START ====================== //
$('input[name="view-type"]').click(function() {
     if ($(this).val() == 'Thumb view') {
          $('.dashboard-item-container.team-review').show();
          $('.dashboard-item-container.team-review-table').hide();
          $('.summary-team-review .key ul').show();
          $('.summary-team-review .sort-workers').show();
          $('.summary-team-review .select-view').css('border-right', '2px dashed #baccdb');
     } else if ($(this).val() == 'List view') {
          $('.dashboard-item-container.team-review').hide();
          $('.dashboard-item-container.team-review-table').show();
          $('.summary-team-review .key ul').hide();
          $('.summary-team-review .sort-workers').hide();
          $('.summary-team-review .select-view').css('border-right', 'none');
     }
});


$('#sort-workers').change(function() {
     if ($(this).val() == 'Alphabetical') {
          $('.dashboard-item-container.team-review .user-summary[data-worker="worker-1"]').css('order', '1').css('margin-right', '2%');
          $('.dashboard-item-container.team-review .user-summary[data-worker="worker-2"]').css('order', '2').css('margin-right', '2%');
          $('.dashboard-item-container.team-review .user-summary[data-worker="worker-3"]').css('order', '3').css('margin-right', '2%');
          $('.dashboard-item-container.team-review .user-summary[data-worker="worker-4"]').css('order', '4').css('margin-right', '2%');
          $('.dashboard-item-container.team-review .user-summary[data-worker="worker-5"]').css('order', '5').css('margin-right', '0');
          $('.dashboard-item-container.team-review .user-summary[data-worker="worker-6"]').css('order', '6').css('margin-right', '2%');
     } else if ($(this).val() == 'Outstanding tasks') {
          $('.dashboard-item-container.team-review .user-summary[data-worker="worker-1"]').css('order', '1').css('margin-right', '2%');
          $('.dashboard-item-container.team-review .user-summary[data-worker="worker-2"]').css('order', '5').css('margin-right', '0');
          $('.dashboard-item-container.team-review .user-summary[data-worker="worker-3"]').css('order', '4').css('margin-right', '2%');
          $('.dashboard-item-container.team-review .user-summary[data-worker="worker-4"]').css('order', '6').css('margin-right', '2%');
          $('.dashboard-item-container.team-review .user-summary[data-worker="worker-5"]').css('order', '2').css('margin-right', '2%');
          $('.dashboard-item-container.team-review .user-summary[data-worker="worker-6"]').css('order', '3').css('margin-right', '2%');
     } else {
          $('.dashboard-item-container.team-review .user-summary').css('order', 'inherit').css('margin-right', '2%');
          $('.dashboard-item-container.team-review .user-summary[data-worker="worker-2"]').css('margin-right', '0');
     }
});
// ====================== SORT WORKERS - END ====================== //
