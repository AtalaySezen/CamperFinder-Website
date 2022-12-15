import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomsnackComponent } from './customsnack.component';

describe('CustomsnackComponent', () => {
  let component: CustomsnackComponent;
  let fixture: ComponentFixture<CustomsnackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomsnackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomsnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
