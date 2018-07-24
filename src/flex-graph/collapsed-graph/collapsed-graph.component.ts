import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';
import { BaseGraphComponent, Graph } from '../common';

@Component({
  selector: '[collapsed-graph]',
  templateUrl: './collapsed-graph.component.html',
  styleUrls: ['../flex-graph.component.scss', './collapsed-graph.component.scss']
})
export class CollapsedGraphComponent extends BaseGraphComponent implements OnInit {
  // Toggle between rendering regular graph or collapsed graph
  @Input() renderCollapsed = false;
  @Input() childCollection: Array<Graph>;
  @Input() depth = 0;

  state = {
    title: '',
    subtitle: '',
    collapsedChildren: [],
    isCollapsed: true,
  }
  constructor(
    parent: ElementRef,
    cdr: ChangeDetectorRef,
  ) { super(parent, cdr); }

  ngOnInit() {
    if (this.childCollection.length) {
      // If collection has different titles, use Multiple as main
      let mismatchedTitles = this.childCollection.filter(node => node.Title !== this.childCollection[0].Title);
      if (mismatchedTitles.length) this.state.title = 'Multiple';
      else this.state.title = this.childCollection[0].Title;
      // Subtitles SHOULD be the same
      this.state.subtitle = this.childCollection[0].Subtitle;
  
      this.state.collapsedChildren = this.collapseChildren(this.childCollection);
    }
  }
  private collapseChildren(children: Array<Graph>): Array<Graph> {
    return children.reduce(( collection: Array<Graph>, child ) => {
      child.Children.forEach(subChild => collection.push(subChild))
      return collection;
    }, [])
  }
  toggleCollapse(shouldToggle) {
    if (shouldToggle) {
      this.state.isCollapsed = !this.state.isCollapsed;
      this.cdr.detectChanges();
    }
  }
}
