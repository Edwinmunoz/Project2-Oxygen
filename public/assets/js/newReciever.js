$(document).ready(function () {
    

    $("receiverSubmitButton").on("submit", function (e) {
        e.preventDefault();
     
        const receiverName = $("#receiverName").val();
        const address = $("#address").val();
        const gift1 = $("#receiverGiftOne").val();
        const gift2 = $("receiverGiftTwo").val();
        const gift3 = $("#receiverGiftThree").val();
        
        $.ajax({
            method: "POST",
            url: "/api/receivers",
            data: {
        
                receiverName,
                address,
                gift1,
                gift2,
                gift3
            },
        }).then((response) => {
            window.location.replace("/receivers");
        });
    });
});
