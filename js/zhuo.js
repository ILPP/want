$("#hy").focus(function(){
        document.activeElement.blur();
    });
// nowuse页面
 function xl(ele1,ele2,ele3){
  ele1.css({
    "cursor":"pointer"
  })
    var at = ele1.length; 
    // console.log($(".animation").height())
    ele2.on('focus', function() {
        ele3.animate({
            "height":"89" *at
        },300)
    });
    ele2.on('blur', function() {
        ele3.animate({
            "height":"0"
        },300)
    });
    // 将下拉的内容赋值给输入框
    ele1.on("touchstart",function(){
        ele2.val($(this).text());
        ele2.css({
            "text-indent":"-18%",
            "color":"#aeaeae"
        })
        console.log(ele2.val());
        ele3.animate({
            "height":"0"
        },100)
    })


    // 移出下拉框 收缩回去
    // ele3.hover(function(){
    //     $(this).show();
    // },function(){
    //     ele3.stop().animate({
    //         "height":"0"
    //     },300)
    //     ele2.blur();
    // });
}
xl($(".nouusetext li"),$("#hy"),$(".nouusetext"));
$(".tracker span").on("touchstart",function(){
    $(this).addClass('border').siblings('span').removeClass('border').parent().siblings(".twowrap").children('div').eq($(this).index()).addClass("show").siblings().removeClass("show");
});
$(".pesont li").on("touchstart",function(){
    $(".mbwrap").css({
        "display":"block"
    })
});
$(".span").on("touchstart",function(){
    $(".mbwrap").css({
        "display":"none"
    })
});






var num = [];
$("#gouse").on("touchstart",function(){
    // alert(1)
    
    if ($("#hy").val() == "") {
        $("#hy").css({
            "width":"95%",
            "background":"url(../images/no.png) no-repeat center right",
            "backkgroundSize":"0.25rem 0.25rem"
        })
    }else{
        $("#hy").css({
            "background":"",
            "width":"95%"
        })
        num.push(1);
    }
    if ($("#sj").val() == "") {
        $("#sj").css({
            "width":"95%",
            "background":"url(../images/no.png) no-repeat center right",
            "backkgroundSize":"0.25rem 0.25rem"
        })
    }else{
        $("#sj").css({
           "background":"",
           "width":"95%"
        })
        num.push(1);
    }
    console.log(num.length);
    if(num.length == 2) {
        window.location.href = "../cn/auth-tow.html";
    } else {
        num = [];
    }
}); 

$(".spot").on("touchstart", function() {
    window.location = document.referrer;
})
