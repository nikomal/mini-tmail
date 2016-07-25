/**
 * Created by niko on 2016/7/13.
 */
$(document).ready(function () {
    $(".listMain").hide();
    $("#collect").hide();
    $("#info").hide();
    $("#list").mouseenter(function() {
        $(this).find("a").css("background-color","#fff");
        $(".listMain").show();
    }).mouseleave(function () {
        $(".listMain").hide();
        $(this).find("a").css("background-color","#f2f2f2");
    });
    $("#collectLi").hover(function () {
        $("#collect").show();
    }, function () {
        $("#collect").hide();
    });
    $("#infoT").hover(function () {
        $("#info").show();
    }, function () {
        $("#info").hide();
    });
});