define({
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
    /** onClick defined for headerBackButton **/
    AS_Button_e3a2becbd91c4c9dbb7da2a3a8ba78cd: function AS_Button_e3a2becbd91c4c9dbb7da2a3a8ba78cd(eventobject) {
        var self = this;
        var ntf = new voltmx.mvc.Navigation("frmList");
        ntf.navigate();
    },
    /** onClick defined for headerLogoutButton **/
    AS_Button_j28e1bb48df645d4a3dbbaaee1570cc5: function AS_Button_j28e1bb48df645d4a3dbbaaee1570cc5(eventobject) {
        var self = this;

        function SHOW_ALERT_ide_onClick_c33ae11e6469461586b79d878c093694_True() {}

        function INVOKE_IDENTITY_SERVICE_ide_onClick_bb021637a26041af97937f6bf65e8de4_Success(response) {
            voltmx.application.dismissLoadingScreen();
            var ntf = new voltmx.mvc.Navigation("frmLogin");
            ntf.navigate();
        }

        function INVOKE_IDENTITY_SERVICE_ide_onClick_bb021637a26041af97937f6bf65e8de4_Failure(error) {
            voltmx.application.dismissLoadingScreen();

            function SHOW_ALERT_ide_onClick_c33ae11e6469461586b79d878c093694_Callback() {
                SHOW_ALERT_ide_onClick_c33ae11e6469461586b79d878c093694_True();
            }
            voltmx.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "alertTitle": null,
                "yesLabel": null,
                "noLabel": null,
                "alertIcon": null,
                "message": "Logout Failed!",
                "alertHandler": SHOW_ALERT_ide_onClick_c33ae11e6469461586b79d878c093694_Callback
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
        ShoppingIdentity$logout = mfidentityserviceinvoker("ShoppingIdentity", logout_inputparam, INVOKE_IDENTITY_SERVICE_ide_onClick_bb021637a26041af97937f6bf65e8de4_Success, INVOKE_IDENTITY_SERVICE_ide_onClick_bb021637a26041af97937f6bf65e8de4_Failure);
    },
    /** preShow defined for frmDetails **/
    AS_Form_g89f57b48291467b934707f0629ee050: function AS_Form_g89f57b48291467b934707f0629ee050(eventobject) {
        var self = this;

        function INVOKE_OBJECT_SERVICE_ide_preShow_e2d338871f4d4a49937773da4bd74bac_Callback(employees) {
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
        EmployeeServices$employees$get = mfobjectsecureinvokerasync(employees_inputparam, "EmployeeServices", "employees", INVOKE_OBJECT_SERVICE_ide_preShow_e2d338871f4d4a49937773da4bd74bac_Callback);
    }
});