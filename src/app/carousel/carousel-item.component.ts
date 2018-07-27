import { Component, HostBinding, OnInit } from '@angular/core';
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
    template: `<ng-content></ng-content>`,
    styles: [`
    :host {
        position: absolute;
        top: 0;
        left: 0;
    }`],
    animations: [
        trigger('carouselState', [
            state('VISIBLE', style({transform: 'translateX(0)', filter: 'opacity(1)', zIndex: '10'})),
            state('LEFT', style({ transform: 'translate3d(-100%, 15%, -150px)', filter: 'opacity(0.6)', zIndex: '5' })),
            state('RIGHT', style({ transform: 'translate3d(100%, 15%, -150px)', filter: 'opacity(0.6)', zIndex: '5' })),
            state('LEFT_NOT_VISIBLE', style({ transform: 'translate3d(-150%, 0, -250px)', filter: 'opacity(0)', zIndex: '1' })),
            state('RIGHT_NOT_VISIBLE', style({ transform: 'translate3d(150%, 0, -250px)', filter: 'opacity(0)', zIndex: '1' })),
            state('NOT_VISIBLE', style({transform: 'translate3d(0, 0, -400px', zIndex: '1'})),
            transition('* <=> *', animate(ANIMATION))
        ])
    ]
})
export class CarouselItemComponent implements OnInit {
    @HostBinding('@carouselState') get carouselAnimation() { return this.carouselState; }
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
