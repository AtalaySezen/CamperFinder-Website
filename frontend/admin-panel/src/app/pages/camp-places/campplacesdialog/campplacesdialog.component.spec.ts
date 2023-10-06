import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampplacesdialogComponent } from './campplacesdialog.component';

describe('CampplacesdialogComponent', () => {
  let component: CampplacesdialogComponent;
  let fixture: ComponentFixture<CampplacesdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampplacesdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampplacesdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
