import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscritsListComponent } from './inscrits-list.component';

describe('InscritsListComponent', () => {
  let component: InscritsListComponent;
  let fixture: ComponentFixture<InscritsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscritsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscritsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
