var ls = window.localStorage;
if(ls.getItem("cross") == 1) {
    var des = ls.getItem("ingo");
    var arr = des.split(",");
    for(var i = 0; i < arr.length; i++) {
        $(".inner").append("<div class='focus'><div class='photo'><a href=''><img src='../images/focus.png' alt='' /></a><div class='title'><h3>聚焦摄影</h3><p>已预约在<em>" + arr[i] + "</em></p></div></div><div class='selete claerfix'><span class='del'>取消</span><a class='update' href='order.html'>更新</a></div></div>");    
    }
}
$(".del").on("touchstart", function() {
    $(this).addClass('yes');
    $(".screen").animate({
        "top" : 0,
        "bottom" : 0
    },200,function() {
        $(".con").fadeIn('400');
    })
})
$(".delete").on("touchstart", function() {
    $(this).addClass('sel').siblings().removeClass('sel');
    $(".con").fadeOut('100', function() {
        $(".screen").animate({
            "top" : "50%",
            "bottom" : "50%"
        }, 200);
    })
})
$(".true").on("touchstart", function() {
    // if($(".selete span").hasClass('yes')) {
        $(".yes").parent().parent().remove();
    $(this).addClass('sel').siblings().removeClass('sel');
    $(".con").fadeOut(100, function() {
        $(".screen").animate({
            "top" : "50%",
            "bottom" : "50%"
        }, 200);
    })
})
// $(".update").on("touchstart", function() {
//     ls.setItem("open", 1);
//     // window.location.href = "../cn/order.html";
//     // localStorage.clear();
// })