import { Component, Input } from '@angular/core';

@Component({
    selector: 'site-node',
    template: `
    <div class="node-icon">
        <i
        class="zmdi zmdi-city-alt"
        [style.fontSize]="'0.75em'"></i>
    </div>
    <div class="node-text">
        <div class="node-title">
            {{tree.Title}} - {{tree.Subtitle}} ({{tree.Children.length}})
        </div> 
    </div>
    <div class="">
        <i
        [style.fontSize]="'1.25em'"
        class="zmdi zmdi-chevron-right"></i>
    </div>
    `,
    styleUrls: ['./node.scss']
})
export class SiteNodeComponent {
    @Input() tree;
}
