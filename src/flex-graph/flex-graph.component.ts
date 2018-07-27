import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

declare const window: Window;

import { Store } from '@ngrx/store';

import { BaseGraphComponent, Graph} from './common';
import { StoreState, graphSelector } from './store';


@Component({
  selector: 'flex-graph',
  templateUrl: './flex-graph.component.html',
  styleUrls: ['./flex-graph.component.scss']
})
export class FlexGraphComponent extends BaseGraphComponent implements OnInit, AfterViewInit {
  @Input() tree: Graph;
  @Input() isRoot: boolean = false;
  @ViewChild('children') childNodes: ElementRef;

  state = {
    store: {}
  }
  constructor(
    parent: ElementRef,
    cdr: ChangeDetectorRef,
    private store: Store<StoreState>,
  ) {
    super(parent, cdr);
    this.ngAfterViewInit = this.ngAfterViewInit.bind(this);
  }
  
  private processTreeForGaps(tree: Graph): Graph {
    let currentLevel = tree.Level;

    let childrenWithDifferentLevel = [];
    tree.Children.forEach((child, i) => {
      if (child.Level !== tree.Level + 1) {
        childrenWithDifferentLevel.push(i);
      }
    })
    let newChildrenForTree = [];
    if (childrenWithDifferentLevel.length > 0) {
      let blankLayer = { Type: 'Blank', Level: currentLevel + 1, Children: [] } as any;
      newChildrenForTree.push(blankLayer);
      tree.Children.forEach((child, i) => {
        if (childrenWithDifferentLevel.includes(i)) {
          blankLayer.Children.push(child)
        } else {
          child.IsAdjusted = true;
          newChildrenForTree.push(child)
        }
      })
    }
    let newChildren = newChildrenForTree.length ? newChildrenForTree : tree.Children.slice();
    let recursedChildren = newChildren.map(this.processTreeForGaps.bind(this));
    let finalTree = Object.assign({}, tree, {Children: recursedChildren});
    return finalTree;
  }
  // setPosition() {
  //   let children = this.childNodes.nativeElement.children;
  //   let { left, width } = this.getWideLinePosition(children);
  //   let wideLine: HTMLElement = this.parent.nativeElement.querySelector('.wide-connector');
  //   wideLine.style.left = left + 'px';
  //   wideLine.style.width = width + 'px';
  // }
  ngOnInit() {
    this.state.store = this.store.select(graphSelector).subscribe(store => this.state.store = store);
    if (this.isRoot) {
      this.tree = this.processTreeForGaps(({
        "Org_ID": "123456",
        "Type": "Site",
        "Title": "Microsoft",
        "Subtitle": "Puget Sound",
        "AltText": "Some text",
        "ID": {
          "SiteId": null
        },
        "Layer": 5,
        "Level": 0,
        "Children": [
          {
            "Type": "Person",
            "Title": "Val B.",
            "Subtitle": "Acc Dir",
            "AltText": "Some text",
            "ID": [
              {
                "key": "EDBId",
                "value": 42
              }
            ],
            "ShiftType": null,
            "Layer": 3,
            "Level": 1,
            "AllocationPercentage": 20,
            "Children": [
              {
                "Type": "Person",
                "Title": "John M.",
                "Subtitle": "Acc Mgr",
                "AltText": "Some text",
                "ID": [
                  {
                    "key": "EDBId",
                    "value": 42
                  }
                ],
                "ShiftType": "Day",
                "Layer": 2,
                "Level": 2,
                "AllocationPercentage": 80,
                "Children": []
              },
              {
                "Type": "Person",
                "Title": "Ahmed K.",
                "Subtitle": "Msft - West",
                "AltText": "Some text",
                "ID": [
                  {
                    "key": "EDBId",
                    "value": 42
                  }
                ],
                "ShiftType": "Night",
                "Layer": 1,
                "Level": 3,
                "AllocationPercentage": 75,
                "Children": []
              },
              {
                "Type": "Person",
                "Title": "Cricket C.",
                "Subtitle": "Msft - North",
                "AltText": "Some text",
                "ID": [
                  {
                    "key": "EDBId",
                    "value": 42
                  }
                ],
                "ShiftType": "Day",
                "Layer": 1,
                "Level": 3,
                "AllocationPercentage": 90,
                "Children": []
              }
            ]
          }
        ]
      }) as any);
      window.addEventListener('resize', this.ngAfterViewInit);
      this.parent.nativeElement.classList.add('scroll-root');
    }
  }
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  ngOnDestroy() {
    window.removeEventListener('resize', this.ngAfterViewInit)
  }
}
