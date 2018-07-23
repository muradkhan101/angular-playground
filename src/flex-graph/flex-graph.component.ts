import {
  Component,
  Input,
  OnInit,
  ElementRef,
  ChangeDetectorRef,
  ViewChild,
  AfterContentInit,
} from '@angular/core';

// import { throttle } from 'rxjs/add/operator/throttle';
import { throttleTime } from 'rxjs/operators/throttleTime';
import { fromEvent } from 'rxjs/observable/fromEvent';
declare const window: Window;

@Component({
  selector: 'flex-graph',
  templateUrl: './flex-graph.component.html',
  styleUrls: ['./flex-graph.component.scss']
})
export class FlexGraphComponent implements OnInit, AfterContentInit {
  @Input() tree;
  @Input() isRoot: boolean = false;
  @ViewChild('children') childNodes: ElementRef;

  resizeEvent;
  constructor(
    private parent: ElementRef,
    private cdr: ChangeDetectorRef
  ) { }
  private getWideLinePosition(childElement: HTMLElement) {
    let parent = this.parent.nativeElement.getBoundingClientRect();
    let children = childElement.children;
    if (children && children.length) {
      let fChild = children[0].getBoundingClientRect();
      let lChild = children[children.length - 1].getBoundingClientRect();
      let width = Math.abs((lChild.left + lChild.width / 2) - (fChild.left + fChild.width / 2));
      let left = (fChild.left + fChild.width / 2) - parent.left;
      return {
        width: width + 'px',
        left: left + 'px',
      };
    }
    return {
      width: '0px',
      left: '0px'
    }
  }
  setPosition() {
    let childElement = this.childNodes.nativeElement;
    let { left, width } = this.getWideLinePosition(childElement);
    let wideLine: HTMLElement = this.parent.nativeElement.querySelector('.wide-connector');
    if (wideLine) {
      wideLine.style.left = left + 'px';
      wideLine.style.width = width + 'px';
    }
  }
  ngOnInit() {
    if (this.isRoot) {
      this.tree = generateRandomTree(25);
      this.resizeEvent = fromEvent(window, 'resize')
        .pipe(throttleTime(1000 / 60))
        .subscribe(this.setPosition.bind(this));
    }
  }
  ngAfterContentInit() {
    this.setPosition();
  }
}
class Node {
  content;
  children = [];
  constructor(info) {
    this.content = info;
  }
  updateInfo(newInfo) {
    this.content = newInfo;
    return this;
  }
  addChild(child) {
    this.children.push(child);
    return this;
  }
  addChildren(...children) {
    this.children.push(...children);
    return this;
  }
  getDepth() {
    return 1 + Math.max(
      ...this.children.map(child => child.getDepth()), 0
    )
  }
  getWidthAtLevel(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return this.children.reduce((count, child) => count + child.getWidthAtLevel(n - 1), 0)
  }
}
function getRandInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function generateRandomTree(size = 20, deep = false) {
  let nodes = [];
  nodes.push(new Node('s'));
  if (deep) {
    nodes[0].addChild(new Node('-1'));
    for (let i = 0; i < size; i++) {
      let depth = nodes[0].getDepth();
      let level = getRandInt(depth, depth / 1.5);
      let currentDepth = 0;
      let toAdd = nodes[0];
      while (currentDepth < level) {
        let childrenCount = toAdd.children.length;
        let newChild = toAdd.children[getRandInt(childrenCount - 1)];
        toAdd = newChild ? newChild : toAdd;
        currentDepth++;
      }
      toAdd.addChild(new Node(i));
    }
  } else {
    for (let i = 0; i < size; i++) {
      let newNode = new Node(i);
      nodes[getRandInt(nodes.length)].addChild(newNode);
      nodes.push(newNode);
    }
  }
  return nodes[0];
}