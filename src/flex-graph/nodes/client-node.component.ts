import { Component, Input } from '@angular/core';

@Component({
    selector: 'client-node',
    template: `
    <div class="node-title">{{tree.Title}}</div>
    <div class="node-subtitle">({{tree.Subtitle}})</div>
    <div class="node-icon">
        <img
        [style.width]="'32px'"
        src="/assets/business_center.svg">
    </div>
    `,
    styleUrls: ['./node.scss']
})
export class ClientNodeComponent {
    @Input() size = 1.2;
    @Input() tree;
}
