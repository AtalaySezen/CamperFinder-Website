import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialognewdetailComponent } from './dialognewdetail.component';

describe('DialognewdetailComponent', () => {
  let component: DialognewdetailComponent;
  let fixture: ComponentFixture<DialognewdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialognewdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialognewdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
