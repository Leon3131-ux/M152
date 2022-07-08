$( document ).ready(function() {
    $("#navbar").load("../../common/navigation/navbar.html", function () {
        $("#aboutUs").attr("aria-current", "true").addClass("active");
    });
});