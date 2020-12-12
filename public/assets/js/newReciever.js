$(document).ready(function () {
    

    $("#new-receiver").on("submit", function (e) {
        e.preventDefault();
        const email = $("#email").val();
        const receiverName = $("#firstName").val();
        const address = $("#address").val();
        const gift1 = $("#gift1").val();
        const gift2 = $("#gift2").val();
        const gift3 = $("#gift3").val();
        
        $.ajax({
            method: "POST",
            url: "/api/receivers",
            data: {
                email,
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
