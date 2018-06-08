// 价格对焦与失焦
$(".con1").focus(function() {
    $(this).css({
        "background-image" : "url('../images/user_red.png')"
    })
})
$(".con1").blur(function() {
    $(this).css({
        "background-image" : "url('../images/user_sf_1.png')"
    })
    var name = $(this).val();
    var reg = /\d/;
    if(reg.test(name)) {
        $(this).next().css({
            "display" : "none"
        })
    } else {
        $(this).next().css({
            "display" : "block"
        })
    } 
})

// 业务员对焦与失焦
$(".con2").focus(function() {
    $(this).css({
        "background-image" : "url('../images/user_sf.png')"
    })
})
$(".con2").blur(function() {
    $(this).css({
        "background-image" : "url('../images/user_sf_3.png')"
    })
    var tel = $(this).val();
    var reg = /^[\u4E00-\u9FA5]+$/;
    if(reg.test(tel)) {
        $(this).next().css({
            "display" : "none"
        })
    } else {
        $(this).next().css({
            "display" : "block"
        })
    }
})
// 业务员手机号判断
$(".con3").focus(function() {
    $(this).css({
        "background-image" : "url('../images/rgt_phoner.png')"
    })
})
$(".con3").blur(function() {
    $(this).css({
        "background-image" : "url('../images/user_sf_2.png')"
    })
    var tel = $(this).val();
    var reg = /^1[3|4|5|7|8]\d{9}$/;
    if(reg.test(tel)) {
        $(this).next().css({
            "display" : "none"
        })
    } else {
        $(this).next().css({
            "display" : "block"
        })
    }
})
$(".btn input").on("touchstart", function() {
    var price = $(".con1").val();
    var regss = /\d/;
    var name = $(".con2").val();
    var regs = /^[\u4E00-\u9FA5]+$/;
    var tel = $(".con3").val();
    var reg = /^1[3|4|5|7|8]\d{9}$/;
    if(regss.test(price) && reg.test(tel) && regs.test(name)) {
        window.location.href = "../cn/auth-code.html";
    } else {
        
    }
})
