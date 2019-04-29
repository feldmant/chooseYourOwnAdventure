import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappilyEverAfterComponent } from './happily-ever-after.component';

describe('HappilyEverAfterComponent', () => {
  let component: HappilyEverAfterComponent;
  let fixture: ComponentFixture<HappilyEverAfterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HappilyEverAfterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappilyEverAfterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
