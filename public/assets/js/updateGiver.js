$(document).ready(function () {
  $("#edit-giver").on("submit", function (e) {
    e.preventDefault();
    const id = $(this).data("id");
    const email = $("#email").val();
    const giverName = $("#giverName").val();

    $.ajax({
      method: "PUT",
      url: `/api/givers/${id}`,
      data: {
        email,
        giverName
      },
    }).then((response) => {
      window.location.replace("/givers");
    });
  });
});
