import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PqrDetailComponent } from './pqr-detail.component';

describe('PqrDetailComponent', () => {
  let component: PqrDetailComponent;
  let fixture: ComponentFixture<PqrDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PqrDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PqrDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
