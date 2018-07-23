import {
  Component,
  Input,
  OnInit,
  ElementRef,
  ChangeDetectorRef,
  ViewChild,
} from '@angular/core';

declare const window: Window;

@Component({
  selector: 'flex-graph',
  templateUrl: './flex-graph.component.html',
  styleUrls: ['./flex-graph.component.scss']
})
export class FlexGraphComponent implements OnInit {
  @Input() tree;
  @Input() isRoot: boolean = false;
  @ViewChild('children') childNodes: ElementRef;
  constructor(
    private parent: ElementRef,
    private cdr: ChangeDetectorRef
  ) { }
  private getWideLinePosition(childElement: HTMLElement) {
    let parent = this.parent.nativeElement.getBoundingClientRect();
    let children = childElement.children;
    
    let fChild = children[0].getBoundingClientRect();
    let lChild = children[children.length - 1].getBoundingClientRect();
    let width = Math.abs((lChild.left + lChild.width / 2) - (fChild.left + fChild.width / 2));
    let left = (fChild.left + fChild.width / 2) - parent.left;
    return {
      width: width + 'px',
      left: left + 'px',
    };
  }
  setPosition() {
    let children = this.childNodes.nativeElement.children;
    let { left, width } = this.getWideLinePosition(children);
    let wideLine: HTMLElement = this.parent.nativeElement.querySelector('.wide-connector');
    wideLine.style.left = left + 'px';
    wideLine.style.width = width + 'px';
  }
  ngOnInit() {
    if (this.isRoot) {
      this.tree = generateRandomTree(40);
      window.addEventListener('resize', () => this.cdr.detectChanges());
      this.parent.nativeElement.classList.add('scroll-root')
    }
  }

}


// Some functions to generate graphs

function getRandInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function makeNode(content) {
  return {
    content,
    children: []
  }
}
function generateRandomTree(size = 20, deep = false) {
  let nodes = [];
  nodes.push(makeNode('s'));
  for (let i = 0; i < size; i++) {
    let newNode = makeNode(i);
    nodes[getRandInt(nodes.length)].children.push(newNode);
    nodes.push(newNode);
  }
  return nodes[0];
}