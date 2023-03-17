import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacedetailDialogComponent } from './placedetail-dialog.component';

describe('PlacedetailDialogComponent', () => {
  let component: PlacedetailDialogComponent;
  let fixture: ComponentFixture<PlacedetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacedetailDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacedetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
