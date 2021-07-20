define({
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
    /** onClick defined for btnLOGIN **/
    AS_Button_dd060549d4a147d9b2e59334adf61c5c: function AS_Button_dd060549d4a147d9b2e59334adf61c5c(eventobject) {
        var self = this;

        function SHOW_ALERT_ide_onClick_d51554f7765347c5b132b3818fc3751b_True() {}

        function INVOKE_IDENTITY_SERVICE_ide_onClick_f6a7140d5c424f0ca202ab7e148d87cb_Success(response) {
            voltmx.application.dismissLoadingScreen();
            var ntf = new voltmx.mvc.Navigation("frmList");
            ntf.navigate();
        }

        function INVOKE_IDENTITY_SERVICE_ide_onClick_f6a7140d5c424f0ca202ab7e148d87cb_Failure(error) {
            voltmx.application.dismissLoadingScreen();

            function SHOW_ALERT_ide_onClick_d51554f7765347c5b132b3818fc3751b_Callback() {
                SHOW_ALERT_ide_onClick_d51554f7765347c5b132b3818fc3751b_True();
            }
            voltmx.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "alertTitle": null,
                "yesLabel": null,
                "noLabel": null,
                "alertIcon": null,
                "message": "Login failed. Please try again.",
                "alertHandler": SHOW_ALERT_ide_onClick_d51554f7765347c5b132b3818fc3751b_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
        }
        voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
        if (login_inputparam == undefined) {
            var login_inputparam = {};
        }
        login_inputparam["serviceID"] = "ShoppingIdentity$login";
        login_inputparam["operation"] = "login";
        login_inputparam["userid"] = self.view.tbxuserid.text;
        login_inputparam["password"] = self.view.tbxpassword.text;
        ShoppingIdentity$login = mfidentityserviceinvoker("ShoppingIdentity", login_inputparam, INVOKE_IDENTITY_SERVICE_ide_onClick_f6a7140d5c424f0ca202ab7e148d87cb_Success, INVOKE_IDENTITY_SERVICE_ide_onClick_f6a7140d5c424f0ca202ab7e148d87cb_Failure);
    }
});