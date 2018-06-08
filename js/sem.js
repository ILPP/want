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
    // window.location.href = "../cn/history.html";
    var ls= window.localStorage;
    ls.setItem("cross", 1);
})
var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay:2000,
    // 如果需要分页器
    pagination: '.swiper-pagination'
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
$(".con6").click(function() {
    fun(5,"../cn/myfocuns.html");
})
$(".con7").click(function() {
    fun(6,"../cn/myfocuns.html");
})
$(".con8").click(function() {
    fun(7,"../cn/myfocuns.html");
})
$(".con9").click(function() {
    fun(8,"../cn/myfocuns.html");
})
// 滑动出现
// var wrap = document.getElementById("wrap");
// var what = document.getElementById("what");
// var box = document.getElementById("order");
// var star = 0;
// var end= 0;
// wrap.addEventListener("touchstart", function(e){
//     e.preventDefault();
//     if(e.touches.length == 1){
//         star = e.touches[0].pageX;
//     }
// }, false)
// wrap.addEventListener("touchmove", function(e){
//     e.preventDefault();
//     if(e.touches.length == 1){
//         end = e.touches[0].pageX;
//     }
// }, false)
// wrap.addEventListener("touchend", function(e){
//     e.preventDefault();
//     if (end - star > 100) {
//         box.style.width = "84.38%";
//         what.style.marginLeft = "84.38%";
//     }else{
//         box.style.width = "0";
//         what.style.marginLeft = "0";
//     }
// }, false)