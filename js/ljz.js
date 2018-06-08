/* 
* @Author: anchen
* @Date:   2017-10-20 10:49:27
* @Last Modified by:   anchen
* @Last Modified time: 2017-10-21 09:29:58
*/
// 相册懒加载

// 点击top回到顶部
$(".gotop").on("click",function(){
    $("body").animate({
        scrollTop:0
    },1000);
})
 $(window).scroll(function(){
    var sp = $(window).scrollTop();
    if(sp > 100){
            // console.log(500)
        $(".gotop").css({
            "display":"block"
        })
    } else {
        $(".gotop").css({
            "display":"none"
         })
     }
     $(function () {
        $(".wrap img").lazyload({
            failure_limit : 10
        });
    })
    var st = $(window).scrollTop();
    console.log(st)
    var sl =$(window).scrollTop() + 100;
    if (sl>st) {
        $(".wrap").append(" <img src='../images/loading.gif' data-original='../images/show_2.png' alt='' /><img src='../images/loading.gif' data-original='../images/show_2.png' alt='' /><img src='../images/loading.gif' data-original='../images/show_2.png' alt='' class='imgb'/><img src='../images/loading.gif' data-original='../images/show_2.png' alt='' /><img src='../images/loading.gif' data-original='../images/show_2.png' alt='' /><img src='../images/loading.gif' data-original='../images/show_2.png' alt='' class='imgb'/><img src='../images/loading.gif' data-original='../images/show_2.png' alt='' /><img src='../images/loading.gif' data-original='../images/show_2.png' alt='' /><img src='../images/loading.gif' data-original='../images/show_2.png' alt='' class='imgb'/><img src='../images/loading.gif' data-original='../images/show_2.png' alt='' /><img src='../images/loading.gif' data-original='../images/show_2.png' alt='' /><img src='../images/loading.gif' data-original='../images/show_2.png' alt='' class='imgb'/><img src='../images/loading.gif' data-original='../images/show_2.png' alt='' /><img src='../images/loading.gif' data-original='../images/show_2.png' alt='' /><img src='../images/loading.gif' data-original='../images/show_2.png' alt='' class='imgb'/><img src='../images/loading.gif' data-original='../images/show_2.png' alt='' /><img src='../images/loading.gif' data-original='../images/show_2.png' alt='' /><img src='../images/loading.gif' data-original='../images/show_2.png' alt='' class='imgb'/><img src='../images/loading.gif' data-original='../images/show_2.png' alt='' /><img src='../images/loading.gif' data-original='../images/show_2.png' alt='' /><img src='../images/loading.gif' data-original='../images/show_2.png' alt='' class='imgb'/>")
        };
    })
