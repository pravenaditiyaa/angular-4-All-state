import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinaluiComponent } from './finalui.component';

describe('FinaluiComponent', () => {
  let component: FinaluiComponent;
  let fixture: ComponentFixture<FinaluiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinaluiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinaluiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
