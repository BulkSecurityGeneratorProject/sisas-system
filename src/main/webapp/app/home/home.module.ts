import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PtolomeuSharedModule } from '../shared';
import { HOME_ROUTE, HomeComponent } from './';
import { LogsService } from '../admin/logs/logs.service';
import { StateStorageService} from '../shared/auth/state-storage.service';

@NgModule({
    imports: [
        PtolomeuSharedModule,
        RouterModule.forChild([ HOME_ROUTE ])
    ],
    declarations: [
        HomeComponent,
    ],
    entryComponents: [
    ],
    providers: [
        LogsService,
        StateStorageService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PtolomeuHomeModule {}
