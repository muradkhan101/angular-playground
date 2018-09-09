import { Component, OnInit, Input, ChangeDetectorRef, ElementRef } from '@angular/core';
import { IGraph } from '../shared/interfaces';
import { BaseGraphComponent } from '../shared/base-graph';

@Component({
  selector: 'app-grouped-graph',
  templateUrl: './grouped-graph.component.html',
  styleUrls: ['./grouped-graph.component.scss']
})
export class GroupedGraphComponent extends BaseGraphComponent implements OnInit {
  @Input() childCollection: Array<IGraph>;
  @Input() firstRendered: boolean;
  state = {
    collapsedChildren: []
  }
  constructor(
    parent: ElementRef,
    cdr: ChangeDetectorRef,
  ) { super(parent, cdr); }
  ngOnInit() {
    // console.log('[INFO] Next Tree');
    this.state.collapsedChildren = this.collapseChildren(this.childCollection);
    // console.log('[INFO] Child Collection', this.childCollection);
    // console.log('[INFO] Collapsed Children', this.state.collapsedChildren);
    // console.log('');
  }

  private collapseChildren(children: Array<IGraph>) {
    // function findPeopleNodes(node: IGraph) {
    //   if (node.Type === 'Person') collapsedChildren.push(node);
    //   else children.forEach(child => findPeopleNodes(child));
    // }
    // let collapsedChildren: Array<IGraph> = [];
    // children.forEach(child => findPeopleNodes(child));
    // console.log('COLLAPSED CHILDREN', collapsedChildren)
    // return collapsedChildren;

    return children.reduce(( collection: Array<IGraph>, child ) => {
      child.Children.forEach(subChild => collection.push(subChild))
      return collection;
    }, [])
  }

  private getTreeDepth(node: IGraph, depth = 0) {
    if (node.Children.length === 0) return depth;

    let depthList = node.Children.map(node => this.getTreeDepth(node, depth + 1));
    return Math.max(...depthList);
  }
}
