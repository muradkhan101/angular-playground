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

import { BaseGraphComponent, Graph} from './common';

@Component({
  selector: 'flex-graph',
  templateUrl: './flex-graph.component.html',
  styleUrls: ['./flex-graph.component.scss']
})
export class FlexGraphComponent extends BaseGraphComponent implements OnInit, AfterViewInit {
  @Input() tree: Graph;
  @Input() isRoot: boolean = false;
  @ViewChild('children') childNodes: ElementRef;

  constructor(
    parent: ElementRef,
    cdr: ChangeDetectorRef,
  ) {
    super(parent, cdr);
    this.ngAfterViewInit = this.ngAfterViewInit.bind(this);
  }
  
  private processTreeForGaps(tree: Graph): Graph {
    let currentLevel = tree.Layer;
    let newChildren = tree.Children.map((child, i, childArray) => {
      let nextChildLayer = childArray[(i + 1) % childArray.length].Layer;
      if (child.Layer !== nextChildLayer && child.Layer > nextChildLayer) {
        let fillerLayer = { Type: 'Blank', Layer: currentLevel + 1, Children: [] } as any;
        fillerLayer.Children.push(child);
        return fillerLayer;
      }
      return child;
    });
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
    if (this.isRoot) {
      this.tree = this.processTreeForGaps(({
        "Root": {
          "Type": "Client",
          "Title": "Marietta S",
          "Subtitle": "adipisicing",
          "Layer": 0,
          "Children": [
            {
              "Type": "Person",
              "Title": "Freda N",
              "Subtitle": "consectetur",
              "Layer": 1,
              "Children": [
                {
                  "Type": "Person",
                  "Title": "Oneil C",
                  "Subtitle": "do",
                  "Layer": 2,
                  "Children": [
                    {
                      "Type": "Person",
                      "Title": "Hunt A",
                      "Subtitle": "voluptate",
                      "Layer": 3,
                      "Children": [
                        {
                          "Type": "Person",
                          "Title": "Morin W",
                          "Subtitle": "aliquip",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Lopez F",
                          "Subtitle": "est",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Vazquez M",
                          "Subtitle": "elit",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Lelia B",
                          "Subtitle": "irure",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Lois L",
                          "Subtitle": "aute",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Day"
                        }
                      ],
                      "ShiftType": "Night"
                    },
                    {
                      "Type": "Person",
                      "Title": "Barrett J",
                      "Subtitle": "do",
                      "Layer": 3,
                      "Children": [
                        {
                          "Type": "Person",
                          "Title": "Tami K",
                          "Subtitle": "ea",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Celia C",
                          "Subtitle": "ex",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Walters L",
                          "Subtitle": "elit",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Carol E",
                          "Subtitle": "aliqua",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Audra J",
                          "Subtitle": "excepteur",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Twila A",
                          "Subtitle": "labore",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Christian R",
                          "Subtitle": "incididunt",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Levy S",
                          "Subtitle": "ex",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": null
                        }
                      ],
                      "ShiftType": null
                    },
                    {
                      "Type": "Person",
                      "Title": "Velasquez D",
                      "Subtitle": "tempor",
                      "Layer": 3,
                      "Children": [
                        {
                          "Type": "Person",
                          "Title": "Francis G",
                          "Subtitle": "ipsum",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": null
                        }
                      ],
                      "ShiftType": "Day"
                    },
                    {
                      "Type": "Person",
                      "Title": "Erickson C",
                      "Subtitle": "non",
                      "Layer": 3,
                      "Children": [
                        {
                          "Type": "Person",
                          "Title": "Wyatt K",
                          "Subtitle": "non",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Scott M",
                          "Subtitle": "aute",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Lolita T",
                          "Subtitle": "excepteur",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": null
                        }
                      ],
                      "ShiftType": "Night"
                    }
                  ],
                  "ShiftType": null
                },
                {
                  "Type": "Person",
                  "Title": "Latasha M",
                  "Subtitle": "labore",
                  "Layer": 2,
                  "Children": [
                    {
                      "Type": "Person",
                      "Title": "Dale T",
                      "Subtitle": "Lorem",
                      "Layer": 3,
                      "Children": [
                        {
                          "Type": "Person",
                          "Title": "Oneill M",
                          "Subtitle": "id",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Day"
                        }
                      ],
                      "ShiftType": "Night"
                    },
                    {
                      "Type": "Person",
                      "Title": "Jeannine C",
                      "Subtitle": "in",
                      "Layer": 3,
                      "Children": [],
                      "ShiftType": "Night"
                    }
                  ],
                  "ShiftType": "Day"
                },
                {
                  "Type": "Person",
                  "Title": "Earnestine M",
                  "Subtitle": "veniam",
                  "Layer": 2,
                  "Children": [
                    {
                      "Type": "Person",
                      "Title": "Darcy L",
                      "Subtitle": "ullamco",
                      "Layer": 3,
                      "Children": [],
                      "ShiftType": "Night"
                    },
                    {
                      "Type": "Person",
                      "Title": "Booth K",
                      "Subtitle": "culpa",
                      "Layer": 3,
                      "Children": [
                        {
                          "Type": "Person",
                          "Title": "Pacheco A",
                          "Subtitle": "enim",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Day"
                        }
                      ],
                      "ShiftType": "Day"
                    },
                    {
                      "Type": "Person",
                      "Title": "Espinoza R",
                      "Subtitle": "ut",
                      "Layer": 3,
                      "Children": [
                        {
                          "Type": "Person",
                          "Title": "Jo C",
                          "Subtitle": "ipsum",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Sellers A",
                          "Subtitle": "reprehenderit",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Mona O",
                          "Subtitle": "exercitation",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Hansen P",
                          "Subtitle": "quis",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": null
                        }
                      ],
                      "ShiftType": "Night"
                    },
                    {
                      "Type": "Person",
                      "Title": "Glass K",
                      "Subtitle": "nulla",
                      "Layer": 3,
                      "Children": [
                        {
                          "Type": "Person",
                          "Title": "Ramsey C",
                          "Subtitle": "velit",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Stacy W",
                          "Subtitle": "magna",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Night"
                        }
                      ],
                      "ShiftType": "Day"
                    }
                  ],
                  "ShiftType": null
                },
                {
                  "Type": "Person",
                  "Title": "Weaver W",
                  "Subtitle": "cillum",
                  "Layer": 2,
                  "Children": [
                    {
                      "Type": "Person",
                      "Title": "Montgomery D",
                      "Subtitle": "voluptate",
                      "Layer": 3,
                      "Children": [
                        {
                          "Type": "Person",
                          "Title": "Betsy K",
                          "Subtitle": "elit",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Holden J",
                          "Subtitle": "nulla",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Night"
                        }
                      ],
                      "ShiftType": "Night"
                    },
                    {
                      "Type": "Person",
                      "Title": "Natalie Q",
                      "Subtitle": "officia",
                      "Layer": 3,
                      "Children": [
                        {
                          "Type": "Person",
                          "Title": "Mcdaniel L",
                          "Subtitle": "fugiat",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Bobbi F",
                          "Subtitle": "in",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Burks A",
                          "Subtitle": "irure",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Esmeralda S",
                          "Subtitle": "ipsum",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Arnold S",
                          "Subtitle": "adipisicing",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Wells A",
                          "Subtitle": "ut",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Day"
                        }
                      ],
                      "ShiftType": "Day"
                    },
                    {
                      "Type": "Person",
                      "Title": "Mayer B",
                      "Subtitle": "non",
                      "Layer": 3,
                      "Children": [
                        {
                          "Type": "Person",
                          "Title": "Sonya S",
                          "Subtitle": "irure",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Jannie D",
                          "Subtitle": "et",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": null
                        }
                      ],
                      "ShiftType": "Day"
                    },
                    {
                      "Type": "Person",
                      "Title": "Burke E",
                      "Subtitle": "sit",
                      "Layer": 3,
                      "Children": [
                        {
                          "Type": "Person",
                          "Title": "Head H",
                          "Subtitle": "et",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Alissa B",
                          "Subtitle": "officia",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": null
                        }
                      ],
                      "ShiftType": "Night"
                    }
                  ],
                  "ShiftType": "Night"
                }
              ],
              "ShiftType": "Night"
            },
            {
              "Type": "Person",
              "Title": "Leila H",
              "Subtitle": "aliquip",
              "Layer": 1,
              "Children": [
                {
                  "Type": "Person",
                  "Title": "Nolan H",
                  "Subtitle": "consequat",
                  "Layer": 2,
                  "Children": [],
                  "ShiftType": "Day"
                },
                {
                  "Type": "Person",
                  "Title": "Gabrielle F",
                  "Subtitle": "culpa",
                  "Layer": 2,
                  "Children": [
                    {
                      "Type": "Person",
                      "Title": "Medina C",
                      "Subtitle": "sint",
                      "Layer": 3,
                      "Children": [
                        {
                          "Type": "Person",
                          "Title": "Burgess N",
                          "Subtitle": "non",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Day"
                        }
                      ],
                      "ShiftType": "Night"
                    },
                    {
                      "Type": "Person",
                      "Title": "Eunice L",
                      "Subtitle": "proident",
                      "Layer": 3,
                      "Children": [],
                      "ShiftType": "Night"
                    },
                    {
                      "Type": "Person",
                      "Title": "Patrice M",
                      "Subtitle": "anim",
                      "Layer": 3,
                      "Children": [
                        {
                          "Type": "Person",
                          "Title": "Stone S",
                          "Subtitle": "aliqua",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Rice J",
                          "Subtitle": "elit",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Betty N",
                          "Subtitle": "adipisicing",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": null
                        }
                      ],
                      "ShiftType": "Night"
                    }
                  ],
                  "ShiftType": "Night"
                }
              ],
              "ShiftType": "Night"
            },
            {
              "Type": "Person",
              "Title": "Alicia J",
              "Subtitle": "irure",
              "Layer": 1,
              "Children": [
                {
                  "Type": "Person",
                  "Title": "Rowland H",
                  "Subtitle": "irure",
                  "Layer": 2,
                  "Children": [],
                  "ShiftType": null
                },
                {
                  "Type": "Person",
                  "Title": "Cash S",
                  "Subtitle": "laborum",
                  "Layer": 2,
                  "Children": [
                    {
                      "Type": "Person",
                      "Title": "Zimmerman M",
                      "Subtitle": "officia",
                      "Layer": 3,
                      "Children": [
                        {
                          "Type": "Person",
                          "Title": "Gibson T",
                          "Subtitle": "officia",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Sasha E",
                          "Subtitle": "culpa",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Day"
                        }
                      ],
                      "ShiftType": "Night"
                    }
                  ],
                  "ShiftType": null
                },
                {
                  "Type": "Person",
                  "Title": "Douglas H",
                  "Subtitle": "reprehenderit",
                  "Layer": 2,
                  "Children": [
                    {
                      "Type": "Person",
                      "Title": "Clarissa M",
                      "Subtitle": "labore",
                      "Layer": 3,
                      "Children": [
                        {
                          "Type": "Person",
                          "Title": "Bailey L",
                          "Subtitle": "occaecat",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Fanny L",
                          "Subtitle": "ex",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Wall R",
                          "Subtitle": "consectetur",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": null
                        }
                      ],
                      "ShiftType": "Night"
                    },
                    {
                      "Type": "Person",
                      "Title": "Kelsey K",
                      "Subtitle": "elit",
                      "Layer": 3,
                      "Children": [],
                      "ShiftType": "Day"
                    }
                  ],
                  "ShiftType": null
                },
                {
                  "Type": "Person",
                  "Title": "Marina P",
                  "Subtitle": "et",
                  "Layer": 2,
                  "Children": [
                    {
                      "Type": "Person",
                      "Title": "Maureen O",
                      "Subtitle": "labore",
                      "Layer": 3,
                      "Children": [
                        {
                          "Type": "Person",
                          "Title": "Hebert C",
                          "Subtitle": "labore",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Boyd S",
                          "Subtitle": "cupidatat",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": null
                        }
                      ],
                      "ShiftType": "Night"
                    },
                    {
                      "Type": "Person",
                      "Title": "Dickson F",
                      "Subtitle": "nisi",
                      "Layer": 3,
                      "Children": [
                        {
                          "Type": "Person",
                          "Title": "Santana C",
                          "Subtitle": "non",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Leanna C",
                          "Subtitle": "quis",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Sybil G",
                          "Subtitle": "pariatur",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Underwood A",
                          "Subtitle": "cillum",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Dejesus F",
                          "Subtitle": "occaecat",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Jewel O",
                          "Subtitle": "cillum",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Day"
                        }
                      ],
                      "ShiftType": null
                    },
                    {
                      "Type": "Person",
                      "Title": "Calhoun K",
                      "Subtitle": "irure",
                      "Layer": 3,
                      "Children": [
                        {
                          "Type": "Person",
                          "Title": "Joan B",
                          "Subtitle": "proident",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "House B",
                          "Subtitle": "deserunt",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Isabella J",
                          "Subtitle": "esse",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Casandra K",
                          "Subtitle": "nulla",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Emilia M",
                          "Subtitle": "fugiat",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Earlene V",
                          "Subtitle": "nostrud",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": null
                        }
                      ],
                      "ShiftType": "Day"
                    },
                    {
                      "Type": "Person",
                      "Title": "Navarro A",
                      "Subtitle": "id",
                      "Layer": 3,
                      "Children": [
                        {
                          "Type": "Person",
                          "Title": "Ramirez G",
                          "Subtitle": "consequat",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Kerry D",
                          "Subtitle": "ullamco",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Night"
                        }
                      ],
                      "ShiftType": null
                    },
                    {
                      "Type": "Person",
                      "Title": "Virgie L",
                      "Subtitle": "labore",
                      "Layer": 3,
                      "Children": [
                        {
                          "Type": "Person",
                          "Title": "Nettie B",
                          "Subtitle": "deserunt",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Hurley M",
                          "Subtitle": "ad",
                          "Layer": 4,
                          "Children": [],
                          "ShiftType": "Day"
                        }
                      ],
                      "ShiftType": "Day"
                    }
                  ],
                  "ShiftType": null
                }
              ],
              "ShiftType": "Night"
            }
          ],
          "ShiftType": null
        }
      }).Root as any);
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
