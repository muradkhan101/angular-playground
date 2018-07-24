import { Component, Input } from '@angular/core';
import { Graph } from '../common';

@Component({
    selector: 'multiple-element-node',
    template: `
    <div class="node-title">{{title}}</div>
    <div class="node-subtitle">({{subtitle}})</div>
    <div class="icon-container">
        <div class="node-icon"
            *ngFor="let tree of trees"
            [style.color]="tree.ShiftType === 'Day' ? '#f99d01' : tree.ShiftType === 'Night' ? '#00afd1' : '#403841'">
            <i
            class="zmdi zmdi-male-alt"
            [style.fontSize]="size + 'em'"></i>
        </div>
    </div>
    `,
    styles: [``],
    styleUrls: ['./node.scss']
})
export class MultipleElementNodeComponent {
    @Input() trees: Array<Graph>;
    @Input() title;
    @Input() subtitle;
    @Input() size = 1;
}
