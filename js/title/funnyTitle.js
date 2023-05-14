var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {

    if (document.hidden) {
        //离开文案
        $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/guixinchn/image/blog/favicon.png");
        document.title = '页面崩溃啦~';
        clearTimeout(titleTime);
    }
    else {
        // 返回文案
        $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/guixinchn/image/blog/favicon.png");
        document.title = '' + OriginTitle;
        titleTime = setTimeout(function () {

            document.title = OriginTitle;
        }, 2000);
    }
});