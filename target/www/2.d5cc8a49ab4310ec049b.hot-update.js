webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/entities/comuna/comuna-dialog.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<form name=\\\"editForm\\\" role=\\\"form\\\" novalidate (ngSubmit)=\\\"save()\\\" #editForm=\\\"ngForm\\\"> <div class=\\\"modal-header\\\"> <h4 class=\\\"modal-title\\\" id=\\\"myComunaLabel\\\" jhiTranslate=\\\"sisasApp.comuna.home.createOrEditLabel\\\">Create or edit a Comuna</h4> <button type=\\\"button\\\" class=\\\"close\\\" data-dismiss=\\\"modal\\\" aria-hidden=\\\"true\\\" (click)=\\\"clear()\\\">&times;</button> </div> <div class=\\\"modal-body\\\"> <jhi-alert-error></jhi-alert-error> <div class=\\\"form-group\\\" [hidden]=\\\"!comuna.id\\\"> <label for=\\\"id\\\" jhiTranslate=\\\"global.field.id\\\">ID</label> <input type=\\\"text\\\" class=\\\"form-control\\\" id=\\\"id\\\" name=\\\"id\\\" [(ngModel)]=\\\"comuna.id\\\" readonly=\\\"readonly\\\"/> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" jhiTranslate=\\\"sisasApp.comuna.nmComuna\\\" for=\\\"field_nmComuna\\\">Nome Comuna</label> <input type=\\\"text\\\" class=\\\"form-control\\\" name=\\\"nmComuna\\\" id=\\\"field_nmComuna\\\" [(ngModel)]=\\\"comuna.nmComuna\\\" required maxlength=\\\"40\\\"/> <div [hidden]=\\\"!(editForm.controls.nmComuna?.dirty && editForm.controls.nmComuna?.invalid)\\\"> <small class=\\\"form-text text-danger\\\" [hidden]=\\\"!editForm.controls.nmComuna?.errors?.required\\\" jhiTranslate=\\\"entity.validation.required\\\"> This field is required. </small> <small class=\\\"form-text text-danger\\\" [hidden]=\\\"!editForm.controls.nmComuna?.errors?.maxlength\\\" jhiTranslate=\\\"entity.validation.maxlength\\\" translateValues=\\\"{ max: 40 }\\\"> This field cannot be longer than 40 characters. </small> </div> </div> <div class=\\\"form-group\\\"> <label class=\\\"form-control-label\\\" jhiTranslate=\\\"sisasApp.comuna.idMunicipio\\\" for=\\\"field_idMunicipio\\\">Municipio</label> <select class=\\\"form-control\\\" id=\\\"field_idMunicipio\\\" name=\\\"idMunicipio\\\" [(ngModel)]=\\\"comuna.municipio\\\" required> <option *ngIf=\\\"!editForm.value.idMunicipio\\\" [ngValue]=\\\"null\\\" selected=\\\"selected\\\"></option> <option [ngValue]=\\\"municipioOption\\\" *ngFor=\\\"let municipioOption of municipios; trackBy: trackMunicipioById\\\">{{municipioOption.nmMunicipio}}</option> </select> </div> <div [hidden]=\\\"!(editForm.controls.idMunicipio?.dirty && editForm.controls.idMunicipio?.invalid)\\\"> <small class=\\\"form-text text-danger\\\" [hidden]=\\\"!editForm.controls.idMunicipio?.errors?.required\\\" jhiTranslate=\\\"entity.validation.required\\\"> This field is required. </small> </div> </div> <div class=\\\"modal-footer\\\"> <button type=\\\"button\\\" class=\\\"btn btn-secondary\\\" data-dismiss=\\\"modal\\\" (click)=\\\"clear()\\\"> <span class=\\\"fa fa-ban\\\"></span>&nbsp;<span jhiTranslate=\\\"entity.action.cancel\\\">Cancel</span> </button> <button type=\\\"submit\\\" [disabled]=\\\"editForm.form.invalid || isSaving\\\" class=\\\"btn btn-primary\\\"> <span class=\\\"fa fa-save\\\"></span>&nbsp;<span jhiTranslate=\\\"entity.action.save\\\">Save</span> </button> </div> </form> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2NvbXVuYS9jb211bmEtZGlhbG9nLmNvbXBvbmVudC5odG1sPzE5ZGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK1hBQStYLGtoQ0FBa2hDLFVBQVUsNmdCQUE2Z0IsaUNBQWlDLDZCQUE2QixxZUFBcWUsZ05BQWdOIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9jb211bmEvY29tdW5hLWRpYWxvZy5jb21wb25lbnQuaHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8Zm9ybSBuYW1lPVxcXCJlZGl0Rm9ybVxcXCIgcm9sZT1cXFwiZm9ybVxcXCIgbm92YWxpZGF0ZSAobmdTdWJtaXQpPVxcXCJzYXZlKClcXFwiICNlZGl0Rm9ybT1cXFwibmdGb3JtXFxcIj4gPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj4gPGg0IGNsYXNzPVxcXCJtb2RhbC10aXRsZVxcXCIgaWQ9XFxcIm15Q29tdW5hTGFiZWxcXFwiIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuY29tdW5hLmhvbWUuY3JlYXRlT3JFZGl0TGFiZWxcXFwiPkNyZWF0ZSBvciBlZGl0IGEgQ29tdW5hPC9oND4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJjbG9zZVxcXCIgZGF0YS1kaXNtaXNzPVxcXCJtb2RhbFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIChjbGljayk9XFxcImNsZWFyKClcXFwiPiZ0aW1lczs8L2J1dHRvbj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPiA8amhpLWFsZXJ0LWVycm9yPjwvamhpLWFsZXJ0LWVycm9yPiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIiBbaGlkZGVuXT1cXFwiIWNvbXVuYS5pZFxcXCI+IDxsYWJlbCBmb3I9XFxcImlkXFxcIiBqaGlUcmFuc2xhdGU9XFxcImdsb2JhbC5maWVsZC5pZFxcXCI+SUQ8L2xhYmVsPiA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImlkXFxcIiBuYW1lPVxcXCJpZFxcXCIgWyhuZ01vZGVsKV09XFxcImNvbXVuYS5pZFxcXCIgcmVhZG9ubHk9XFxcInJlYWRvbmx5XFxcIi8+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4gPGxhYmVsIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wtbGFiZWxcXFwiIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuY29tdW5hLm5tQ29tdW5hXFxcIiBmb3I9XFxcImZpZWxkX25tQ29tdW5hXFxcIj5Ob21lIENvbXVuYTwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBuYW1lPVxcXCJubUNvbXVuYVxcXCIgaWQ9XFxcImZpZWxkX25tQ29tdW5hXFxcIiBbKG5nTW9kZWwpXT1cXFwiY29tdW5hLm5tQ29tdW5hXFxcIiByZXF1aXJlZCBtYXhsZW5ndGg9XFxcIjQwXFxcIi8+IDxkaXYgW2hpZGRlbl09XFxcIiEoZWRpdEZvcm0uY29udHJvbHMubm1Db211bmE/LmRpcnR5ICYmIGVkaXRGb3JtLmNvbnRyb2xzLm5tQ29tdW5hPy5pbnZhbGlkKVxcXCI+IDxzbWFsbCBjbGFzcz1cXFwiZm9ybS10ZXh0IHRleHQtZGFuZ2VyXFxcIiBbaGlkZGVuXT1cXFwiIWVkaXRGb3JtLmNvbnRyb2xzLm5tQ29tdW5hPy5lcnJvcnM/LnJlcXVpcmVkXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS52YWxpZGF0aW9uLnJlcXVpcmVkXFxcIj4gVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4gPC9zbWFsbD4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiIFtoaWRkZW5dPVxcXCIhZWRpdEZvcm0uY29udHJvbHMubm1Db211bmE/LmVycm9ycz8ubWF4bGVuZ3RoXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS52YWxpZGF0aW9uLm1heGxlbmd0aFxcXCIgdHJhbnNsYXRlVmFsdWVzPVxcXCJ7IG1heDogNDAgfVxcXCI+IFRoaXMgZmllbGQgY2Fubm90IGJlIGxvbmdlciB0aGFuIDQwIGNoYXJhY3RlcnMuIDwvc21hbGw+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+IDxsYWJlbCBjbGFzcz1cXFwiZm9ybS1jb250cm9sLWxhYmVsXFxcIiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLmNvbXVuYS5pZE11bmljaXBpb1xcXCIgZm9yPVxcXCJmaWVsZF9pZE11bmljaXBpb1xcXCI+TXVuaWNpcGlvPC9sYWJlbD4gPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZmllbGRfaWRNdW5pY2lwaW9cXFwiIG5hbWU9XFxcImlkTXVuaWNpcGlvXFxcIiBbKG5nTW9kZWwpXT1cXFwiY29tdW5hLm11bmljaXBpb1xcXCIgcmVxdWlyZWQ+IDxvcHRpb24gKm5nSWY9XFxcIiFlZGl0Rm9ybS52YWx1ZS5pZE11bmljaXBpb1xcXCIgW25nVmFsdWVdPVxcXCJudWxsXFxcIiBzZWxlY3RlZD1cXFwic2VsZWN0ZWRcXFwiPjwvb3B0aW9uPiA8b3B0aW9uIFtuZ1ZhbHVlXT1cXFwibXVuaWNpcGlvT3B0aW9uXFxcIiAqbmdGb3I9XFxcImxldCBtdW5pY2lwaW9PcHRpb24gb2YgbXVuaWNpcGlvczsgdHJhY2tCeTogdHJhY2tNdW5pY2lwaW9CeUlkXFxcIj57e211bmljaXBpb09wdGlvbi5ubU11bmljaXBpb319PC9vcHRpb24+IDwvc2VsZWN0PiA8L2Rpdj4gPGRpdiBbaGlkZGVuXT1cXFwiIShlZGl0Rm9ybS5jb250cm9scy5pZE11bmljaXBpbz8uZGlydHkgJiYgZWRpdEZvcm0uY29udHJvbHMuaWRNdW5pY2lwaW8/LmludmFsaWQpXFxcIj4gPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1kYW5nZXJcXFwiIFtoaWRkZW5dPVxcXCIhZWRpdEZvcm0uY29udHJvbHMuaWRNdW5pY2lwaW8/LmVycm9ycz8ucmVxdWlyZWRcXFwiIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LnZhbGlkYXRpb24ucmVxdWlyZWRcXFwiPiBUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLiA8L3NtYWxsPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcIm1vZGFsLWZvb3RlclxcXCI+IDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zZWNvbmRhcnlcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIChjbGljayk9XFxcImNsZWFyKClcXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtYmFuXFxcIj48L3NwYW4+Jm5ic3A7PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkuYWN0aW9uLmNhbmNlbFxcXCI+Q2FuY2VsPC9zcGFuPiA8L2J1dHRvbj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtkaXNhYmxlZF09XFxcImVkaXRGb3JtLmZvcm0uaW52YWxpZCB8fCBpc1NhdmluZ1xcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zYXZlXFxcIj48L3NwYW4+Jm5ic3A7PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkuYWN0aW9uLnNhdmVcXFwiPlNhdmU8L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gPC9mb3JtPiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvY29tdW5hL2NvbXVuYS1kaWFsb2cuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9jb211bmEvY29tdW5hLWRpYWxvZy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/comuna/comuna-dialog.component.html\n");

/***/ })

})