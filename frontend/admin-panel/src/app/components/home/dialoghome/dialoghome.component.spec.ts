import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoghomeComponent } from './dialoghome.component';

describe('DialoghomeComponent', () => {
  let component: DialoghomeComponent;
  let fixture: ComponentFixture<DialoghomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialoghomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialoghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
