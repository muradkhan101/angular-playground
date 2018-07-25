import {
    Component,
    Input,
    OnInit
} from '@angular/core';

@Component({
    selector: 'person-node',
    template: `
    <div class="node-title">{{tree.Title}}</div>
    <div class="node-subtitle">({{tree.Subtitle}})</div>
    <div class="node-icon"
        [style.color]="tree.ShiftType === 'Day' ? '#f99d01' : tree.ShiftType === 'Night' ? '#00afd1' : '#403841'">
        <i
        class="zmdi zmdi-male-alt"
        [style.fontSize]="size + 'em'"></i>
    </div>
    `,
    styles: [``],
    styleUrls: ['./node.scss']
})
export class PersonNodeComponent implements OnInit {
    @Input() size;
    @Input() tree;
    @Input() isSelected: boolean;

    ngOnInit() {
        if (!this.size) this.size = 2;
    }
}
