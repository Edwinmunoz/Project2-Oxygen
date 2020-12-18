$(document).ready(function () {
  $("#edit-giver").on("submit", function (e) {
    e.preventDefault();
    const id = $(this).data("id");
    const giverName = $("#Giver").val();
    const giverEmail = $("#Email").val();
    console.log(giverName);
    console.log(giverEmail);



    $.ajax({
      method: "PUT",
      url: `/api/giver/${id}`,
      data: { 
        Email: giverEmail,
        Giver: giverName,
      },
    })
    .then((response) => {
      window.location.reload();
      
    });
  });
});

