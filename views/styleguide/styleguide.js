$( document ).ready(function() {
    $("#navbar").load("../../common/navigation/navbar.html", function () {
        $("#styleguideLink").attr("aria-current", "true").addClass("active");
    });
});