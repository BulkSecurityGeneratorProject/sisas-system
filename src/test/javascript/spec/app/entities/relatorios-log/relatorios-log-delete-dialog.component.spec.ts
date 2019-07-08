/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { sisasTestModule } from '../../../test.module';
import { RelatoriosLogDeleteDialogComponent } from '../../../../../../main/webapp/app/entities/relatorios-log/relatorios-log-delete-dialog.component';
import { RelatoriosLogService } from '../../../../../../main/webapp/app/entities/relatorios-log/relatorios-log.service';

describe('Component Tests', () => {

    describe('RelatoriosLog Management Delete Component', () => {
        let comp: RelatoriosLogDeleteDialogComponent;
        let fixture: ComponentFixture<RelatoriosLogDeleteDialogComponent>;
        let service: RelatoriosLogService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [sisasTestModule],
                declarations: [RelatoriosLogDeleteDialogComponent],
                providers: [
                    RelatoriosLogService
                ]
            })
            .overrideTemplate(RelatoriosLogDeleteDialogComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(RelatoriosLogDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(RelatoriosLogService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete',
                inject([],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });

});
