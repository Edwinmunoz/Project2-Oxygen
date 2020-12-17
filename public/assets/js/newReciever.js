$(document).ready(function () {


    $("#new-receiver").on("submit", function (e) {
      e.preventDefault();
     
    // const email = $("#Email").val();
    const receiver = $("#receiverName").val();
    const address = $("#receiverAddress").val();
    const gift1 = $("#receiverGiftOne").val();
    const gift2 = $("#receiverGiftTwo").val();
    const gift3 =  $("#receiverGiftThree").val();
    console.log(receiver)
    console.log(address)
    console.log(gift1)
    console.log(gift2)
    console.log(gift3)
  
  
  
      $.ajax({
        method: "POST",
        url: "/api/receiver",
        data: { 
  
          Receiver: receiver,
          Address: address,
          Gift1:gift1,
          Gift2:gift2,
          Gift3:gift3,
        },
      
      })
    });
  
  
  
  
  
    $("#editReceiver").on("onclick", function (e) {
      e.preventDefault();
     
<<<<<<< HEAD
    const email = $("#Email").val();
    const receiver = $("#Receiver").val();
    const address = $("#Address").val();
    const gift1 = $("#Gift1").val();
    const gift2 = $("#Gift2").val();
    const gift3 =  $("#Gift3").val();
    console.log(gift1)
    alert(gift1)
   

  
      $.ajax({
        method: "PUT",
        url: `/api/receiver/${id}`,
        data: { 
          Email: email,
          Receiver: receiver,
          Address: address,
          Gift1:gift1,
          Gift2:gift2,
          Gift3:gift3,
        },
      
      })
=======
        const receiverName = $("#receiverName").val();
        // const address = $("#address").val();
        // const gift1 = $("#receiverGiftOne").val();
        // const gift2 = $("receiverGiftTwo").val();
        // const gift3 = $("#receiverGiftThree").val();
        console.log(receiverName)
        alert(receiverName)
        
        $.ajax({
            method: "POST",
            url: "/api/receivers",
            data: {
        
                Receiver:receiverName,
            },
        }).then((response) => {
            window.location.reload();
        });
>>>>>>> a9d82344c31c3c1a006de2ea7177a24338cb7273
    });
  })
    