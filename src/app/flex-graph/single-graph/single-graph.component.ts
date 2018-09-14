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
  
  ngOnInit() {
    if (this.isRoot && this.graph) {
      window.addEventListener('resize', this.ngAfterViewInit);
      this.cdr.detectChanges();
    }
  }

  private processTreeForGaps(tree: IGraph, siblings: Array<IGraph>): IGraph {
    if (tree.Type === 'Grouping' && tree.Title === 'Layer' && siblings.length > 1) {
      let maxLevel = Math.max(...siblings.map(sibling => +sibling.SubTitle));
      siblings.forEach(sibling => {
        let levelGap = (maxLevel - +sibling.SubTitle) * 140;
        addGapToFirstPersonNode(sibling, levelGap);
      })
    }
    let newChildren = tree.Children.map(child => this.processTreeForGaps(child, tree.Children));
    return {
      ...tree,
      Children: newChildren as any
    }
    function addGapToFirstPersonNode(tree: IGraph, gap: number) {
      if (tree.Type !== 'Person') {
        tree.Children.forEach(child => addGapToFirstPersonNode(child, gap))
      } else {
        tree.LevelGap = gap;
      }
    }
  }

  private addShiftToPersonNodes(tree: IGraph): IGraph {
    if (tree.Type === 'Grouping' && tree.Title === 'Shift') {
      tree.Children = tree.Children.map(positionChild => {
        positionChild.Children = positionChild.Children.map(child => ({
          ...child,
          ShiftType: tree.SubTitle
        }) as any);
        return positionChild;
      }) as any;
    }
    let newChildren = tree.Children.map(this.addShiftToPersonNodes.bind(this)) as any;
    return {
      ...tree,
      Children: newChildren
    }
  }

  private preprocessGraph(graph: IGraph) {

  }

  updateCollapseStatus(status) {
    this.state.isCollapsed = status;
    this.cdr.detectChanges();
    
    setTimeout( () => window.dispatchEvent(new Event('resize')), 150);
  }

  shouldRenderCollapsed(node) {
    if (!node) return false;

    return node.Type === 'Grouping'
      // && ['Position', 'Layer'].includes(node.Title)
      && node.Children.length > 1;
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
