import {
    Component,
    Input
} from '@angular/core';

@Component({
    selector: 'person-node',
    template: `
    <div class="node-title">{{tree.Title}}</div>
    <div class="node-subtitle">({{tree.Subtitle}})</div>
    <div class="node-icon"
        [style.color]="tree.ShiftType === 'Day' ? '#f99d01' : tree.ShiftType === 'Night' ? '#00afd1' : '#403841'">
        <i class="zmdi zmdi-male-alt zmdi-hc-2x"></i>
    </div>
    `,
    styles: [``],
    styleUrls: ['./node.scss']
})
export class PersonNodeComponent {
    @Input() tree;
}
