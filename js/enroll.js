$(document).ready(function(){
    // 姓名对焦与失焦
    $(".name").focus(function() {
        $(this).css({
            "background-image" : "url('../images/rgt_userr.png')"
        })
    })
    $(".name").blur(function() {
        $(this).css({
            "background-image" : "url('../images/rgt_userg.png')"
        })
        var name = $(this).val();
        var reg = /^[\u4E00-\u9FA5]+$/;
        if(reg.test(name)) {
            $(".one span").css({
                "display" : "none"
            })
        } else {
            $(".one span").css({
                "display" : "block"
            })
            $(this).focus();
        } 
    })
    
    // 手机号对焦与失焦
    $(".tel").focus(function() {
        $(this).css({
            "background-image" : "url('../images/rgt_phoner.png')"
        })
    })
    $(".tel").blur(function() {
        $(this).css({
            "background-image" : "url('../images/user_sf_2.png')"
        })
        var tel = $(this).val();
        var reg = /^1[3|4|5|7|8]\d{9}$/;
        if(reg.test(tel)) {
            $(".two span").css({
                "display" : "none"
            })
        } else {
            $(".two span").css({
                "display" : "block"
            })
            $(this).focus();
        }
    })
    $(".enroll").on("touchstart", function() {
        var tel = $(".tel").val();
        var reg = /^1[3|4|5|7|8]\d{9}$/;
        var name = $(".name").val();
        var regs = /^[\u4E00-\u9FA5]+$/;
        if(reg.test(tel) && regs.test(name)){
            window.location.href = "../cn/verify-invite-code.html";
        } else {
            
        }
    })
});