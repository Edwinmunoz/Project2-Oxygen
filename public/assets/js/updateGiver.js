$(document).ready(function () {
  $("#editReceiver").on("onlick", function (e) {
    e.preventDefault();
    const id = $(this).data("id");
    const giver = $("#Receiver").val();
    const address = $("#Address").val();
    console.log(receiver);
    console.log(address);
    alert("Clicked")


    $.ajax({
      method: "PUT",
      url: `receiver/${id}`,
      data: { 
        Email: email,
        Giver: giver,
      },
    }).then((response) => {
      window.location.reload();
      
    });
  });
});



