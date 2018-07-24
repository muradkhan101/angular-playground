import {
  Component,
  Input,
  OnInit,
  ElementRef,
  ChangeDetectorRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

declare const window: Window;

type NodeType = 'Person' | 'Building' | 'Client' | 'District' | 'Blank' | 'Site';

export interface Graph {
  Type: NodeType;
  Title: string;
  Subtitle: string;
  AltText?: string;
  Layer: number;
  Level?: number;
  ShiftType?: 'Day' | 'Night';
  Children: Array<Graph>;
  IsCollapsed?: boolean;
}

@Component({
  selector: 'flex-graph',
  templateUrl: './flex-graph.component.html',
  styleUrls: ['./flex-graph.component.scss']
})
export class FlexGraphComponent implements OnInit, AfterViewInit {
  @Input() tree: Graph;
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
  private processTreeForGaps(tree: Graph): Graph {
    let currentLevel = tree.Layer;
    let newChildren = tree.Children.map((child) => {
      if (child.Layer !== currentLevel + 1) {
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
  setPosition() {
    let children = this.childNodes.nativeElement.children;
    let { left, width } = this.getWideLinePosition(children);
    let wideLine: HTMLElement = this.parent.nativeElement.querySelector('.wide-connector');
    wideLine.style.left = left + 'px';
    wideLine.style.width = width + 'px';
  }
  ngOnInit() {
    if (this.isRoot) {
      this.tree = this.processTreeForGaps(({
        "Root": {
          "Type": "Building",
          "Title": "Mann A",
          "Subtitle": "commodo",
          "Layer": 0,
          "Children": [
            {
              "Type": "Building",
              "Title": "Sasha R",
              "Subtitle": "excepteur",
              "Layer": 1,
              "Children": [
                {
                  "Type": "Site",
                  "Title": "Suzette A",
                  "Subtitle": "incididunt",
                  "Layer": 2,
                  "Children": [
                    {
                      "Type": "Site",
                      "Title": "Tisha F",
                      "Subtitle": "pariatur",
                      "Layer": 4,
                      "Children": [
                        {
                          "Type": "Person",
                          "Title": "Ochoa C",
                          "Subtitle": "commodo",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Schultz E",
                          "Subtitle": "amet",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Giles C",
                          "Subtitle": "laborum",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Alyce B",
                          "Subtitle": "sint",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Myra C",
                          "Subtitle": "laborum",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "David N",
                          "Subtitle": "magna",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Ines N",
                          "Subtitle": "amet",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Mayer D",
                          "Subtitle": "nostrud",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Lucinda S",
                          "Subtitle": "Lorem",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Inez C",
                          "Subtitle": "adipisicing",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Helena H",
                          "Subtitle": "nulla",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Hebert S",
                          "Subtitle": "do",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Chrystal R",
                          "Subtitle": "consectetur",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Guzman D",
                          "Subtitle": "veniam",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Christian K",
                          "Subtitle": "minim",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Dollie W",
                          "Subtitle": "ut",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Meghan S",
                          "Subtitle": "reprehenderit",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Walters F",
                          "Subtitle": "qui",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Hawkins C",
                          "Subtitle": "quis",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Avis D",
                          "Subtitle": "laborum",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Hillary J",
                          "Subtitle": "reprehenderit",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Letitia R",
                          "Subtitle": "adipisicing",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Heather R",
                          "Subtitle": "occaecat",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Hewitt W",
                          "Subtitle": "laborum",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Bernard N",
                          "Subtitle": "duis",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Amber B",
                          "Subtitle": "dolore",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Whitney M",
                          "Subtitle": "ex",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Bertha F",
                          "Subtitle": "do",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Marissa F",
                          "Subtitle": "officia",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Carney C",
                          "Subtitle": "incididunt",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Meagan T",
                          "Subtitle": "officia",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Hall T",
                          "Subtitle": "nostrud",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        }
                      ]
                    },
                    {
                      "Type": "Person",
                      "Title": "Jeannine S",
                      "Subtitle": "do",
                      "Layer": 3,
                      "Children": [],
                      "ShiftType": null
                    }
                  ]
                },
                {
                  "Type": "Person",
                  "Title": "Liz J",
                  "Subtitle": "incididunt",
                  "Layer": 2,
                  "Children": [
                    {
                      "Type": "Site",
                      "Title": "Kimberly H",
                      "Subtitle": "consequat",
                      "Layer": 4,
                      "Children": [
                        {
                          "Type": "Person",
                          "Title": "Edwards S",
                          "Subtitle": "culpa",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Lori H",
                          "Subtitle": "ipsum",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Lyons S",
                          "Subtitle": "et",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Angel G",
                          "Subtitle": "anim",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Gertrude E",
                          "Subtitle": "amet",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Saundra C",
                          "Subtitle": "in",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Floyd A",
                          "Subtitle": "enim",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Kramer R",
                          "Subtitle": "do",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Banks S",
                          "Subtitle": "aliqua",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Janet J",
                          "Subtitle": "ullamco",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Ruiz Y",
                          "Subtitle": "consectetur",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Carolyn B",
                          "Subtitle": "ex",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Goldie C",
                          "Subtitle": "ex",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Adela R",
                          "Subtitle": "do",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Ruth H",
                          "Subtitle": "eu",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Rosa W",
                          "Subtitle": "amet",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Louise D",
                          "Subtitle": "eiusmod",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Gina C",
                          "Subtitle": "consequat",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Jeannie J",
                          "Subtitle": "reprehenderit",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Annie J",
                          "Subtitle": "esse",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Woods H",
                          "Subtitle": "non",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Elena C",
                          "Subtitle": "non",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Chandler L",
                          "Subtitle": "pariatur",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Becker A",
                          "Subtitle": "dolor",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Simmons K",
                          "Subtitle": "qui",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Garrison M",
                          "Subtitle": "aliquip",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Lina J",
                          "Subtitle": "do",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Downs M",
                          "Subtitle": "fugiat",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Mccray W",
                          "Subtitle": "dolor",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Butler B",
                          "Subtitle": "duis",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Dale C",
                          "Subtitle": "sint",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Duncan M",
                          "Subtitle": "nisi",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Hollie H",
                          "Subtitle": "ad",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Janelle T",
                          "Subtitle": "minim",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Daugherty L",
                          "Subtitle": "in",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Langley A",
                          "Subtitle": "magna",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Ophelia K",
                          "Subtitle": "deserunt",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Benita M",
                          "Subtitle": "sint",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Nita C",
                          "Subtitle": "ipsum",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Decker B",
                          "Subtitle": "ut",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Kelli B",
                          "Subtitle": "sit",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Cobb H",
                          "Subtitle": "est",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Susie A",
                          "Subtitle": "pariatur",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Acevedo E",
                          "Subtitle": "laborum",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Howe E",
                          "Subtitle": "elit",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Dee K",
                          "Subtitle": "cillum",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Patrice S",
                          "Subtitle": "nostrud",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        }
                      ]
                    },
                    {
                      "Type": "Site",
                      "Title": "Lindsey N",
                      "Subtitle": "proident",
                      "Layer": 3,
                      "Children": []
                    }
                  ],
                  "ShiftType": "Day"
                },
                {
                  "Type": "Site",
                  "Title": "Crawford S",
                  "Subtitle": "officia",
                  "Layer": 2,
                  "Children": [
                    {
                      "Type": "Building",
                      "Title": "Sheryl G",
                      "Subtitle": "sunt",
                      "Layer": 4,
                      "Children": [
                        {
                          "Type": "Person",
                          "Title": "Richardson A",
                          "Subtitle": "dolore",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Leah V",
                          "Subtitle": "aliqua",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Dina E",
                          "Subtitle": "Lorem",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Cleveland G",
                          "Subtitle": "nostrud",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Cook S",
                          "Subtitle": "culpa",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Silvia M",
                          "Subtitle": "nulla",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Monique H",
                          "Subtitle": "non",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Ladonna S",
                          "Subtitle": "officia",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Vance M",
                          "Subtitle": "pariatur",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Holt W",
                          "Subtitle": "sint",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Aurelia J",
                          "Subtitle": "amet",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Baxter J",
                          "Subtitle": "exercitation",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Rojas S",
                          "Subtitle": "Lorem",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Alice P",
                          "Subtitle": "consequat",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Wanda K",
                          "Subtitle": "amet",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Sofia I",
                          "Subtitle": "exercitation",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Roxanne J",
                          "Subtitle": "laborum",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Mable M",
                          "Subtitle": "aliqua",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Mason C",
                          "Subtitle": "ex",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Keisha S",
                          "Subtitle": "esse",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Moss T",
                          "Subtitle": "ut",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Janice J",
                          "Subtitle": "consectetur",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Hatfield F",
                          "Subtitle": "voluptate",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Marcia F",
                          "Subtitle": "amet",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        }
                      ]
                    }
                  ]
                },
                {
                  "Type": "Person",
                  "Title": "Adams L",
                  "Subtitle": "esse",
                  "Layer": 2,
                  "Children": [
                    {
                      "Type": "Building",
                      "Title": "Mooney M",
                      "Subtitle": "quis",
                      "Layer": 4,
                      "Children": [
                        {
                          "Type": "Person",
                          "Title": "Oneill M",
                          "Subtitle": "consectetur",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Marylou B",
                          "Subtitle": "esse",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Stokes P",
                          "Subtitle": "laboris",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Pacheco H",
                          "Subtitle": "magna",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Lisa J",
                          "Subtitle": "qui",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Patrick H",
                          "Subtitle": "anim",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Mcclain P",
                          "Subtitle": "in",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Gomez B",
                          "Subtitle": "ea",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Anne M",
                          "Subtitle": "velit",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Velazquez G",
                          "Subtitle": "do",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Petra R",
                          "Subtitle": "culpa",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Pace W",
                          "Subtitle": "do",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Terri G",
                          "Subtitle": "proident",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Mollie S",
                          "Subtitle": "deserunt",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        }
                      ]
                    },
                    {
                      "Type": "Site",
                      "Title": "Travis P",
                      "Subtitle": "nostrud",
                      "Layer": 3,
                      "Children": []
                    },
                    {
                      "Type": "Person",
                      "Title": "Natalia M",
                      "Subtitle": "laborum",
                      "Layer": 3,
                      "Children": [],
                      "ShiftType": "Night"
                    },
                    {
                      "Type": "Site",
                      "Title": "Gloria G",
                      "Subtitle": "sint",
                      "Layer": 3,
                      "Children": []
                    }
                  ],
                  "ShiftType": null
                },
                {
                  "Type": "Site",
                  "Title": "Moran S",
                  "Subtitle": "commodo",
                  "Layer": 2,
                  "Children": [
                    {
                      "Type": "Site",
                      "Title": "Verna H",
                      "Subtitle": "sunt",
                      "Layer": 4,
                      "Children": [
                        {
                          "Type": "Person",
                          "Title": "Lois O",
                          "Subtitle": "ut",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Talley E",
                          "Subtitle": "voluptate",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Rene C",
                          "Subtitle": "dolor",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Ford D",
                          "Subtitle": "velit",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Dana M",
                          "Subtitle": "quis",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Julie O",
                          "Subtitle": "officia",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Navarro J",
                          "Subtitle": "magna",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Neal W",
                          "Subtitle": "officia",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Rodriguez J",
                          "Subtitle": "minim",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Walker T",
                          "Subtitle": "cillum",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Harmon H",
                          "Subtitle": "reprehenderit",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Ramirez P",
                          "Subtitle": "exercitation",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Black J",
                          "Subtitle": "et",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Prince R",
                          "Subtitle": "consectetur",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Campbell E",
                          "Subtitle": "cillum",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Lydia P",
                          "Subtitle": "Lorem",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Soto C",
                          "Subtitle": "aliquip",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Alba J",
                          "Subtitle": "id",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Claire H",
                          "Subtitle": "deserunt",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Shields T",
                          "Subtitle": "Lorem",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Walter M",
                          "Subtitle": "ipsum",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "West F",
                          "Subtitle": "tempor",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Vang M",
                          "Subtitle": "est",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Keith M",
                          "Subtitle": "exercitation",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Gonzales D",
                          "Subtitle": "consectetur",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Fields O",
                          "Subtitle": "nisi",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Key H",
                          "Subtitle": "excepteur",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Robles M",
                          "Subtitle": "nostrud",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Edwina B",
                          "Subtitle": "esse",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Melendez H",
                          "Subtitle": "non",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Monroe S",
                          "Subtitle": "aliqua",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Sanchez C",
                          "Subtitle": "tempor",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Lorna L",
                          "Subtitle": "culpa",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Kinney L",
                          "Subtitle": "sint",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Wright V",
                          "Subtitle": "reprehenderit",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Lambert N",
                          "Subtitle": "voluptate",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Jenny C",
                          "Subtitle": "laborum",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Candice L",
                          "Subtitle": "quis",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Kari F",
                          "Subtitle": "labore",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Tammy S",
                          "Subtitle": "consectetur",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Lynnette C",
                          "Subtitle": "magna",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Glenda K",
                          "Subtitle": "est",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Blanchard D",
                          "Subtitle": "excepteur",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Mccall S",
                          "Subtitle": "minim",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Villarreal N",
                          "Subtitle": "qui",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        }
                      ]
                    },
                    {
                      "Type": "Site",
                      "Title": "Glenna C",
                      "Subtitle": "mollit",
                      "Layer": 3,
                      "Children": []
                    }
                  ]
                },
                {
                  "Type": "Site",
                  "Title": "Ginger F",
                  "Subtitle": "ipsum",
                  "Layer": 2,
                  "Children": []
                }
              ]
            },
            {
              "Type": "Site",
              "Title": "Salinas E",
              "Subtitle": "ullamco",
              "Layer": 1,
              "Children": [
                {
                  "Type": "Building",
                  "Title": "Joyce M",
                  "Subtitle": "exercitation",
                  "Layer": 2,
                  "Children": [
                    {
                      "Type": "Person",
                      "Title": "Shannon B",
                      "Subtitle": "qui",
                      "Layer": 4,
                      "Children": [
                        {
                          "Type": "Person",
                          "Title": "Swanson C",
                          "Subtitle": "aliquip",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Yang D",
                          "Subtitle": "deserunt",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Workman P",
                          "Subtitle": "aliquip",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Elinor W",
                          "Subtitle": "fugiat",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Guerrero L",
                          "Subtitle": "enim",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Lenora D",
                          "Subtitle": "officia",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Hogan D",
                          "Subtitle": "veniam",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Noreen M",
                          "Subtitle": "laborum",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Little L",
                          "Subtitle": "veniam",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Wilkinson K",
                          "Subtitle": "nostrud",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Mosley B",
                          "Subtitle": "dolor",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Laurel N",
                          "Subtitle": "velit",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Leblanc F",
                          "Subtitle": "sint",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Snow G",
                          "Subtitle": "sint",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        }
                      ],
                      "ShiftType": null
                    },
                    {
                      "Type": "Building",
                      "Title": "Wise M",
                      "Subtitle": "aliqua",
                      "Layer": 3,
                      "Children": []
                    }
                  ]
                },
                {
                  "Type": "Person",
                  "Title": "Rosetta W",
                  "Subtitle": "commodo",
                  "Layer": 2,
                  "Children": [],
                  "ShiftType": "Day"
                },
                {
                  "Type": "Building",
                  "Title": "Katrina W",
                  "Subtitle": "ex",
                  "Layer": 2,
                  "Children": [
                    {
                      "Type": "Person",
                      "Title": "Ester S",
                      "Subtitle": "sint",
                      "Layer": 4,
                      "Children": [
                        {
                          "Type": "Person",
                          "Title": "Sims C",
                          "Subtitle": "cillum",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Kirkland M",
                          "Subtitle": "ea",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Holman M",
                          "Subtitle": "aute",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Kendra H",
                          "Subtitle": "reprehenderit",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Nicole E",
                          "Subtitle": "nisi",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Jaclyn B",
                          "Subtitle": "aliqua",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Delacruz B",
                          "Subtitle": "ullamco",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Ofelia M",
                          "Subtitle": "nisi",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Carrillo V",
                          "Subtitle": "id",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Atkinson S",
                          "Subtitle": "minim",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Levy F",
                          "Subtitle": "tempor",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Kline M",
                          "Subtitle": "voluptate",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Adriana T",
                          "Subtitle": "occaecat",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Valeria S",
                          "Subtitle": "anim",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Rodriquez D",
                          "Subtitle": "magna",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Sanders C",
                          "Subtitle": "labore",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Queen L",
                          "Subtitle": "Lorem",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Boyle S",
                          "Subtitle": "aute",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Kathrine B",
                          "Subtitle": "nostrud",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Francine K",
                          "Subtitle": "aliqua",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Shari W",
                          "Subtitle": "ipsum",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "May P",
                          "Subtitle": "in",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Rowena V",
                          "Subtitle": "tempor",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Virginia J",
                          "Subtitle": "excepteur",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Janie L",
                          "Subtitle": "fugiat",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Erica H",
                          "Subtitle": "quis",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Kristina M",
                          "Subtitle": "esse",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Townsend C",
                          "Subtitle": "nisi",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Julianne B",
                          "Subtitle": "cillum",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Kaufman L",
                          "Subtitle": "cillum",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Tina L",
                          "Subtitle": "ullamco",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Florence K",
                          "Subtitle": "nulla",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Petty M",
                          "Subtitle": "amet",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Barron J",
                          "Subtitle": "id",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Jarvis S",
                          "Subtitle": "esse",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Colette T",
                          "Subtitle": "elit",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Finch K",
                          "Subtitle": "nisi",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Rivera B",
                          "Subtitle": "voluptate",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Rosemarie R",
                          "Subtitle": "nulla",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Lloyd C",
                          "Subtitle": "ex",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Blackwell M",
                          "Subtitle": "id",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        },
                        {
                          "Type": "Person",
                          "Title": "Peggy C",
                          "Subtitle": "reprehenderit",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Conway L",
                          "Subtitle": "duis",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Day"
                        },
                        {
                          "Type": "Person",
                          "Title": "Pugh P",
                          "Subtitle": "consectetur",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": null
                        },
                        {
                          "Type": "Person",
                          "Title": "Peck L",
                          "Subtitle": "mollit",
                          "Layer": 5,
                          "Children": [],
                          "ShiftType": "Night"
                        }
                      ],
                      "ShiftType": "Day"
                    },
                    {
                      "Type": "Person",
                      "Title": "Flora S",
                      "Subtitle": "amet",
                      "Layer": 3,
                      "Children": [],
                      "ShiftType": null
                    },
                    {
                      "Type": "Person",
                      "Title": "Karen C",
                      "Subtitle": "commodo",
                      "Layer": 3,
                      "Children": [],
                      "ShiftType": "Day"
                    }
                  ]
                },
                {
                  "Type": "Building",
                  "Title": "Shepherd R",
                  "Subtitle": "dolore",
                  "Layer": 2,
                  "Children": [
                    {
                      "Type": "Person",
                      "Title": "Alejandra K",
                      "Subtitle": "nisi",
                      "Layer": 4,
                      "Children": [],
                      "ShiftType": "Night"
                    },
                    {
                      "Type": "Person",
                      "Title": "Nixon M",
                      "Subtitle": "ea",
                      "Layer": 3,
                      "Children": [],
                      "ShiftType": "Day"
                    },
                    {
                      "Type": "Site",
                      "Title": "Leola K",
                      "Subtitle": "pariatur",
                      "Layer": 3,
                      "Children": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        "Item": {
          "Type": "Person",
          "Title": "Malone L",
          "Subtitle": "amet",
          "Layer": 0,
          "Children": [],
          "ShiftType": null
        }
      }).Root as any);
      window.addEventListener('resize', () => this.cdr.detectChanges());
      this.parent.nativeElement.classList.add('scroll-root');
    }
  }
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
