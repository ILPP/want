var timer = null;
var count = 59;
$(".start").on("touchstart", function() {  
    $(this).css({
        "display" : "none"
    })
    $(".time").css({
        "display" : "block"
    })
    timer = setInterval(reduce,1000);
})
function reduce() {
    count--; 
    if(count < 10) {
        count = "0" + count;
    }
    $(".time em").text(count);
    if (count == 0 ) {
        clearInterval(timer);
        count = 59;
        $(".resend").css({
            "display" : "block"
        }) 
        $(".time").css({
            "display" : "none"
        })
    }
}
// timer = setInterval(reduce,100);
$(".resend").on("touchstart", function() {
    $(this).css({
        "display" : "none"
    })
    $(".time").css({
        "display" : "block"
    })
    timer = setInterval(reduce,100);
})
// 点击确认
$(".sure input").on("touchstart", function() {
    if ($(".code input").val() != "") {
        window.location.href = "set-password.html";
    } 
})
