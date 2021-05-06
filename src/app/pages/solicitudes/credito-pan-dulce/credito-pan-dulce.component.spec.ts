import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoPanDulceComponent } from './credito-pan-dulce.component';

describe('CreditoPanDulceComponent', () => {
  let component: CreditoPanDulceComponent;
  let fixture: ComponentFixture<CreditoPanDulceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditoPanDulceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditoPanDulceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
