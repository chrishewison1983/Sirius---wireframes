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

// Correspondant
$(document).ready(function() {

     $('#suggested ul li a').click(function(e) {
          e.preventDefault();
          $(this).hide();
          $(this).parent().css('display', 'none');
          $("#selected-list").append(`
               <li data-correspondant-id='${$(this).data('correspondant-id')}'>
                    <a class="correspondent">
                         <span>${ $(this).find('[data-value="name"]').text() }</span><br>
                         <span class="type">${ $(this).find('[data-value="type"]').text() }</span><br>
                         <span class="sub-text">${ $(this).find('[data-value="address"]').text() }</span>
                         <span class="communication-preferences">${ $(this).find('[data-value="pref"]').html() }</span>
                    </a>
               </li>`
          );
          $("#recipients").append(`
               <li data-correspondant-id='${$(this).data('correspondant-id')}'>
                    ${ $(this).find('[data-value="name"]').text() }
               </li>`
          );
          persistSelectedRecipients();
     });

     $('#selected-list').on('click', 'a', function(e) {
          e.preventDefault();
          var id = $(this).parent().data('correspondant-id');
          $(this).parent().remove();
          $(`#recipients [data-correspondant-id="${id}"]`).remove();
          $(`#suggested [data-correspondant-id="${id}"]`).show();
          $(`#suggested [data-correspondant-id="${id}"]`).parent().show();
          persistSelectedRecipients();
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

// Change draft
$('#document-1').show();
$('#document-2, #document-3, #document-4, #document-5').hide();

$('#drafts .edit').click(function(e) {
     e.preventDefault();
     $('.tab-content').find('li').removeClass('selected');
     $(this).closest('li').addClass('selected');
     var docTitle = $(this).closest('li').find('.title .doc-type').text();
     var docRecipient = $(this).closest('li').find('.recipient-name').text();

     $('#action-panel').find('.current-document-title').text(docTitle);
     $('#action-panel').find('.recipient-name').text(docRecipient);

     if ($(this).closest('li').hasClass('doc-1')) {
          $('#document-1').show();
          $('#document-2, #document-3, #document-4, #document-5').hide();
          $('#action-panel .section-title .number').text('1');
     }
     if ($(this).closest('li').hasClass('doc-2')) {
          $('#document-2').show();
          $('#document-1, #document-3, #document-4, #document-5').hide();
          $('#action-panel .section-title .number').text('2');
     }
     if ($(this).closest('li').hasClass('doc-3')) {
          $('#document-3').show();
          $('#document-1, #document-2, #document-4, #document-5').hide();
          $('#action-panel .section-title .number').text('3');
     }
     if ($(this).closest('li').hasClass('doc-4')) {
          $('#document-4').show();
          $('#document-1, #document-2, #document-3, #document-5').hide();
          $('#action-panel .section-title .number').text('4');
     }
     if ($(this).closest('li').hasClass('doc-5')) {
          $('#document-5').show();
          $('#document-1, #document-2, #document-3, #document-4').hide();
          $('#action-panel .section-title .number').text('5');
     }

});

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
          $('.place-holder-text').hide();
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

     $('.letter-title, .correspondent').click(function(e) {
          persistSelectedInserts();
          // persistSelectedLetter();
     });

});

// Edit letter
$(document).ready(function () {

     if (window.location.href.indexOf("EditDoc") != -1) {
          $('#edit-letter .doc-1').addClass('selected');
          var currentDocTitle = $('#action-panel').find('.current-document-title').text();
          var currentDocRecipient = $('#action-panel').find('.recipient-name').text();
          $('.doc-1 .title .doc-type').text(currentDocTitle);
          $('.doc-1 .recipient-name').text(currentDocRecipient);
     }

});

// Preview letter
$(document).ready(function () {

     $('#create-letter').click(function(e) {
          var $letterContent = $('#document-1 .jqte_editor').clone();
          $('#letter-contents').html($letterContent);
          // $('#letter-contents').append($(this).prev('#document-1 .jqte_editor').html());
          // console.log('#edit-document').text();
     });

});

// Change tab for the letter journey
$('.change-tab').click(function(e) {
     e.preventDefault();
     $('.tab-content').removeClass('current');
     $('#health-tab-7').addClass('current');
     $('.client-details .tab-link').removeClass('current');
     $('.client-details .tab-link[data-tab="health-tab-7"]').addClass('current');
     $('#document-viewer .document-1 .page-1').hide();
     $('#document-viewer .document-1 .page-2').show();
     $('#document-viewer .document-1 .page-2 .control-panel h2').text('Application_correspondence.pdf');
});
