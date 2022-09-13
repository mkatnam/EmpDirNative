define({
    /*
        This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Button_g434bbc836a6420394ad7b1c928b7b94: function AS_Button_g434bbc836a6420394ad7b1c928b7b94(eventobject) {
        var self = this;

        function SHOW_ALERT_cf4a8e7ba9384c21a9b377cc5b846392_True() {}

        function INVOKE_IDENTITY_SERVICE_ad3b1bce62fb4fd7aa27ae93491d3ff6_Success(response) {
            voltmx.application.dismissLoadingScreen();
            var ntf = new voltmx.mvc.Navigation("frmList");
            ntf.navigate();
        }

        function INVOKE_IDENTITY_SERVICE_ad3b1bce62fb4fd7aa27ae93491d3ff6_Failure(error) {
            voltmx.application.dismissLoadingScreen();

            function SHOW_ALERT_cf4a8e7ba9384c21a9b377cc5b846392_Callback() {
                SHOW_ALERT_cf4a8e7ba9384c21a9b377cc5b846392_True();
            }
            voltmx.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "alertTitle": null,
                "yesLabel": null,
                "noLabel": null,
                "alertIcon": null,
                "message": "Login failed. Please try again.",
                "alertHandler": SHOW_ALERT_cf4a8e7ba9384c21a9b377cc5b846392_Callback
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
        ShoppingIdentity$login = mfidentityserviceinvoker("ShoppingIdentity", login_inputparam, INVOKE_IDENTITY_SERVICE_ad3b1bce62fb4fd7aa27ae93491d3ff6_Success, INVOKE_IDENTITY_SERVICE_ad3b1bce62fb4fd7aa27ae93491d3ff6_Failure);
    }
});