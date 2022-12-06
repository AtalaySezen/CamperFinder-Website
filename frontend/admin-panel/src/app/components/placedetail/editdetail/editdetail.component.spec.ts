import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdetailComponent } from './editdetail.component';

describe('EditdetailComponent', () => {
  let component: EditdetailComponent;
  let fixture: ComponentFixture<EditdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
