$(document).ready(function () {
 

  $("#new-giver").on("submit", function (e) {
    e.preventDefault();
    const email = $("#email").val();
    const giverFullName = $("#giverFullName").val();
     
    $.ajax({
      method: "POST",
      url: "/api/givers",
      data: {
        email,
        giverFullName
        
      },
    }).then((response) => {
      window.location.replace("/giver");
    });
  });
});
