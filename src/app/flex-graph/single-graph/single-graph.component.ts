import { Component, OnInit, Input, ChangeDetectorRef, ElementRef } from '@angular/core';
import { IGraph } from '../shared/interfaces';
import { mock } from '../mock';
import { BaseGraphComponent } from '../shared/base-graph';
@Component({
  selector: 'app-single-graph',
  templateUrl: './single-graph.component.html',
  styleUrls: ['./single-graph.component.scss']
})
export class SingleGraphComponent extends BaseGraphComponent implements OnInit {
  @Input() graph: IGraph = mock as any;
  @Input() isRoot = false;
  @Input() parentState = { isCollapsed: true, graph: undefined };

  state = {
    isCollapsed: true,
  }
  constructor(
    parent: ElementRef,
    cdr: ChangeDetectorRef,
  ) { super(parent, cdr); }
  shouldRenderCollapsed() {
    return this.graph.Type === 'Grouping'
      && this.graph.Title === 'Position'
      && this.graph.Children.length > 1;
  }
  ngOnInit() {
    if (this.isRoot && this.graph) {
      window.addEventListener('resize', this.ngAfterViewInit);
      this.cdr.detectChanges();
    }
  }

  ngAfterViewInit = () => {
    this.cdr.detectChanges();
  }
  ngOnDestroy() {
    if (this.isRoot) {
      window.removeEventListener('resize', this.ngAfterViewInit)
    }
  }
}
