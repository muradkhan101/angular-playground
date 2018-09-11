import { Component, OnInit, Input, ChangeDetectorRef, ElementRef, Output, EventEmitter } from '@angular/core';
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
  @Output() toggleCollapse = new EventEmitter();

  state = {
    isCollapsed: true,
  }
  constructor(
    parent: ElementRef,
    cdr: ChangeDetectorRef,
  ) { super(parent, cdr); }
  
  updateCollapseStatus(status) {
    this.state.isCollapsed = status;
    this.cdr.detectChanges();
    
    window.requestAnimationFrame( () => window.dispatchEvent(new Event('resize')));
  }

  shouldRenderCollapsed(node) {
    if (!node) return false;

    return node.Type === 'Grouping'
      && ['Position'].includes(node.Title)
      && node.Children.length > 1;
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
