$(document).ready(function() {
  $("#some-form").submit(function(event) {
    event.preventDefault();

    var someInputVar = $("#some-input").val(); // Don't forget it's a string without parseInt()
    var someOutputVar = someInputVar;

    $("#output").text(someOutputVar);
    $("#output").show();
  });
});
