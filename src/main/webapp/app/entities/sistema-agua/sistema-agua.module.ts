import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SisasSharedModule } from '../../shared';
import {
    SistemaAguaService,
    SistemaAguaPopupService,
    SistemaAguaComponent,
    SistemaAguaDetailComponent,
    SistemaAguaDialogComponent,
    SistemaAguaPopupComponent,
    SistemaAguaDeletePopupComponent,
    SistemaAguaDeleteDialogComponent,
    sistemaAguaRoute,
    sistemaAguaPopupRoute,
    SistemaAguaResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...sistemaAguaRoute,
    ...sistemaAguaPopupRoute,
];

@NgModule({
    imports: [
        SisasSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        SistemaAguaComponent,
        SistemaAguaDetailComponent,
        SistemaAguaDialogComponent,
        SistemaAguaDeleteDialogComponent,
        SistemaAguaPopupComponent,
        SistemaAguaDeletePopupComponent,
    ],
    entryComponents: [
        SistemaAguaComponent,
        SistemaAguaDialogComponent,
        SistemaAguaPopupComponent,
        SistemaAguaDeleteDialogComponent,
        SistemaAguaDeletePopupComponent,
    ],
    providers: [
        SistemaAguaService,
        SistemaAguaPopupService,
        SistemaAguaResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SisasSistemaAguaModule {}