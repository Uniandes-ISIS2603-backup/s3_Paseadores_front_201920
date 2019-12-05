import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroAyudaDetailComponent } from './centro-ayuda-detail.component';

describe('CentroAyudaDetailComponent', () => {
  let component: CentroAyudaDetailComponent;
  let fixture: ComponentFixture<CentroAyudaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroAyudaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroAyudaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
