// =================================== Create letter - JAVASCRIPT =================================== //
// Select action page
$(document).ready(function(){
     $('.preview').click(function(e){
          e.preventDefault();
          var docName = $(this).siblings().find('.doc-title').text();
          var insertName = $(this).siblings().find('span').text();
          $('#preview-doc').find('h1').text(docName);
          $('#preview-insert').find('h1').text(insertName);

          var insertID = $(this).data('preview-id');
          $('#preview-insert .preview').hide();
          $(`#preview-insert [data-preview-id="${insertID}"]`).show();
          // console.log(insertID);
     });
});

// $('#edit-letter > .doc-1').addClass('test');

// Correspondent
// $('#suggested ul li .view-more, #selected ul#selected-list li .view-more').click(function(e) {
//      e.preventDefault();
//      $(this).closest('.preferred-contact-container').toggle();
// });

$(document).ready(function() {

     $('#suggested ul li').on('click', 'a.suggested', function(e) {
          e.preventDefault();

          $("#selected-list").append($(this).parent());

          $(this).removeClass('suggested');
          $(this).addClass('selected');

          // $(this).hide();
          // $(this).parent().hide(); // css('display', 'none');

          // Shows the relevent icons
          $('#selected-list .fee-payer').hide();
          $('#selected-list .main-contact').hide();
          $('#selected-list li[data-correspondent-id="1"]').find('.fee-payer').show();
          $('#selected-list li[data-correspondent-id="1"]').find('.main-contact').show();

          $('#selected-list li[data-correspondent-id="1"], #selected-list li[data-correspondent-id="3"], #selected-list li[data-correspondent-id="5"], #selected-list li[data-correspondent-id="6"]').find('.communication-preferences, .requirement-preferences').hide();
          $('#selected-list li[data-correspondent-id="2"]').find('.requirement-preferences').hide();

          // Adds to the side panel
          $("#recipients").append(`
               <li data-correspondent-id='${$(this).data('correspondent-id')}'>
               ${ $(this).find('[data-value="name"]').text() + ' - ' + '<strong>' + $(this).find('[data-value="preferred-contact"]').text() + '</strong>' }
               </li>
          `);
          persistSelectedRecipients();

          $('ul#selected-list li[data-correspondent-id="5"]').addClass('bobloblaw').append();

     });

     $('#selected-list').on('click', 'a.selected', function(e) {
          e.preventDefault();
          var id = $(this).parent().data('correspondent-id');
          $(this).removeClass('selected');
          $(this).addClass('suggested');
          $(`#suggested ul`).append($(this).parent());

          // Removes to the side panel
          $("#recipients").find(`[data-correspondent-id='${$(this).data('correspondent-id')}']`).remove();

          sortList();
          persistSelectedRecipients();
     });

     function sortList() {
          var mylist = $('#suggested ul');
          var listitems = mylist.children('li').get();
          listitems.sort(function(a, b) {
             return $(a).find('a').attr('data-correspondent-id') > $(b).find('a').attr('data-correspondent-id') ? 1 : -1;
          })
          $.each(listitems, function(idx, itm) { mylist.append(itm); });
     }

     $($('#suggested a')[0]).trigger('click');

     $('#selected-list .fee-payer').hide();
     $('#selected-list .main-contact').hide();

     $('#selected-list li[data-correspondent-id="1"]').find('.fee-payer').show();
     $('#selected-list li[data-correspondent-id="1"]').find('.main-contact').show();

});

// Draft saved
$(document).ready(function() {

     $('#draft-list li .edit').click(function(e) {
          e.preventDefault();
          $('#previous-draft-saved').slideDown();
          setTimeout(function() {
               $("#previous-draft-saved").slideUp()
          }, 5000);
     });

});

// Save draft
$('#draft-saved').slideDown('slow');
$('.message-1').show();
$('.message-2').hide();
setTimeout(function() {
     $("#draft-saved").slideUp(500)
}, 5000);

$('#save').click(function(e) {
     e.preventDefault();
     $('.message-1').hide();
     $('.message-2').show();
     $('#draft-saved').slideDown('slow');
     setTimeout(function() {
          $("#draft-saved").slideUp(500)
     }, 5000);
});

