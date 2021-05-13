define({
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
    /** onClick defined for btnLOGIN **/
    AS_Button_a0f3df05c7954ef98dc81d67af09b83a: function AS_Button_a0f3df05c7954ef98dc81d67af09b83a(eventobject) {
        var self = this;

        function SHOW_ALERT_ide_onClick_b085e19e29e34098bc30c84b33727d58_True() {}

        function INVOKE_IDENTITY_SERVICE_ide_onClick_a3d73699f8af4b9bbc2acb840db4e83e_Success(response) {
            kony.application.dismissLoadingScreen();
            var ntf = new kony.mvc.Navigation("frmList");
            ntf.navigate();
        }

        function INVOKE_IDENTITY_SERVICE_ide_onClick_a3d73699f8af4b9bbc2acb840db4e83e_Failure(error) {
            kony.application.dismissLoadingScreen();

            function SHOW_ALERT_ide_onClick_b085e19e29e34098bc30c84b33727d58_Callback() {
                SHOW_ALERT_ide_onClick_b085e19e29e34098bc30c84b33727d58_True();
            }
            kony.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "alertTitle": null,
                "yesLabel": null,
                "noLabel": null,
                "alertIcon": null,
                "message": "Login failed. Please try again.",
                "alertHandler": SHOW_ALERT_ide_onClick_b085e19e29e34098bc30c84b33727d58_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
        }
        kony.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
        if (login_inputparam == undefined) {
            var login_inputparam = {};
        }
        login_inputparam["serviceID"] = "ShoppingIdentity$login";
        login_inputparam["operation"] = "login";
        login_inputparam["userid"] = self.view.tbxuserid.text;
        login_inputparam["password"] = self.view.tbxpassword.text;
        ShoppingIdentity$login = mfidentityserviceinvoker("ShoppingIdentity", login_inputparam, INVOKE_IDENTITY_SERVICE_ide_onClick_a3d73699f8af4b9bbc2acb840db4e83e_Success, INVOKE_IDENTITY_SERVICE_ide_onClick_a3d73699f8af4b9bbc2acb840db4e83e_Failure);
    }
});