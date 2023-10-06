import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampPlacesComponent } from './camp-places.component';

describe('CampPlacesComponent', () => {
  let component: CampPlacesComponent;
  let fixture: ComponentFixture<CampPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampPlacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
