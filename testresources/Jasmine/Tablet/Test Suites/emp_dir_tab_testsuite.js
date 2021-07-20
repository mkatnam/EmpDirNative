describe("emp_dir_tab_testsuite", function() {
	it("tab_test_cases", async function() {
		await voltmx.automation.playback.waitFor(["frmLogin","tbxuserid"]);
		voltmx.automation.textbox.enterText(["frmLogin","tbxuserid"],"mallesham.katnam@hcl.com");
		voltmx.automation.textbox.enterText(["frmLogin","tbxpassword"],"Texas@2021");
		voltmx.automation.button.click(["frmLogin","btnLOGIN"]);
		await voltmx.automation.playback.waitFor(["frmList","employeeSegment"]);
		voltmx.automation.segmentedui.click(["frmList","employeeSegment[0,0]"]);
		await voltmx.automation.playback.waitFor(["frmDetails","headerBackButton"]);
		voltmx.automation.button.click(["frmDetails","headerBackButton"]);
		await voltmx.automation.playback.waitFor(["frmList","headerLogoutButton"]);
		voltmx.automation.button.click(["frmList","headerLogoutButton"]);
	});
});