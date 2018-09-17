import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { mock } from './flex-graph/mock';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { delay } from 'rxjs/operators/delay'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private cdr: ChangeDetectorRef
  ) {}
  dropdown = [
    {Name: 'One', Value: 1},
    {Name: 'Two', Value: 2},
    {Name: 'Three', Value: 3}
  ]
  state = {
    mock,
    open: {
      row1: false,
      row2: false
    }
  }

  ngOnInit() {
    Observable.of(5).pipe(delay(500)).subscribe( () => console.log('OBS 1'))
    Observable.of(5).pipe(delay(250)).subscribe(() => console.log('OBS 2'))
    Observable.of(5).pipe(delay(100)).subscribe(() => console.log('OBS 3'))
  }

  selected(item) {
    console.log(item);
  }
}
