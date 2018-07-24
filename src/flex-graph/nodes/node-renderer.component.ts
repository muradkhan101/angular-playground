import { Component, Input } from '@angular/core';

@Component({
    selector: 'node-renderer, [node-renderer]',
    template: `
        <person-node *ngIf="tree.Type === 'Person'" [tree]="tree"></person-node>
        <blank-node *ngIf="tree.Type === 'Blank'" [tree]="tree"></blank-node>
        <person-node *ngIf="tree.Type === 'Site'" [tree]="tree"></person-node>
        <person-node *ngIf="tree.Type === 'Building'" [tree]="tree"></person-node>
    `,
    styleUrls: ['./node.scss']
})
export class NodeRendererComponent {
    @Input() tree;
}