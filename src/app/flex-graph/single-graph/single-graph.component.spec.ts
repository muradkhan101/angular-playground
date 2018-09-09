import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGraphComponent } from './single-graph.component';

describe('SingleGraphComponent', () => {
  let component: SingleGraphComponent;
  let fixture: ComponentFixture<SingleGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
