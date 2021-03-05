import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectostanComponent } from './selectostan.component';

describe('SelectostanComponent', () => {
  let component: SelectostanComponent;
  let fixture: ComponentFixture<SelectostanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectostanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectostanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
