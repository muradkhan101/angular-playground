import { Component, Input } from '@angular/core';

@Component({
    selector: 'client-node',
    template: `
    <div class="node-title">{{tree.Title}}</div>
    <div class="node-subtitle">({{tree.Subtitle}})</div>
    <div class="node-icon">
        <i
        class="zmdi zmdi-case"
        [style.fontSize]="size + 'em'"></i>
    </div>
    `,
    styleUrls: ['./node.scss']
})
export class ClientNodeComponent {
    @Input() size = 2;
    @Input() tree;
}
