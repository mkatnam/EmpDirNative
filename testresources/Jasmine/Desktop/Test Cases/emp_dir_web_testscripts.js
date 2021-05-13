it("emp_dir_web_testscripts", async function() {
	kony.automation.button.click(["frmLogin","btnLOGIN"]);
	kony.automation.textbox.enterText(["frmLogin","tbxuserid"],"mallesham.katnam@hcl.com");
	kony.automation.button.click(["frmLogin","btnLOGIN"]);
	kony.automation.textbox.enterText(["frmLogin","tbxpassword"],"Texas@2021");
	kony.automation.button.click(["frmLogin","btnLOGIN"]);
	await kony.automation.playback.waitFor(["frmList","employeeSegment"]);
	kony.automation.flexcontainer.click(["frmList","employeeSegment[0]","FBox0f8ef70119cb149"]);
	await kony.automation.playback.waitFor(["frmDetails","headerBackButton"]);
	kony.automation.button.click(["frmDetails","headerBackButton"]);
	await kony.automation.playback.waitFor(["frmList","employeeSegment"]);
	kony.automation.flexcontainer.click(["frmList","employeeSegment[0]","FBox0f8ef70119cb149"]);
	await kony.automation.playback.waitFor(["frmDetails","headerLogoutButton"]);
	kony.automation.button.click(["frmDetails","headerLogoutButton"]);
});