import { Component, OnInit } from '@angular/core';
import { JhiAlertService } from 'ng-jhipster';
import { UserService } from '../../shared/user/user.service';
import { HttpResponse } from '@angular/common/http';
import { User } from '../../shared/user/user.model';
import { Principal } from '../../shared/auth/principal.service';
import {RelatoriosService} from '../relatorios.service';
import * as jsPDF from 'jspdf';
import {TableUtil} from '../../shared/util/tableUtil';
import * as html2canvas from 'html2canvas';
import {DadosRelatorio} from '../cobertura-sector-agua-provincial/dadosRelatorio.model';
import {TratamentoSistemaAguaDados} from '../tratamento-sistemas-agua/tratamentoSistemasAguaDados.model';

@Component({
    selector: 'jhi-trat-sist-agua',
    templateUrl: './tratamento-sistemas-agua.component.html',
    styleUrls: [
        'tratamento-sistemas-agua.css'
    ]
})

export class TratamentoSistemasAguaComponent implements OnInit {

    user: User;
    listaTabela: TratamentoSistemaAguaDados[];
    predicate: any;
    reverse: any;
    chart: any;
    totalSistemas = 0;
    totalPadrao = 0;
    totalBasico = 0;
    totalNaoRealiza = 0;
    totalOutros = 0;

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
        this.buscaDadosTabela();
    }

    public captureScreen(elementId) {
        const data = document.getElementById(elementId);
        (html2canvas as any)(data).then((canvas) => {
            const imgWidth = 206;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            const contentDataURL = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(contentDataURL, 'PNG', 2, 0, imgWidth, imgHeight);
            pdf.save('tratamentoSistemasAguas.pdf');
        }).catch(function(error) {
            // Error Handling
        });
    }

    exportTable(tabeId) {
        TableUtil.exportToExcel(tabeId);
    }

    buscaDadosTabela() {
        this.relatorioService.buscaDadosTratamentoSistemasAguaComunal().subscribe(
            (res: HttpResponse<TratamentoSistemaAguaDados[]>) => {
                this.listaTabela = res.body;
                this.listaTabela.forEach((p) => {
                    this.totalSistemas += p.sistemasAgua;
                    this.totalPadrao += p.padrao;
                    this.totalBasico += p.basico;
                    this.totalNaoRealiza += p.naoRealiza;
                    this.totalOutros += p.outros;
                });
            });
    }

    sort() {
        const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }

}
