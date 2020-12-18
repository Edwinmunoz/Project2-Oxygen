$(document).ready(function () {
    $("#update-receiver").on("submit", function (e) {
      e.preventDefault();
      const id = $(this).data("id");
      const receiver = $("#receiverName").val();
      const address = $("#receiverAddress").val();
      const gift1 = $("#receiverGiftOne").val();
      const gift2 = $("#receiverGiftTwo").val();
      const gift3 =  $("#receiverGiftThree").val();
  
      console.log(receiver);
      console.log(address);
    
    
  
    
  
      $.ajax({
        method: "PUT",
        url: `/api/receiver/${id}`,
        data: { 
          Receiver: receiver,
          Address: address,
          Gift1: gift1,
          Gift2: gift2,
          Gift3: gift3,
        },
      }).then((response) => {
        window.location.reload();
        
      });
    });
  });
  
  