// Save draft time stamp - after 30 seconds
$('#draft-saved-timer').delay(30000).slideDown();
$('#draft-saved-timer').delay(3500).slideUp();

// Change draft
$('#documents-1').show();
$('#documents-2, #documents-3, #documents-4, #documents-5').hide();

// Delete draft
$('#drafts .delete, #client-drafts .delete').click(function(e) {
     e.preventDefault();
     var deletedDocTitle = $(this).closest('li').find('.title .doc-type').text();

     $(this).closest('li').addClass('delete-item');

     $('.document-title').text(deletedDocTitle);
     // $(this).closest('li').remove();
});

$('#delete-draft').click(function(e) {
     $('#drafts, #client-drafts').find('.delete-item').remove();
     $('#draft-deleted-message').slideDown();
     setTimeout(function() {
          $("#draft-deleted-message").slideUp(500)
     }, 5000);
});

$('#cancel-delete').click(function(e) {
     $('#drafts, #client-drafts').find('.delete-item').removeClass('delete-item');
});

// Add inserts-section
// if ($("ul#inserts-list").has("li").length == 0) {
//      $(".place-holder-text").show();
// }

$('ul#inserts-list li a').click(function(e) {
     $(this).toggleClass('selected');
});

$('#insert-list-select').change(function(e) {
     if ($(this).val() == 'All') {
          $('#inserts-list li').show();
          $('.create-letter .insert-selection span').text('All');
     } else if ($(this).val() == 'Pending') {
          $('#inserts-list li').hide();
          $('#inserts-list li.pending').show();
          $('.create-letter .insert-selection span').text('Pending');
     } else if ($(this).val() == 'Perfect') {
          $('#inserts-list li').hide();
          $('#inserts-list li.perfect').show();
          $('.create-letter .insert-selection span').text('Perfect');
     } else if ($(this).val() == 'Imperfect') {
          $('#inserts-list li').hide();
          $('#inserts-list li.imperfect').show();
          $('.create-letter .insert-selection span').text('Imperfect');
     } else if ($(this).val() == 'Withdrawn') {
          $('#inserts-list li').hide();
          $('#inserts-list li.withdrawn').show();
          $('.create-letter .insert-selection span').text('Withdrawn');
     }


});

// $('#draft-list').hide();

$(document).ready(function() {

     (function($) {
          $.fn.clickToggle = function(func1, func2) {
               var funcs = [func1, func2];
               this.data('toggleclicked', 0);
               this.click(function() {
                    var data = $(this).data();
                    var tc = data.toggleclicked;
                    $.proxy(funcs[tc], this)();
                    data.toggleclicked = (tc + 1) % 2;
               });
               return this;
          };
     }(jQuery));

     $('ul#inserts-list li a').clickToggle(function() {
          // e.preventDefault();
          $('#inserts-section .place-holder-text').hide();
          $("#inserts-selected").show();
          $("#inserts-selected").append(`
               <li data-insert-id='${$(this).data('insert-id')}'>
                    ${ $(this).find('[data-value="insert-name"]').text() }
               </li>`
          );
          persistSelectedInserts();
     }, function() {
          var id = $(this).data('insert-id');
          $(`#inserts-selected [data-insert-id="${id}"]`).remove();
          persistSelectedInserts();
     });

     $('#add-inserts').click(function(e) {
          persistSelectedInserts();
          // persistSelectedLetter();
     });

     $('.letter-title').click(function(e) {
          $("#draft-list").append(`
               <li data-letter-id='${$(this).data('letter-id')}'>
                    <div class="doc-type">${ $(this).find('[data-value="letter"]').text() }</div>
               </li>`
          );
          persistSelectedLetters();
          // persistSelectedLetter();
     });

});

// Edit letter
$(document).ready(function () {

     // if (window.location.href.indexOf("EditDoc") != -1) {
     //      $('#edit-letter .doc-1').addClass('selected');
     //      var currentDocTitle = $('#action-panel').find('.current-document-title').text();
     //      var currentDocRecipient = $('#action-panel').find('.recipient-name').text();
     //      $('.doc-1 .title .doc-type').text(currentDocTitle);
     //      $('.doc-1 .recipient-name').text(currentDocRecipient);
     // }

});

// Preview letter
// $('.retrieve-drafts').hide();

