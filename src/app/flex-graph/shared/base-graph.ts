import { ElementRef, ChangeDetectorRef } from '@angular/core';
import { IGraph } from './interfaces';

export class BaseGraphComponent {
    constructor(
        public parent: ElementRef,
        public cdr: ChangeDetectorRef,
    ) { }
    private getWideLinePosition(childElement: HTMLElement) {
        let parent = this.parent.nativeElement.getBoundingClientRect();
        let children = childElement.children;
    
        let fChild = children[0].getBoundingClientRect();
        let lChild = children[children.length - 1].getBoundingClientRect();
        let width = Math.abs((lChild.left + lChild.width / 2) - (fChild.left + fChild.width / 2));
        let left = (fChild.left + fChild.width / 2) - parent.left;
        if (left + width > (lChild.left + lChild.width + 5)) {
            width -= lChild.width / 2;
        }
        return {
            width: width + 'px',
            left: left + 'px',
        };
    }
    public shouldRenderTopLine(tree: IGraph): boolean {
        return true;
    }
        public shouldRenderBottomLine(tree: IGraph, children: HTMLElement): boolean {
        return children.children[0].children.length > 0
            && !['District', 'Site', 'FM', 'Grouping'].includes(tree.Type)
    }
}