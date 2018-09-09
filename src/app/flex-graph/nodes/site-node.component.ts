import { Component, Input, OnInit, HostBinding, HostListener } from '@angular/core';

@Component({
    selector: 'site-node',
    template: `
    <div class="node-title">{{ tree.Title ? tree.Title.toUpperCase() : '' }}</div>
    <div 
        class="node-subtitle"
        *ngIf="tree.SubTitle">({{tree.SubTitle}})</div>
    <div class="node-icon"
        [style.color]="'rgb(64, 56, 65)'">
        <i
        class="zmdi zmdi-business-center"
        [style.fontSize]="size + 'em'"></i>
    </div>
    `,
    styleUrls: ['./node.scss']
})
export class SiteNodeComponent implements OnInit {
    @Input() size;
    @Input() tree;
    @Input() isSelected: boolean;

    ngOnInit() {
        if (!this.size) this.size = 1.2;
    }
}
