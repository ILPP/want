/* 
* @Author: anchen
* @Date:   2017-10-19 11:33:39
* @Last Modified by:   anchen
* @Last Modified time: 2017-10-21 23:12:29
*/

    $(".head h2").click(function(){
        $(".con").css({
            "display":"block"
        })
        $(".main div strong").stop(true,true,true).animate({
            "width":"0"
        })
         $(".main div b").stop(true,true,true).animate({
            "width":"0"
        })
        $(".main div").stop(true,true,true).animate({
            "margin-left":"0"
        })
        $(".bj").css({
            "display":"block"
        })
         $(".ok").css({
            "display":"none"
        })
    })
    $(".con").click(function(){
        $(".con").css({
            "display":"none"
        })

    })
    $(".con em").click(function(){
        // $(this).css({
        //     "backgroundColor":"skyblue"
        // }).siblings().css({
        //     "backgroundColor":"#fff"
        // });
        var text = $(this).html();
         $(".head h2").html(text);
         $(".con").css({
            "display":"none"
        })
         // $(".main div h3").html(text);
    });
    $(".bj").click(function(){
         $(".con").css({
            "display":"none"
        })
         $(".bj").css({
            "display":"none"
         })
         $(".ok").css({
            "display":"block"
         })
        $(".main div strong").stop(true,true,true).animate({
        "width":"15.63%"
        })
        $(".main div ").stop(true,true,true).animate({
            "margin-left":"15.63%"
        })
    });
    $(".main div strong").click(function(){
        $(this).stop(true,true,true).animate({
            "width":"0"
        })
        $(this).parent().stop(true,true,true).animate({
            "margin-left":"-22%"
        })
        $(this).next().stop(true,true,true).animate({
            "width":"25.31%"
        })
    });
    $(".main div b").click(function(){
        $(this).parent().remove();
    })
    $(".ok").click(function(){
        $(this).css({
            "display":"none"
        }).prev().css({
            "display":"block"
        });
        $(".main div strong").stop(true,true,true).animate({
            "width":"0"
        })
         $(".main div b").stop(true,true,true).animate({
            "width":"0"
        })
        $(".main div").stop(true,true,true).animate({
            "margin-left":"0"
        })
    });

$(".all").click(function(){
    $(".main div").css({
    "display":"block"
    })
    var htext = $(this).html();
    $(".head h2").html(htext)
});
$(".con em").click(function(){
    $(".main").children().css({
        "display":"none"
    })
    $(this).addClass('sel').siblings().removeClass('sel').parent().parent().parent().prev().children('div').eq($(this).index()-1).css({
        "display":"block"
    }).siblings().css({
        "display":"none"
    });
})
// 接受数据
    $(window).on("load",function() {
        if(window.localStorage) {
            var ls = window.localStorage;
            // 本地存储获取的数据是字符串，存的是对象，所以需要转换
            var a = JSON.parse(ls.getItem("object"));
            // console.log(a.name );
            // alert(a.name );
            if(a.name == 1) {
                $(".main").children().css({
                        "display":"none"
                })
                $(".con1").addClass('sel').siblings().removeClass('sel').parent().parent().parent().prev().children('div').eq($(".con1").index()-1).css({
                    "display":"block"
                }).siblings().css({
                    "display":"none"
                });
            }
            if(a.name == 2) {
                $(".con2").addClass('sel').siblings().removeClass('sel').parent().parent().parent().prev().children('div').eq($(".con2").index()-1).css({
                     "display":"block"
                 }).siblings().css({
                    "display":"none"
                });
            }
            if(a.name == 3) {
                $(".con3").addClass('sel').siblings().removeClass('sel').parent().parent().parent().prev().children('div').eq($(".con3").index()-1).css({
                    "display":"block"
                }).siblings().css({
                    "display":"none"
                });
            }
            if(a.name == 4) {
                $(".con4").addClass('sel').siblings().removeClass('sel').parent().parent().parent().prev().children('div').eq($(".con4").index()-1).css({
                    "display":"block"
                }).siblings().css({
                    "display":"none"
                });
            }
            if(a.name == 5) {
                $(".con5").addClass('sel').siblings().removeClass('sel').parent().parent().parent().prev().children('div').eq($(".con5").index()-1).css({
                    "display":"block"
                }).siblings().css({
                    "display":"none"
                });
            }
            if(a.name == 6) {
                $(".con6").addClass('sel').siblings().removeClass('sel').parent().parent().parent().prev().children('div').eq($(".con6").index()-1).css({
                    "display":"block"
                }).siblings().css({
                    "display":"none"
                });
            }
            if(a.name == 7) {
                $(".con7").addClass('sel').siblings().removeClass('sel').parent().parent().parent().prev().children('div').eq($(".con7").index()-1).css({
                    "display":"block"
                }).siblings().css({
                    "display":"none"
                });
            }
            if(a.name == 8) {
                $(".con8").addClass('sel').siblings().removeClass('sel').parent().parent().parent().prev().children('div').eq($(".con8").index()-1).css({
                    "display":"block"
                }).siblings().css({
                    "display":"none"
                });
            }
        }
    })