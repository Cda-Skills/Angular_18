import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopmenuComponent } from './topmenu.component';

describe('TopmenuComponent', () => {
  let component: TopmenuComponent;
  let fixture: ComponentFixture<TopmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopmenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
