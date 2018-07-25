import { Component, Input } from '@angular/core';

@Component({
    selector: 'site-node',
    template: `
    <div class="node-title">{{tree.Title}}</div>
    <div class="node-subtitle">({{tree.Subtitle}})</div>
    <div class="node-icon">
        <i
        class="zmdi zmdi-local-store"
        [style.fontSize]="size + 'em'"></i>
    </div>`,
    styleUrls: ['./node.scss']
})
export class SiteNodeComponent {
    @Input() size = 1.5;
    @Input() tree;
}
