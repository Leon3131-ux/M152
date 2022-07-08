$( document ).ready(function() {
    $("#navbar").load("../../common/navigation/navbar.html", function () {
        $("#journalLink").attr("aria-current", "true").addClass("active");
    });
});
