//添加颜色点击

        var a_idx = 0;
        const 前颜色码库 = new Array('00', '11', '22', '1', '44', '55', '66', '77', '88', '99',
            'aa', 'bb', 'cc', 'dd', 'ee', 'ff');
        const 中颜色码库 = new Array('00', '11', '22', '33', '44', '55', '66', '77', '88', '99',
            'aa', 'bb', 'cc', 'dd', 'ee', 'ff');
        const 后颜色码库 = new Array('00', '11', '22', '33', '44', '55', '66', '77', '88', '99',
            'aa', 'bb', 'cc', 'dd', 'ee', 'ff');
        var 前颜色码;
        var 中颜色码;
        var 后颜色码;
        var timer = setInterval(function () {

            前颜色码 = Math.floor(Math.random() * 前颜色码库.length);
            中颜色码 = Math.floor(Math.random() * 中颜色码库.length);
            后颜色码 = Math.floor(Math.random() * 后颜色码库.length);
        }, 150)
        jQuery(document).ready(function ($) {
            //$(document).bind("click", function(e) {
           // var target = $(e.target);
           // if (target.closest("#main").length == 0) { //点击id为main之外的地方触发
             $("body").click(function (e) {
                var a = new Array( "(✿◡‿◡)", "(*^__^*) ", "~\(≧▽≦)/~", "顶！d=====(￣▽￣*)b", "o(^▽^)o", "(　ﾟ∀ﾟ) ﾉ♡");
                var $i = $("<span/>").text(a[a_idx]);
                a_idx = (a_idx + 1) % a.length;
                var x = e.pageX,
                    y = e.pageY;
                $i.css({
                    "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
                    "top": y - 20,
                    "left": x,
                    "position": "absolute",
                    "font-weight": "bold",
                    "color": "#" + 前颜色码库[前颜色码] + 中颜色码库[中颜色码] + 后颜色码库[后颜色码]
                });
                $("body").append($i);
                $i.animate({
                        "top": y - 180,
                        "opacity": 0
                    },
                    1500,
                    function () {
                        $i.remove();
                    });
               //}
            });
        });