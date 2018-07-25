import { Component, Input, OnInit } from '@angular/core';

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
export class ClientNodeComponent implements OnInit {
    @Input() size;
    @Input() tree;
    @Input() isSelected: boolean;

    ngOnInit() {
        if (!this.size) this.size = 1.2;
    }
}
