import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCompComponent } from './other-comp.component';

describe('OtherCompComponent', () => {
  let component: OtherCompComponent;
  let fixture: ComponentFixture<OtherCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
