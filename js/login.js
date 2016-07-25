/**
 * Created by niko on 2016/7/12.
 */
$(document).ready(function () {
    var num;
    $("#checkPhone").hide();
    $("#checkPassword").hide();
    $("#checkCode").hide();
    $("#checkPhoneTrue").hide();
    $("#checkPasswordTrue").hide();
    $("#checkCodeTrue").hide();
    $("#code").click(function () {
        num = Math.floor(Math.random() * 10000);
        $("#code").html(num);
    });
    $("input[name='phone']").focus(function () {
        $(this).keyup(function () {
            var phone = $("input[name='phone']")[0].value;
            if (phone == null || phone.length != 11 || (!phone.indexOf(Number))) $("#checkPhone").show();
            else {
                $("#checkPhone").hide();
                $("#checkPhoneTrue").show()
            }
        });
    });
    $("input[name='password']").focus(function () {
        $(this).keyup(function () {
            var password = $("input[name='password']")[0].value;
            if (password.length < 6 || password.length > 12) $("#checkPassword").show();
            else {
                $("#checkPassword").hide();
                $("#checkPasswordTrue")
            }
        });
    });
    $("input[name='code']").focus(function () {
        $(this).keyup(function () {
            var code = parseInt($("input[name='code']")[0].value);
            console.log(code);
            if (code != num) $("#checkCode").show();
            else {
                $("#checkCode").hide();
                $("#checkCodeTrue").show();
            }
        });
    })
});