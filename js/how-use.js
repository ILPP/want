// 向下箭头的点击
$(".wrap h3").on("touchstart", function() {
    // var arr = $(".fan");
    // for(var i = 0; i < arr.length; i++) {
    //     $("ul li").eq(i).children('h3').next().slideUp('400');
    //     $("ul li").eq(i).children('h3').removeClass('fan');
    // }
    if($(this).hasClass('')) {
        $(this).next().slideDown('400');
         $(this).parent().siblings().find('p').slideUp('400');
         $(this).parent().siblings().find('h3').removeClass("fan");
        $(this).addClass('fan');
    }
     else {
        $(this).next().slideUp('400');
        $(this).removeClass('fan');
    }
})