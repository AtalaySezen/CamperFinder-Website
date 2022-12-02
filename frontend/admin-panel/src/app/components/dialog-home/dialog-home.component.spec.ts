import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHomeComponent } from './dialog-home.component';

describe('DialogHomeComponent', () => {
  let component: DialogHomeComponent;
  let fixture: ComponentFixture<DialogHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
