function AS_Segment_c98958f005794c39b587f2a3aa73922d(eventobject, sectionNumber, rowNumber) {
    var self = this;
    selectedEmployeeId = this.view.employeeSegment.selectedRowItems[0].employeeId.text;
    var ntf = new kony.mvc.Navigation("frmDetails");
    ntf.navigate();
}