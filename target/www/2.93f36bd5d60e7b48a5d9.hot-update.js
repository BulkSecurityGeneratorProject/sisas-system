webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/entities/municipio/municipio-detail.component.html":
/***/ (function(module, exports) {

eval("module.exports = \" <div *ngIf=\\\"municipio\\\"> <h2><span jhiTranslate=\\\"sisasApp.municipio.detail.title\\\">Municipio</span> {{municipio.id}}</h2> <hr> <jhi-alert-error></jhi-alert-error> <dl class=\\\"row-md jh-entity-details\\\"> <dt><span jhiTranslate=\\\"sisasApp.municipio.idMunicipio\\\">Id Municipio</span></dt> <dd> <span>{{municipio.idMunicipio}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.municipio.nmMunicipio\\\">Nm Municipio</span></dt> <dd> <span>{{municipio.nmMunicipio}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.municipio.idProvincia\\\">Id Provincia</span></dt> <dd> <div *ngIf=\\\"municipio.provincia\\\"> <a [routerLink]=\\\"['/provincia', municipio.provincia.id]\\\">{{municipio.provincia.nmProvincia}}</a> </div> </dd> </dl> <button type=\\\"submit\\\" (click)=\\\"previousState()\\\" class=\\\"btn btn-info\\\"> <span class=\\\"fa fa-arrow-left\\\"></span>&nbsp;<span jhiTranslate=\\\"entity.action.back\\\"> Back</span> </button> <button type=\\\"button\\\" [routerLink]=\\\"['/', { outlets: { popup: 'municipio/'+ municipio.id + '/edit'} }]\\\" replaceUrl=\\\"true\\\" queryParamsHandling=\\\"merge\\\" class=\\\"btn btn-primary\\\"> <span class=\\\"fa fa-pencil\\\"></span>&nbsp;<span jhiTranslate=\\\"entity.action.edit\\\"> Edit</span> </button> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL211bmljaXBpby9tdW5pY2lwaW8tZGV0YWlsLmNvbXBvbmVudC5odG1sPzE1NDMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkhBQTJILGNBQWMsdUxBQXVMLHVCQUF1Qiw4R0FBOEcsdUJBQXVCLHVNQUF1TSxpQ0FBaUMsa0pBQWtKLCtHQUErRyxXQUFXLDZDQUE2QyxFQUFFLDJIQUEySCIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvbXVuaWNpcGlvL211bmljaXBpby1kZXRhaWwuY29tcG9uZW50Lmh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiIDxkaXYgKm5nSWY9XFxcIm11bmljaXBpb1xcXCI+IDxoMj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLm11bmljaXBpby5kZXRhaWwudGl0bGVcXFwiPk11bmljaXBpbzwvc3Bhbj4ge3ttdW5pY2lwaW8uaWR9fTwvaDI+IDxocj4gPGpoaS1hbGVydC1lcnJvcj48L2poaS1hbGVydC1lcnJvcj4gPGRsIGNsYXNzPVxcXCJyb3ctbWQgamgtZW50aXR5LWRldGFpbHNcXFwiPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5tdW5pY2lwaW8uaWRNdW5pY2lwaW9cXFwiPklkIE11bmljaXBpbzwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7bXVuaWNpcGlvLmlkTXVuaWNpcGlvfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLm11bmljaXBpby5ubU11bmljaXBpb1xcXCI+Tm0gTXVuaWNpcGlvPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3ttdW5pY2lwaW8ubm1NdW5pY2lwaW99fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAubXVuaWNpcGlvLmlkUHJvdmluY2lhXFxcIj5JZCBQcm92aW5jaWE8L3NwYW4+PC9kdD4gPGRkPiA8ZGl2ICpuZ0lmPVxcXCJtdW5pY2lwaW8ucHJvdmluY2lhXFxcIj4gPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9wcm92aW5jaWEnLCBtdW5pY2lwaW8ucHJvdmluY2lhLmlkXVxcXCI+e3ttdW5pY2lwaW8ucHJvdmluY2lhLm5tUHJvdmluY2lhfX08L2E+IDwvZGl2PiA8L2RkPiA8L2RsPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwicHJldmlvdXNTdGF0ZSgpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLWFycm93LWxlZnRcXFwiPjwvc3Bhbj4mbmJzcDs8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24uYmFja1xcXCI+IEJhY2s8L3NwYW4+IDwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6ICdtdW5pY2lwaW8vJysgbXVuaWNpcGlvLmlkICsgJy9lZGl0J30gfV1cXFwiIHJlcGxhY2VVcmw9XFxcInRydWVcXFwiIHF1ZXJ5UGFyYW1zSGFuZGxpbmc9XFxcIm1lcmdlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXBlbmNpbFxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LmFjdGlvbi5lZGl0XFxcIj4gRWRpdDwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvbXVuaWNpcGlvL211bmljaXBpby1kZXRhaWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9tdW5pY2lwaW8vbXVuaWNpcGlvLWRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/municipio/municipio-detail.component.html\n");

/***/ })

})