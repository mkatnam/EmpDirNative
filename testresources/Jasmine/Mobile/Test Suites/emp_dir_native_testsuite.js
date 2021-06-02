describe("emp_dir_native_testsuite", function() {
	it("emp_dir_native_testscripts", async function() {
		await kony.automation.playback.waitFor(["frmLogin","tbxuserid"]);
		kony.automation.textbox.enterText(["frmLogin","tbxuserid"],"mallesham.katnam@hcl.com");
		kony.automation.textbox.enterText(["frmLogin","tbxpassword"],"Texas@2021");
		kony.automation.button.click(["frmLogin","btnLOGIN"]);
	});
});