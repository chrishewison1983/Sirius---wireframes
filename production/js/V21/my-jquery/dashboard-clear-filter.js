// =================================== Dashboard - clear filter - JAVASCRIPT - START =================================== //
$('.clear-filter').click(function(e){
     e.preventDefault();
     $('.re-assign-panel').hide();
     $('.filter-panel').show();

     // Clears tables
     $('#dashboard-clients-table, #dashboard-tasks-table, #dashboard-deputies-table, #completed-tasks-table').show();
     $('#dashboard-clients-table, #dashboard-tasks-table, #dashboard-deputies-table').find('tr').show().removeClass('selected-item');
     $('#dashboard-clients-table, #dashboard-tasks-table, #dashboard-deputies-table').find('tr.details-row').hide();
     $('#dashboard-clients-table, #dashboard-tasks-table, #dashboard-deputies-table').find('.task-title, .client-title, .deputy-title').removeClass('checked');
     $('#dashboard-clients-table, #dashboard-tasks-table, #dashboard-deputies-table').find('input[name="re-assign-client"], input[name="re-assign-task"], input[name="re-assign-deputy"]').removeAttr('checked');

     // Clears de-activated states
     $('.filter-panel').find('.main-filter, .step-1').removeClass('de-activated');
     $('.filter-panel').find('.main-filter input, .main-filter select, .step-1 input, .step-1 select').removeAttr('disabled');
     $('.filter-panel').find('.main-filter input, .main-filter select, .step-1 input, .step-1 select').prop('selectedIndex',0);

     $('.filter-panel').find('.step-1, .step-2, .step-3, .step-4').hide();
     $('.re-assign-panel').find('.step-1, .step-2, .step-3, .step-4').hide();

     // Clears the select all funtion
     $('.filter-select-all-clear select').removeAttr('checked');
     $('.filter-select-all-clear select').parent().removeClass('checked');

     // Task title
     $('.content-wrapper.dashboard .tab-content.dashboard#tab-1 .description-title').html(`Reassign tasks`);
     $('.content-wrapper.dashboard .tab-content.dashboard#tab-3 .description-title').html(`Completed tasks: <div class="timeline-value">Today</div>`);
     $('.content-wrapper.dashboard .tab-content.dashboard#tab-4 .description-title').html(`Reassign clients`);
     $('.content-wrapper.dashboard .tab-content.dashboard#tab-5 .description-title').html(`Reassign deputies`);

     $(this).find('.client-controller .filter-numbers span.number').text('302').addClass('three-figures');

});

$('.filter-panel .clear-filter').click(function(e){
     // Clears filters
     $(this).parents().find('.search-filters .main-filter').show().removeClass('filter-active');
     // $(this).parents().find('.search-filters .filter, .search-filters .filter-numbers, .search-filters .filter-select-all-clear').hide();
     $(this).parents().find('.search-filters .filter, .search-filters .filter-select-all-clear').hide();
     $(this).parents().find('.filter-tasks-category').prop('selectedIndex',0);
});

$('.re-assign-panel .clear-filter').click(function(e){
     // Clears filters
     $(this).parents().find('.search-filters .main-filter').show().removeClass('filter-active');
     // $(this).parents().find('.search-filters .filter, .search-filters .filter-numbers, .search-filters .filter-select-all-clear, .search-filters .step-3, .search-filters .step-4').hide();
     $(this).parents().find('.search-filters .filter, .search-filters .filter-select-all-clear, .search-filters .step-3, .search-filters .step-4').hide();
     $(this).parents().find('.search-filters .step-2').removeClass('step-2-filter-active');
     $(this).parents().find('.my-tasks-assign-to').prop('selectedIndex',0);
});

$('.filter-panel.completed-tasks .clear-filter').click(function(e){
     // Clears tables
     $('#completed-tasks-table').find('tr').hide();
     $('#completed-tasks-table').find('tr.today').show();
     $('#completed-tasks-table').find('thead tr').show();

     // Clears filters
     $('.caseworker-filter .task-filter').find('.filter, .step-1').show().removeClass('step-1-filter-active');
     $(this).parents().find('.search-filters .main-filter').show().removeClass('filter-active');
     $(this).parents().find('#filter-date-completed').prop('selectedIndex',0);
});

$('.caseworker-filter .clear-filter').click(function(e){
     // Task title
     $('.content-wrapper.dashboard .tab-content.dashboard#tab-1 .description-title').html(`My tasks`);
     $('.content-wrapper.dashboard .tab-content.dashboard#tab-4 .description-title').html(`My clients`);
     $('.content-wrapper.dashboard .tab-content.dashboard#tab-5 .description-title').html(`My deputies`);

     // Clears filters
     $('.caseworker-filter .task-filter').find('.filter, .step-1').show().removeClass('step-1-filter-active');
     $('.caseworker-filter .task-filter').find('.filter-type-task').prop('selectedIndex',0).val('');
});

