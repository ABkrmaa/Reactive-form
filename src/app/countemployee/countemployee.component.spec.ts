import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountemployeeComponent } from './countemployee.component';

describe('CountemployeeComponent', () => {
  let component: CountemployeeComponent;
  let fixture: ComponentFixture<CountemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountemployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
