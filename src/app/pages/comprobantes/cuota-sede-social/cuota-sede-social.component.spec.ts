import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuotaSedeSocialComponent } from './cuota-sede-social.component';

describe('CuotaSedeSocialComponent', () => {
  let component: CuotaSedeSocialComponent;
  let fixture: ComponentFixture<CuotaSedeSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuotaSedeSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuotaSedeSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
