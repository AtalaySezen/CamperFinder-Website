import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditblogdialogComponent } from './editblogdialog.component';

describe('EditblogdialogComponent', () => {
  let component: EditblogdialogComponent;
  let fixture: ComponentFixture<EditblogdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditblogdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditblogdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
