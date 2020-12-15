$(document).ready(function () {
  $("#giverSubmitButton").on("submit", function (e) {
    e.preventDefault();
    const id = $(this).data("id");
    const email = $("#giverEmailInput").val();
    const giverFullName = $("#giverNameInput").val();

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
