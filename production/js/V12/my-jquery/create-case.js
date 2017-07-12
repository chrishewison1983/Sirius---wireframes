// =================================== Create Case - JAVASCRIPT =================================== //
$('.create-case-journey #cta-footer').hide();

////////////////////////////////////// Step - 1 (1A-THE-ORDER) //////////////////////////////////////
$("#case-order-title").click( function(){
     $('#cta-footer').slideDown('slow');
});

if ($.cookie("create-case-step-1") == 'true') {
     $('.accordion').find('#step-1').removeClass('inactive');
     $('.accordion #step-1').find('.place-holder-text').hide();
     $('.accordion #step-1').find('.commission-visit-info').show();
}

////////////////////////////////////// Step - 2 (1B-THE-BOND) //////////////////////////////////////
$('.bond-answer-hidden').hide();

$("#case-security-bond-yes").click( function(){
     if($(this).is(':checked')) { $('.bond-answer-hidden').slideDown('slow'); }
});
$("#case-security-bond-no").click( function(){
     if($(this).is(':checked')) { $('.bond-answer-hidden').slideUp('slow'); }
});

$(".security-bond").click( function(){
     $('#cta-footer').slideDown('slow');
});

if ($.cookie("create-case-step-2") == 'true') {
     $('.accordion').find('#step-1, #step-2').removeClass('inactive');
     $('.accordion #step-1, .accordion #step-2').find('.place-holder-text').hide();
     $('.accordion #step-1, .accordion #step-2').find('.commission-visit-info').show();
}

////////////////////////////////////// Step - 3 (1C-THE-FILES) //////////////////////////////////////
$('.file-location-hidden').hide();

$("#case-file-physical").click( function(){
     if($(this).is(':checked')) { $('.file-location-hidden').slideDown('slow'); }
});
$("#case-file-scanned").click( function(){
     if($(this).is(':checked')) { $('.file-location-hidden').slideUp('slow'); }
});

$(".file-location").click( function(){
     $('#cta-footer').slideDown('slow');
});

if ($.cookie("create-case-step-3") == 'true') {
     $('.accordion').find('#step-1, #step-2, #step-3').removeClass('inactive');
     $('.accordion #step-1, .accordion #step-2, .accordion #step-3').find('.place-holder-text').hide();
     $('.accordion #step-1, .accordion #step-2, .accordion #step-3').find('.commission-visit-info').show();
}

////////////////////////////////////// Step - 4 (1D-DEPUTIES) //////////////////////////////////////
$(".deputies-jointly").click( function(){
     $('#cta-footer').slideDown('slow');
});

if ($.cookie("create-case-step-4") == 'true') {
     $('.accordion').find('#step-1, #step-2, #step-3, #step-4').removeClass('inactive');
     $('.accordion #step-1, .accordion #step-2, .accordion #step-3, .accordion #step-4').find('.place-holder-text').hide();
     $('.accordion #step-1, .accordion #step-2, .accordion #step-3, .accordion #step-4').find('.commission-visit-info').show();
}
