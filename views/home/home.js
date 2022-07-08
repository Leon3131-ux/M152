$( document ).ready(function() {
    $("#navbar").load("../../common/navigation/navbar.html", function () {
        $("#homeLink").attr("aria-current", "true").addClass("active");
    });
    let acceptedCookies = document.cookie;
    console.log(acceptedCookies);
    if(!acceptedCookies || acceptedCookies === ""){
        $('#cookieModal').modal('show');
    }
});
function acceptCookie(){
    document.cookie = "accepted";
}