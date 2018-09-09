import { Component, ChangeDetectorRef } from '@angular/core';
import { mock } from './flex-graph/mock';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private cdr: ChangeDetectorRef
  ) {}
  state = {
    mock,
    open: {
      row1: false,
      row2: false
    }
  }
}
