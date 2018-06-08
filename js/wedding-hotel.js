var tit1 = true;
$(".tit1").on("touchstart", function() {
    if(tit1) {
        $(".price").slideUp('400');
        $(".table").slideUp('400');
        $(".area").slideUp('400');
        $(".level").slideDown("400");
        $(".screen").css({
            "display" : "block"
        })
        tit1 =false;
        tit2 = true;
    } else {
        $(".level").slideUp("400", function() {
            $(".screen").css({
                "display" : "none"
            })
        });
        tit1 = true;
    }
})
var tit2 = true;
$(".tit2").on("touchstart", function() {
    if(tit2) {
        $(".level").slideUp('400');
        $(".table").slideUp('400');
        $(".area").slideUp('400');
        $(".price").slideDown("400");
        $(".screen").css({
            "display" : "block"
        })
        tit2 =false;
        tit1 = true;
        tit3 = true;
        tit4 = true;
    } else {
        $(".price").slideUp("400", function() {
            $(".screen").css({
                "display" : "none"
            })
        });
        tit2 = true;
    }
})
var tit3 = true;
$(".tit3").on("touchstart", function() {
    if(tit3) {
        $(".level").slideUp('400');
        $(".price").slideUp('400');
        $(".area").slideUp('400');
        $(".table").slideDown("400");
        $(".screen").css({
            "display" : "block"
        })
        tit3 =false;
        tit1 = true;
        tit2 = true;
        tit4 = true;
    } else {
        $(".table").slideUp("400", function() {
            $(".screen").css({
                "display" : "none"
            })
        });
        tit3 = true;
    }
})
var tit4 = true;
$(".tit4").on("touchstart", function() {
    if(tit4) {
        $(".level").slideUp('400');
        $(".price").slideUp('400');
        $(".table").slideUp('400');
        $(".area").slideDown("400");
        $(".screen").css({
            "display" : "block"
        })
        tit1 = true;
        tit2 = true;
        tit3 = true;
        tit4 =false;
    } else {
        $(".area").slideUp("400", function() {
            $(".screen").css({
                "display" : "none"
            })
        });
        tit4 = true;
    }
})
$(".item em").on("touchstart", function() {
    $(this).parent().parent().slideUp('400');
    $(".screen").css({
        "display" : "none"
    })
    tit1 = true;
    tit2 = true;
    tit3 = true;
    tit4 = true;
})
var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay:2000,
    
    // 如果需要分页器
    pagination: '.swiper-pagination'
})    
var bool = true;
$(".type").on("touchstart", function() {
    if(bool) {
        $(".order").animate({
            "width" : "84.38%"
        }, 200);
        $(".what").animate({
            "marginLeft" : "84.38%"
        },200);
        bool = false;
    } else {
        $(".order").animate({
            "width" : "0"
        },200);
        $(".what").animate({
            "marginLeft" : "0"
        },200);
        bool = true;
    }
})
$(".search").on("touchstart", function() {
    var ls= window.localStorage;
    ls.setItem("cross", 1);
    window.location.href = "../cn/history.html"
})
$(".drag a").on("touchstart", function() {
    $(this).addClass('con1').siblings().removeClass('con1');
})
// 导航栏的发送
var obj = {};
function fun(n,aaa) {
    obj.name  = n;
    if(window.localStorage) {
        var ls = window.localStorage;
        // 本地存储只允许存储字符串，所以需要转换
        var str = JSON.stringify(obj);
        ls.setItem("object", str);
        location.href = aaa;
    }   
}
$(".con2").click(function() {
    fun(1,"../cn/myfocuns.html");
})
$(".con3").click(function() {
    fun(2,"../cn/myfocuns.html");
})
$(".con4").click(function() {
    fun(3,"../cn/myfocuns.html");
})
$(".con5").click(function() {
    fun(4,"../cn/myfocuns.html");
})