import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTendenciaComponent } from './detalle-tendencia.component';

describe('DetalleTendenciaComponent', () => {
  let component: DetalleTendenciaComponent;
  let fixture: ComponentFixture<DetalleTendenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleTendenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleTendenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
