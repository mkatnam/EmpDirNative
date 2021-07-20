define({
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
    /** onClick defined for headerLogoutButton **/
    AS_Button_fc5f0c2dbf38478497296ddc45dfe7bb: function AS_Button_fc5f0c2dbf38478497296ddc45dfe7bb(eventobject) {
        var self = this;

        function SHOW_ALERT_ide_onClick_db42866b2ae94fb5973caf83f351b67f_True() {}

        function INVOKE_IDENTITY_SERVICE_ide_onClick_b3bf6237ae274ebd989c7e85069ddb7f_Success(response) {
            voltmx.application.dismissLoadingScreen();
            var ntf = new voltmx.mvc.Navigation("frmLogin");
            ntf.navigate();
        }

        function INVOKE_IDENTITY_SERVICE_ide_onClick_b3bf6237ae274ebd989c7e85069ddb7f_Failure(error) {
            voltmx.application.dismissLoadingScreen();

            function SHOW_ALERT_ide_onClick_db42866b2ae94fb5973caf83f351b67f_Callback() {
                SHOW_ALERT_ide_onClick_db42866b2ae94fb5973caf83f351b67f_True();
            }
            voltmx.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "alertTitle": null,
                "yesLabel": null,
                "noLabel": null,
                "alertIcon": null,
                "message": "Logout Failed!",
                "alertHandler": SHOW_ALERT_ide_onClick_db42866b2ae94fb5973caf83f351b67f_Callback
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
        ShoppingIdentity$logout = mfidentityserviceinvoker("ShoppingIdentity", logout_inputparam, INVOKE_IDENTITY_SERVICE_ide_onClick_b3bf6237ae274ebd989c7e85069ddb7f_Success, INVOKE_IDENTITY_SERVICE_ide_onClick_b3bf6237ae274ebd989c7e85069ddb7f_Failure);
    },
    /** onClick defined for headerBackButton **/
    AS_Button_ief447ed11ae4e82a0bf1016def839ee: function AS_Button_ief447ed11ae4e82a0bf1016def839ee(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("frmList");
        ntf.navigate();
    },
    /** preShow defined for frmDetails **/
    AS_Form_e82272385f3f4ba690dd08ed06a69ff9: function AS_Form_e82272385f3f4ba690dd08ed06a69ff9(eventobject) {
        var self = this;

        function INVOKE_OBJECT_SERVICE_ide_preShow_caf68120958d4b9c99bd3895ade0a0ea_Callback(employees) {
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
        EmployeeServices$employees$get = mfobjectsecureinvokerasync(employees_inputparam, "EmployeeServices", "employees", INVOKE_OBJECT_SERVICE_ide_preShow_caf68120958d4b9c99bd3895ade0a0ea_Callback);
    }
});