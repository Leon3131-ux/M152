$( document ).ready(function() {
    $("#navbar").load("../../common/navigation/navbar.html", function () {
        $("#testingLink").attr("aria-current", "true").addClass("active");
    });
});
function updateText(){
    $("#outputOne").text($("#firstInput").val());
    $("#outputTwo").text($("#secondInput").val());
}
