import { Component, Input, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'blank-node',
    template: `
    `,
    styleUrls: ['./node.scss'],
})
export class BlankNodeComponent implements OnInit {
    @HostBinding('style.height') height: string;
    @Input() size;
    @Input() tree;
    @Input() isSelected: boolean;

    ngOnInit() {
        // if (this.tree.LevelGap) {
        //     this.height = this.tree.LevelGap + 'px';
        // }
    }
}
