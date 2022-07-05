$( document ).ready(function() {
    $("#navbar").load("../../common/navigation/navbar.html", function () {
        $("#galleryLink").attr("aria-current", "true").addClass("active");
    });
    $(".click-icon-wrapper").click(function () {
        console.log("click");
        if($(this).children(".click-icon").hasClass("fa-chevron-down")){
            $(this).children(".click-icon").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        }else{
            $(this).children(".click-icon").removeClass("fa-chevron-up").addClass("fa-chevron-down");
        }
    });
});
