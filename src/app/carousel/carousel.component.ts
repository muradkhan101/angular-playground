import {
  Component,
  OnInit,
  Input,
} from '@angular/core';
import { CarouselService } from './carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() height: number | string = '100%';

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
