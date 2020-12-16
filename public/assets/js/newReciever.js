$(document).ready(function () {
    

    $("#receiverSubmitButton").on("submit", function (e) {
        e.preventDefault();
     
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
            window.location.replace("/receivers");
        });
    });
});
