//business_logic
function Contact(first, last, street, city, state) {
  this.first_name = first;
  this.last_name = last;
  this.street_name = street;
  this.city_name = city;
  this.state_name = state;
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
    var input_street = $("input#new-street-name").val();
    var input_city = $("input#new-city-name").val();
    var input_state = $("input#new-state-name").val();

    var newContact = new Contact(input_first_name, input_last_name, input_street, input_city, input_state);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.full_name() + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-street-name").val("");
    $("input#new-city-name").val("");
    $("input#new-state-name").val("");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.first_name);
      $(".first-name").text(newContact.first_name);
      $(".last-name").text(newContact.last_name);
      $(".street-name").text(newContact.street_name);
      $(".city-name").text(newContact.city_name);
      $(".state-name").text(newContact.state_name);
    });
  });
});
