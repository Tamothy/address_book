//business_logic
function Contact(first, last) {
  this.first_name = first;
  this.last_name = last;
  this.addresses = [];
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Contact.prototype.full_name = function () {
  return this.first_name + " " + this.last_name;
}

//user_interface_logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var input_first_name = $("input#new-first-name").val();
    var input_last_name = $("input#new-last-name").val();

    var newContact = new Contact(input_first_name, input_last_name, input_street, input_city, input_state);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.full_name() + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.first_name);
      $(".first-name").text(newContact.first_name);
      $(".last-name").text(newContact.last_name);
    });
  });
});
