// =================================== Create letter - JAVASCRIPT =================================== //
// Select action page
$(document).ready(function(){
     $('.preview').click(function(e){
          e.preventDefault();
          var docName = $(this).siblings().text();
          $('#preview-doc').find('h1').text(docName);
     });
});

// Correspondant
$(document).ready(function() {

     $('#suggested ul li a').click(function(e) {
          e.preventDefault();
          $(this).hide();
          $("#selected-list").append(`
               <li data-correspondant-id='${$(this).data('correspondant-id')}'>
                    <a class="correspondent">
                         <span>${ $(this).find('[data-value="name"]').text() }</span><br>
                         <span class="type">${ $(this).find('[data-value="type"]').text() }</span><br>
                         <span class="sub-text">${ $(this).find('[data-value="address"]').text() }</span>
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
          $(this).remove();
          $(`#recipients [data-correspondant-id="${id}"]`).remove();
          $(`#suggested [data-correspondant-id="${id}"]`).show();
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
     var docTitle = $(this).closest('li').find('.title').text();
     var docRecipient = $(this).closest('li').find('.recipient-name').text();

     $('#action-panel').find('.current-document-title').text(docTitle);
     $('#action-panel').find('.recipient-name').text(docRecipient);

     if ($(this).closest('li').hasClass('doc-1')) {
          $('#document-1').show();
          $('#document-2, #document-3, #document-4, #document-5').hide();
     }
     if ($(this).closest('li').hasClass('doc-2')) {
          $('#document-2').show();
          $('#document-1, #document-3, #document-4, #document-5').hide();
     }
     if ($(this).closest('li').hasClass('doc-3')) {
          $('#document-3').show();
          $('#document-1, #document-2, #document-4, #document-5').hide();
     }
     if ($(this).closest('li').hasClass('doc-4')) {
          $('#document-4').show();
          $('#document-1, #document-2, #document-3, #document-5').hide();
     }
     if ($(this).closest('li').hasClass('doc-5')) {
          $('#document-5').show();
          $('#document-1, #document-2, #document-3, #document-4').hide();
     }

});

// Delete draft
$('#drafts .delete, #client-drafts .delete').click(function(e) {
     e.preventDefault();
     var deletedDocTitle = $(this).closest('li').find('.title').text();

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

});
