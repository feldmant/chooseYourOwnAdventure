import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieryDeathComponent } from './fiery-death.component';

describe('FieryDeathComponent', () => {
  let component: FieryDeathComponent;
  let fixture: ComponentFixture<FieryDeathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieryDeathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieryDeathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
