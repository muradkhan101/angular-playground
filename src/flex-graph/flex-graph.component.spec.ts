import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexGraphComponent } from './flex-graph.component';

describe('FlexGraphComponent', () => {
  let component: FlexGraphComponent;
  let fixture: ComponentFixture<FlexGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
