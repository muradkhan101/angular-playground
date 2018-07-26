import { Component, OnInit } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

import { combineLatest } from 'rxjs/observable/combineLatest';
import { Subscription } from 'rxjs/Subscription';

import { CarouselService } from './carousel.service';
import { CarouselState } from './common';

const ANIMATION = '150ms ease-out';

@Component({
    selector: 'mk-carousel-item,[mk-carousel-item]',
    template: `
    <div [@carouselState]="carouselState">
        <ng-content></ng-content>
    </div>`,
    animations: [
        trigger('carouselState', [
            state('VISIBLE', style({transform: 'translateX(0)', filter: 'opacity(1)', zIndex: '10', position: 'relative', order: '2' })),
            state('LEFT', style({ transform: 'translate3d(-10%, 0, -150px)', filter: 'opacity(0.6)', zIndex: '5', position: 'relative', order: '1'})),
            state('RIGHT', style({ transform: 'translate3d(10%, 0, -150px)', filter: 'opacity(0.6)', zIndex: '5', position: 'relative', order: '3'})),
            state('NOT_VISIBLE', style({position: 'absolute', filter: 'opacity(0)'})),
            transition('LEFT <=> VISIBLE', animate(ANIMATION)),
            transition('RIGHT <=> VISIBLE', animate(ANIMATION)),
            transition('void <=> LEFT', [
                style({transform: 'translate3d(-125%, 0, -250px)', filter: 'opacity(0)', zIndex: '1'}),
                animate(ANIMATION)
            ]),
            transition('void <=> RIGHT', [
                style({ transform: 'translate3d(125%, 0, -250px)', filter: 'opacity(0)', zIndex: '1' }),
                animate(ANIMATION)
            ])
        ])
    ]
})
export class CarouselItemComponent implements OnInit {
    private index: number;
    carouselState: CarouselState;
    subscription: Subscription;
    constructor(
        private carousel: CarouselService,
    ) {}

    ngOnInit() {
        this.index = this.carousel.assignIndex();
        this.subscription = combineLatest( this.carousel.state, this.carousel.count).subscribe((currentIndex) => {
           this.carouselState = this.carousel.getItemState(this.index);
        });
    }
}
