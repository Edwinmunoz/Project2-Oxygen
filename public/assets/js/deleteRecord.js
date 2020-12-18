$(document).ready(function () {
    $("#deletebutton").on("click", function () {
        const id = $(this).data("id");
        $.ajax({
            method: "DELETE",
            url: `/api/receiver/${id}`
        }).then(response => {

            window.location.reload()
        })
    })
})