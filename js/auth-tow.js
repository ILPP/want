var timer = null;
var code = 59;
// 发送验证码
$(".tit1").on("touchstart", function() {
    $(this).css({
        "display" : "none"
    }).next().css({
        "display" : "block"
    })
    timer = setInterval(start,1000);
})
// 计时器函数
function start() {
    code--;
    if(code < 10) {
        code = "0" + code;
    }
    $(".second").text(code);
    if(code == 0) {
        code = 59;
        clearInterval(timer);
        $(".tit3").css({
            "display" : "none"
        }).next().css({
            "display" : "block"
        })
    }
}
// 重新发送验证码
$(".tit2").on("touchstart", function() {
    $(this).css({
        "display" : "none"
    }).prev().css({
        "display" : "block"
    })
    timer = setInterval(start,1000);
})
$(".btn").on("touchstart", function() {
    if($(".text").val() != "") {
        window.location.href = "../cn/worth-stamps.html"
    }
})