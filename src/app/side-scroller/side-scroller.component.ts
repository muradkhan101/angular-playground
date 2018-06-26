import {
  AfterContentInit,
  Component,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-side-scroller',
  templateUrl: './side-scroller.component.html',
  styleUrls: ['./side-scroller.component.scss']
})
export class SideScrollerComponent implements AfterContentInit {
  @ViewChild('container') container;
  @ViewChild('content') content;
  @Input() scrollAmount = 150;
  constructor() { }

  ngAfterContentInit() {
    let height = this.content.nativeElement.clientHeight;
    this.container.nativeElement.style.height = `${height}px`;
  }

  scroll(direction) {
    let scroll = this.container.nativeElement.scrollLeft;
    this.container.nativeElement.scrollLeft =
      direction === 'right'
        ? scroll + this.scrollAmount
        : scroll - this.scrollAmount;
  }
}
