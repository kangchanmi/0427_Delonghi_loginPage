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



    /* ////////////////////// 아이디 & 비밀번호 버튼 /////////////////////// */

    /* 아이디 찾기 버튼 */
    $("#idBtn").click(function () {
        $("#findBtn button").css({
            "border": "none"
        });

        $(this).css({
            "border-top": "1px solid #3187e4",
            "border-right": "1px solid #3187e4",
            "border-bottom": "none",
            "border-left": "1px solid #3187e4",
            "color": "#3187e4"
        });
        $("#passBtn").css({
            "border-top": "1px solid #ccc",
            "border-right": "1px solid #ccc",
            "border-bottom": "1px solid #3187e4",
            "border-left": "none",
            "color": "#777"
        });


        $("#idFind img").css({
            "display": "none"
        });
        $("#IDImg").css({
            "display": "block"
        });
        $("#PWImg").css({
            "display": "block"
        });
    });


    /* 비밀번호 찾기 버튼 */
    $("#passBtn").click(function () {
        $("#findBtn button").css({
            "border": "none"
        });

        $(this).css({
            "border-top": "1px solid #3187e4",
            "border-left": "none",
            "border-right": "1px solid #3187e4",
            "border-bottom": "none",
            "color": "#3187e4"
        });
        $("#idBtn").css({
            "border-top": "1px solid #ccc",
            "border-right": "1px solid #3187e4",
            "border-bottom": "1px solid #3187e4",
            "border-left": "1px solid #ccc",
            "color": "#777"
        });


        $("#pwFind img").css({
            "display": "none"
        });
        $("#IDImg2").css({
            "dispaly": "block"
        });
        $("#PWImg2").css({
            "dispaly": "block"
        });
    });
}); /* /// function /// */
