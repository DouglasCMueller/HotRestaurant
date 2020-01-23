$("#add-btn").on("click", function(event) {
  event.preventDefault();
  var reservation = {
    customerName: $("#name").val().trim(),
    customerEmail: $("#email").val().trim(),
    customerID: $("#custID").val().trim(),
    phoneNumber: $("#phone-number").val().trim()
  };

  $.post("/api/reserved")
    .then(function(data) {
      console.log("addtest.html", data);
    });
});