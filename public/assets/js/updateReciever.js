$(document).ready(function () {
    $("#edit-reciever").on("submit", function (e) {
        e.preventDefault();
        const id = $(this).data("id");
        const email = $("#email").val();
        const recieverName = $("#recieverName").val();
        const address = $("#address").val();
        const gift1 = $("#gift1").val();
        const gift2 = $("#gift2").val();
        const gift3 = $("#gift3").val();
        
        $.ajax({
            method: "PUT",
            url: `/api/recievers/${id}`,
            data: {
                email,
                recieverName,
                address,
                gift1,
                gift2,
                gift3
            },
        }).then((response) => {
            window.location.replace("/recievers");
        });
    });
});
