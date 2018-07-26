import {
  AfterContentInit,
  Component,
  ElementRef,
  ViewChild,
  OnInit,
} from '@angular/core';
import { CarouselService } from './carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @ViewChild('items') items: ElementRef;
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
}
