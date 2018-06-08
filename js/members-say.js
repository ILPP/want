$(document).ready(function(){
    $(".wrap header span").on("touchstart", function() {
        $(".block").css({
            "display" : "block"
        });

    })
    var arr = $(".tit");
    $(".con span").on("touchstart", function() {
        $(this).addClass("sel").siblings().removeClass("sel");
        $(".wrap header span").html($(this).html());
        $(".block").css({
            "display" : "none"
        })
        for(var i = 0;i < arr.length;i++) {
            $(".tit").eq(i).css({
                "display" : "none"
            })
            var text = arr.eq(i).children().children("dd").children().eq(1).children("em").text();
            if (text != $(this).html()) {
                $(".tit").eq(i).addClass("sel");
                if ($(this).html() == "查看全部") {
                    $(".tit").css({
                       "display" : "block"
                    })
                } 
            } else {
                $(".tit").eq(i).css({
                    "display" : "block"
                })   
            }

        }
    })
    $(".reload").on("touchstart", function() {
        location.replace("../cn/members-say.html");
    })  
});