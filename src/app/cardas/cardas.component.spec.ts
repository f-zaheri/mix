import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardasComponent } from './cardas.component';

describe('CardasComponent', () => {
  let component: CardasComponent;
  let fixture: ComponentFixture<CardasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
