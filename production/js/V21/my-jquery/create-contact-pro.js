// =================================== Create contact page - PRO - JAVASCRIPT =================================== //
// Page validation
// $('#create-deputy-office').addClass('de-activate');

$("#deputy-office-name").on("keyup", function (e) {
     $("#create-deputy-office").removeClass('de-activate').attr('href', '../14-deputy-hub/14b-deputy-hub.html');
});

// =================================== Create contact page - PRO - JAVASCRIPT =================================== //
// Page validation
// $('#create-deputy-office').addClass('de-activate');

$("#deputy-office-name").on("keyup", function (e) {
     $("#create-deputy-office").removeClass('de-activate').attr('href', '../14-deputy-hub/14b-deputy-hub.html');
});

var counter = 1;
var limit = 10;
function addInputContact(divName){
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " inputs");
     }
     else {
          var newdiv = $('<div></div>').addClass('new-contact');
          newdiv.append($("<a class=\"close close-question\"></a><h3><span class=\"number\">" + (counter + 1) + "</span> Contact details </h3><div class=\"form-group\"><label for='office-full-name-" + (counter + 1) + "'>Full name</label><input type='text' name='myInputsFullName' id='office-full-name-" + (counter + 1) + "'></div><div class=\"form-group\"><label for='office-phone-number-" + (counter + 1) + "'>Phone number</label><input type='text' name='myInputsPhoneNumber' id='office-phone-number-" + (counter + 1) + "'></div><div class=\"form-group\"><label for='office-email-address-" + (counter + 1) + "'>Email address</label><input type='text' name='myInputsEmailAddress' id='office-email-address-" + (counter + 1) + "'></div><div class=\"form-group\"><label for='office-preferred-contact-" + (counter + 1) + "' class=\"radio normal\"><input id='office-preferred-contact-" + (counter + 1) + "' type='radio' name='office-preferred-contact' value='office-preferred-contact-" + (counter + 1) + "'>Make this the preferred contact</label></div>"));
          $('#' + divName).append(newdiv);
          counter++;
     }
}


// var counter = 1;
// var limit = 10;
// function addInputEmail(divName){
//      if (counter == limit)  {
//           alert("You have reached the limit of adding " + counter + " inputs");
//      }
//      else {
//           var newdiv = document.createElement('div');
//           newdiv.innerHTML = "<a class=\"close close-question\"></a><label for='office-email-" + (counter + 1) + "'> <span class='number'>" + (counter + 1) + "</span> Email adddress</label><input type='text' name='myInputs[]' id='office-email-" + (counter + 1) + "'>";
//           document.getElementById(divName).appendChild(newdiv);
//           counter++;
//      }
// }