$(document).ready(function () {

     $('#preview-letter').click(function(e) {
          var index = parseInt($('.current-doc-info .number').text());
          var $letterContent = $('#documents-' + index + ' .jqte_editor').clone();
          $('#letter-contents').html($letterContent);
          // alert(index);
          $('#print-send-modal').modal('show');
     });

     $("#confirm-print-send").on("click", function (e) {
          e.preventDefault();
          var index = parseInt($('.current-doc-info .number').text());

          drafts.splice(index-1,1);
          sessionStorage.setItem('client-draft-letters', JSON.stringify(drafts));

          if (drafts.length === 0)
               window.location.href = '../4-client-page/4a-new-client.html#HandW';
               $('.retrieve-drafts').hide();

          if (loadDrafts)
               loadDrafts();
               $('.retrieve-drafts').show();

          $(this).siblings('.back').trigger('click');

     });

     $("#draft-list li .edit").on("click", function (e) {
          e.preventDefault();
          var index = parseInt($(this).closest('li').data('document-id'));

          $('.form-group').hide();
          $('#documents-' + index).show();
     });

     $('#create-letter').click(function(e) {

          var data = sessionStorage.getItem('client-draft-letters');
          var drafts = JSON.parse(data);
          if (drafts == null) drafts = [];

          var recipients = JSON.parse(sessionStorage.getItem('selected-recipients'));

          for (var i = 0; i < recipients.length; i++)
          {
               var draft = {
                    selectedRecipient: recipients[i],
                    selectedInserts: JSON.parse(sessionStorage.getItem('selected-inserts')),
                    selectedLetter: JSON.parse(sessionStorage.getItem('selected-letter'))
               }

               drafts.push(draft);
          }

          sessionStorage.setItem('client-draft-letters', JSON.stringify(drafts));

          // sessionStorage.removeItem('selected-recipients');
          // sessionStorage.removeItem('selected-inserts');
          // sessionStorage.removeItem('selected-letter');

     });

});

// Change tab for the letter journey
$('.change-tab').click(function(e) {
     e.preventDefault();
     $('.tab-content').removeClass('current');
     $('#health-tab-7').addClass('current');
     $('.client-details .tab-link').removeClass('current');
     $('.client-details .tab-link[data-tab="health-tab-7"]').addClass('current');
     $('#documents-viewer .document-1 .page-1, #documents-viewer-filter .document-1 .page-1').hide();
     $('#documents-viewer .document-1 .page-2, #documents-viewer-filter .document-1 .page-2').show();
     $('#documents-viewer .document-1 .page-2 .control-panel h2, #documents-viewer-filter .document-1 .page-2 .control-panel h2').text('Application_correspondence.pdf');
});

// Documents changing tabs
$('#documents-viewer-filter, #filter-panel-documents').hide();

$('input[name="document-tab"]').click(function() {
     if ($(this).val() == 'Folder') {
          $('#documents-viewer-filter, #filter-panel-documents').hide();
          $('#documents-viewer').show();
     } else if ($(this).val() == 'Filter') {
          $('#documents-viewer-filter, #filter-panel-documents').show();
          $('#documents-viewer').hide();
     }
});

// Document filter
$('input[name="document-value"]').click(function(){
     var checked = $('#filter-panel-documents').find(':checked').length;
     if($(this).is(":checked")) {
          $(this).parent().addClass("checked");
          $('.filter-all-documents').removeClass("checked");
     }
     if (!checked)
          $('.filter-all-documents').addClass("checked");
});

var sectionsDoc = $('.document-category');
function updateDocumentVisibility(){
     var checked = $("#filter-panel-documents :checkbox:checked");
     if(checked.length){
          sectionsDoc.hide();
          checked.each(function(){
               $("." + $(this).val()).show();
          });
          $('.filter-all-documents').removeClass('checked');
     } else {
          sectionsDoc.show();
     }
}

$("#filter-panel-documents :checkbox").click(updateDocumentVisibility);
updateDocumentVisibility();

$('.filter-all-documents').click(function(e){
     e.preventDefault();
     $('.document-category').show();
     $(this).addClass('checked');
     $('#filter-panel-documents input').removeAttr('checked');
     $('#filter-panel-documents input').parent().removeClass('checked');
});
