webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/entities/indicador-producao-log/indicador-producao-log.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<div> <h2> <span jhiTranslate=\\\"sisasApp.indicadorProducaoLog.home.title\\\">Indicador Producao Logs</span> </h2> <jhi-alert></jhi-alert> <div class=\\\"row\\\"> </div> <br/> <div class=\\\"table-responsive\\\" *ngIf=\\\"indicadorProducaoLogs\\\"> <table class=\\\"table table-striped\\\"> <thead> <tr jhiSort [(predicate)]=\\\"predicate\\\" [(ascending)]=\\\"reverse\\\" [callback]=\\\"transition.bind(this)\\\"> <th jhiSortBy=\\\"id\\\"><span jhiTranslate=\\\"global.field.id\\\">ID</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"acao\\\"><span jhiTranslate=\\\"sisasApp.indicadorProducaoLog.acao\\\">Acao</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"idUsuario\\\"><span jhiTranslate=\\\"sisasApp.indicadorProducaoLog.idUsuario\\\">Id Usuario</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"log\\\"><span jhiTranslate=\\\"sisasApp.indicadorProducaoLog.log\\\">Log</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"dtLog\\\"><span jhiTranslate=\\\"sisasApp.indicadorProducaoLog.dtLog\\\">Dt Log</span> <span class=\\\"fa fa-sort\\\"></span></th> <th jhiSortBy=\\\"idIndicadorProducaoId\\\"><span jhiTranslate=\\\"sisasApp.indicadorProducaoLog.idIndicadorProducao\\\">Id Indicador Producao</span> <span class=\\\"fa fa-sort\\\"></span></th> <th></th> </tr> </thead> <tbody> <tr *ngFor=\\\"let indicadorProducaoLog of indicadorProducaoLogs ;trackBy: trackId\\\"> <td><a [routerLink]=\\\"['../indicador-producao-log', indicadorProducaoLog.id ]\\\">{{indicadorProducaoLog.id}}</a></td> <td>{{indicadorProducaoLog.acao}}</td> <td>{{indicadorProducaoLog.idUsuario}}</td> <td>{{indicadorProducaoLog.log}}</td> <td>{{indicadorProducaoLog.dtLog | date:'mediumDate'}}</td> <td> <div *ngIf=\\\"indicadorProducaoLog.idIndicadorProducaoId\\\"> <a [routerLink]=\\\"['../indicador-producao', indicadorProducaoLog.idIndicadorProducaoId.id  ]\\\">{{indicadorProducaoLog.idIndicadorProducaoId.id}}</a> </div> </td> <td class=\\\"text-right\\\"> <div class=\\\"btn-group flex-btn-group-container\\\"> <button type=\\\"submit\\\" [routerLink]=\\\"['../indicador-producao-log', indicadorProducaoLog.id ]\\\" class=\\\"btn btn-info btn-sm\\\"> <span class=\\\"fa fa-eye\\\"></span> <span class=\\\"d-none d-md-inline\\\" jhiTranslate=\\\"entity.action.view\\\">View</span> </button> </div> </td> </tr> </tbody> </table> </div> <div *ngIf=\\\"indicadorProducaoLogs && indicadorProducaoLogs.length\\\"> <div class=\\\"row justify-content-center\\\"> <jhi-item-count [page]=\\\"page\\\" [total]=\\\"queryCount\\\" [maxSize]=\\\"5\\\" [itemsPerPage]=\\\"itemsPerPage\\\"></jhi-item-count> </div> <div class=\\\"row justify-content-center\\\"> <ngb-pagination [collectionSize]=\\\"totalItems\\\" [(page)]=\\\"page\\\" [pageSize]=\\\"itemsPerPage\\\" [maxSize]=\\\"5\\\" [rotate]=\\\"true\\\" [boundaryLinks]=\\\"true\\\" (pageChange)=\\\"loadPage(page)\\\"></ngb-pagination> </div> </div> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2luZGljYWRvci1wcm9kdWNhby1sb2cvaW5kaWNhZG9yLXByb2R1Y2FvLWxvZy5jb21wb25lbnQuaHRtbD8wNzZiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDR6Q0FBNHpDLHNHQUFzRyx5QkFBeUIsZ0JBQWdCLDJCQUEyQixZQUFZLGdDQUFnQyxZQUFZLDBCQUEwQixZQUFZLGdEQUFnRCx1S0FBdUssK0NBQStDIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9pbmRpY2Fkb3ItcHJvZHVjYW8tbG9nL2luZGljYWRvci1wcm9kdWNhby1sb2cuY29tcG9uZW50Lmh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj4gPGgyPiA8c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLmluZGljYWRvclByb2R1Y2FvTG9nLmhvbWUudGl0bGVcXFwiPkluZGljYWRvciBQcm9kdWNhbyBMb2dzPC9zcGFuPiA8L2gyPiA8amhpLWFsZXJ0PjwvamhpLWFsZXJ0PiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8L2Rpdj4gPGJyLz4gPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCIgKm5nSWY9XFxcImluZGljYWRvclByb2R1Y2FvTG9nc1xcXCI+IDx0YWJsZSBjbGFzcz1cXFwidGFibGUgdGFibGUtc3RyaXBlZFxcXCI+IDx0aGVhZD4gPHRyIGpoaVNvcnQgWyhwcmVkaWNhdGUpXT1cXFwicHJlZGljYXRlXFxcIiBbKGFzY2VuZGluZyldPVxcXCJyZXZlcnNlXFxcIiBbY2FsbGJhY2tdPVxcXCJ0cmFuc2l0aW9uLmJpbmQodGhpcylcXFwiPiA8dGggamhpU29ydEJ5PVxcXCJpZFxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJnbG9iYWwuZmllbGQuaWRcXFwiPklEPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc29ydFxcXCI+PC9zcGFuPjwvdGg+IDx0aCBqaGlTb3J0Qnk9XFxcImFjYW9cXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuaW5kaWNhZG9yUHJvZHVjYW9Mb2cuYWNhb1xcXCI+QWNhbzwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJpZFVzdWFyaW9cXFwiPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuaW5kaWNhZG9yUHJvZHVjYW9Mb2cuaWRVc3VhcmlvXFxcIj5JZCBVc3VhcmlvPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc29ydFxcXCI+PC9zcGFuPjwvdGg+IDx0aCBqaGlTb3J0Qnk9XFxcImxvZ1xcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5pbmRpY2Fkb3JQcm9kdWNhb0xvZy5sb2dcXFwiPkxvZzwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXNvcnRcXFwiPjwvc3Bhbj48L3RoPiA8dGggamhpU29ydEJ5PVxcXCJkdExvZ1xcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5pbmRpY2Fkb3JQcm9kdWNhb0xvZy5kdExvZ1xcXCI+RHQgTG9nPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZmEgZmEtc29ydFxcXCI+PC9zcGFuPjwvdGg+IDx0aCBqaGlTb3J0Qnk9XFxcImlkSW5kaWNhZG9yUHJvZHVjYW9JZFxcXCI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5pbmRpY2Fkb3JQcm9kdWNhb0xvZy5pZEluZGljYWRvclByb2R1Y2FvXFxcIj5JZCBJbmRpY2Fkb3IgUHJvZHVjYW88L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1zb3J0XFxcIj48L3NwYW4+PC90aD4gPHRoPjwvdGg+IDwvdHI+IDwvdGhlYWQ+IDx0Ym9keT4gPHRyICpuZ0Zvcj1cXFwibGV0IGluZGljYWRvclByb2R1Y2FvTG9nIG9mIGluZGljYWRvclByb2R1Y2FvTG9ncyA7dHJhY2tCeTogdHJhY2tJZFxcXCI+IDx0ZD48YSBbcm91dGVyTGlua109XFxcIlsnLi4vaW5kaWNhZG9yLXByb2R1Y2FvLWxvZycsIGluZGljYWRvclByb2R1Y2FvTG9nLmlkIF1cXFwiPnt7aW5kaWNhZG9yUHJvZHVjYW9Mb2cuaWR9fTwvYT48L3RkPiA8dGQ+e3tpbmRpY2Fkb3JQcm9kdWNhb0xvZy5hY2FvfX08L3RkPiA8dGQ+e3tpbmRpY2Fkb3JQcm9kdWNhb0xvZy5pZFVzdWFyaW99fTwvdGQ+IDx0ZD57e2luZGljYWRvclByb2R1Y2FvTG9nLmxvZ319PC90ZD4gPHRkPnt7aW5kaWNhZG9yUHJvZHVjYW9Mb2cuZHRMb2cgfCBkYXRlOidtZWRpdW1EYXRlJ319PC90ZD4gPHRkPiA8ZGl2ICpuZ0lmPVxcXCJpbmRpY2Fkb3JQcm9kdWNhb0xvZy5pZEluZGljYWRvclByb2R1Y2FvSWRcXFwiPiA8YSBbcm91dGVyTGlua109XFxcIlsnLi4vaW5kaWNhZG9yLXByb2R1Y2FvJywgaW5kaWNhZG9yUHJvZHVjYW9Mb2cuaWRJbmRpY2Fkb3JQcm9kdWNhb0lkLmlkICBdXFxcIj57e2luZGljYWRvclByb2R1Y2FvTG9nLmlkSW5kaWNhZG9yUHJvZHVjYW9JZC5pZH19PC9hPiA8L2Rpdj4gPC90ZD4gPHRkIGNsYXNzPVxcXCJ0ZXh0LXJpZ2h0XFxcIj4gPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwIGZsZXgtYnRuLWdyb3VwLWNvbnRhaW5lclxcXCI+IDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBbcm91dGVyTGlua109XFxcIlsnLi4vaW5kaWNhZG9yLXByb2R1Y2FvLWxvZycsIGluZGljYWRvclByb2R1Y2FvTG9nLmlkIF1cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWluZm8gYnRuLXNtXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLWV5ZVxcXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwiZC1ub25lIGQtbWQtaW5saW5lXFxcIiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24udmlld1xcXCI+Vmlldzwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiA8L3RkPiA8L3RyPiA8L3Rib2R5PiA8L3RhYmxlPiA8L2Rpdj4gPGRpdiAqbmdJZj1cXFwiaW5kaWNhZG9yUHJvZHVjYW9Mb2dzICYmIGluZGljYWRvclByb2R1Y2FvTG9ncy5sZW5ndGhcXFwiPiA8ZGl2IGNsYXNzPVxcXCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclxcXCI+IDxqaGktaXRlbS1jb3VudCBbcGFnZV09XFxcInBhZ2VcXFwiIFt0b3RhbF09XFxcInF1ZXJ5Q291bnRcXFwiIFttYXhTaXplXT1cXFwiNVxcXCIgW2l0ZW1zUGVyUGFnZV09XFxcIml0ZW1zUGVyUGFnZVxcXCI+PC9qaGktaXRlbS1jb3VudD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXFxcIj4gPG5nYi1wYWdpbmF0aW9uIFtjb2xsZWN0aW9uU2l6ZV09XFxcInRvdGFsSXRlbXNcXFwiIFsocGFnZSldPVxcXCJwYWdlXFxcIiBbcGFnZVNpemVdPVxcXCJpdGVtc1BlclBhZ2VcXFwiIFttYXhTaXplXT1cXFwiNVxcXCIgW3JvdGF0ZV09XFxcInRydWVcXFwiIFtib3VuZGFyeUxpbmtzXT1cXFwidHJ1ZVxcXCIgKHBhZ2VDaGFuZ2UpPVxcXCJsb2FkUGFnZShwYWdlKVxcXCI+PC9uZ2ItcGFnaW5hdGlvbj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2luZGljYWRvci1wcm9kdWNhby1sb2cvaW5kaWNhZG9yLXByb2R1Y2FvLWxvZy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL2luZGljYWRvci1wcm9kdWNhby1sb2cvaW5kaWNhZG9yLXByb2R1Y2FvLWxvZy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/indicador-producao-log/indicador-producao-log.component.html\n");

/***/ })

})