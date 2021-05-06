import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamosReestructuradosComponent } from './prestamos-reestructurados.component';

describe('PrestamosReestructuradosComponent', () => {
  let component: PrestamosReestructuradosComponent;
  let fixture: ComponentFixture<PrestamosReestructuradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestamosReestructuradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamosReestructuradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
