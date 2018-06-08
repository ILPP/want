$(document).ready(function(){
    // 点击输入手机号，背景图更换
    $(".tel").focus(function () {
        $(this).css({
            "background-image" : "url('../images/rgt_userr.png')"
        })
    })
    $(".tel").blur(function() {
        $(this).css({
            "background-image" : "url('../images/rgt_userg.png')" 
        })   
    })
    // 点击输入密码，背景图更换
    $(".pwd").focus(function () {
        $(this).css({
            "background-image" : "url('../images/rgt_pswr.png')"
        })
    })
    $(".pwd").blur(function() {
        $(this).css({
            "background-image" : "url('../images/rgt_pswg.png')" 
        })
    })
    
    // 点击登录
    $(".enter input").on("touchstart", function() {
        var tel = $(".tel").val();
        var reg = /^1[3|4|5|7|8]\d{9}$/;
        var pwd = $(".pwd").val();
        var regs = /^[a-zA-Z]\w{5,17}$/;
        if(reg.test(tel) && regs.test(pwd)) {
            window.location = "../index.html"
        } else {
            $(".block").css({
                "display" : "block"
            })
             $(".block").on("touchstart", function() {
                $(".block").css({
                    "display" : "none"
                }) 
            })
        }     
    })
});