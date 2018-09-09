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
  constructor(
    parent: ElementRef,
    cdr: ChangeDetectorRef,
  ) { super(parent, cdr); }

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