$('.caseworker-search .clear-filter').click(function(e){
     // Task title
     $('.content-wrapper.dashboard .tab-content.dashboard#tab-1 .description-title').html(`My tasks`);
     $('.content-wrapper.dashboard .tab-content.dashboard#tab-4 .description-title').html(`My clients`);
     $('.content-wrapper.dashboard .tab-content.dashboard#tab-5 .description-title').html(`My deputies`);

     // Clears filters
     $('.caseworker-filter .task-filter').find('.filter, .step-1').show().removeClass('step-1-filter-active');
     $('.caseworker-search .client-filter, .caseworker-search .deputy-filter').find('.main-filter').show().removeClass('filter-active');
     $('.caseworker-search .client-filter, .caseworker-search .deputy-filter').find('.search-table').prop('selectedIndex',0).val('');
});


// =================================== Dashboard - clear filter - JAVASCRIPT - END =================================== //

// =================================== Dashboard - cancel reassign - JAVASCRIPT - START =================================== //
$('.cancel-re-assign').click(function(e){
     $('.select-all-clients, .select-all-clients').removeClass('checked');
});

// WHEN FILTERING CANCEL
$('.filter-panel .cancel-re-assign').click(function(e){
     e.preventDefault();
     $(this).hide();
     $('.filter-panel').find('.clear-filter').show();

     // Clears tables
     $('#dashboard-clients-table, #dashboard-tasks-table, #dashboard-deputies-table, #completed-tasks-table').show();
     $('#dashboard-clients-table, #dashboard-tasks-table, #dashboard-deputies-table').find('tr').removeClass('selected-item');
     $('#dashboard-clients-table, #dashboard-tasks-table, #dashboard-deputies-table').find('.task-title, .client-title, .deputy-title').removeClass('checked');
     $('#dashboard-clients-table, #dashboard-tasks-table, #dashboard-deputies-table').find('input[name="re-assign-client"], input[name="re-assign-task"], input[name="re-assign-deputy"]').removeAttr('checked');

     // Clears de-activated states
     $('.filter-panel').find('.main-filter, .step-1').removeClass('de-activated');
     $('.filter-panel').find('.step-2, .step-3, .step-4').hide();
     // $('.filter-panel').find('.step-1, .step-2, .step-3, .step-4').hide();
     $('.re-assign-panel').find('.step-1, .step-2, .step-3, .step-4').hide();
     $('.filter-panel').find('.main-filter input, .main-filter select, .step-1 input, .step-1 select').removeAttr('disabled');
     $('.filter-panel').find('#select-all-tasks').removeAttr('checked').parent().removeClass('checked');

});

$('.filter-panel .cancel-re-assign').click(function(e){
     $('.filter-panel .filter-numbers').removeClass('selected');
     $('.filter-panel .filter-numbers span.number').addClass('three-figures');
});

$('.filter-panel.task-controller .cancel-re-assign').click(function(e){
     $('.filter-panel.task-controller .filter-numbers span.number').text('23');
     $('.filter-panel .filter-numbers span.number').removeClass('three-figures');
});

$('.filter-panel.client-controller .cancel-re-assign').click(function(e){
     $('.filter-panel.client-controller .filter-numbers span.number').text('302');
     $('.filter-panel .filter-numbers span.number').addClass('three-figures');
});


// WHEN REASSIGNING CANCEL
$('.re-assign-panel .cancel-re-assign').click(function(e){
     e.preventDefault();
     // $('.re-assign-panel, .filter-select-all-clear, .filter-numbers').hide();
     $('.re-assign-panel, .filter-select-all-clear').hide();
     $('.filter-panel').show();

     // Clears tables
     $('#dashboard-clients-table, #dashboard-tasks-table, #dashboard-deputies-table, #completed-tasks-table').show();
     $('#dashboard-clients-table, #dashboard-tasks-table, #dashboard-deputies-table').find('tr').removeClass('selected-item');
     $('#dashboard-clients-table, #dashboard-tasks-table, #dashboard-deputies-table').find('.task-title, .client-title, .deputy-title').removeClass('checked');
     $('#dashboard-clients-table, #dashboard-tasks-table, #dashboard-deputies-table').find('input[name="re-assign-client"], input[name="re-assign-task"], input[name="re-assign-deputy"]').removeAttr('checked');

     // Clears de-activated states
     $('.filter-panel').find('.main-filter, .step-1').removeClass('de-activated');
     $('.filter-panel').find('.step-1, .step-2, .step-3, .step-4').hide();
     $('.re-assign-panel').find('.step-1, .step-2, .step-3, .step-4').hide();
     $('.filter-panel').find('.main-filter input, .main-filter select, .step-1 input, .step-1 select').removeAttr('disabled');
     $('.filter-panel').find('#select-all-tasks').removeAttr('checked').parent().removeClass('checked');

});

$('.re-assign-panel .cancel-re-assign').click(function(e){
     $('.filter-panel .filter-numbers').removeClass('selected');
});

$('.re-assign-panel.task-controller .cancel-re-assign').click(function(e){
     $('.filter-panel.task-controller .filter-numbers span.number').text('23');
     $('.filter-panel .filter-numbers span.number').removeClass('three-figures');
});

$('.re-assign-panel.client-controller .cancel-re-assign').click(function(e){
     $('.filter-panel.client-controller .filter-numbers span.number').text('302');
     $('.filter-panel .filter-numbers span.number').addClass('three-figures');
});
// =================================== Dashboard - cancel reassign - JAVASCRIPT - END =================================== //
