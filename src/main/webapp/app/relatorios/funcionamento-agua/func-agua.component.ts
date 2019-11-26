import { Component, OnInit } from '@angular/core';
import { JhiAlertService } from 'ng-jhipster';
import { UserService } from '../../shared/user/user.service';
import { HttpResponse } from '@angular/common/http';
import { User } from '../../shared/user/user.model';
import { Principal } from '../../shared/auth/principal.service';
import {RelatoriosService} from '../relatorios.service';
import * as CanvasJS from '../../../content/js/canvasjs.min.js';
import {FuncAgua} from './FuncAgua.model';
import {DadosRelatorio} from '../cobertura-sector-agua/dadosRelatorio.model';

@Component({
    selector: 'jhi-func-sist-agua',
    templateUrl: './func-agua.component.html',
    styleUrls: [
        'func-agua.css'
    ]
})

export class FuncAguaComponent implements OnInit {

    user: User;
    listaTabela: FuncAgua[];
    tipoRelatorio: string;
    predicate: any;
    reverse: any;
    chart: any;
    listaFuncionam: DadosRelatorio[];
    listaNaoFuncionam: DadosRelatorio[];
    listaNumSistemas: DadosRelatorio[];

    totalnumeroSistemas = 0;
    totalBeneficiarios = 0;
    totalfuncionamAgua = 0;
    totalnaoFuncionamAgua = 0;
    totalfuncionamAguaPerc = 0;
    totalnaoFuncionamAguaPerc = 0;

    constructor(
        private jhiAlertService: JhiAlertService,
        private userService: UserService,
        private principal: Principal,
        private relatorioService: RelatoriosService,
    ) {}

    ngOnInit() {
        this.principal.identity().then((userIdentity) => {
            this.user = userIdentity;
        });
        this.tipoRelatorio = null;
    }

    validaTipoRelatorio() {
        if (this.tipoRelatorio === 'Nível Provincial') {
            this.buscaDadosTabela();
        }
        if (this.tipoRelatorio === 'Nível Municipal') {
            this.buscaDadosTabela();
        }
        if (this.tipoRelatorio === 'Nível Comunal') {
            this.buscaDadosTabela();
        }
    }

    voltarEscolha() {
        this.tipoRelatorio = null;
    }

    buscaDadosTabela() {
        this.relatorioService.buscaDadosFuncAguaChafariz().subscribe(
            (res: HttpResponse<FuncAgua[]>) => {
                this.listaTabela = res.body;
                console.log(this.listaTabela);

                this.listaNaoFuncionam = new Array();
                this.listaFuncionam = new Array();
                this.listaNumSistemas = new Array();

                this.listaTabela.forEach( (i) => {
                    this.totalnumeroSistemas += i.numeroSistemas;
                    this.totalfuncionamAgua += i.funcionamAgua;
                    this.totalnaoFuncionamAgua += i.naoFuncionamAgua;
                    this.totalfuncionamAguaPerc = 76;
                    this.totalnaoFuncionamAguaPerc = 24;

                    let item: DadosRelatorio = new DadosRelatorio();
                    item.label = i.nomeProvincia;
                    item.y = i.funcionamAguaPerc;
                    this.listaFuncionam.push(item);

                    item = new DadosRelatorio();
                    item.label = i.nomeProvincia;
                    item.y = i.naoFuncionamAguaPerc;
                    this.listaNaoFuncionam.push(item);

                    item = new DadosRelatorio();
                    item.label = i.nomeProvincia;
                    item.y = i.numeroSistemas;
                    this.listaNumSistemas.push(item);
                });

                if (this.tipoRelatorio === 'Nível Provincial') {
                    this.iniciarChartProvincial();
                }
            });
    }

    sort() {
        const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }

    iniciarChartProvincial() {
        this.chart = new CanvasJS.Chart('chartProvincial', {
            animationEnabled: true,
            theme: 'light2',
            title: {
                text: 'Funcionamento de Sistemas de Água'
            },
            axisX: {
                valueFormatString: 'string'
            },
            axisY: {
                suffix: '%'
            },
            toolTip: {
                shared: true
            },
            legend: {
                cursor: 'pointer'
            },
            data: [
                {
                    type: 'column',
                    name: 'Funcionam',
                    showInLegend: true,
                    xValueFormatString: 'string',
                    yValueFormatString: '#%',
                    dataPoints: this.listaFuncionam
                },
                {
                    type: 'column',
                    name: 'Nao Funcionam',
                    showInLegend: true,
                    xValueFormatString: 'string',
                    yValueFormatString: '#%',
                    dataPoints: this.listaNaoFuncionam
                },
                {
                    type: 'line',
                    name: 'Num Sistemas',
                    showInLegend: true,
                    yValueFormatString: '#',
                    dataPoints: this.listaNumSistemas
                }]
        });
        this.chart.render();
    }

}