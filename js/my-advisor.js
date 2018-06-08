$(document).ready(function(){
    $(".wrap header button").on("touchstart", function() {
        $(this).addClass("sel").siblings().removeClass("sel");
        $(".wrap section article").eq($(this).index()).addClass("sels").siblings().removeClass("sels");
    })
});