$(document).ready(function () {
  console.log("My new giver form will go here.");

  $("#new-giver").on("submit", function (e) {
    e.preventDefault();
    const email = $("#email").val();
    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();
    console.log(email);
    console.log(password);
    console.log(firstName);
    console.log(lastName);

    $.ajax({
      method: "POST",
      url: "/api/givers",
      data: {
        email,
        firstName,
        lastName,
      },
    }).then((response) => {
      window.location.replace("/givers");
    });
  });
});
