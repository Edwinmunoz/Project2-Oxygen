$(document).ready(function () {
    console.log("My new reciever form will go here.");

    $("#new-reciever").on("submit", function (e) {
        e.preventDefault();
        const email = $("#email").val();
        const firstName = $("#firstName").val();
        const lastName = $("#lastName").val();
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
            },
        }).then((response) => {
            window.location.replace("/recievers");
        });
    });
});
