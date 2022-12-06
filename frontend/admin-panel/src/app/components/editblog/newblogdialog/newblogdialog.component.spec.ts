import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewblogdialogComponent } from './newblogdialog.component';

describe('NewblogdialogComponent', () => {
  let component: NewblogdialogComponent;
  let fixture: ComponentFixture<NewblogdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewblogdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewblogdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
