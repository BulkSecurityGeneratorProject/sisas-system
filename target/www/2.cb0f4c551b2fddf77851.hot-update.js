webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/entities/sistema-agua-log/sistema-agua-log-detail.component.html":
/***/ (function(module, exports) {

eval("module.exports = \" <div *ngIf=\\\"sistemaAguaLog\\\"> <h2><span jhiTranslate=\\\"sisasApp.sistemaAguaLog.detail.title\\\">Sistema Agua Log</span> {{sistemaAguaLog.id}}</h2> <hr> <jhi-alert-error></jhi-alert-error> <dl class=\\\"row-md jh-entity-details\\\"> <dt><span jhiTranslate=\\\"sisasApp.sistemaAguaLog.acao\\\">Acao</span></dt> <dd> <span>{{sistemaAguaLog.acao}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAguaLog.idUsuario\\\">Id Usuario</span></dt> <dd> <span>{{sistemaAguaLog.idUsuario}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAguaLog.log\\\">Log</span></dt> <dd> <span>{{sistemaAguaLog.log}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAguaLog.dtLog\\\">Dt Log</span></dt> <dd> <span>{{sistemaAguaLog.dtLog | date:'mediumDate'}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAguaLog.idSistemaAgua\\\">Id Sistema Agua</span></dt> <dd> <div *ngIf=\\\"sistemaAguaLog.idSistemaAguaId\\\"> <a [routerLink]=\\\"['/sistema-agua', sistemaAguaLog.idSistemaAguaId.id]\\\">{{sistemaAguaLog.idSistemaAguaId.nmSistemaAgua}}</a> </div> </dd> </dl> <button type=\\\"submit\\\" (click)=\\\"previousState()\\\" class=\\\"btn btn-info\\\"> <span class=\\\"fa fa-arrow-left\\\"></span>&nbsp;<span jhiTranslate=\\\"entity.action.back\\\"> Back</span> </button> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3Npc3RlbWEtYWd1YS1sb2cvc2lzdGVtYS1hZ3VhLWxvZy1kZXRhaWwuY29tcG9uZW50Lmh0bWw/ZDUwYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0SUFBNEksbUJBQW1CLDZLQUE2SyxxQkFBcUIsK0dBQStHLDBCQUEwQixrR0FBa0csb0JBQW9CLHVHQUF1RywwQ0FBMEMsME9BQTBPLDhDQUE4QyxrSkFBa0oiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3Npc3RlbWEtYWd1YS1sb2cvc2lzdGVtYS1hZ3VhLWxvZy1kZXRhaWwuY29tcG9uZW50Lmh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiIDxkaXYgKm5nSWY9XFxcInNpc3RlbWFBZ3VhTG9nXFxcIj4gPGgyPjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuc2lzdGVtYUFndWFMb2cuZGV0YWlsLnRpdGxlXFxcIj5TaXN0ZW1hIEFndWEgTG9nPC9zcGFuPiB7e3Npc3RlbWFBZ3VhTG9nLmlkfX08L2gyPiA8aHI+IDxqaGktYWxlcnQtZXJyb3I+PC9qaGktYWxlcnQtZXJyb3I+IDxkbCBjbGFzcz1cXFwicm93LW1kIGpoLWVudGl0eS1kZXRhaWxzXFxcIj4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuc2lzdGVtYUFndWFMb2cuYWNhb1xcXCI+QWNhbzwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7c2lzdGVtYUFndWFMb2cuYWNhb319PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YUxvZy5pZFVzdWFyaW9cXFwiPklkIFVzdWFyaW88L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3Npc3RlbWFBZ3VhTG9nLmlkVXN1YXJpb319PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YUxvZy5sb2dcXFwiPkxvZzwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7c2lzdGVtYUFndWFMb2cubG9nfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhTG9nLmR0TG9nXFxcIj5EdCBMb2c8L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3Npc3RlbWFBZ3VhTG9nLmR0TG9nIHwgZGF0ZTonbWVkaXVtRGF0ZSd9fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuc2lzdGVtYUFndWFMb2cuaWRTaXN0ZW1hQWd1YVxcXCI+SWQgU2lzdGVtYSBBZ3VhPC9zcGFuPjwvZHQ+IDxkZD4gPGRpdiAqbmdJZj1cXFwic2lzdGVtYUFndWFMb2cuaWRTaXN0ZW1hQWd1YUlkXFxcIj4gPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9zaXN0ZW1hLWFndWEnLCBzaXN0ZW1hQWd1YUxvZy5pZFNpc3RlbWFBZ3VhSWQuaWRdXFxcIj57e3Npc3RlbWFBZ3VhTG9nLmlkU2lzdGVtYUFndWFJZC5ubVNpc3RlbWFBZ3VhfX08L2E+IDwvZGl2PiA8L2RkPiA8L2RsPiA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwicHJldmlvdXNTdGF0ZSgpXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1pbmZvXFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLWFycm93LWxlZnRcXFwiPjwvc3Bhbj4mbmJzcDs8c3BhbiBqaGlUcmFuc2xhdGU9XFxcImVudGl0eS5hY3Rpb24uYmFja1xcXCI+IEJhY2s8L3NwYW4+IDwvYnV0dG9uPiA8L2Rpdj4gXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3Npc3RlbWEtYWd1YS1sb2cvc2lzdGVtYS1hZ3VhLWxvZy1kZXRhaWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9zaXN0ZW1hLWFndWEtbG9nL3Npc3RlbWEtYWd1YS1sb2ctZGV0YWlsLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/sistema-agua-log/sistema-agua-log-detail.component.html\n");

/***/ })

})