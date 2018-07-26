import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CarouselState } from './common';
@Injectable()
export class CarouselService {
    private itemCount = 0;
    private activeIndex: number = 0;
    private currentState: BehaviorSubject<number> = new BehaviorSubject(0);
    private currentCount: BehaviorSubject<number> = new BehaviorSubject(0);

    get state(): BehaviorSubject<number> { return this.currentState; }
    get count(): BehaviorSubject<number> { return this.currentCount; }

    assignIndex(): number {
        let nextIndex = this.itemCount++;
        this.currentCount.next(nextIndex);
        return nextIndex;
    }
    getItemState(itemIndex: number): CarouselState {
        if (this.activeIndex === itemIndex) return 'VISIBLE';
        if (this.activeIndex === this.getNextIndex(itemIndex, 1)) return 'LEFT';
        if (this.activeIndex === this.getNextIndex(itemIndex, -1)) return 'RIGHT';
        return 'NOT_VISIBLE';
    }
    move(direction: 1 | -1) {
        let nextIndex = this.getNextIndex(this.activeIndex, direction);
        this.setIndex(nextIndex);
    }
    setIndex(index: number) {
        this.activeIndex = index;
        this.currentState.next(index);
    }
    private getNextIndex(itemIndex: number, direction: 1 | -1): number {
        if (itemIndex > this.itemCount - 1 || itemIndex < 0) throw new Error('Index not in range');
        return (itemIndex + direction + this.itemCount) % this.itemCount;
    }
}
