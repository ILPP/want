$(document).ready(function(){
    $(".sure input").on("touchstart", function() {
        var pwd = $(".pwd input").val();
        var repwd = $(".repwd input").val();
        var pwd = $(".pwd input").val();
        var reg = /^[a-zA-Z]\w{5,17}$/;
        if(reg.test(pwd)) {
            if (pwd!=""&&repwd!=""&&pwd == repwd) {
                $(".block").css({
                    "display" : "block"
                })

            } else {
                $(".alert").css({
                    "display" : "block"
                })
                $(".repwd input").focus();
            }
        } else {
            $(".blocks").css({
                "display" : "block"
            })
            $(".blocks").on("touchstart", function() {
                
                $(".blocks").css({
                "display" : "none"
                })   
            })
            // $(".pwd input").focus();
        } 
        
    }) 
});