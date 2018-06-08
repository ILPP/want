$(document).ready(function(){
    // 发送
    $(".sure input").on("touchstart",function() {
        if ($("#text").val()!= "") {
            $(".block").css({
                "display" : "block"
            })
            $(".block").on("touchstart",function() {
                window.location.href = "set-up.html"
            })
        };
        
    })
});