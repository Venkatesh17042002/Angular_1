import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackboxComponent } from './snackbox.component';

describe('SnackboxComponent', () => {
  let component: SnackboxComponent;
  let fixture: ComponentFixture<SnackboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
