import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedGraphComponent } from './grouped-graph.component';

describe('GroupedGraphComponent', () => {
  let component: GroupedGraphComponent;
  let fixture: ComponentFixture<GroupedGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupedGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
