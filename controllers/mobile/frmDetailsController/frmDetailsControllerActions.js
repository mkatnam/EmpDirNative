define({
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
    /** onClick defined for headerBackButton **/
    AS_Button_bfc64c6d54f54bbabc5086be43b8cb0d: function AS_Button_bfc64c6d54f54bbabc5086be43b8cb0d(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("frmList");
        ntf.navigate();
    },
    /** onClick defined for headerLogoutButton **/
    AS_Button_df8a343f702b42d2a49ed2544a907574: function AS_Button_df8a343f702b42d2a49ed2544a907574(eventobject) {
        var self = this;

        function SHOW_ALERT__d7542a1f7b8d419b9dfa6f97fac82b4c_True() {}

        function INVOKE_IDENTITY_SERVICE__fdb85e7cfa594924bce1c6477d39c8c9_Success(response) {
            voltmx.application.dismissLoadingScreen();
            var ntf = new voltmx.mvc.Navigation("frmLogin");
            ntf.navigate();
        }

        function INVOKE_IDENTITY_SERVICE__fdb85e7cfa594924bce1c6477d39c8c9_Failure(error) {
            voltmx.application.dismissLoadingScreen();

            function SHOW_ALERT__d7542a1f7b8d419b9dfa6f97fac82b4c_Callback() {
                SHOW_ALERT__d7542a1f7b8d419b9dfa6f97fac82b4c_True();
            }
            voltmx.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "alertTitle": null,
                "yesLabel": null,
                "noLabel": null,
                "alertIcon": null,
                "message": "Logout Failed!",
                "alertHandler": SHOW_ALERT__d7542a1f7b8d419b9dfa6f97fac82b4c_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
        }
        voltmx.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
        if (logout_inputparam == undefined) {
            var logout_inputparam = {};
        }
        logout_inputparam["serviceID"] = "ShoppingIdentity$logout";
        logout_inputparam["operation"] = "logout";
        ShoppingIdentity$logout = mfidentityserviceinvoker("ShoppingIdentity", logout_inputparam, INVOKE_IDENTITY_SERVICE__fdb85e7cfa594924bce1c6477d39c8c9_Success, INVOKE_IDENTITY_SERVICE__fdb85e7cfa594924bce1c6477d39c8c9_Failure);
    },
    /** preShow defined for frmDetails **/
    AS_Form_h31775c79e5a4f48a55eacc64ab6377b: function AS_Form_h31775c79e5a4f48a55eacc64ab6377b(eventobject) {
        var self = this;

        function INVOKE_OBJECT_SERVICE__cab6aef1c97f4b56bfcd447b199fb37d_Callback(employees) {
            self.view.employeeDetailImage.src = employees["records"][0]["Image_URL"];
            self.view.employeeNameLabel.text = employees["records"][0]["Name"];
            self.view.employeeTitleLabel.text = employees["records"][0]["Designation"];
            self.view.employeeDetailsValue1.text = employees["records"][0]["Email"];
            self.view.employeeDetailsValue2.text = employees["records"][0]["Primary_Phone"];
            self.view.employeeDetailsValue3.text = employees["records"][0]["Department"];
            self.view.employeeDetailsValue4.text = employees["records"][0]["Manager_Name"];
        }
        if (employees_inputparam == undefined) {
            var employees_inputparam = {};
        }
        employees_inputparam["serviceID"] = "EmployeeServices$employees$get";
        employees_inputparam["options"] = {
            "access": "online",
            "CRUD_TYPE": "get"
        };
        var odataParams = [];
        odataParams.push("$filter=" + "Emp_id eq " + selectedEmployeeId);
        employees_inputparam["options"]["odataurl"] = odataParams.join("&");
        var employees_httpheaders = {};
        employees_inputparam["httpheaders"] = employees_httpheaders;
        var employees_httpconfigs = {};
        employees_inputparam["httpconfig"] = employees_httpconfigs;
        EmployeeServices$employees$get = mfobjectsecureinvokerasync(employees_inputparam, "EmployeeServices", "employees", INVOKE_OBJECT_SERVICE__cab6aef1c97f4b56bfcd447b199fb37d_Callback);
    }
});