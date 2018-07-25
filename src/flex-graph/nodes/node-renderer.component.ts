import { Component, Input } from '@angular/core';

@Component({
    selector: 'node-renderer, [node-renderer]',
    template: `
        <person-node *ngIf="tree.Type === 'Person'" [size]="size" [tree]="tree"></person-node>
        <blank-node *ngIf="tree.Type === 'Blank'" [tree]="tree"></blank-node>
        <district-node *ngIf="tree.Type === 'District'" [size]="size" [tree]="tree"></district-node>
        <site-node *ngIf="tree.Type === 'Site'" [tree]="tree"></site-node>
        <client-node *ngIf="tree.Type === 'Client'" [size]="size" [tree]="tree"></client-node>
    `,
    styleUrls: ['./node.scss']
})
export class NodeRendererComponent {
    @Input() tree;
    @Input() size;
}