
// https://stackoverflow.com/questions/25253391/javascript-loading-screen-while-page-loads
function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

onReady(function () {
    $(".se-pre-con").fadeOut("slow");
});