define({
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
    /** onClick defined for headerLogoutButton **/
    AS_Button_i063b66283b443d6a6a9a5d82d1b2b00: function AS_Button_i063b66283b443d6a6a9a5d82d1b2b00(eventobject) {
        var self = this;

        function SHOW_ALERT_ide_onClick_cae00d3af27249ad90331a584e71c3ec_True() {}

        function INVOKE_IDENTITY_SERVICE_ide_onClick_heb678ea7f4f4393b805e3dc57b90a72_Success(response) {
            kony.application.dismissLoadingScreen();
            var ntf = new kony.mvc.Navigation("frmLogin");
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
    },
    /** onMapping defined for frmList **/
    AS_Form_g6133809bc5143f4afdf05df4148ff98: function AS_Form_g6133809bc5143f4afdf05df4148ff98(eventobject) {
        var self = this;

        function INVOKE_OBJECT_SERVICE_ide_onMapping_j1e09167317e42459ed83c1ecfed07ee_Callback(employees) {
            var tempCollection3868 = [];
            var tempData2754 = employees.records;
            for (var each9267 in tempData2754) {
                tempCollection3868.push({
                    "employeeFieldGroup": {
                        "text": tempData2754[each9267]["Department"]
                    },
                    "employeeFieldTitle": {
                        "text": tempData2754[each9267]["Designation"]
                    },
                    "employeeId": {
                        "text": tempData2754[each9267]["Emp_id"]
                    },
                    "employeeSegImage": {
                        "src": tempData2754[each9267]["Image_URL"]
                    },
                    "employeeFieldName": {
                        "text": tempData2754[each9267]["Name"]
                    },
                });
            }
            self.view.employeeSegment.setData(tempCollection3868);
        }
        if (employees_inputparam == undefined) {
            var employees_inputparam = {};
        }
        employees_inputparam["serviceID"] = "EmployeeServices$employees$get";
        employees_inputparam["options"] = {
            "access": "online",
            "CRUD_TYPE": "get"
        };
        var employees_httpheaders = {};
        employees_inputparam["httpheaders"] = employees_httpheaders;
        var employees_httpconfigs = {};
        employees_inputparam["httpconfig"] = employees_httpconfigs;
        EmployeeServices$employees$get = mfobjectsecureinvokerasync(employees_inputparam, "EmployeeServices", "employees", INVOKE_OBJECT_SERVICE_ide_onMapping_j1e09167317e42459ed83c1ecfed07ee_Callback);
    },
    /** onRowClick defined for employeeSegment **/
    AS_Segment_c98958f005794c39b587f2a3aa73922d: function AS_Segment_c98958f005794c39b587f2a3aa73922d(eventobject, sectionNumber, rowNumber) {
        var self = this;
        selectedEmployeeId = this.view.employeeSegment.selectedRowItems[0].employeeId.text;
        var ntf = new kony.mvc.Navigation("frmDetails");
        ntf.navigate();
    }
});