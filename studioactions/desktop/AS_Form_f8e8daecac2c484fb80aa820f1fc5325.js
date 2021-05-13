function AS_Form_f8e8daecac2c484fb80aa820f1fc5325(eventobject) {
    var self = this;

    function INVOKE_OBJECT_SERVICE_ide_onMapping_f47b91d9b34941c99dcd73b951c989d5_Callback(employees) {
        var tempCollection8224 = [];
        var tempData8131 = employees.records;
        for (var each4236 in tempData8131) {
            tempCollection8224.push({
                "employeeFieldGroup": {
                    "text": tempData8131[each4236]["Department"]
                },
                "employeeFieldTitle": {
                    "text": tempData8131[each4236]["Designation"]
                },
                "employeeId": {
                    "text": tempData8131[each4236]["Emp_id"]
                },
                "employeeSegImage": {
                    "src": tempData8131[each4236]["Image_URL"]
                },
                "employeeFieldName": {
                    "text": tempData8131[each4236]["Name"]
                },
            });
        }
        self.view.employeeSegment.setData(tempCollection8224);
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
}