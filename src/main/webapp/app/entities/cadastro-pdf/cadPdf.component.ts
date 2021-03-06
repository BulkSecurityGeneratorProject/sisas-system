import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { CadPdfService } from './cadPdf.service';
import {ITEMS_PER_PAGE, Principal} from '../../shared';
import {ArquivosPortal} from './cadPdf.model';

@Component({
    selector: 'jhi-produto',
    templateUrl: './cadPdf.component.html',
    styleUrls: ['./cadPdf.css']
})
export class CadPdfComponent implements OnInit, OnDestroy {

    produtos: ArquivosPortal[];
    produtosFilt: ArquivosPortal[];
    currentAccount: any;
    eventSubscriber: Subscription;
    itemsPerPage: number;
    links: any;
    page: any;
    predicate: any;
    reverse: any;
    totalItems: number;
    esconderFiltros: boolean;

    valorInicial: number;
    valorAtualiza: number;
    valorAtual: number;

    constructor(
        private bannerService: CadPdfService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
        this.produtos = [];
        this.produtosFilt = [];
        this.itemsPerPage = ITEMS_PER_PAGE;
        this.page = 0;
        this.predicate = 'id';
        this.reverse = true;
        this.esconderFiltros = true;

        this.valorInicial = 8;
        this.valorAtualiza = 4;
        this.valorAtual = 8;
    }

    loadAll() {
        this.bannerService.query({
            page: this.page,
            size: this.itemsPerPage,
            sort: this.sort()
        }).subscribe(
            (res: HttpResponse<ArquivosPortal[]>) => {
                console.log(res.body);
                this.produtosFilt = res.body;
                this.validaResult();

            }, (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    validaResult() {
        if (this.produtosFilt && this.produtosFilt.length > this.valorInicial) {
            this.produtos = this.produtosFilt.slice(0, this.valorInicial);
        } else {
            this.produtos = this.produtosFilt;
        }
    }

    loadMore() {
        this.valorAtual += this.valorAtualiza;
        if (this.valorAtual >= this.produtosFilt.length) {
            this.produtos = this.produtosFilt;
        } else {
            this.produtos = this.produtosFilt.slice(0, this.valorAtual);
        }
    }

    reset() {
        this.page = 0;
        this.produtos = [];
        this.loadAll();
    }

    loadPage(page) {
        this.page = page;
        this.loadAll();
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInProdutos();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: ArquivosPortal) {
        return item.id;
    }

    registerChangeInProdutos() {
        this.eventSubscriber = this.eventManager.subscribe('produtoListModification', (response) => this.reset());
    }

    sort() {
        const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }

}
