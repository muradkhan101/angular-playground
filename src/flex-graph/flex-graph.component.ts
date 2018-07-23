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
      this.tree = ({
        "Root": {
          "Type": "Site",
          "Title": "Conley E",
          "Subtitle": "ex",
          "Layer": 0,
          "Children": [
            {
              "Type": "Building",
              "Title": "Yvette A",
              "Subtitle": "ipsum",
              "Layer": 1,
              "Children": [
                {
                  "Type": "Site",
                  "Title": "Christine J",
                  "Subtitle": "consequat",
                  "Layer": 2,
                  "Children": [
                    {
                      "Type": "Site",
                      "Title": "Whitehead C",
                      "Subtitle": "ullamco",
                      "Layer": 3,
                      "Children": [
                        {
                          "Type": "Site",
                          "Title": "Lois R",
                          "Subtitle": "aliquip",
                          "Layer": 4,
                          "Children": []
                        },
                        {
                          "Type": "Person",
                          "Title": "Cora V",
                          "Subtitle": "aute",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Building",
                          "Title": "Rodgers R",
                          "Subtitle": "voluptate",
                          "Layer": 4,
                          "Children": []
                        }
                      ]
                    },
                    {
                      "Type": "Site",
                      "Title": "Michelle C",
                      "Subtitle": "officia",
                      "Layer": 3,
                      "Children": [
                        {
                          "Type": "Site",
                          "Title": "Frances M",
                          "Subtitle": "ad",
                          "Layer": 4,
                          "Children": []
                        }
                      ]
                    },
                    {
                      "Type": "Site",
                      "Title": "Holman R",
                      "Subtitle": "quis",
                      "Layer": 3,
                      "Children": [
                        {
                          "Type": "Site",
                          "Title": "Angelina K",
                          "Subtitle": "eu",
                          "Layer": 4,
                          "Children": []
                        },
                        {
                          "Type": "Site",
                          "Title": "Nelda N",
                          "Subtitle": "aliqua",
                          "Layer": 4,
                          "Children": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "Type": "Building",
                  "Title": "Riley R",
                  "Subtitle": "eiusmod",
                  "Layer": 2,
                  "Children": [
                    {
                      "Type": "Person",
                      "Title": "Harriet M",
                      "Subtitle": "laboris",
                      "Layer": 3,
                      "Children": [
                        {
                          "Type": "Building",
                          "Title": "Rachel S",
                          "Subtitle": "quis",
                          "Layer": 4,
                          "Children": []
                        },
                        {
                          "Type": "Building",
                          "Title": "Ernestine H",
                          "Subtitle": "dolor",
                          "Layer": 4,
                          "Children": []
                        }
                      ],
                      "ShiftType": "Night"
                    },
                    {
                      "Type": "Site",
                      "Title": "Rivers G",
                      "Subtitle": "qui",
                      "Layer": 3,
                      "Children": [
                        {
                          "Type": "Site",
                          "Title": "Blackwell J",
                          "Subtitle": "velit",
                          "Layer": 4,
                          "Children": []
                        },
                        {
                          "Type": "Building",
                          "Title": "Letha S",
                          "Subtitle": "anim",
                          "Layer": 4,
                          "Children": []
                        }
                      ]
                    },
                    {
                      "Type": "Person",
                      "Title": "Sonya R",
                      "Subtitle": "minim",
                      "Layer": 3,
                      "Children": [
                        {
                          "Type": "Site",
                          "Title": "Sampson J",
                          "Subtitle": "nostrud",
                          "Layer": 4,
                          "Children": []
                        },
                        {
                          "Type": "Site",
                          "Title": "Johanna J",
                          "Subtitle": "velit",
                          "Layer": 4,
                          "Children": []
                        }
                      ],
                      "ShiftType": null
                    }
                  ]
                },
                {
                  "Type": "Site",
                  "Title": "Fitzgerald S",
                  "Subtitle": "amet",
                  "Layer": 2,
                  "Children": [
                    {
                      "Type": "Person",
                      "Title": "Susana N",
                      "Subtitle": "officia",
                      "Layer": 3,
                      "Children": [],
                      "ShiftType": "Day"
                    }
                  ]
                }
              ]
            },
            {
              "Type": "Site",
              "Title": "Peggy K",
              "Subtitle": "adipisicing",
              "Layer": 1,
              "Children": []
            }
          ]
        }
      }).Root;
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