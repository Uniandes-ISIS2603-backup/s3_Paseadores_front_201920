import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import { PaseadorCreateComponent } from './paseador-create.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {PaseadorService} from '../paseador.service';
import {Paseador} from '../paseador';


describe('PaseadorCreateComponent', () => {
	let component: PaseadorCreateComponent;
	let fixture: ComponentFixture<PaseadorCreateComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [
                {
                    provide: APP_BASE_HREF,
                    useValue: ''
                }, 
                PaseadorService,
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                           paramMap: convertToParamMap({id: 100})
                        }
                    }
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PaseadorCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});