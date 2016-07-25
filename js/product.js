/**
 * Created by niko on 2016/7/19.
 */
$(document).ready(function () {
    $(".color").click(function () {
        $(".color").css("border","1px solid #999");
        $(this).css("border","2px solid #ff0000");
    });
    $("#leftInfoImg").find("img").bind("mouseover", function (e) {
        console.log(a);
    });
    $("#tabInfo_2").hide();
    $("#tab1").click(function () {
        $("#tab2").removeClass("selected");
        $(this).addClass("selected");
        $("#tabInfo_1").show();
        $("#tabInfo_2").hide();
    });
    $("#tab2").click(function() {
        $("#tab1").removeClass("selected");
        $(this).addClass("selected");
        $("#tabInfo_2").show();
        $("#tabInfo_1").hide();
    });
    $(".leftInfoImg").mousemove(function (e) {
        var img = $(".leftInfoImg");
        var pointX = e.pageX;
        var pointY = e.pageY;
        var imgX = img.position().left;
        var imgY = img.position().top;
        var largeX=pointX-imgX-50;
        var largeY=pointY-imgY-50;
        var bigX=(imgX-pointX)*3;
        var bigY=(imgY-pointY)*3;
        if (largeX<200&&largeX>0&&largeY<200&&largeY>0) {
            $("#enlarge").css({
                "margin-top": function () {
                    return largeY;
                }, "margin-left": function () {
                    return largeX;
                }
            });
        }
        $("#bigPhoto").find("img").css({"margin-left": function () {
            return bigX;
        },"margin-top":function() {
            return bigY;
        }});
    });
    setInterval(function () {
        query=$("#tabTitle");
        if (window.scrollY>615) query.addClass("fix");
        else query.removeClass("fix");
    },10);
});
function onMinImg(index){
    for( var i = 1; i <= 3 ; i++ ){
        if( i == index ){
            var imgO = document.getElementsByClassName("img"+index)[0];
            imgO.style.display = "";
            var img1 = document.getElementsByClassName("img"+index)[1];
            img1.style.display = "";
        }else{
            imgO = document.getElementsByClassName("img"+i)[0];
            imgO.style.display = "none";
            img1 = document.getElementsByClassName("img"+i)[1];
            img1.style.display = "none";
        }
    }
}