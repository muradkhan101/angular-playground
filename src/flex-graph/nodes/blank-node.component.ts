import { Component, Input } from '@angular/core';

@Component({
    selector: 'blank-node',
    template: `
        
    `,
    styleUrls: ['./node.scss'],
})
export class BlankNodeComponent {
    @Input() tree;
    @Input() isSelected: boolean;
}
