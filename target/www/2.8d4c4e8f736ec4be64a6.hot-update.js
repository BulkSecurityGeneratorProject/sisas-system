webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/entities/sistema-agua/sistema-agua-delete-dialog.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<form name=\\\"deleteForm\\\" (ngSubmit)=\\\"confirmDelete(sistemaAgua.id)\\\"> <div class=\\\"modal-header\\\"> <h4 class=\\\"modal-title\\\" jhiTranslate=\\\"entity.delete.title\\\">Confirm delete operation</h4> <button type=\\\"button\\\" class=\\\"close\\\" data-dismiss=\\\"modal\\\" aria-hidden=\\\"true\\\" (click)=\\\"clear()\\\">&times;</button> </div> <div class=\\\"modal-body\\\"> <jhi-alert-error></jhi-alert-error> <p jhiTranslate=\\\"sisasApp.sistemaAgua.delete.question\\\" translateValues=\\\"{id: '{{sistemaAgua.nmSistemaAgua}}'}\\\">Are you sure you want to delete this Sistema Agua?</p> </div> <div class=\\\"modal-footer\\\"> <button type=\\\"button\\\" class=\\\"btn btn-secondary\\\" data-dismiss=\\\"modal\\\" (click)=\\\"clear()\\\"> <span class=\\\"fa fa-ban\\\"></span>&nbsp;<span jhiTranslate=\\\"entity.action.cancel\\\">Cancel</span> </button> <button type=\\\"submit\\\" class=\\\"btn btn-danger\\\"> <span class=\\\"fa fa-remove\\\"></span>&nbsp;<span jhiTranslate=\\\"entity.action.delete\\\">Delete</span> </button> </div> </form> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3Npc3RlbWEtYWd1YS9zaXN0ZW1hLWFndWEtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuaHRtbD85YWQ2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1VQUFtVSw0SkFBNEosT0FBTywyQkFBMkIsRUFBRSxxT0FBcU8sZ0tBQWdLIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9zaXN0ZW1hLWFndWEvc2lzdGVtYS1hZ3VhLWRlbGV0ZS1kaWFsb2cuY29tcG9uZW50Lmh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGZvcm0gbmFtZT1cXFwiZGVsZXRlRm9ybVxcXCIgKG5nU3VibWl0KT1cXFwiY29uZmlybURlbGV0ZShzaXN0ZW1hQWd1YS5pZClcXFwiPiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1oZWFkZXJcXFwiPiA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5kZWxldGUudGl0bGVcXFwiPkNvbmZpcm0gZGVsZXRlIG9wZXJhdGlvbjwvaDQ+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiAoY2xpY2spPVxcXCJjbGVhcigpXFxcIj4mdGltZXM7PC9idXR0b24+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj4gPGpoaS1hbGVydC1lcnJvcj48L2poaS1hbGVydC1lcnJvcj4gPHAgamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5kZWxldGUucXVlc3Rpb25cXFwiIHRyYW5zbGF0ZVZhbHVlcz1cXFwie2lkOiAne3tzaXN0ZW1hQWd1YS5ubVNpc3RlbWFBZ3VhfX0nfVxcXCI+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIFNpc3RlbWEgQWd1YT88L3A+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPiA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tc2Vjb25kYXJ5XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiAoY2xpY2spPVxcXCJjbGVhcigpXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLWJhblxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LmFjdGlvbi5jYW5jZWxcXFwiPkNhbmNlbDwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtcmVtb3ZlXFxcIj48L3NwYW4+Jm5ic3A7PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkuYWN0aW9uLmRlbGV0ZVxcXCI+RGVsZXRlPC9zcGFuPiA8L2J1dHRvbj4gPC9kaXY+IDwvZm9ybT4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3Npc3RlbWEtYWd1YS9zaXN0ZW1hLWFndWEtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3Npc3RlbWEtYWd1YS9zaXN0ZW1hLWFndWEtZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/sistema-agua/sistema-agua-delete-dialog.component.html\n");

/***/ })

})