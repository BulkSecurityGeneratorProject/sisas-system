webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/entities/sistema-agua/sistema-agua-detail.component.html":
/***/ (function(module, exports) {

eval("module.exports = \" <div *ngIf=\\\"sistemaAgua\\\"> <h2><span jhiTranslate=\\\"sisasApp.sistemaAgua.detail.title\\\">Sistema Agua</span> {{sistemaAgua.id}}</h2> <hr> <jhi-alert-error></jhi-alert-error> <dl class=\\\"row-md jh-entity-details\\\"> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.idSistemaAgua\\\">Id Sistema Agua</span></dt> <dd> <span>{{sistemaAgua.idSistemaAgua}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.idUsuario\\\">Id Usuario</span></dt> <dd> <span>{{sistemaAgua.idUsuario}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.nmInqueridor\\\">Nm Inqueridor</span></dt> <dd> <span>{{sistemaAgua.nmInqueridor}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.dtLancamento\\\">Dt Lancamento</span></dt> <dd> <span>{{sistemaAgua.dtLancamento | date:'mediumDate'}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.dtUltimaAlteracao\\\">Dt Ultima Alteracao</span></dt> <dd> <span>{{sistemaAgua.dtUltimaAlteracao | date:'mediumDate'}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.nmLocalidade\\\">Nm Localidade</span></dt> <dd> <span>{{sistemaAgua.nmLocalidade}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.qtdPopulacaoActual\\\">Qtd Populacao Actual</span></dt> <dd> <span>{{sistemaAgua.qtdPopulacaoActual}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.qtdCasasLocalidade\\\">Qtd Casas Localidade</span></dt> <dd> <span>{{sistemaAgua.qtdCasasLocalidade}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.nmTpComunaAldeia\\\">Nm Tp Comuna Aldeia</span></dt> <dd> <span>{{sistemaAgua.nmTpComunaAldeia}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.nmTpArea\\\">Nm Tp Area</span></dt> <dd> <span>{{sistemaAgua.nmTpArea}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.possuiSistemaAgua\\\">Possui Sistema Agua</span></dt> <dd> <span>{{sistemaAgua.possuiSistemaAgua}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.nmSistemaAgua\\\">Nm Sistema Agua</span></dt> <dd> <span>{{sistemaAgua.nmSistemaAgua}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.nmFonteAgua\\\">Nm Fonte Agua</span></dt> <dd> <span>{{sistemaAgua.nmFonteAgua}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.latitude\\\">Latitude</span></dt> <dd> <span>{{sistemaAgua.latitude}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.longitude\\\">Longitude</span></dt> <dd> <span>{{sistemaAgua.longitude}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.altitude\\\">Altitude</span></dt> <dd> <span>{{sistemaAgua.altitude}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.nmTpFonte\\\">Nm Tp Fonte</span></dt> <dd> <span>{{sistemaAgua.nmTpFonte}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.nmFonteAguaUtilizada\\\">Nm Fonte Agua Utilizada</span></dt> <dd> <span>{{sistemaAgua.nmFonteAguaUtilizada}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.nmTipoBomba\\\">Nm Tipo Bomba</span></dt> <dd> <span>{{sistemaAgua.nmTipoBomba}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.qtdCasasAguaLigada\\\">Qtd Casas Agua Ligada</span></dt> <dd> <span>{{sistemaAgua.qtdCasasAguaLigada}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.qtdChafarisesFuncionando\\\">Qtd Chafarises Funcionando</span></dt> <dd> <span>{{sistemaAgua.qtdChafarisesFuncionando}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.qtdContadoresLigados\\\">Qtd Contadores Ligados</span></dt> <dd> <span>{{sistemaAgua.qtdContadoresLigados}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.qtdBebedouros\\\">Qtd Bebedouros</span></dt> <dd> <span>{{sistemaAgua.qtdBebedouros}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.qtdHabitantesAcessoServicoAgua\\\">Qtd Habitantes Acesso Servico Agua</span></dt> <dd> <span>{{sistemaAgua.qtdHabitantesAcessoServicoAgua}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.anoConstrucaoSistema\\\">Ano Construcao Sistema</span></dt> <dd> <span>{{sistemaAgua.anoConstrucaoSistema}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.nmTpAvariaSistema\\\">Nm Tp Avaria Sistema</span></dt> <dd> <span>{{sistemaAgua.nmTpAvariaSistema}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.causaAvariaSistema\\\">Causa Avaria Sistema</span></dt> <dd> <span>{{sistemaAgua.causaAvariaSistema}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.statusResolucao\\\">Status Resolucao</span></dt> <dd> <span>{{sistemaAgua.statusResolucao}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.tempoServicoDisponivel\\\">Tempo Servico Disponivel</span></dt> <dd> <span>{{sistemaAgua.tempoServicoDisponivel}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.qtdDiametroCondutaAdutoraAguaBruta\\\">Qtd Diametro Conduta Adutora Agua Bruta</span></dt> <dd> <span>{{sistemaAgua.qtdDiametroCondutaAdutoraAguaBruta}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.qtdComprimentoCondutaAdutoraAguaBruta\\\">Qtd Comprimento Conduta Adutora Agua Bruta</span></dt> <dd> <span>{{sistemaAgua.qtdComprimentoCondutaAdutoraAguaBruta}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.qtdDiametroCondutaAdutoraAguaTratada\\\">Qtd Diametro Conduta Adutora Agua Tratada</span></dt> <dd> <span>{{sistemaAgua.qtdDiametroCondutaAdutoraAguaTratada}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.qtdComprimentoCondutaAdutoraAguaTratada\\\">Qtd Comprimento Conduta Adutora Agua Tratada</span></dt> <dd> <span>{{sistemaAgua.qtdComprimentoCondutaAdutoraAguaTratada}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.descMaterialUtilizadoCondutas\\\">Desc Material Utilizado Condutas</span></dt> <dd> <span>{{sistemaAgua.descMaterialUtilizadoCondutas}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.qtdReservatoriosApoiados\\\">Qtd Reservatorios Apoiados</span></dt> <dd> <span>{{sistemaAgua.qtdReservatoriosApoiados}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.qtdCapacidadeReservatoriosApoiados\\\">Qtd Capacidade Reservatorios Apoiados</span></dt> <dd> <span>{{sistemaAgua.qtdCapacidadeReservatoriosApoiados}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.qtdReservatoriosElevados\\\">Qtd Reservatorios Elevados</span></dt> <dd> <span>{{sistemaAgua.qtdReservatoriosElevados}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.qtdCapacidadeReservatoriosElevados\\\">Qtd Capacidade Reservatorios Elevados</span></dt> <dd> <span>{{sistemaAgua.qtdCapacidadeReservatoriosElevados}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.alturaReservatoriosElevados\\\">Altura Reservatorios Elevados</span></dt> <dd> <span>{{sistemaAgua.alturaReservatoriosElevados}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.nmTpTratamentoAgua\\\">Nm Tp Tratamento Agua</span></dt> <dd> <span>{{sistemaAgua.nmTpTratamentoAgua}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.nmTpTratamentoPadraoUtilizado\\\">Nm Tp Tratamento Padrao Utilizado</span></dt> <dd> <span>{{sistemaAgua.nmTpTratamentoPadraoUtilizado}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.nmTpTratamentoBasicoUtilizado\\\">Nm Tp Tratamento Basico Utilizado</span></dt> <dd> <span>{{sistemaAgua.nmTpTratamentoBasicoUtilizado}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.existeAvariaSistemaTratamento\\\">Existe Avaria Sistema Tratamento</span></dt> <dd> <span>{{sistemaAgua.existeAvariaSistemaTratamento}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.existeMotivoAusenciaTratamento\\\">Existe Motivo Ausencia Tratamento</span></dt> <dd> <span>{{sistemaAgua.existeMotivoAusenciaTratamento}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.nmEquipamentosComAvaria\\\">Nm Equipamentos Com Avaria</span></dt> <dd> <span>{{sistemaAgua.nmEquipamentosComAvaria}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.caudalDoSistema\\\">Caudal Do Sistema</span></dt> <dd> <span>{{sistemaAgua.caudalDoSistema}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.qtdConsumoPercaptaLitrosHomemDia\\\">Qtd Consumo Percapta Litros Homem Dia</span></dt> <dd> <span>{{sistemaAgua.qtdConsumoPercaptaLitrosHomemDia}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.qtdDotacaoPercapta\\\">Qtd Dotacao Percapta</span></dt> <dd> <span>{{sistemaAgua.qtdDotacaoPercapta}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.qtdDiariaHorasServicoSistema\\\">Qtd Diaria Horas Servico Sistema</span></dt> <dd> <span>{{sistemaAgua.qtdDiariaHorasServicoSistema}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.esquema\\\">Esquema</span></dt> <dd> <span>{{sistemaAgua.esquema}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.nmModeloBombaManualUtilizada\\\">Nm Modelo Bomba Manual Utilizada</span></dt> <dd> <span>{{sistemaAgua.nmModeloBombaManualUtilizada}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.nmTpBombaEnergia\\\">Nm Tp Bomba Energia</span></dt> <dd> <span>{{sistemaAgua.nmTpBombaEnergia}}</span> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.idSituacao\\\">Id Situacao</span></dt> <dd> <div *ngIf=\\\"sistemaAgua.situacao\\\"> <a [routerLink]=\\\"['/situacao', sistemaAgua.situacao]\\\">{{sistemaAgua.situacao.nmSituacao}}</a> </div> </dd> <dt><span jhiTranslate=\\\"sisasApp.sistemaAgua.idComuna\\\">Id Comuna</span></dt> <dd> <div *ngIf=\\\"sistemaAgua.comuna\\\"> <a [routerLink]=\\\"['/comuna', sistemaAgua.comuna]\\\">{{sistemaAgua.comuna.nmComuna}}</a> </div> </dd> </dl> <button type=\\\"submit\\\" (click)=\\\"previousState()\\\" class=\\\"btn btn-info\\\"> <span class=\\\"fa fa-arrow-left\\\"></span>&nbsp;<span jhiTranslate=\\\"entity.action.back\\\"> Back</span> </button> <button type=\\\"button\\\" [routerLink]=\\\"['/', { outlets: { popup: 'sistema-agua/'+ sistemaAgua.id + '/edit'} }]\\\" replaceUrl=\\\"true\\\" queryParamsHandling=\\\"merge\\\" class=\\\"btn btn-primary\\\"> <span class=\\\"fa fa-pencil\\\"></span>&nbsp;<span jhiTranslate=\\\"entity.action.edit\\\"> Edit</span> </button> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3Npc3RlbWEtYWd1YS9zaXN0ZW1hLWFndWEtZGV0YWlsLmNvbXBvbmVudC5odG1sP2JhOGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0lBQWtJLGdCQUFnQiw4TEFBOEwsMkJBQTJCLDRHQUE0Ryx1QkFBdUIsa0hBQWtILDBCQUEwQixrSEFBa0gsOENBQThDLDZIQUE2SCxtREFBbUQsa0hBQWtILDBCQUEwQiwrSEFBK0gsZ0NBQWdDLCtIQUErSCxnQ0FBZ0MsNEhBQTRILDhCQUE4QiwyR0FBMkcsc0JBQXNCLDZIQUE2SCwrQkFBK0IscUhBQXFILDJCQUEyQixpSEFBaUgseUJBQXlCLHlHQUF5RyxzQkFBc0IsMkdBQTJHLHVCQUF1Qix5R0FBeUcsc0JBQXNCLDZHQUE2Ryx1QkFBdUIsb0lBQW9JLGtDQUFrQyxpSEFBaUgseUJBQXlCLGdJQUFnSSxnQ0FBZ0MsMklBQTJJLHNDQUFzQyxtSUFBbUksa0NBQWtDLG9IQUFvSCwyQkFBMkIseUpBQXlKLDRDQUE0QyxtSUFBbUksa0NBQWtDLDhIQUE4SCwrQkFBK0IsK0hBQStILGdDQUFnQyx3SEFBd0gsNkJBQTZCLHVJQUF1SSxvQ0FBb0Msa0tBQWtLLGdEQUFnRCx3S0FBd0ssbURBQW1ELHNLQUFzSyxrREFBa0QsNEtBQTRLLHFEQUFxRCxzSkFBc0osMkNBQTJDLDJJQUEySSxzQ0FBc0MsZ0tBQWdLLGdEQUFnRCwySUFBMkksc0NBQXNDLGdLQUFnSyxnREFBZ0QsaUpBQWlKLHlDQUF5QyxnSUFBZ0ksZ0NBQWdDLHVKQUF1SiwyQ0FBMkMsdUpBQXVKLDJDQUEyQyxzSkFBc0osMkNBQTJDLHdKQUF3Siw0Q0FBNEMsMElBQTBJLHFDQUFxQyx5SEFBeUgsNkJBQTZCLDhKQUE4Siw4Q0FBOEMsK0hBQStILGdDQUFnQyxxSkFBcUosMENBQTBDLHVHQUF1RyxxQkFBcUIscUpBQXFKLDBDQUEwQyw0SEFBNEgsOEJBQThCLHFNQUFxTSxpQ0FBaUMsK0xBQStMLDZCQUE2QixrSkFBa0osK0dBQStHLFdBQVcsa0RBQWtELEVBQUUsMkhBQTJIIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9zaXN0ZW1hLWFndWEvc2lzdGVtYS1hZ3VhLWRldGFpbC5jb21wb25lbnQuaHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIgPGRpdiAqbmdJZj1cXFwic2lzdGVtYUFndWFcXFwiPiA8aDI+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5kZXRhaWwudGl0bGVcXFwiPlNpc3RlbWEgQWd1YTwvc3Bhbj4ge3tzaXN0ZW1hQWd1YS5pZH19PC9oMj4gPGhyPiA8amhpLWFsZXJ0LWVycm9yPjwvamhpLWFsZXJ0LWVycm9yPiA8ZGwgY2xhc3M9XFxcInJvdy1tZCBqaC1lbnRpdHktZGV0YWlsc1xcXCI+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhLmlkU2lzdGVtYUFndWFcXFwiPklkIFNpc3RlbWEgQWd1YTwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7c2lzdGVtYUFndWEuaWRTaXN0ZW1hQWd1YX19PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5pZFVzdWFyaW9cXFwiPklkIFVzdWFyaW88L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3Npc3RlbWFBZ3VhLmlkVXN1YXJpb319PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5ubUlucXVlcmlkb3JcXFwiPk5tIElucXVlcmlkb3I8L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3Npc3RlbWFBZ3VhLm5tSW5xdWVyaWRvcn19PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5kdExhbmNhbWVudG9cXFwiPkR0IExhbmNhbWVudG88L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3Npc3RlbWFBZ3VhLmR0TGFuY2FtZW50byB8IGRhdGU6J21lZGl1bURhdGUnfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhLmR0VWx0aW1hQWx0ZXJhY2FvXFxcIj5EdCBVbHRpbWEgQWx0ZXJhY2FvPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3tzaXN0ZW1hQWd1YS5kdFVsdGltYUFsdGVyYWNhbyB8IGRhdGU6J21lZGl1bURhdGUnfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhLm5tTG9jYWxpZGFkZVxcXCI+Tm0gTG9jYWxpZGFkZTwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7c2lzdGVtYUFndWEubm1Mb2NhbGlkYWRlfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhLnF0ZFBvcHVsYWNhb0FjdHVhbFxcXCI+UXRkIFBvcHVsYWNhbyBBY3R1YWw8L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3Npc3RlbWFBZ3VhLnF0ZFBvcHVsYWNhb0FjdHVhbH19PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5xdGRDYXNhc0xvY2FsaWRhZGVcXFwiPlF0ZCBDYXNhcyBMb2NhbGlkYWRlPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3tzaXN0ZW1hQWd1YS5xdGRDYXNhc0xvY2FsaWRhZGV9fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuc2lzdGVtYUFndWEubm1UcENvbXVuYUFsZGVpYVxcXCI+Tm0gVHAgQ29tdW5hIEFsZGVpYTwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7c2lzdGVtYUFndWEubm1UcENvbXVuYUFsZGVpYX19PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5ubVRwQXJlYVxcXCI+Tm0gVHAgQXJlYTwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7c2lzdGVtYUFndWEubm1UcEFyZWF9fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuc2lzdGVtYUFndWEucG9zc3VpU2lzdGVtYUFndWFcXFwiPlBvc3N1aSBTaXN0ZW1hIEFndWE8L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3Npc3RlbWFBZ3VhLnBvc3N1aVNpc3RlbWFBZ3VhfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhLm5tU2lzdGVtYUFndWFcXFwiPk5tIFNpc3RlbWEgQWd1YTwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7c2lzdGVtYUFndWEubm1TaXN0ZW1hQWd1YX19PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5ubUZvbnRlQWd1YVxcXCI+Tm0gRm9udGUgQWd1YTwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7c2lzdGVtYUFndWEubm1Gb250ZUFndWF9fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuc2lzdGVtYUFndWEubGF0aXR1ZGVcXFwiPkxhdGl0dWRlPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3tzaXN0ZW1hQWd1YS5sYXRpdHVkZX19PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5sb25naXR1ZGVcXFwiPkxvbmdpdHVkZTwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7c2lzdGVtYUFndWEubG9uZ2l0dWRlfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhLmFsdGl0dWRlXFxcIj5BbHRpdHVkZTwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7c2lzdGVtYUFndWEuYWx0aXR1ZGV9fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuc2lzdGVtYUFndWEubm1UcEZvbnRlXFxcIj5ObSBUcCBGb250ZTwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7c2lzdGVtYUFndWEubm1UcEZvbnRlfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhLm5tRm9udGVBZ3VhVXRpbGl6YWRhXFxcIj5ObSBGb250ZSBBZ3VhIFV0aWxpemFkYTwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7c2lzdGVtYUFndWEubm1Gb250ZUFndWFVdGlsaXphZGF9fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuc2lzdGVtYUFndWEubm1UaXBvQm9tYmFcXFwiPk5tIFRpcG8gQm9tYmE8L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3Npc3RlbWFBZ3VhLm5tVGlwb0JvbWJhfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhLnF0ZENhc2FzQWd1YUxpZ2FkYVxcXCI+UXRkIENhc2FzIEFndWEgTGlnYWRhPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3tzaXN0ZW1hQWd1YS5xdGRDYXNhc0FndWFMaWdhZGF9fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuc2lzdGVtYUFndWEucXRkQ2hhZmFyaXNlc0Z1bmNpb25hbmRvXFxcIj5RdGQgQ2hhZmFyaXNlcyBGdW5jaW9uYW5kbzwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7c2lzdGVtYUFndWEucXRkQ2hhZmFyaXNlc0Z1bmNpb25hbmRvfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhLnF0ZENvbnRhZG9yZXNMaWdhZG9zXFxcIj5RdGQgQ29udGFkb3JlcyBMaWdhZG9zPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3tzaXN0ZW1hQWd1YS5xdGRDb250YWRvcmVzTGlnYWRvc319PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5xdGRCZWJlZG91cm9zXFxcIj5RdGQgQmViZWRvdXJvczwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7c2lzdGVtYUFndWEucXRkQmViZWRvdXJvc319PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5xdGRIYWJpdGFudGVzQWNlc3NvU2Vydmljb0FndWFcXFwiPlF0ZCBIYWJpdGFudGVzIEFjZXNzbyBTZXJ2aWNvIEFndWE8L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3Npc3RlbWFBZ3VhLnF0ZEhhYml0YW50ZXNBY2Vzc29TZXJ2aWNvQWd1YX19PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5hbm9Db25zdHJ1Y2FvU2lzdGVtYVxcXCI+QW5vIENvbnN0cnVjYW8gU2lzdGVtYTwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7c2lzdGVtYUFndWEuYW5vQ29uc3RydWNhb1Npc3RlbWF9fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuc2lzdGVtYUFndWEubm1UcEF2YXJpYVNpc3RlbWFcXFwiPk5tIFRwIEF2YXJpYSBTaXN0ZW1hPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3tzaXN0ZW1hQWd1YS5ubVRwQXZhcmlhU2lzdGVtYX19PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5jYXVzYUF2YXJpYVNpc3RlbWFcXFwiPkNhdXNhIEF2YXJpYSBTaXN0ZW1hPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3tzaXN0ZW1hQWd1YS5jYXVzYUF2YXJpYVNpc3RlbWF9fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuc2lzdGVtYUFndWEuc3RhdHVzUmVzb2x1Y2FvXFxcIj5TdGF0dXMgUmVzb2x1Y2FvPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3tzaXN0ZW1hQWd1YS5zdGF0dXNSZXNvbHVjYW99fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuc2lzdGVtYUFndWEudGVtcG9TZXJ2aWNvRGlzcG9uaXZlbFxcXCI+VGVtcG8gU2VydmljbyBEaXNwb25pdmVsPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3tzaXN0ZW1hQWd1YS50ZW1wb1NlcnZpY29EaXNwb25pdmVsfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhLnF0ZERpYW1ldHJvQ29uZHV0YUFkdXRvcmFBZ3VhQnJ1dGFcXFwiPlF0ZCBEaWFtZXRybyBDb25kdXRhIEFkdXRvcmEgQWd1YSBCcnV0YTwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7c2lzdGVtYUFndWEucXRkRGlhbWV0cm9Db25kdXRhQWR1dG9yYUFndWFCcnV0YX19PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5xdGRDb21wcmltZW50b0NvbmR1dGFBZHV0b3JhQWd1YUJydXRhXFxcIj5RdGQgQ29tcHJpbWVudG8gQ29uZHV0YSBBZHV0b3JhIEFndWEgQnJ1dGE8L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3Npc3RlbWFBZ3VhLnF0ZENvbXByaW1lbnRvQ29uZHV0YUFkdXRvcmFBZ3VhQnJ1dGF9fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuc2lzdGVtYUFndWEucXRkRGlhbWV0cm9Db25kdXRhQWR1dG9yYUFndWFUcmF0YWRhXFxcIj5RdGQgRGlhbWV0cm8gQ29uZHV0YSBBZHV0b3JhIEFndWEgVHJhdGFkYTwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7c2lzdGVtYUFndWEucXRkRGlhbWV0cm9Db25kdXRhQWR1dG9yYUFndWFUcmF0YWRhfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhLnF0ZENvbXByaW1lbnRvQ29uZHV0YUFkdXRvcmFBZ3VhVHJhdGFkYVxcXCI+UXRkIENvbXByaW1lbnRvIENvbmR1dGEgQWR1dG9yYSBBZ3VhIFRyYXRhZGE8L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3Npc3RlbWFBZ3VhLnF0ZENvbXByaW1lbnRvQ29uZHV0YUFkdXRvcmFBZ3VhVHJhdGFkYX19PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5kZXNjTWF0ZXJpYWxVdGlsaXphZG9Db25kdXRhc1xcXCI+RGVzYyBNYXRlcmlhbCBVdGlsaXphZG8gQ29uZHV0YXM8L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3Npc3RlbWFBZ3VhLmRlc2NNYXRlcmlhbFV0aWxpemFkb0NvbmR1dGFzfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhLnF0ZFJlc2VydmF0b3Jpb3NBcG9pYWRvc1xcXCI+UXRkIFJlc2VydmF0b3Jpb3MgQXBvaWFkb3M8L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3Npc3RlbWFBZ3VhLnF0ZFJlc2VydmF0b3Jpb3NBcG9pYWRvc319PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5xdGRDYXBhY2lkYWRlUmVzZXJ2YXRvcmlvc0Fwb2lhZG9zXFxcIj5RdGQgQ2FwYWNpZGFkZSBSZXNlcnZhdG9yaW9zIEFwb2lhZG9zPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3tzaXN0ZW1hQWd1YS5xdGRDYXBhY2lkYWRlUmVzZXJ2YXRvcmlvc0Fwb2lhZG9zfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhLnF0ZFJlc2VydmF0b3Jpb3NFbGV2YWRvc1xcXCI+UXRkIFJlc2VydmF0b3Jpb3MgRWxldmFkb3M8L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3Npc3RlbWFBZ3VhLnF0ZFJlc2VydmF0b3Jpb3NFbGV2YWRvc319PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5xdGRDYXBhY2lkYWRlUmVzZXJ2YXRvcmlvc0VsZXZhZG9zXFxcIj5RdGQgQ2FwYWNpZGFkZSBSZXNlcnZhdG9yaW9zIEVsZXZhZG9zPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3tzaXN0ZW1hQWd1YS5xdGRDYXBhY2lkYWRlUmVzZXJ2YXRvcmlvc0VsZXZhZG9zfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhLmFsdHVyYVJlc2VydmF0b3Jpb3NFbGV2YWRvc1xcXCI+QWx0dXJhIFJlc2VydmF0b3Jpb3MgRWxldmFkb3M8L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3Npc3RlbWFBZ3VhLmFsdHVyYVJlc2VydmF0b3Jpb3NFbGV2YWRvc319PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5ubVRwVHJhdGFtZW50b0FndWFcXFwiPk5tIFRwIFRyYXRhbWVudG8gQWd1YTwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7c2lzdGVtYUFndWEubm1UcFRyYXRhbWVudG9BZ3VhfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhLm5tVHBUcmF0YW1lbnRvUGFkcmFvVXRpbGl6YWRvXFxcIj5ObSBUcCBUcmF0YW1lbnRvIFBhZHJhbyBVdGlsaXphZG88L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3Npc3RlbWFBZ3VhLm5tVHBUcmF0YW1lbnRvUGFkcmFvVXRpbGl6YWRvfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhLm5tVHBUcmF0YW1lbnRvQmFzaWNvVXRpbGl6YWRvXFxcIj5ObSBUcCBUcmF0YW1lbnRvIEJhc2ljbyBVdGlsaXphZG88L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3Npc3RlbWFBZ3VhLm5tVHBUcmF0YW1lbnRvQmFzaWNvVXRpbGl6YWRvfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhLmV4aXN0ZUF2YXJpYVNpc3RlbWFUcmF0YW1lbnRvXFxcIj5FeGlzdGUgQXZhcmlhIFNpc3RlbWEgVHJhdGFtZW50bzwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7c2lzdGVtYUFndWEuZXhpc3RlQXZhcmlhU2lzdGVtYVRyYXRhbWVudG99fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuc2lzdGVtYUFndWEuZXhpc3RlTW90aXZvQXVzZW5jaWFUcmF0YW1lbnRvXFxcIj5FeGlzdGUgTW90aXZvIEF1c2VuY2lhIFRyYXRhbWVudG88L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3Npc3RlbWFBZ3VhLmV4aXN0ZU1vdGl2b0F1c2VuY2lhVHJhdGFtZW50b319PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5ubUVxdWlwYW1lbnRvc0NvbUF2YXJpYVxcXCI+Tm0gRXF1aXBhbWVudG9zIENvbSBBdmFyaWE8L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3Npc3RlbWFBZ3VhLm5tRXF1aXBhbWVudG9zQ29tQXZhcmlhfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhLmNhdWRhbERvU2lzdGVtYVxcXCI+Q2F1ZGFsIERvIFNpc3RlbWE8L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3Npc3RlbWFBZ3VhLmNhdWRhbERvU2lzdGVtYX19PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5xdGRDb25zdW1vUGVyY2FwdGFMaXRyb3NIb21lbURpYVxcXCI+UXRkIENvbnN1bW8gUGVyY2FwdGEgTGl0cm9zIEhvbWVtIERpYTwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7c2lzdGVtYUFndWEucXRkQ29uc3Vtb1BlcmNhcHRhTGl0cm9zSG9tZW1EaWF9fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuc2lzdGVtYUFndWEucXRkRG90YWNhb1BlcmNhcHRhXFxcIj5RdGQgRG90YWNhbyBQZXJjYXB0YTwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7c2lzdGVtYUFndWEucXRkRG90YWNhb1BlcmNhcHRhfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhLnF0ZERpYXJpYUhvcmFzU2Vydmljb1Npc3RlbWFcXFwiPlF0ZCBEaWFyaWEgSG9yYXMgU2VydmljbyBTaXN0ZW1hPC9zcGFuPjwvZHQ+IDxkZD4gPHNwYW4+e3tzaXN0ZW1hQWd1YS5xdGREaWFyaWFIb3Jhc1NlcnZpY29TaXN0ZW1hfX08L3NwYW4+IDwvZGQ+IDxkdD48c3BhbiBqaGlUcmFuc2xhdGU9XFxcInNpc2FzQXBwLnNpc3RlbWFBZ3VhLmVzcXVlbWFcXFwiPkVzcXVlbWE8L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3Npc3RlbWFBZ3VhLmVzcXVlbWF9fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuc2lzdGVtYUFndWEubm1Nb2RlbG9Cb21iYU1hbnVhbFV0aWxpemFkYVxcXCI+Tm0gTW9kZWxvIEJvbWJhIE1hbnVhbCBVdGlsaXphZGE8L3NwYW4+PC9kdD4gPGRkPiA8c3Bhbj57e3Npc3RlbWFBZ3VhLm5tTW9kZWxvQm9tYmFNYW51YWxVdGlsaXphZGF9fTwvc3Bhbj4gPC9kZD4gPGR0PjxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwic2lzYXNBcHAuc2lzdGVtYUFndWEubm1UcEJvbWJhRW5lcmdpYVxcXCI+Tm0gVHAgQm9tYmEgRW5lcmdpYTwvc3Bhbj48L2R0PiA8ZGQ+IDxzcGFuPnt7c2lzdGVtYUFndWEubm1UcEJvbWJhRW5lcmdpYX19PC9zcGFuPiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5pZFNpdHVhY2FvXFxcIj5JZCBTaXR1YWNhbzwvc3Bhbj48L2R0PiA8ZGQ+IDxkaXYgKm5nSWY9XFxcInNpc3RlbWFBZ3VhLnNpdHVhY2FvXFxcIj4gPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9zaXR1YWNhbycsIHNpc3RlbWFBZ3VhLnNpdHVhY2FvXVxcXCI+e3tzaXN0ZW1hQWd1YS5zaXR1YWNhby5ubVNpdHVhY2FvfX08L2E+IDwvZGl2PiA8L2RkPiA8ZHQ+PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJzaXNhc0FwcC5zaXN0ZW1hQWd1YS5pZENvbXVuYVxcXCI+SWQgQ29tdW5hPC9zcGFuPjwvZHQ+IDxkZD4gPGRpdiAqbmdJZj1cXFwic2lzdGVtYUFndWEuY29tdW5hXFxcIj4gPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9jb211bmEnLCBzaXN0ZW1hQWd1YS5jb211bmFdXFxcIj57e3Npc3RlbWFBZ3VhLmNvbXVuYS5ubUNvbXVuYX19PC9hPiA8L2Rpdj4gPC9kZD4gPC9kbD4gPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIChjbGljayk9XFxcInByZXZpb3VzU3RhdGUoKVxcXCIgY2xhc3M9XFxcImJ0biBidG4taW5mb1xcXCI+IDxzcGFuIGNsYXNzPVxcXCJmYSBmYS1hcnJvdy1sZWZ0XFxcIj48L3NwYW4+Jm5ic3A7PHNwYW4gamhpVHJhbnNsYXRlPVxcXCJlbnRpdHkuYWN0aW9uLmJhY2tcXFwiPiBCYWNrPC9zcGFuPiA8L2J1dHRvbj4gPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIFtyb3V0ZXJMaW5rXT1cXFwiWycvJywgeyBvdXRsZXRzOiB7IHBvcHVwOiAnc2lzdGVtYS1hZ3VhLycrIHNpc3RlbWFBZ3VhLmlkICsgJy9lZGl0J30gfV1cXFwiIHJlcGxhY2VVcmw9XFxcInRydWVcXFwiIHF1ZXJ5UGFyYW1zSGFuZGxpbmc9XFxcIm1lcmdlXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj4gPHNwYW4gY2xhc3M9XFxcImZhIGZhLXBlbmNpbFxcXCI+PC9zcGFuPiZuYnNwOzxzcGFuIGpoaVRyYW5zbGF0ZT1cXFwiZW50aXR5LmFjdGlvbi5lZGl0XFxcIj4gRWRpdDwvc3Bhbj4gPC9idXR0b24+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvc2lzdGVtYS1hZ3VhL3Npc3RlbWEtYWd1YS1kZXRhaWwuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9lbnRpdGllcy9zaXN0ZW1hLWFndWEvc2lzdGVtYS1hZ3VhLWRldGFpbC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/sistema-agua/sistema-agua-detail.component.html\n");

/***/ })

})