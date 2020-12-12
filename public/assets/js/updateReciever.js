$(document).ready(function () {
    $("#receiverUpdateButton").on("submit", function (e) {
        e.preventDefault();
        const id = $(this).data("id");
      
        const receiverName = $("#receiverName").val();
        const address = $("#address").val();
        const gift1 = $("#receiverGiftOne").val();
        const gift2 = $("receiverGiftTwo").val();
        const gift3 = $("#receiverGiftThree").val();

        $.ajax({
            method: "PUT",
            url: `/api/receivers/${id}`,
            data: {
        
                receiverName,
                address,
                gift1,
                gift2,
                gift3
            },
        }).then((response) => {
            window.location.replace("/receiver");
        });
    });
});
