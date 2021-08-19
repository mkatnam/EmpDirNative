describe("iris_sample", function() {
	it("iris_sample", async function() {
		await voltmx.automation.playback.waitFor(["frmHome2","btnClick"]);
		voltmx.automation.button.click(["frmHome2","btnClick"]);
	});
});