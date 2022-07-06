$( document ).ready(function() {
    $("#navbar").load("../../common/navigation/navbar.html", function () {
        $("#homeLink").attr("aria-current", "true").addClass("active");
    });
});
