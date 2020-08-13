import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErformanceComponent } from './erformance.component';

describe('ErformanceComponent', () => {
  let component: ErformanceComponent;
  let fixture: ComponentFixture<ErformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
