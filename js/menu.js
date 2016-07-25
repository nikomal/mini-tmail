/**
 * Created by niko on 2016/7/14.
 */
//纵向菜单的特效
$(document).ready(function () {
    $(".menuMain").hide();
    $("#menuList").find("li").hover(function () {
        $(this).find(".menuMain").show();
    }, function () {
        $(this).find(".menuMain").hide();
    });
    setInterval(function () {
        query=$("#queryDiv");
        if( window.scrollY > 300 ) query.addClass("show");
        else query.removeClass("show").addClass("disp");
    },10);
});