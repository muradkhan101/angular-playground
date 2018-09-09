import { Component, Input } from '@angular/core';

@Component({
    selector: 'node-renderer, [node-renderer]',
    template: `
        <person-node *ngIf="tree.Type === 'Person'" [size]="size" [tree]="tree" [depth]="depth"></person-node>
        <blank-node *ngIf="tree.Type === 'Grouping'" [tree]="tree"></blank-node>
        <district-node *ngIf="tree.Type === 'District'" [size]="size" [tree]="tree"></district-node>
        <site-node *ngIf="tree.Type === 'Site'" [tree]="tree"></site-node>
        <alt-district-node *ngIf="tree.Type === 'FM'" [size]="size" [tree]="tree"></alt-district-node>
        <div class="toggle-container" *ngIf="shouldRenderCollapsed">
            <div class="toggle toggle-close">
            <i class="zmdi zmdi-minus-circle"></i>
            </div>
        </div>
    `,
    styleUrls: ['./node.scss']
})
export class NodeRendererComponent{
    @Input() tree;
    @Input() size;
    @Input() depth;

    @Input() shouldRenderCollapsed: boolean;
    @Input() isCollapsed;
}
