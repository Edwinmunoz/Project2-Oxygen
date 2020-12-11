$(document).ready(function () {
    $("#edit-reciever").on("submit", function (e) {
        e.preventDefault();
        const id = $(this).data("id");
        const email = $("#email").val();
        const firstName = $("#firstName").val();
        const lastName = $("#lastName").val();

        $.ajax({
            method: "PUT",
            url: `/api/recievers/${id}`,
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
