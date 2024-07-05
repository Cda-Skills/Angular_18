import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeInscritsComponent } from './liste-inscrits.component';

describe('ListeInscritsComponent', () => {
  let component: ListeInscritsComponent;
  let fixture: ComponentFixture<ListeInscritsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeInscritsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeInscritsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
