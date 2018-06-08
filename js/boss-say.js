$(document).ready(function(){
    var mySwiper = new Swiper ('.swiper-container', {
            initialSlide: 0,
            // 水平
            direction: 'horizontal',
            // 循环
            loop: true,
            autoplay: true,
            speed: 2000,

            onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
                swiperAnimateCache(swiper); //隐藏动画元素 
                swiperAnimate(swiper); //初始化完成开始动画
              }, 
            onSlideChangeEnd: function(swiper){ 
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
                $(".nav span em").eq(swiper.activeIndex-3).addClass("sel").siblings().removeClass("sel");
                $(".nav span em").on("touchstart", function() {
                    swiper.activeIndex = $(this).index();
                    loop: true;
                    autoplay: true;
                    speed: 2000;
                })
            },
    })            
});