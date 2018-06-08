var ls = window.localStorage;
$(".find").on("touchstart", function() {
    var con = $(".search input").val();
    if(con) {
        if(ls.getItem("pum")) {
            con = ls.getItem("pum") + "," + con;
        }
        ls.setItem("pum", con);
        window.location.href = "../cn/sem.html";
    } else {
        con = "";
    }
});
if(ls.getItem("cross") == 1) {
    var des = ls.getItem("pum");
    var arr = des.split(",");
    for(var i = 0; i < arr.length; i++) {
        $(".list").append("<a class='tit' href='sem.html'>" + arr[i] + "</a>");    
    }
}
$(".del span").on("touchstart", function() {
    $(".wrap .tit").remove();
    localStorage.clear();
    $(".nohave").css({
        "display" : "block"
    })
});
