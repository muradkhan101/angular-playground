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
    // console.log(this.firstComponentOutOfView(direction));
  }
  // firstComponentOutOfView(direction) {
  //   let children: Array<HTMLElement> = Array.from(this.content.nativeElement.children);
  //   for (let i = 0; i < children.length; i++) {
  //     let child: HTMLElement = children[i];
  //     if (direction === 'left'
  //         && child.offsetLeft < this.container.scrollLeft) {
  //           return child;
  //       }
  //     if (direction === 'right'
  //         && child.offsetLeft > this.container.scrollLeft + this.container.offsetWidth) {
  //           return child
  //       }
  //   }
  // }
}
