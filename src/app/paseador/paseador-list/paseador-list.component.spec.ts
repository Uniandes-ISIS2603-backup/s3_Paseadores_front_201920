import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaseadorListComponent } from './paseador-list.component';

describe('PaseadorListComponent', () => {
  let component: PaseadorListComponent;
  let fixture: ComponentFixture<PaseadorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaseadorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaseadorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
