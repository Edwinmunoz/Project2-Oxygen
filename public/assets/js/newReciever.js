$(document).ready(function () {
    console.log("My new reciever form will go here.");

    $("#new-reciever").on("submit", function (e) {
        e.preventDefault();
        const email = $("#email").val();
        const firstName = $("#firstName").val();
        const lastName = $("#lastName").val();
        const gift1 = $("#gift1").val();
        const gift2 = $("#gift2").val();
        const gift3 = $("#gift3").val();
        console.log(email);
        console.log(firstName);
        console.log(lastName);

        $.ajax({
            method: "POST",
            url: "/api/recievers",
            data: {
                email,
                firstName,
                lastName,
                gift1,
                gift2,
                gift3
            },
        }).then((response) => {
            window.location.replace("/recievers");
        });
    });
});
