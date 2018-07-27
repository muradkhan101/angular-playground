import { ElementRef, ChangeDetectorRef } from '@angular/core';

export type NodeType = 'Person' | 'Building' | 'Client' | 'District' | 'Blank' | 'Site';

export interface Graph {
    Org_ID?: string;
    Type: NodeType;
    Title: string;
    Subtitle: string;
    AltText?: string;
    AllocationPercentage?: number;
    Layer: number;
    Level: number;
    ShiftType?: 'Day' | 'Night';
    IsAdjusted?: boolean;
    Children: Array<Graph>;
}

export abstract class BaseGraphComponent {
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
        return {
            width: width + 'px',
            left: left + 'px',
        };
    }
}
