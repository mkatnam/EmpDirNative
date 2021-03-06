define({
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
    /** onClick defined for headerLogoutButton **/
    AS_Button_i124d7e94a7f4866800ffe1225a5c220: function AS_Button_i124d7e94a7f4866800ffe1225a5c220(eventobject) {
        var self = this;

        function SHOW_ALERT_ide_onClick_c4a8afe98f0c4ff3adeb6ebaef124225_True() {}

        function INVOKE_IDENTITY_SERVICE_ide_onClick_b70202ac5aa941c9aed95b967b92babf_Success(response) {
            kony.application.dismissLoadingScreen();
            var ntf = new kony.mvc.Navigation("frmLogin");
            ntf.navigate();
        }

        function INVOKE_IDENTITY_SERVICE_ide_onClick_b70202ac5aa941c9aed95b967b92babf_Failure(error) {
            kony.application.dismissLoadingScreen();

            function SHOW_ALERT_ide_onClick_c4a8afe98f0c4ff3adeb6ebaef124225_Callback() {
                SHOW_ALERT_ide_onClick_c4a8afe98f0c4ff3adeb6ebaef124225_True();
            }
            kony.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "alertTitle": null,
                "yesLabel": null,
                "noLabel": null,
                "alertIcon": null,
                "message": "Logout Failed!",
                "alertHandler": SHOW_ALERT_ide_onClick_c4a8afe98f0c4ff3adeb6ebaef124225_Callback
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
        ShoppingIdentity$logout = mfidentityserviceinvoker("ShoppingIdentity", logout_inputparam, INVOKE_IDENTITY_SERVICE_ide_onClick_b70202ac5aa941c9aed95b967b92babf_Success, INVOKE_IDENTITY_SERVICE_ide_onClick_b70202ac5aa941c9aed95b967b92babf_Failure);
    },
    /** onMapping defined for frmList **/
    AS_Form_f8e8daecac2c484fb80aa820f1fc5325: function AS_Form_f8e8daecac2c484fb80aa820f1fc5325(eventobject) {
        var self = this;

        function INVOKE_OBJECT_SERVICE_ide_onMapping_f47b91d9b34941c99dcd73b951c989d5_Callback(employees) {
            var tempCollection6383 = [];
            var tempData3270 = employees.records;
            for (var each1264 in tempData3270) {
                tempCollection6383.push({
                    "employeeFieldGroup": {
                        "text": tempData3270[each1264]["Department"]
                    },
                    "employeeFieldTitle": {
                        "text": tempData3270[each1264]["Designation"]
                    },
                    "employeeId": {
                        "text": tempData3270[each1264]["Emp_id"]
                    },
                    "employeeSegImage": {
                        "src": tempData3270[each1264]["Image_URL"]
                    },
                    "employeeFieldName": {
                        "text": tempData3270[each1264]["Name"]
                    },
                });
            }
            self.view.employeeSegment.setData(tempCollection6383);
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
        EmployeeServices$employees$get = mfobjectsecureinvokerasync(employees_inputparam, "EmployeeServices", "employees", INVOKE_OBJECT_SERVICE_ide_onMapping_f47b91d9b34941c99dcd73b951c989d5_Callback);
    },
    /** onRowClick defined for employeeSegment **/
    AS_Segment_f88f7dee7fc0427486bc86bea368295c: function AS_Segment_f88f7dee7fc0427486bc86bea368295c(eventobject, sectionNumber, rowNumber) {
        var self = this;
        selectedEmployeeId = this.view.employeeSegment.selectedRowItems[0].employeeId.text;
        var ntf = new kony.mvc.Navigation("frmDetails");
        ntf.navigate();
    }
});