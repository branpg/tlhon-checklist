import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteTasklistComponent } from './complete-tasklist.component';

describe('CompleteTasklistComponent', () => {
  let component: CompleteTasklistComponent;
  let fixture: ComponentFixture<CompleteTasklistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompleteTasklistComponent]
    });
    fixture = TestBed.createComponent(CompleteTasklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
