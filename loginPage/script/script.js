/* eslint-disable */

$(function () {
    /* //////////////// LNB 메뉴 //////////////// */
    $(".subMenuIcon>a").mouseover(function () {
        $(this).siblings("span").css({
            "display": "block",
            "padding-bottom": "12px",
            "border-bottom": "6px solid #3289e8"
        });
    });

    $(".subMenuIcon>a").mouseout(function () {
        $(this).siblings("span").css({
            "display": "none",
        });
    });

    /* ////////////////////// 풀다운 메뉴 /////////////////////// */
    $("#gnb>ul#mainMenu>li").mouseover(function () {
        $(this).children("ul").stop().slideDown(10);
        $("div#bgArea").stop().slideDown(1000);
        $(this).children("ul").css({
            "width": "100%"
        });

    });
    $("#gnb>ul#mainMenu>li").mouseout(function () {
        $(this).children("ul").stop().slideUp(200);
        $("div#bgArea").stop().slideUp(100);
        $(this).children("ul").css({
            "width": "100%"
        });
    });


    /* ////////////////////// 이메일&멤버십 번호 버튼 /////////////////////// */

    /* 이메일 버튼 */
    $("#login button#mailBtn").click(function () {
        $("#login button").css({
            "border": "none"
        });

        $(this).css({
            "border-top": "1px solid #3187e4",
            "border-left": "1px solid #3187e4",
            "border-right": "none",
            "border-bottom": "none",
            "color": "#3187e4"
        });
        $("#memBtn").css({
            "border-top": "1px solid #ccc",
            "border-right": "1px solid #ccc",
            "border-bottom": "1px solid #3187e4",
            "border-left": "1px solid #3187e4",
            "color": "#777"
        });
        $(".emailArea").css({
            "display":"block"
        });
        $(".memArea").css({
            "display":"none"
        });
    });


    /* 멤버십 번호 버튼 */
    $("#login button#memBtn").click(function () {
        $("#login button").css({
            "border": "none"
        });
        $(this).css({
            "border-top": "1px solid #3187e4",
            "border-right": "1px solid #3187e4",
            "border-bottom": "none",
            "border-left":"1px solid #3187e4",
            "color": "#3187e4"
        });
        $("#mailBtn").css({
            "border-top": "1px solid #ccc",
            "border-right": "none",
            "border-bottom": "1px solid #3187e4",
            "border-left": "1px solid #ccc",
            "color": "#777"
        });
        $(".emailArea").css({
            "display":"none"
        });
        $(".memArea").css({
            "display":"block"
        });
    });


    /* ////////////////////// 로그인 경고창 /////////////////////// */
    $(".emailArea button, .loginBtn2").click(function() {
        var mail = $(".mailTxt").val();
        var pass = $(".passTxt").val();
        var res = mail + pass;

        if ($(".mailTxt").val()=="") {
        alert("메일주소나 멤버십번호를 넣어주세요.");
            return false;
        } else if($(".passTxt").val()=="") {
        alert("메일주소나 멤버십번호를 넣어주세요.");
            return false;
        } else {
            alert("로그인이 완료 되었습니다.");
        }

    });

}); /* /// function /// */
