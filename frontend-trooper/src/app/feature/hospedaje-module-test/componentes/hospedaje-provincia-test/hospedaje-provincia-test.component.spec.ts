import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospedajeProvinciaTestComponent } from './hospedaje-provincia-test.component';

describe('HospedajeProvinciaTestComponent', () => {
  let component: HospedajeProvinciaTestComponent;
  let fixture: ComponentFixture<HospedajeProvinciaTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HospedajeProvinciaTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospedajeProvinciaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
