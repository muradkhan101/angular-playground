import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  ViewChild,
  OnInit,
  QueryList,
  ViewContainerRef,
} from '@angular/core';
import { CarouselService } from './carousel.service';
import { CarouselItemComponent } from './carousel-item.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterContentInit {
  @ViewChild('items', {read: ViewContainerRef}) items: ViewContainerRef;
  @ContentChildren(CarouselItemComponent) carouselItems: QueryList<CarouselItemComponent>;
  state = {
    position: undefined,
    items: []
  }
  constructor(private carouselService: CarouselService) { }
  ngOnInit() {
    this.state.position = this.carouselService.state;
    this.carouselService.count.subscribe(newCount => {
      this.state.items = Array.from({length: newCount + 1}).map((_, i) => ({index: i}));
    })
  }
  moveToItem(index) {
    this.carouselService.setIndex(index);
  }
  ngAfterContentInit() {
    console.log(this.items);
    this.items.remove(1);
  }
}
