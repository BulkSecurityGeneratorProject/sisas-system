webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/entities/sistema-agua/sistema-agua.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<div> <h2> <span jhiTranslate=\\\"sisasApp.sistemaAgua.home.title\\\">Sistema Aguas</span> <button class=\\\"btn btn-primary float-right jh-create-entity redondo\\\" [routerLink]=\\\"['/', { outlets: { popup: ['sistema-agua-new'] } }]\\\"> <span class=\\\"fa fa-plus\\\"></span> </button> </h2> <jhi-alert></jhi-alert> <div class=\\\"row\\\"> </div> <br/> <div class=\\\"table-responsive\\\" *ngIf=\\\"sistemaAguas\\\"> <table class=\\\"table table-striped\\\"> <thead> <tr jhiSort [(predicate)]=\\\"predicate\\\" [(ascending)]=\\\"reverse\\\" [callback]=\\\"transition.bind(this)\\\"> <th jhiSortBy=\\\"nmSistemaAgua\\\"><span jhiTranslate=\\\"sisasApp.sistemaAgua.nmSistemaAgua\\\">Nm Sistema Agua</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"nmFonteAgua\\\"><span jhiTranslate=\\\"sisasApp.sistemaAgua.nmFonteAgua\\\">Nm Fonte Agua</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"nmLocalidade\\\"><span jhiTranslate=\\\"sisasApp.sistemaAgua.nmLocalidade\\\">Nm Localidade</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"nmTpArea\\\"><span jhiTranslate=\\\"sisasApp.sistemaAgua.nmTpArea\\\">Nm Tp Area</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"latitude\\\"><span jhiTranslate=\\\"sisasApp.sistemaAgua.latitude\\\">Latitude</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"longitude\\\"><span jhiTranslate=\\\"sisasApp.sistemaAgua.longitude\\\">Longitude</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"altitude\\\"><span jhiTranslate=\\\"sisasApp.sistemaAgua.altitude\\\">Altitude</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"idSituacaoId\\\"><span jhiTranslate=\\\"sisasApp.sistemaAgua.idSituacao\\\">Id Situacao</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"idComunaId\\\"><span jhiTranslate=\\\"sisasApp.sistemaAgua.idComuna\\\">Id Comuna</span> <span class=\\\"fa fa-sort\\\"></span></th> <th></th> </tr> </thead> <tbody> <tr *ngFor=\\\"let sistemaAgua of sistemaAguas ;trackBy: trackId\\\"> <td>{{sistemaAgua.nmSistemaAgua}}</td> <td>{{sistemaAgua.nmFonteAgua}}</td> <td>{{sistemaAgua.nmLocalidade}}</td> <td>{{sistemaAgua.nmTpArea}}</td> <td>{{sistemaAgua.latitude}}</td> <td>{{sistemaAgua.longitude}}</td> <td>{{sistemaAgua.altitude}}</td> <td> <div *ngIf=\\\"sistemaAgua.situacao\\\"> <a [routerLink]=\\\"['../situacao', sistemaAgua.situacao  ]\\\">{{sistemaAgua.situacao.nmSituacao}}</a> </div> </td> <td> <div *ngIf=\\\"sistemaAgua.comuna\\\"> <a [routerLink]=\\\"['../comuna', sistemaAgua.comuna  ]\\\">{{sistemaAgua.comuna.nmComuna}}</a> </div> </td> <td class=\\\"text-right\\\"> <div class=\\\"btn-group flex-btn-group-container\\\"> <button type=\\\"submit\\\" [routerLink]=\\\"['../sistema-agua', sistemaAgua.id ]\\\" class=\\\"btn btn-info btn-sm\\\"> <span class=\\\"fa fa-eye\\\"></span> </button> <button type=\\\"submit\\\" [routerLink]=\\\"['/', { outlets: { popup: 'sistema-agua/'+ sistemaAgua.id + '/edit'} }]\\\" replaceUrl=\\\"true\\\" queryParamsHandling=\\\"merge\\\" class=\\\"btn btn-primary btn-sm\\\"> <span class=\\\"fa fa-pencil\\\"></span> </button> <button type=\\\"submit\\\" [routerLink]=\\\"['/', { outlets: { popup: 'sistema-agua/'+ sistemaAgua.id + '/delete'} }]\\\" replaceUrl=\\\"true\\\" queryParamsHandling=\\\"merge\\\" class=\\\"btn btn-danger btn-sm\\\"> <span class=\\\"fa fa-remove\\\"></span> </button> </div> </td> </tr> </tbody> </table> </div> <div *ngIf=\\\"sistemaAguas && sistemaAguas.length\\\"> <div class=\\\"row justify-content-center\\\"> <jhi-item-count [page]=\\\"page\\\" [total]=\\\"queryCount\\\" [maxSize]=\\\"5\\\" [itemsPerPage]=\\\"itemsPerPage\\\"></jhi-item-count> </div> <div class=\\\"row justify-content-center\\\"> <ngb-pagination [collectionSize]=\\\"totalItems\\\" [(page)]=\\\"page\\\" [pageSize]=\\\"itemsPerPage\\\" [maxSize]=\\\"5\\\" [rotate]=\\\"true\\\" [boundaryLinks]=\\\"true\\\" (pageChange)=\\\"loadPage(page)\\\"></ngb-pagination> </div> </div> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3Npc3RlbWEtYWd1YS9zaXN0ZW1hLWFndWEuY29tcG9uZW50Lmh0bWw/Njg0NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzTUFBc00sV0FBVyw4QkFBOEIsRUFBRSxncERBQWdwRCwwQkFBMEIsMkJBQTJCLFlBQVkseUJBQXlCLFlBQVksMEJBQTBCLFlBQVksc0JBQXNCLFlBQVksc0JBQXNCLFlBQVksdUJBQXVCLFlBQVksc0JBQXNCLDhHQUE4RyxpQ0FBaUMsb0hBQW9ILDZCQUE2QixzU0FBc1MsV0FBVyxrREFBa0QsRUFBRSxxTEFBcUwsV0FBVyxvREFBb0QsRUFBRSIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvc2lzdGVtYS1hZ3VhL3Npc3RlbWEtYWd1YS5jb21wb25lbnQuaHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8aDI+IDxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuc2lzdGVtYUFndWEuaG9tZS50aXRsZVxcXCI+U2lzdGVtYSBBZ3Vhczwvc3Bhbj4gPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGZsb2F0LXJpZ2h0IGpoLWNyZWF0ZS1lbnRpdHkgcmVkb25kb1xcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6IFsnc2lzdGVtYS1hZ3VhLW5ldyddIH0gfV1cXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtcGx1c1xcXCI+PC9zcGFuPiA8L2J1dHRvbj4gPC9oMj4gPGpoaS1hbGVydD48L2poaS1hbGVydD4gPGRpdiBjbGFzcz1cXFwicm93XFxcIj4gPC9kaXY+IDxici8+IDxkaXYgY2xhc3M9XFxcInRhYmxlLXJlc3BvbnNpdmVcXFwiICpuZ0lmPVxcXCJzaXN0ZW1hQWd1YXNcXFwiPiA8dGFibGUgY2xhc3M9XFxcInRhYmxlIHRhYmxlLXN0cmlwZWRcXFwiPiA8dGhlYWQ+IDx0ciBqaGlTb3J0IFsocHJlZGljYXRlKV09XFxcInByZWRpY2F0ZVxcXCIgWyhhc2NlbmRpbmcpXT1cXFwicmV2ZXJzZVxcXCIgW2NhbGxiYWNrXT1cXFwidHJhbnNpdGlvbi5iaW5kKHRoaXMpXFxcIj4gPHRoIGpoaVNvcnRCeT1cXFwibm1TaXN0ZW1hQWd1YVxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5ubVNpc3RlbWFBZ3VhXFxcIj5ObSBTaXN0ZW1hIEFndWE8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zb3J0XFxcIj48L3NwYW4+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwibm1Gb250ZUFndWFcXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuc2lzdGVtYUFndWEubm1Gb250ZUFndWFcXFwiPk5tIEZvbnRlIEFndWE8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zb3J0XFxcIj48L3NwYW4+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwibm1Mb2NhbGlkYWRlXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhLm5tTG9jYWxpZGFkZVxcXCI+Tm0gTG9jYWxpZGFkZTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJubVRwQXJlYVxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5ubVRwQXJlYVxcXCI+Tm0gVHAgQXJlYTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJsYXRpdHVkZVxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5sYXRpdHVkZVxcXCI+TGF0aXR1ZGU8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zb3J0XFxcIj48L3NwYW4+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwibG9uZ2l0dWRlXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhLmxvbmdpdHVkZVxcXCI+TG9uZ2l0dWRlPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc29ydFxcXCI+PC9zcGFuPjwvdGg+IDx0aCBqaGlTb3J0Qnk9XFxcImFsdGl0dWRlXFxcIj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhLmFsdGl0dWRlXFxcIj5BbHRpdHVkZTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJpZFNpdHVhY2FvSWRcXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuc2lzdGVtYUFndWEuaWRTaXR1YWNhb1xcXCI+SWQgU2l0dWFjYW88L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zb3J0XFxcIj48L3NwYW4+PC90aD4gPHRoIGpoaVNvcnRCeT1cXFwiaWRDb211bmFJZFxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5pZENvbXVuYVxcXCI+SWQgQ29tdW5hPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc29ydFxcXCI+PC9zcGFuPjwvdGg+IDx0aD48L3RoPiA8L3RyPiA8L3RoZWFkPiA8dGJvZHk+IDx0ciAqbmdGb3I9XFxcImxldCBzaXN0ZW1hQWd1YSBvZiBzaXN0ZW1hQWd1YXMgO3RyYWNrQnk6IHRyYWNrSWRcXFwiPiA8dGQ+e3tzaXN0ZW1hQWd1YS5ubVNpc3RlbWFBZ3VhfX08L3RkPiA8dGQ+e3tzaXN0ZW1hQWd1YS5ubUZvbnRlQWd1YX19PC90ZD4gPHRkPnt7c2lzdGVtYUFndWEubm1Mb2NhbGlkYWRlfX08L3RkPiA8dGQ+e3tzaXN0ZW1hQWd1YS5ubVRwQXJlYX19PC90ZD4gPHRkPnt7c2lzdGVtYUFndWEubGF0aXR1ZGV9fTwvdGQ+IDx0ZD57e3Npc3RlbWFBZ3VhLmxvbmdpdHVkZX19PC90ZD4gPHRkPnt7c2lzdGVtYUFndWEuYWx0aXR1ZGV9fTwvdGQ+IDx0ZD4gPGRpdiAqbmdJZj1cXFwic2lzdGVtYUFndWEuc2l0dWFjYW9cXFwiPiA8YSBbcm91dGVyTGlua109XFxcIlsnLi4vc2l0dWFjYW8nLCBzaXN0ZW1hQWd1YS5zaXR1YWNhbyAgXVxcXCI+e3tzaXN0ZW1hQWd1YS5zaXR1YWNhby5ubVNpdHVhY2FvfX08L2E+IDwvZGl2PiA8L3RkPiA8dGQ+IDxkaXYgKm5nSWY9XFxcInNpc3RlbWFBZ3VhLmNvbXVuYVxcXCI+IDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycuLi9jb211bmEnLCBzaXN0ZW1hQWd1YS5jb211bmEgIF1cXFwiPnt7c2lzdGVtYUFndWEuY29tdW5hLm5tQ29tdW5hfX08L2E+IDwvZGl2PiA8L3RkPiA8dGQgY2xhc3M9XFxcInRleHQtcmlnaHRcXFwiPiA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXAgZmxleC1idG4tZ3JvdXAtY29udGFpbmVyXFxcIj4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycuLi9zaXN0ZW1hLWFndWEnLCBzaXN0ZW1hQWd1YS5pZCBdXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvIGJ0bi1zbVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1leWVcXFwiPjwvc3Bhbj4gPC9idXR0b24+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbcm91dGVyTGlua109XFxcIlsnLycsIHsgb3V0bGV0czogeyBwb3B1cDogJ3Npc3RlbWEtYWd1YS8nKyBzaXN0ZW1hQWd1YS5pZCArICcvZWRpdCd9IH1dXFxcIiByZXBsYWNlVXJsPVxcXCJ0cnVlXFxcIiBxdWVyeVBhcmFtc0hhbmRsaW5nPVxcXCJtZXJnZVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeSBidG4tc21cXFwiPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtcGVuY2lsXFxcIj48L3NwYW4+IDwvYnV0dG9uPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgW3JvdXRlckxpbmtdPVxcXCJbJy8nLCB7IG91dGxldHM6IHsgcG9wdXA6ICdzaXN0ZW1hLWFndWEvJysgc2lzdGVtYUFndWEuaWQgKyAnL2RlbGV0ZSd9IH1dXFxcIiByZXBsYWNlVXJsPVxcXCJ0cnVlXFxcIiBxdWVyeVBhcmFtc0hhbmRsaW5nPVxcXCJtZXJnZVxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyIGJ0bi1zbVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1yZW1vdmVcXFwiPjwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiA8L3RkPiA8L3RyPiA8L3Rib2R5PiA8L3RhYmxlPiA8L2Rpdj4gPGRpdiAqbmdJZj1cXFwic2lzdGVtYUFndWFzICYmIHNpc3RlbWFBZ3Vhcy5sZW5ndGhcXFwiPiA8ZGl2IGNsYXNzPVxcXCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclxcXCI+IDxqaGktaXRlbS1jb3VudCBbcGFnZV09XFxcInBhZ2VcXFwiIFt0b3RhbF09XFxcInF1ZXJ5Q291bnRcXFwiIFttYXhTaXplXT1cXFwiNVxcXCIgW2l0ZW1zUGVyUGFnZV09XFxcIml0ZW1zUGVyUGFnZVxcXCI+PC9qaGktaXRlbS1jb3VudD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXFxcIj4gPG5nYi1wYWdpbmF0aW9uIFtjb2xsZWN0aW9uU2l6ZV09XFxcInRvdGFsSXRlbXNcXFwiIFsocGFnZSldPVxcXCJwYWdlXFxcIiBbcGFnZVNpemVdPVxcXCJpdGVtc1BlclBhZ2VcXFwiIFttYXhTaXplXT1cXFwiNVxcXCIgW3JvdGF0ZV09XFxcInRydWVcXFwiIFtib3VuZGFyeUxpbmtzXT1cXFwidHJ1ZVxcXCIgKHBhZ2VDaGFuZ2UpPVxcXCJsb2FkUGFnZShwYWdlKVxcXCI+PC9uZ2ItcGFnaW5hdGlvbj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3Npc3RlbWEtYWd1YS9zaXN0ZW1hLWFndWEuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9zaXN0ZW1hLWFndWEvc2lzdGVtYS1hZ3VhLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/sistema-agua/sistema-agua.component.html\n");

/***/ })

})