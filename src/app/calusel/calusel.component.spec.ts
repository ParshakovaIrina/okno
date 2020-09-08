import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaluselComponent } from './calusel.component';

describe('CaluselComponent', () => {
  let component: CaluselComponent;
  let fixture: ComponentFixture<CaluselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaluselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaluselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
