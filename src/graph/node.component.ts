import {
    Component,
    ComponentFactoryResolver,
    Input,
    OnChanges,
    SimpleChanges,
    ViewChild,
    ViewContainerRef,
    ChangeDetectorRef,
    OnInit,
} from '@angular/core';

interface Tree {
    children: Array<Tree>;
    value: string;
    title: string;
}

@Component({
    selector: 'graph-node',
    template: `
        <div class="title">
            {{tree.title}}
        </div>
        <div class="value">
            {{tree.value}}
        </div>
        <div class="children">
            <ng-container #children></ng-container>
        </div>
    `,
    styleUrls: [`./node.component.scss`]
})
export class GraphNodeComponent implements OnChanges, OnInit {
    @Input() tree;
    @ViewChild('children', {read: ViewContainerRef}) childContainer: ViewContainerRef;
    constructor(
        private cfr: ComponentFactoryResolver,
        private cdr: ChangeDetectorRef
    ) {}
    ngOnInit() {
        this.drawChildren()
    }
    ngOnChanges(changes: SimpleChanges) {
        if (changes && changes.tree) {
            this.drawChildren();
        }
    }
    drawChildren() {
        let children = this.tree.children;
        if (children && children.length) {
            this.childContainer.clear();
            children.forEach((child, i) => {
                let compFactory = this.cfr.resolveComponentFactory(GraphNodeComponent);
                let childComp = this.childContainer.createComponent(compFactory, i);
                childComp.instance.tree = child;
            });
        }
    }
}