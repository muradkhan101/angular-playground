import {
  AfterContentInit,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { ScrollService } from '../scroll.service';


@Component({
  selector: 'app-scroll-container',
  templateUrl: './scroll-container.component.html',
  styleUrls: ['./scroll-container.component.scss']
})
export class ScrollContainerComponent {
  @ViewChild('container') container;
  @ViewChild('content') content;

  constructor(
    private scrollService: ScrollService,
  ) { }

  ngOnInit() {
  }

}
