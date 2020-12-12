$(document).ready(function () {
  $("#edit-giver").on("submit", function (e) {
    e.preventDefault();
    const id = $(this).data("id");
    const email = $("#email").val();
    const giverFullName = $("#giverFullName").val();

    $.ajax({
      method: "PUT",
      url: `/api/givers/${id}`,
      data: {
        email,
        giverFullName
      },
    }).then((response) => {
      window.location.replace("/giver");
    });
  });
});
