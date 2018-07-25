import { Component, Input } from '@angular/core';

@Component({
    selector: 'node-renderer, [node-renderer]',
    template: `
        <person-node *ngIf="tree.Type === 'Person'" [tree]="tree"></person-node>
        <blank-node *ngIf="tree.Type === 'Blank'" [tree]="tree"></blank-node>
        <site-node *ngIf="tree.Type === 'Site'" [tree]="tree"></site-node>
        <building-node *ngIf="tree.Type === 'Building'" [tree]="tree"></building-node>
    `,
    styleUrls: ['./node.scss']
})
export class NodeRendererComponent {
    @Input() tree;
}