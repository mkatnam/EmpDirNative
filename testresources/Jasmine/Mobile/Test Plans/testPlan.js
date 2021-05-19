//This is the entry point for automation. You can either:
//1.Require any one of the created test plans like this:
require([/*<test plan file>*/]);

// or
//2.  require the test suites along with executing jasmine as below
//Nested require for test suites will ensure the order of test suite exectuion
        require(["Test Suites/emp_dir_native_testsuite"], function(){
            jasmine.getEnv().execute();  
        });

//Since this file is manually edited, make sure to cascade any changes (rename/delete) to the corresponding test suites/plans