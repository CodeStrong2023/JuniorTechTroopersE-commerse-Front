import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospedajeInfoComponent } from './hospedaje-info.component';

describe('HospedajeInfoComponent', () => {
  let component: HospedajeInfoComponent;
  let fixture: ComponentFixture<HospedajeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HospedajeInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospedajeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
