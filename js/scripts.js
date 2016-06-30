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

  $("#add-address").click(function () {
    $("#new-addresses").append("<div class='new-address'>" +
                                "<div class='form-group'>" +
                                  "<label for='new-street'>Street</label>" +
                                  "<input type='text' class='form-control new-street'>" +
                                "</div>" +
                                "<div class='form-group'>" +
                                   "<label for='new-city'>City</label>" +
                                   "<input type='text' class='form-control new-city'>" +
                                 "</div>" +
                                 "<div class='form-group'>" +
                                   "<label for='new-state'>State</label>" +
                                   "<input type='text' class='form-control new-state'>" +
                                 "</div>" +
                               "</div>");
  )};

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var input_first_name = $("input#new-first-name").val();
    var input_last_name = $("input#new-last-name").val();

    var newContact = new Contact(input_first_name, input_last_name);

    $(".new-address").each(function() {
      var input_street = $(this).find("input.new-street").val();
      var input_city = $(this).find("input.new-city").val();
      var input_state = $(this).find("input.new-state").val();
      var new_address = new Address(input_street, input_city, input_state);
      newContact.addresses.push(new_address);
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.full_name() + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.first_name);
      $(".first-name").text(newContact.first_name);
      $(".last-name").text(newContact.last_name);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>") + address.street + ", " + address.city + " " + address.state + "</li>");
      });
    });
  });
});
