describe("emp_dir_tab_testsuite", function() {
	it("tab_test_cases", async function() {
		await kony.automation.playback.waitFor(["frmLogin","tbxuserid"]);
		kony.automation.textbox.enterText(["frmLogin","tbxuserid"],"mallesham.katnam@hcl.com");
		kony.automation.textbox.enterText(["frmLogin","tbxpassword"],"Texas@2021");
		kony.automation.button.click(["frmLogin","btnLOGIN"]);
		await kony.automation.playback.waitFor(["frmList","employeeSegment"]);
		kony.automation.segmentedui.click(["frmList","employeeSegment[0,0]"]);
		await kony.automation.playback.waitFor(["frmDetails","headerBackButton"]);
		kony.automation.button.click(["frmDetails","headerBackButton"]);
		await kony.automation.playback.waitFor(["frmList","headerLogoutButton"]);
		kony.automation.button.click(["frmList","headerLogoutButton"]);
	});
});