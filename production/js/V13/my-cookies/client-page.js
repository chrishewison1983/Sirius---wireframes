// =================================== Client page - COOKIES =================================== //
// $("#create-task-button").on("click", function (e) {
//
//      $.cookie("create-task-completed", true, {path:'/'});
//
//      // Cookies for side bar
//      $.cookie("task-type", $("#task-type").val(), {path:'/'});
//      $.cookie("task-name", $("#task-name").val(), {path:'/'});
//      /* textarea */ $.cookie("task-notes", $(".task-notes .jqte_editor").html(), {path:'/'});
//      $.cookie("assign-to", $("input[name=assign-to]:checked").val(), {path:'/'});
//      $.cookie("task-user", $("#task-user").val(), {path:'/'});
//      $.cookie("task-team", $("#task-team").val(), {path:'/'});
//      $.cookie("task-date", $("#datepicker").val(), {path:'/'});
//
// });
//
// // Populate side bar
if ($.cookie('security-bond') === 'undefined' ) {
     $('#edit-bond, #bond-dispensed').hide();
     $('#create-bond').show();
     $('.add-bond .text').text('Add bond');
} else if ($.cookie('security-bond') === 'No' ) {
     $('#edit-bond, #bond-dispensed').hide();
     $('#create-bond').show();
     $('.add-bond .text').text('Add bond');
} else if ($.cookie('security-bond') === 'Yes' ) {
     $('#edit-bond').show();
     $('#create-bond, #bond-dispensed').hide();
     $('.add-bond .text').text('Edit bond');
} else if ($.cookie('security-bond') === 'dispense' ) {
     $('#bond-dispensed').show();
     $('#create-bond, #edit-bond').hide();
     $('.add-bond .text').text('Edit bond');
} else {
     $('#edit-bond, #bond-dispensed').hide();
     $('#create-bond').show();
     $('.add-bond .text').text('Add bond');
}
