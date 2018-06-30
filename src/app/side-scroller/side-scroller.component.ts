import {
  AfterContentInit,
  Component,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'side-scroller',
  templateUrl: './side-scroller.component.html',
  styleUrls: ['./side-scroller.component.scss']
})
export class SideScrollerComponent implements AfterContentInit {
  @ViewChild('container') container;
  @ViewChild('content') content;
  @Input() scrollAmount = 320;
  // Space between each item
  @Input() itemMargin = 0;
  // Tracks number of times scroll has been clicked
  // Used to know which child to scroll to
  scrollPos = 0;
  constructor() { }
  parseInt = (num: string) => parseInt(num) || 0;
  ngAfterContentInit() {
    let height = this.content.nativeElement.clientHeight;
    this.container.nativeElement.style.height = `${height}px`;
  }

  scroll(direction) {

    let scroll = parseInt(this.content.nativeElement.style.left) || 0;
    let children = this.content.nativeElement.children;
    let index = direction === 'right' ? this.scrollPos : this.scrollPos -1;
    let scrollAmount = children[index].offsetWidth + this.itemMargin;
    this.content.nativeElement.style.left =
      direction === 'right'
        ? (this.scrollPos++, scroll - scrollAmount + 'px')
        : (this.scrollPos--, scroll + scrollAmount + 'px');
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
