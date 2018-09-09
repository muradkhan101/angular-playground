import {
    Component,
    Input,
    OnInit,
    ElementRef
} from '@angular/core';

const colorMap = {
    'Day': '#f99d01',
    'Night': '#00afd1',
    'Graveyard': '#99459c',
    'Swing': '#00AFD1',
    // '': '#E91E63' //On-Call is default (hot pink)
    '': '#000000' // Default is now black :)
}

@Component({
    selector: 'person-node',
    template: `
    <div *ngIf="tree.LevelGap" class="padding-connector" [style.height]="tree.LevelGap + 'px'"></div>
    <div class="node-title">{{tree.Title}}</div>
    <div 
        class="node-subtitle"
        *ngIf="tree.SubTitle">({{tree.SubTitle}})</div>
    <div class="node-icon"
        [style.color]="color">
        <i
        class="zmdi zmdi-male-alt"
        [style.fontSize]="size + 'em'"></i>
    </div>
    `,
    styles: [``],
    styleUrls: ['./node.scss']
})
export class PersonNodeComponent implements OnInit {
    @Input() size = 1.5;
    @Input() tree;
    @Input() depth;
    constructor(private el: ElementRef) {}
    color;
    ngOnInit() {
        if (this.tree.IsAdjusted && !this.tree.Children.length) this.el.nativeElement.classList.add('is-adjusted')
        if (!this.size) this.size = 2;
        if (this.depth < 10) this.size = 2;
        let tree = this.tree;
        this.color =  ['tbh', 'no manager'].includes(tree.Title.toLowerCase())
            ? '#d8d8d8'
            : colorMap[tree.ShiftType];
    }
}
