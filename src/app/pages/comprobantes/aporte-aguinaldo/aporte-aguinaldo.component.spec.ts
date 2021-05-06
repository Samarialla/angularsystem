import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AporteAguinaldoComponent } from './aporte-aguinaldo.component';

describe('AporteAguinaldoComponent', () => {
  let component: AporteAguinaldoComponent;
  let fixture: ComponentFixture<AporteAguinaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AporteAguinaldoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AporteAguinaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
