define({
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
    /** onClick defined for headerLogoutButton **/
    AS_Button_c3c22fb1a3a147678f7dc74a1ce1fee8: function AS_Button_c3c22fb1a3a147678f7dc74a1ce1fee8(eventobject) {
        var self = this;

        function SHOW_ALERT__c413a02a2d17404584bed45c463a786b_True() {}

        function INVOKE_IDENTITY_SERVICE__bbbfdf7731c1499dab0077baa5f191de_Success(response) {
            kony.application.dismissLoadingScreen();
            var ntf = new kony.mvc.Navigation("frmLogin");
            ntf.navigate();
        }

        function INVOKE_IDENTITY_SERVICE__bbbfdf7731c1499dab0077baa5f191de_Failure(error) {
            kony.application.dismissLoadingScreen();

            function SHOW_ALERT__c413a02a2d17404584bed45c463a786b_Callback() {
                SHOW_ALERT__c413a02a2d17404584bed45c463a786b_True();
            }
            kony.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "alertTitle": null,
                "yesLabel": null,
                "noLabel": null,
                "alertIcon": null,
                "message": "Logout Failed!",
                "alertHandler": SHOW_ALERT__c413a02a2d17404584bed45c463a786b_Callback
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
        ShoppingIdentity$logout = mfidentityserviceinvoker("ShoppingIdentity", logout_inputparam, INVOKE_IDENTITY_SERVICE__bbbfdf7731c1499dab0077baa5f191de_Success, INVOKE_IDENTITY_SERVICE__bbbfdf7731c1499dab0077baa5f191de_Failure);
    },
    /** onMapping defined for frmList **/
    AS_Form_f137f613a1034f27ab9f758ce187856f: function AS_Form_f137f613a1034f27ab9f758ce187856f(eventobject) {
        var self = this;

        function INVOKE_OBJECT_SERVICE__a927b7e02a554f5c8f9ef347c0ba849a_Callback(employees) {
            var tempCollection6193 = [];
            var tempData9650 = employees.records;
            for (var each9409 in tempData9650) {
                tempCollection6193.push({
                    "employeeFieldGroup": {
                        "text": tempData9650[each9409]["Department"]
                    },
                    "employeeFieldTitle": {
                        "text": tempData9650[each9409]["Designation"]
                    },
                    "employeeId": {
                        "text": tempData9650[each9409]["Emp_id"]
                    },
                    "employeeSegImage": {
                        "src": tempData9650[each9409]["Image_URL"]
                    },
                    "employeeFieldName": {
                        "text": tempData9650[each9409]["Name"]
                    },
                });
            }
            self.view.employeeSegment.setData(tempCollection6193);
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
        EmployeeServices$employees$get = mfobjectsecureinvokerasync(employees_inputparam, "EmployeeServices", "employees", INVOKE_OBJECT_SERVICE__a927b7e02a554f5c8f9ef347c0ba849a_Callback);
    },
    /** onRowClick defined for employeeSegment **/
    AS_Segment_ce3a21e8b0374dcc83650de7b116c97c: function AS_Segment_ce3a21e8b0374dcc83650de7b116c97c(eventobject, sectionNumber, rowNumber) {
        var self = this;
        selectedEmployeeId = this.view.employeeSegment.selectedRowItems[0].employeeId.text;
        var ntf = new kony.mvc.Navigation("frmDetails");
        ntf.navigate();
    }
});