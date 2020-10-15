import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimeDemoComponent } from './date-time-demo.component';

describe('DateTimeDemoComponent', () => {
  let component: DateTimeDemoComponent;
  let fixture: ComponentFixture<DateTimeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateTimeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTimeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
