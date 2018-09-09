import { Component, Input, HostBinding } from '@angular/core';
import { IGraph } from '../shared/interfaces';

@Component({
    selector: 'multiple-element-node',
    template: `
    <ng-container *ngIf="trees.length > 1">
        <div class="node-title">{{title}}</div>
        <div 
            class="node-subtitle" 
            *ngIf="subtitle">
            ({{subtitle}})
        </div>
        <div class="icon-container">
            <div class="node-icon {{ tree.ShiftType && tree.Type === 'Person' ? 'shift shift-' + tree.ShiftType.toLowerCase() : '' }}"
                *ngFor="let tree of trees; let i = index"
                [ngClass]="{ 
                    'isOneOfMulti' : (oneOfMultiIndex != null && i == oneOfMultiIndex),
                    'notOneOfMulti' : (oneOfMultiIndex != null && i != oneOfMultiIndex)
                }">
                <i
                    class="zmdi {{typeMap[tree.Type]}}"
                    [style.fontSize]="size + 'em'">
                </i>
            </div>
        </div>
    </ng-container>
    <ng-container *ngIf="trees.length === 1">
        <node-renderer [tree]="trees[0]" [size]="1.25" [depth]="depth"></node-renderer>
    </ng-container>
    `,
    styles: [``],
    styleUrls: ['./node.scss']
})
export class MultipleElementNodeComponent {
    @Input() trees: Array<IGraph>;
    @Input() title;
    @Input() subtitle;
    @Input() size = 1;
    @Input() sideModalAction;
    @Input() oneOfMultiIndex: number | null;
    @Input() depth;
    typeMap = {
        'Person': 'zmdi-male-alt',
        'District': 'zmdi-local-store',
        'Site': 'zmdi-business-center'
    }

    @HostBinding('attr.side-modal-action') getIsSideModalAction() {
        return this.sideModalAction;
    }
}
