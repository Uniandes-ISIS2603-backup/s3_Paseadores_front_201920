import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaseadorDetailComponent } from './paseador-detail.component';

describe('PaseadorDetailComponent', () => {
  let component: PaseadorDetailComponent;
  let fixture: ComponentFixture<PaseadorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaseadorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaseadorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
