$(document).ready(function () {
  console.log("My new giver form will go here.");

  $("#new-giver").on("submit", function (e) {
    e.preventDefault();
    const email = $("#email").val();
    const giverName = $("#giverName").val();
     
    $.ajax({
      method: "POST",
      url: "/api/givers",
      data: {
        email,
        giverName
        
      },
    }).then((response) => {
      window.location.replace("/givers");
    });
  });
});
