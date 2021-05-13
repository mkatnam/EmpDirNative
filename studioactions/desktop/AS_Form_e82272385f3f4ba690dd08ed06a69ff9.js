function AS_Form_e82272385f3f4ba690dd08ed06a69ff9(eventobject) {
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