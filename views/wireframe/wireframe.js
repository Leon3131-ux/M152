$( document ).ready(function() {
    $("#navbar").load("../../common/navigation/navbar.html", function () {
        $("#wireframeLink").attr("aria-current", "true").addClass("active");
    });
});