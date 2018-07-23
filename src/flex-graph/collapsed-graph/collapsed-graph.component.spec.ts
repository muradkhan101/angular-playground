import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsedGraphComponent } from './collapsed-graph.component';

describe('CollapsedGraphComponent', () => {
  let component: CollapsedGraphComponent;
  let fixture: ComponentFixture<CollapsedGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsedGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsedGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
