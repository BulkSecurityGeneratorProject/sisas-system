webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/entities/situacao/situacao-delete-dialog.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<form name=\\\"deleteForm\\\" (ngSubmit)=\\\"confirmDelete(situacao.id)\\\"> <div class=\\\"modal-header\\\"> <h4 class=\\\"modal-title\\\" jhiTranslate=\\\"entity.delete.title\\\">Confirm delete operation</h4> <button type=\\\"button\\\" class=\\\"close\\\" data-dismiss=\\\"modal\\\" aria-hidden=\\\"true\\\" (click)=\\\"clear()\\\">&times;</button> </div> <div class=\\\"modal-body\\\"> <jhi-alert-error></jhi-alert-error> <p jhiTranslate=\\\"sisasApp.situacao.delete.question\\\" translateValues=\\\"{id: '{{situacao.nmSituacao}}'}\\\">Are you sure you want to delete this Situacao?</p> </div> <div class=\\\"modal-footer\\\"> <button type=\\\"button\\\" class=\\\"btn btn-secondary\\\" data-dismiss=\\\"modal\\\" (click)=\\\"clear()\\\"> <span class=\\\"fa fa-ban\\\"></span>&nbsp;<span jhiTranslate=\\\"entity.action.cancel\\\">Cancel</span> </button> <button type=\\\"submit\\\" class=\\\"btn btn-danger\\\"> <span class=\\\"fa fa-remove\\\"></span>&nbsp;<span jhiTranslate=\\\"entity.action.delete\\\">Delete</span> </button> </div> </form> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3NpdHVhY2FvL3NpdHVhY2FvLWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50Lmh0bWw/ZjFkZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnVUFBZ1UseUpBQXlKLE9BQU8scUJBQXFCLEVBQUUsaU9BQWlPLGdLQUFnSyIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvc2l0dWFjYW8vc2l0dWFjYW8tZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuaHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBuYW1lPVxcXCJkZWxldGVGb3JtXFxcIiAobmdTdWJtaXQpPVxcXCJjb25maXJtRGVsZXRlKHNpdHVhY2FvLmlkKVxcXCI+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+IDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LmRlbGV0ZS50aXRsZVxcXCI+Q29uZmlybSBkZWxldGUgb3BlcmF0aW9uPC9oND4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIChjbGljayk9XFxcImNsZWFyKClcXFwiPiZ0aW1lczs8L2J1dHRvbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPiA8amhpLWFsZXJ0LWVycm9yPjwvamhpLWFsZXJ0LWVycm9yPiA8cCBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpdHVhY2FvLmRlbGV0ZS5xdWVzdGlvblxcXCIgdHJhbnNsYXRlVmFsdWVzPVxcXCJ7aWQ6ICd7e3NpdHVhY2FvLm5tU2l0dWFjYW99fSd9XFxcIj5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgU2l0dWFjYW8/PC9wPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNlY29uZGFyeVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgKGNsaWNrKT1cXFwiY2xlYXIoKVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1iYW5cXFwiPjwvc3Bhbj4mbmJzcDs8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24uY2FuY2VsXFxcIj5DYW5jZWw8L3NwYW4+IDwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXJlbW92ZVxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LmFjdGlvbi5kZWxldGVcXFwiPkRlbGV0ZTwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiA8L2Zvcm0+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9zaXR1YWNhby9zaXR1YWNhby1kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvc2l0dWFjYW8vc2l0dWFjYW8tZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/situacao/situacao-delete-dialog.component.html\n");

/***/ })

})