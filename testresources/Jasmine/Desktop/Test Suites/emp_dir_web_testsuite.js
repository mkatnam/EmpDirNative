describe("emp_dir_web_testsuite", function() {
	it("emp_dir_web_testscripts", async function() {
		await voltmx.automation.playback.waitFor(["frmLogin","tbxuserid"]);
		voltmx.automation.textbox.enterText(["frmLogin","tbxuserid"],"mallesham.katnam@hcl.com");
		voltmx.automation.textbox.enterText(["frmLogin","tbxpassword"],"Texas@2021");
		voltmx.automation.button.click(["frmLogin","btnLOGIN"]);
	});
});