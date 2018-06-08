$(document).ready(function(){
    function change(){
        code=$("#code");
        // 验证码组成库
        var arrays=new Array( 
           '1','2','3','4','5','6','7','8','9','0',
           'a','b','c','d','e','f','g','h','i','j', 
           'k','l','m','n','o','p','q','r','s','t', 
           'u','v','w','x','y','z', 
           'A','B','C','D','E','F','G','H','I','J', 
           'K','L','M','N','O','P','Q','R','S','T', 
           'U','V','W','X','Y','Z'        
           ); 
        codes='';
        for(var i = 0; i<4; i++){
        // 随机获取一个数组的下标
            var r = parseInt(Math.random()*arrays.length);
            codes += arrays[r];
        }
        // 验证码添加到span里
        code.text(codes);
        console.log(code.text());
    }
    change();
    trans = $("#trans");
    trans.on("touchstart" , change);

    $(".sure input").on("touchstart", function(){
        var inputCode = $(".enter-code input").val().toUpperCase(); //取得输入的验证码并转化为大写 
        if(inputCode.length == 0) { 
            $(".block").css({
                "display" : "block"
            })
            $(".block").on("touchstart", function() {
                $(".block").css({
                    "display" : "none"
                })
                change();
                $(".enter-code input").val("");
            })  
        }    
        else if(inputCode!=codes.toUpperCase()) {
            //若输入的验证码与产生的验证码不一致时
            $(".block").css({
                "display" : "block"
            })
            $(".block").on("touchstart", function() {
                $(".block").css({
                    "display" : "none"
                })
                change();
                $(".enter-code input").val("");
            })  
        } else { 
            window.location.href = "set-password.html";
        } 
    });
});