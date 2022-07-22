import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFlightComponent } from './update-flight.component';

describe('UpdateFlightComponent', () => {
  let component: UpdateFlightComponent;
  let fixture: ComponentFixture<UpdateFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
