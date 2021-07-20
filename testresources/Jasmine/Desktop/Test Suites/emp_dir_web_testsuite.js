describe("emp_dir_web_testsuite", function() {
	it("emp_dir_web_testscripts", async function() {
		await kony.automation.playback.waitFor(["frmLogin","tbxuserid"]);
		kony.automation.textbox.enterText(["frmLogin","tbxuserid"],"mallesham.katnam@hcl.com");
		kony.automation.textbox.enterText(["frmLogin","tbxpassword"],"Texas@2021");
		kony.automation.button.click(["frmLogin","btnLOGIN"]);
	});
});