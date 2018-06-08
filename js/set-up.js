$(document).ready(function(){
    $(".out").on("touchstart", function() {
        $(".block").css({
            "display" : "block"
        })
    })
    $(".cancel").on("touchstart", function() {
        $(".block").css({
            "display" : "none"
        })
    })
    $(".sure").on("touchstart", function() {
        window.location.href = "../index.html";
    })
});