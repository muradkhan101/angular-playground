import { Component, OnInit, Input, ChangeDetectorRef, ElementRef, Output, EventEmitter } from '@angular/core';
import { IGraph } from '../shared/interfaces';
import { BaseGraphComponent } from '../shared/base-graph';

@Component({
  selector: 'app-grouped-graph',
  templateUrl: './grouped-graph.component.html',
  styleUrls: ['./grouped-graph.component.scss', '../single-graph/single-graph.component.scss']
})
export class GroupedGraphComponent extends BaseGraphComponent implements OnInit {
  @Input() childCollection: Array<IGraph>;
  @Input() firstRendered: boolean;
  @Output() toggleCollapse = new EventEmitter();
  state = {
    collapsedChildren: [],
    Title: 'Multiple',
    SubTitle: '',
  }
  constructor(
    parent: ElementRef,
    cdr: ChangeDetectorRef,
  ) { super(parent, cdr); }
  ngOnInit() {
    let allGroupingNodes = this.childCollection
                            .map(node => node.Type === 'Grouping')
                            .reduce((state, next) => next && state);

    if (allGroupingNodes) {
      let backupNodes = this.childCollection;
      this.childCollection = this.collapseChildren(backupNodes);
      this.state.collapsedChildren = this.collapseChildren(this.childCollection);
    } else {
      this.state.collapsedChildren = this.collapseChildren(this.childCollection);
      this.state.SubTitle = this.childCollection[0].SubTitle;
    }
  }

  private collapseChildren(children: Array<IGraph>) {
    function findPeopleNodes(node: IGraph, depth = 0) {
      if (node.Type === 'Person' && depth > 0 && !children.includes(node)) collapsedChildren.push(node);
      else node.Children.forEach(child => findPeopleNodes(child, depth + 1));
    }
    let collapsedChildren: Array<IGraph> = [];
    children.forEach(findPeopleNodes);
    return collapsedChildren;

    // return children.reduce(( collection: Array<IGraph>, child ) => {
    //   child.Children.forEach(subChild => collection.push(subChild))
    //   return collection;
    // }, [])
  }

  private getTreeDepth(node: IGraph, depth = 0) {
    if (node.Children.length === 0) return depth;

    let depthList = node.Children.map(node => this.getTreeDepth(node, depth + 1));
    return Math.max(...depthList);
  }

  shouldEmitCollapse() {
    return this.firstRendered && this.state.collapsedChildren.length;
  }
  emitCollapse() {
    if (this.shouldEmitCollapse()) {
      this.toggleCollapse.emit(false);
    }
  }
}
