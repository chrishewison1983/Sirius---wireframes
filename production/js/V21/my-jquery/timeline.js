// =================================== Timeline - JAVASCRIPT =================================== //
$('#vertical-timeline .more-info').click(function(e){
     e.preventDefault();
     $(this).siblings('.details').toggle().toggleClass('open');
     $(this).toggleClass('open');
});

// Show/hide timelines
$('.hide-item').click(function(e){
     e.preventDefault();
     $(this).toggleClass('close');
     $(this).text(function(i, text){
          return text === "Hide timeline" ? "Show timeline" : "Hide timeline";
     });
});

$('#chartdiv').hide();

$('.show-chart').click(function(e){
     $('#chartdiv').toggle();
});

$('#supervision-timeline').hide();

$('.show-supervision').click(function(e){
     $('#supervision-timeline').toggle();
});

// Reverses the timeline
$('.reverse-timeline').click(function(e){
     e.preventDefault();
     $(this).toggleClass('close');
     $(this).text(function(i, text){
          return text === "Re-order timeline" ? "Reverse timeline" : "Re-order timeline";
     });
     $(this).closest('.columns').toggleClass('reverse-order');
});

// Filter
$(document).ready(function () {
     $('.last-filter').css('display', 'none');
});

$('input[name="filter-value"]').click(function(){
     var checked = $('#filter-panel').find(':checked').length;
     if($(this).is(":checked")) {
          $(this).parent().addClass("checked");
          $('.last-filter').css('display', 'inline-block');
     }
     if (!checked)
         $('#filter-results').hide();
         $('.last-filter').css('display', 'none');
});

var sections = $('.sectionContent');
function updateContentVisibility(){
     var checked = $("#filter-panel :checkbox:checked");
     if(checked.length){
          sections.hide();
          checked.each(function(){
               $("." + $(this).val()).show();
          });
          $('.dot.end').show();
          $('#filter-results').show();

          $('.last-filter').css('display', 'inline-block');
     } else {
          sections.show();
     }
}

$("#filter-panel :checkbox").click(updateContentVisibility);
updateContentVisibility();

$('.filter-all').click(function(e){
     e.preventDefault();
     $('.sectionContent').show();
     $(this).parent().css('display', 'none');
     $('#filter-panel input').removeAttr('checked');
     $('#filter-panel input').parent().removeClass('checked');
     $('#filter-results').hide();
});
