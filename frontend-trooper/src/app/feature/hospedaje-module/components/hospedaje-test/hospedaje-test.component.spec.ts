import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospedajeTestComponent } from './hospedaje-test.component';

describe('HospedajeTestComponent', () => {
  let component: HospedajeTestComponent;
  let fixture: ComponentFixture<HospedajeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HospedajeTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospedajeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
