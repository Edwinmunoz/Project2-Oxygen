$(document).ready(function () {
  $("#editReceiver").on("onlick", function (e) {
    e.preventDefault();
    const id = $(this).data("id");
    const receiver = $("#Receiver").val();
    const address = $("#Address").val();
    const gift1 = $("#Gift1").val();
    const gift2 = $("#Gift2").val();
    const gift3 =  $("#Gift3").val();
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

