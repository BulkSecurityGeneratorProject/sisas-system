webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/entities/sistema-agua-log/sistema-agua-log-detail.component.html":
/***/ (function(module, exports) {

eval("module.exports = \" <div *ngIf=\\\"sistemaAguaLog\\\"> <h2><span jhiTranslate=\\\"sisasApp.sistemaAguaLog.detail.title\\\">Sistema Agua Log</span> {{sistemaAguaLog.id}}</h2> <hr> <jhi-alert-error></jhi-alert-error> <dl class=\\\"row-md jh-entity-details\\\"> <dt><span jhiTranslate=\\\"sisasApp.sistemaAguaLog.acao\\\">Acao</span></dt> <dd> <span>{{sistemaAguaLog.acao}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAguaLog.idUsuario\\\">Id Usuario</span></dt> <dd> <span>{{sistemaAguaLog.idUsuario}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAguaLog.log\\\">Log</span></dt> <dd> <span>{{sistemaAguaLog.log}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAguaLog.dtLog\\\">Dt Log</span></dt> <dd> <span>{{sistemaAguaLog.dtLog | date:'mediumDate'}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAguaLog.idSistemaAgua\\\">Id Sistema Agua</span></dt> <dd> <div *ngIf=\\\"sistemaAguaLog.idSistemaAguaId\\\"> <a [routerLink]=\\\"['/sistema-agua', sistemaAguaLog.idSistemaAguaId.id]\\\">{{sistemaAguaLog.idSistemaAguaId.nmSistemaAgua}}</a> </div> </dd> </dl> <button type=\\\"submit\\\" (click)=\\\"previousState()\\\" class=\\\"btn btn-info\\\"> <span class=\\\"fa fa-arrow-left\\\"></span>&nbsp;<span jhiTranslate=\\\"entity.action.back\\\"> Back</span> </button> <button type=\\\"button\\\" [routerLink]=\\\"['/', { outlets: { popup: 'sistema-agua-log/'+ sistemaAguaLog.id + '/edit'} }]\\\" replaceUrl=\\\"true\\\" queryParamsHandling=\\\"merge\\\" class=\\\"btn btn-primary\\\"> <span class=\\\"fa fa-pencil\\\"></span>&nbsp;<span jhiTranslate=\\\"entity.action.edit\\\"> Edit</span> </button> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3Npc3RlbWEtYWd1YS1sb2cvc2lzdGVtYS1hZ3VhLWxvZy1kZXRhaWwuY29tcG9uZW50Lmh0bWw/ZDUwYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0SUFBNEksbUJBQW1CLDZLQUE2SyxxQkFBcUIsK0dBQStHLDBCQUEwQixrR0FBa0csb0JBQW9CLHVHQUF1RywwQ0FBMEMsME9BQTBPLDhDQUE4QyxrSkFBa0osK0dBQStHLFdBQVcseURBQXlELEVBQUUsMkhBQTJIIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9zaXN0ZW1hLWFndWEtbG9nL3Npc3RlbWEtYWd1YS1sb2ctZGV0YWlsLmNvbXBvbmVudC5odG1sLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIiA8ZGl2ICpuZ0lmPVxcXCJzaXN0ZW1hQWd1YUxvZ1xcXCI+IDxoMj48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhTG9nLmRldGFpbC50aXRsZVxcXCI+U2lzdGVtYSBBZ3VhIExvZzwvc3Bhbj4ge3tzaXN0ZW1hQWd1YUxvZy5pZH19PC9oMj4gPGhyPiA8amhpLWFsZXJ0LWVycm9yPjwvamhpLWFsZXJ0LWVycm9yPiA8ZGwgY2xhc3M9XFxcInJvdy1tZCBqaC1lbnRpdHktZGV0YWlsc1xcXCI+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhTG9nLmFjYW9cXFwiPkFjYW88L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3Npc3RlbWFBZ3VhTG9nLmFjYW99fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuc2lzdGVtYUFndWFMb2cuaWRVc3VhcmlvXFxcIj5JZCBVc3VhcmlvPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3tzaXN0ZW1hQWd1YUxvZy5pZFVzdWFyaW99fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuc2lzdGVtYUFndWFMb2cubG9nXFxcIj5Mb2c8L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3Npc3RlbWFBZ3VhTG9nLmxvZ319PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YUxvZy5kdExvZ1xcXCI+RHQgTG9nPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3tzaXN0ZW1hQWd1YUxvZy5kdExvZyB8IGRhdGU6J21lZGl1bURhdGUnfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhTG9nLmlkU2lzdGVtYUFndWFcXFwiPklkIFNpc3RlbWEgQWd1YTwvc3Bhbj48L2R0PiA8ZGQ+IDxkaXYgKm5nSWY9XFxcInNpc3RlbWFBZ3VhTG9nLmlkU2lzdGVtYUFndWFJZFxcXCI+IDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvc2lzdGVtYS1hZ3VhJywgc2lzdGVtYUFndWFMb2cuaWRTaXN0ZW1hQWd1YUlkLmlkXVxcXCI+e3tzaXN0ZW1hQWd1YUxvZy5pZFNpc3RlbWFBZ3VhSWQubm1TaXN0ZW1hQWd1YX19PC9hPiA8L2Rpdj4gPC9kZD4gPC9kbD4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcInByZXZpb3VzU3RhdGUoKVxcXCIgY2xhc3M9XFxcImJ0biBidG4taW5mb1xcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1hcnJvdy1sZWZ0XFxcIj48L3NwYW4+Jm5ic3A7PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkuYWN0aW9uLmJhY2tcXFwiPiBCYWNrPC9zcGFuPiA8L2J1dHRvbj4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgeyBvdXRsZXRzOiB7IHBvcHVwOiAnc2lzdGVtYS1hZ3VhLWxvZy8nKyBzaXN0ZW1hQWd1YUxvZy5pZCArICcvZWRpdCd9IH1dXFxcIiByZXBsYWNlVXJsPVxcXCJ0cnVlXFxcIiBxdWVyeVBhcmFtc0hhbmRsaW5nPVxcXCJtZXJnZVxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1wZW5jaWxcXFwiPjwvc3Bhbj4mbmJzcDs8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24uZWRpdFxcXCI+IEVkaXQ8L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3Npc3RlbWEtYWd1YS1sb2cvc2lzdGVtYS1hZ3VhLWxvZy1kZXRhaWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9zaXN0ZW1hLWFndWEtbG9nL3Npc3RlbWEtYWd1YS1sb2ctZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/sistema-agua-log/sistema-agua-log-detail.component.html\n");

/***/ })

})