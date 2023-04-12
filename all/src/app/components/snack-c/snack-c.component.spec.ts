import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackCComponent } from './snack-c.component';

describe('SnackCComponent', () => {
  let component: SnackCComponent;
  let fixture: ComponentFixture<SnackCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
