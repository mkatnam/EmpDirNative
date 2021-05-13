function AS_Button_i063b66283b443d6a6a9a5d82d1b2b00(eventobject) {
    var self = this;

    function SHOW_ALERT_ide_onClick_cae00d3af27249ad90331a584e71c3ec_True() {}
    function INVOKE_IDENTITY_SERVICE_ide_onClick_heb678ea7f4f4393b805e3dc57b90a72_Success(response) {
        kony.application.dismissLoadingScreen();
        var ntf = new kony.mvc.Navigation("frmLoginNew");
        ntf.navigate();
    }
    function INVOKE_IDENTITY_SERVICE_ide_onClick_heb678ea7f4f4393b805e3dc57b90a72_Failure(error) {
        kony.application.dismissLoadingScreen();

        function SHOW_ALERT_ide_onClick_cae00d3af27249ad90331a584e71c3ec_Callback() {
            SHOW_ALERT_ide_onClick_cae00d3af27249ad90331a584e71c3ec_True();
        }
        kony.ui.Alert({
            "alertType": constants.ALERT_TYPE_INFO,
            "alertTitle": null,
            "yesLabel": null,
            "noLabel": null,
            "alertIcon": null,
            "message": "Logout Failed!",
            "alertHandler": SHOW_ALERT_ide_onClick_cae00d3af27249ad90331a584e71c3ec_Callback
        }, {
            "iconPosition": constants.ALERT_ICON_POSITION_LEFT
        });
    }
    kony.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
    if (logout_inputparam == undefined) {
        var logout_inputparam = {};
    }
    logout_inputparam["serviceID"] = "ShoppingIdentity$logout";
    logout_inputparam["operation"] = "logout";
    ShoppingIdentity$logout = mfidentityserviceinvoker("ShoppingIdentity", logout_inputparam, INVOKE_IDENTITY_SERVICE_ide_onClick_heb678ea7f4f4393b805e3dc57b90a72_Success, INVOKE_IDENTITY_SERVICE_ide_onClick_heb678ea7f4f4393b805e3dc57b90a72_Failure);
}