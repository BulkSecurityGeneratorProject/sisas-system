webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/entities/sistema-agua/sistema-agua.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<div> <h2> <span jhiTranslate=\\\"sisasApp.sistemaAgua.home.title\\\">Sistema Aguas</span> <button class=\\\"btn btn-primary float-right jh-create-entity create-sistema-agua\\\" [routerLink]=\\\"['/', { outlets: { popup: ['sistema-agua-new'] } }]\\\"> <span class=\\\"fa fa-plus\\\"></span> <span jhiTranslate=\\\"sisasApp.sistemaAgua.home.createLabel\\\"> Create new Sistema Agua </span> </button> </h2> <jhi-alert></jhi-alert> <div class=\\\"row\\\"> </div> <br/> <div class=\\\"table-responsive\\\" *ngIf=\\\"sistemaAguas\\\"> <table class=\\\"table table-striped\\\"> <thead> <tr jhiSort [(predicate)]=\\\"predicate\\\" [(ascending)]=\\\"reverse\\\" [callback]=\\\"transition.bind(this)\\\"> <th jhiSortBy=\\\"nmSistemaAgua\\\"><span jhiTranslate=\\\"sisasApp.sistemaAgua.nmSistemaAgua\\\">Nm Sistema Agua</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"nmFonteAgua\\\"><span jhiTranslate=\\\"sisasApp.sistemaAgua.nmFonteAgua\\\">Nm Fonte Agua</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"nmLocalidade\\\"><span jhiTranslate=\\\"sisasApp.sistemaAgua.nmLocalidade\\\">Nm Localidade</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"nmTpComunaAldeia\\\"><span jhiTranslate=\\\"sisasApp.sistemaAgua.nmTpComunaAldeia\\\">Nm Tp Comuna Aldeia</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"nmTpArea\\\"><span jhiTranslate=\\\"sisasApp.sistemaAgua.nmTpArea\\\">Nm Tp Area</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"latitude\\\"><span jhiTranslate=\\\"sisasApp.sistemaAgua.latitude\\\">Latitude</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"longitude\\\"><span jhiTranslate=\\\"sisasApp.sistemaAgua.longitude\\\">Longitude</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"altitude\\\"><span jhiTranslate=\\\"sisasApp.sistemaAgua.altitude\\\">Altitude</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"idSituacaoId\\\"><span jhiTranslate=\\\"sisasApp.sistemaAgua.idSituacao\\\">Id Situacao</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"idComunaId\\\"><span jhiTranslate=\\\"sisasApp.sistemaAgua.idComuna\\\">Id Comuna</span> <span class=\\\"fa fa-sort\\\"></span></th> <th></th> </tr> </thead> <tbody> <tr *ngFor=\\\"let sistemaAgua of sistemaAguas ;trackBy: trackId\\\"> <td>{{sistemaAgua.nmSistemaAgua}}</td> <td>{{sistemaAgua.nmFonteAgua}}</td> <td>{{sistemaAgua.nmLocalidade}}</td> <td>{{sistemaAgua.nmTpComunaAldeia}}</td> <td>{{sistemaAgua.nmTpArea}}</td> <td>{{sistemaAgua.latitude}}</td> <td>{{sistemaAgua.longitude}}</td> <td>{{sistemaAgua.altitude}}</td> <td> <div *ngIf=\\\"sistemaAgua.situacao\\\"> <a [routerLink]=\\\"['../situacao', sistemaAgua.situacao  ]\\\">{{sistemaAgua.situacao.nmSituacao}}</a> </div> </td> <td> <div *ngIf=\\\"sistemaAgua.comuna\\\"> <a [routerLink]=\\\"['../comuna', sistemaAgua.comuna  ]\\\">{{sistemaAgua.comuna.nmComuna}}</a> </div> </td> <td class=\\\"text-right\\\"> <div class=\\\"btn-group flex-btn-group-container\\\"> <button type=\\\"submit\\\" [routerLink]=\\\"['../sistema-agua', sistemaAgua.id ]\\\" class=\\\"btn btn-info btn-sm\\\"> <span class=\\\"fa fa-eye\\\"></span> <span class=\\\"d-none d-md-inline\\\" jhiTranslate=\\\"entity.action.view\\\">View</span> </button> <button type=\\\"submit\\\" [routerLink]=\\\"['/', { outlets: { popup: 'sistema-agua/'+ sistemaAgua.id + '/edit'} }]\\\" replaceUrl=\\\"true\\\" queryParamsHandling=\\\"merge\\\" class=\\\"btn btn-primary btn-sm\\\"> <span class=\\\"fa fa-pencil\\\"></span> <span class=\\\"d-none d-md-inline\\\" jhiTranslate=\\\"entity.action.edit\\\">Edit</span> </button> <button type=\\\"submit\\\" [routerLink]=\\\"['/', { outlets: { popup: 'sistema-agua/'+ sistemaAgua.id + '/delete'} }]\\\" replaceUrl=\\\"true\\\" queryParamsHandling=\\\"merge\\\" class=\\\"btn btn-danger btn-sm\\\"> <span class=\\\"fa fa-remove\\\"></span> <span class=\\\"d-none d-md-inline\\\" jhiTranslate=\\\"entity.action.delete\\\">Delete</span> </button> </div> </td> </tr> </tbody> </table> </div> <div *ngIf=\\\"sistemaAguas && sistemaAguas.length\\\"> <div class=\\\"row justify-content-center\\\"> <jhi-item-count [page]=\\\"page\\\" [total]=\\\"queryCount\\\" [maxSize]=\\\"5\\\" [itemsPerPage]=\\\"itemsPerPage\\\"></jhi-item-count> </div> <div class=\\\"row justify-content-center\\\"> <ngb-pagination [collectionSize]=\\\"totalItems\\\" [(page)]=\\\"page\\\" [pageSize]=\\\"itemsPerPage\\\" [maxSize]=\\\"5\\\" [rotate]=\\\"true\\\" [boundaryLinks]=\\\"true\\\" (pageChange)=\\\"loadPage(page)\\\"></ngb-pagination> </div> </div> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3Npc3RlbWEtYWd1YS9zaXN0ZW1hLWFndWEuY29tcG9uZW50Lmh0bWw/Njg0NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrTkFBa04sV0FBVyw4QkFBOEIsRUFBRSxpNURBQWk1RCwwQkFBMEIsMkJBQTJCLFlBQVkseUJBQXlCLFlBQVksMEJBQTBCLFlBQVksOEJBQThCLFlBQVksc0JBQXNCLFlBQVksc0JBQXNCLFlBQVksdUJBQXVCLFlBQVksc0JBQXNCLDhHQUE4RyxpQ0FBaUMsb0hBQW9ILDZCQUE2Qix5WEFBeVgsV0FBVyxrREFBa0QsRUFBRSx3UUFBd1EsV0FBVyxvREFBb0QsRUFBRSIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvc2lzdGVtYS1hZ3VhL3Npc3RlbWEtYWd1YS5jb21wb25lbnQuaHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8aDI+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuc2lzdGVtYUFndWEuaG9tZS50aXRsZVxcXCI+U2lzdGVtYSBBZ3Vhczwvc3Bhbj4gPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGZsb2F0LXJpZ2h0IGpoLWNyZWF0ZS1lbnRpdHkgY3JlYXRlLXNpc3RlbWEtYWd1YVxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6IFsnc2lzdGVtYS1hZ3VhLW5ldyddIH0gfV1cXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtcGx1c1xcXCI+PC9zcGFuPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhLmhvbWUuY3JlYXRlTGFiZWxcXFwiPiBDcmVhdGUgbmV3IFNpc3RlbWEgQWd1YSA8L3NwYW4+IDwvYnV0dG9uPiA8L2gyPiA8amhpLWFsZXJ0PjwvamhpLWFsZXJ0PiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8L2Rpdj4gPGJyLz4gPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCIgKm5nSWY9XFxcInNpc3RlbWFBZ3Vhc1xcXCI+IDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+IDx0aGVhZD4gPHRyIGpoaVNvcnQgWyhwcmVkaWNhdGUpXT1cXFwicHJlZGljYXRlXFxcIiBbKGFzY2VuZGluZyldPVxcXCJyZXZlcnNlXFxcIiBbY2FsbGJhY2tdPVxcXCJ0cmFuc2l0aW9uLmJpbmQodGhpcylcXFwiPiA8dGggamhpU29ydEJ5PVxcXCJubVNpc3RlbWFBZ3VhXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhLm5tU2lzdGVtYUFndWFcXFwiPk5tIFNpc3RlbWEgQWd1YTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJubUZvbnRlQWd1YVxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5ubUZvbnRlQWd1YVxcXCI+Tm0gRm9udGUgQWd1YTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJubUxvY2FsaWRhZGVcXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuc2lzdGVtYUFndWEubm1Mb2NhbGlkYWRlXFxcIj5ObSBMb2NhbGlkYWRlPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc29ydFxcXCI+PC9zcGFuPjwvdGg+IDx0aCBqaGlTb3J0Qnk9XFxcIm5tVHBDb211bmFBbGRlaWFcXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuc2lzdGVtYUFndWEubm1UcENvbXVuYUFsZGVpYVxcXCI+Tm0gVHAgQ29tdW5hIEFsZGVpYTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJubVRwQXJlYVxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5ubVRwQXJlYVxcXCI+Tm0gVHAgQXJlYTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJsYXRpdHVkZVxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5sYXRpdHVkZVxcXCI+TGF0aXR1ZGU8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zb3J0XFxcIj48L3NwYW4+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwibG9uZ2l0dWRlXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhLmxvbmdpdHVkZVxcXCI+TG9uZ2l0dWRlPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc29ydFxcXCI+PC9zcGFuPjwvdGg+IDx0aCBqaGlTb3J0Qnk9XFxcImFsdGl0dWRlXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhLmFsdGl0dWRlXFxcIj5BbHRpdHVkZTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJpZFNpdHVhY2FvSWRcXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuc2lzdGVtYUFndWEuaWRTaXR1YWNhb1xcXCI+SWQgU2l0dWFjYW88L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zb3J0XFxcIj48L3NwYW4+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwiaWRDb211bmFJZFxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5pZENvbXVuYVxcXCI+SWQgQ29tdW5hPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc29ydFxcXCI+PC9zcGFuPjwvdGg+IDx0aD48L3RoPiA8L3RyPiA8L3RoZWFkPiA8dGJvZHk+IDx0ciAqbmdGb3I9XFxcImxldCBzaXN0ZW1hQWd1YSBvZiBzaXN0ZW1hQWd1YXMgO3RyYWNrQnk6IHRyYWNrSWRcXFwiPiA8dGQ+e3tzaXN0ZW1hQWd1YS5ubVNpc3RlbWFBZ3VhfX08L3RkPiA8dGQ+e3tzaXN0ZW1hQWd1YS5ubUZvbnRlQWd1YX19PC90ZD4gPHRkPnt7c2lzdGVtYUFndWEubm1Mb2NhbGlkYWRlfX08L3RkPiA8dGQ+e3tzaXN0ZW1hQWd1YS5ubVRwQ29tdW5hQWxkZWlhfX08L3RkPiA8dGQ+e3tzaXN0ZW1hQWd1YS5ubVRwQXJlYX19PC90ZD4gPHRkPnt7c2lzdGVtYUFndWEubGF0aXR1ZGV9fTwvdGQ+IDx0ZD57e3Npc3RlbWFBZ3VhLmxvbmdpdHVkZX19PC90ZD4gPHRkPnt7c2lzdGVtYUFndWEuYWx0aXR1ZGV9fTwvdGQ+IDx0ZD4gPGRpdiAqbmdJZj1cXFwic2lzdGVtYUFndWEuc2l0dWFjYW9cXFwiPiA8YSBbcm91dGVyTGlua109XFxcIlsnLi4vc2l0dWFjYW8nLCBzaXN0ZW1hQWd1YS5zaXR1YWNhbyAgXVxcXCI+e3tzaXN0ZW1hQWd1YS5zaXR1YWNhby5ubVNpdHVhY2FvfX08L2E+IDwvZGl2PiA8L3RkPiA8dGQ+IDxkaXYgKm5nSWY9XFxcInNpc3RlbWFBZ3VhLmNvbXVuYVxcXCI+IDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycuLi9jb211bmEnLCBzaXN0ZW1hQWd1YS5jb211bmEgIF1cXFwiPnt7c2lzdGVtYUFndWEuY29tdW5hLm5tQ29tdW5hfX08L2E+IDwvZGl2PiA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXAgZmxleC1idG4tZ3JvdXAtY29udGFpbmVyXFxcIj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycuLi9zaXN0ZW1hLWFndWEnLCBzaXN0ZW1hQWd1YS5pZCBdXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvIGJ0bi1zbVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1leWVcXFwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImQtbm9uZSBkLW1kLWlubGluZVxcXCIgamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkuYWN0aW9uLnZpZXdcXFwiPlZpZXc8L3NwYW4+IDwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6ICdzaXN0ZW1hLWFndWEvJysgc2lzdGVtYUFndWEuaWQgKyAnL2VkaXQnfSB9XVxcXCIgcmVwbGFjZVVybD1cXFwidHJ1ZVxcXCIgcXVlcnlQYXJhbXNIYW5kbGluZz1cXFwibWVyZ2VcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgYnRuLXNtXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXBlbmNpbFxcXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZC1ub25lIGQtbWQtaW5saW5lXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24uZWRpdFxcXCI+RWRpdDwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbcm91dGVyTGlua109XFxcIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogJ3Npc3RlbWEtYWd1YS8nKyBzaXN0ZW1hQWd1YS5pZCArICcvZGVsZXRlJ30gfV1cXFwiIHJlcGxhY2VVcmw9XFxcInRydWVcXFwiIHF1ZXJ5UGFyYW1zSGFuZGxpbmc9XFxcIm1lcmdlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXJlbW92ZVxcXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZC1ub25lIGQtbWQtaW5saW5lXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24uZGVsZXRlXFxcIj5EZWxldGU8L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gPC90ZD4gPC90cj4gPC90Ym9keT4gPC90YWJsZT4gPC9kaXY+IDxkaXYgKm5nSWY9XFxcInNpc3RlbWFBZ3VhcyAmJiBzaXN0ZW1hQWd1YXMubGVuZ3RoXFxcIj4gPGRpdiBjbGFzcz1cXFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcXFwiPiA8amhpLWl0ZW0tY291bnQgW3BhZ2VdPVxcXCJwYWdlXFxcIiBbdG90YWxdPVxcXCJxdWVyeUNvdW50XFxcIiBbbWF4U2l6ZV09XFxcIjVcXFwiIFtpdGVtc1BlclBhZ2VdPVxcXCJpdGVtc1BlclBhZ2VcXFwiPjwvamhpLWl0ZW0tY291bnQ+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclxcXCI+IDxuZ2ItcGFnaW5hdGlvbiBbY29sbGVjdGlvblNpemVdPVxcXCJ0b3RhbEl0ZW1zXFxcIiBbKHBhZ2UpXT1cXFwicGFnZVxcXCIgW3BhZ2VTaXplXT1cXFwiaXRlbXNQZXJQYWdlXFxcIiBbbWF4U2l6ZV09XFxcIjVcXFwiIFtyb3RhdGVdPVxcXCJ0cnVlXFxcIiBbYm91bmRhcnlMaW5rc109XFxcInRydWVcXFwiIChwYWdlQ2hhbmdlKT1cXFwibG9hZFBhZ2UocGFnZSlcXFwiPjwvbmdiLXBhZ2luYXRpb24+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IFwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9zaXN0ZW1hLWFndWEvc2lzdGVtYS1hZ3VhLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvc2lzdGVtYS1hZ3VhL3Npc3RlbWEtYWd1YS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/sistema-agua/sistema-agua.component.html\n");

/***/ })

})