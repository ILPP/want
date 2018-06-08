$(document).ready(function(){
    $(".sex label span").on("touchstart", function() {
        $(this).children().addClass("sel").parent().parent().siblings().children(parent).children().removeClass("sel");
    })
    // 保存
    $(".sure input").on("touchstart", function() {
        var name = $(".name input").val();
        var tel = $(".tel input").val();
        // var email = $(".email input").val();
        if(name != ""&&tel != "") {
            $(".block").css({
                "display" : "block"
            })
            $(".block").on("touchstart", function() {
                console.log(1);
                window.location.href = "set-up.html"
            })
        }
        
    })
});