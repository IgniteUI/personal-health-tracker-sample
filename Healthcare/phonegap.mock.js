if (window.navigator == undefined) {
    window.navigator = {};
}

$(function () {
    var e = new jQuery.Event('deviceready');
    jQuery(document).trigger(e);
});

if (window.cordova == undefined) {
    window.cordova = {
        exec: function (success, fail, className, methodName, paras) {
            if (success != null) {
                success();
            }
        }
    };
}