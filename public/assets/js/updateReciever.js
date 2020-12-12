$(document).ready(function () {
    $("#edit-receiver").on("submit", function (e) {
        e.preventDefault();
        const id = $(this).data("id");
        const email = $("#email").val();
        const receiverName = $("#receiverName").val();
        const address = $("#address").val();
        const gift1 = $("#gift1").val();
        const gift2 = $("#gift2").val();
        const gift3 = $("#gift3").val();

        $.ajax({
            method: "PUT",
            url: `/api/receivers/${id}`,
            data: {
                email,
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
