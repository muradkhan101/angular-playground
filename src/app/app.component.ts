import { Component } from '@angular/core';

import * as rx from 'rxjs';
import { mergeMap } from 'rxjs/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  aBoolean = true;
  shouldRender = true;
  title = 'app';
  // filter1 = (word, i) => word.length % 2
  // filter2 = (word, i) => word.length > 5
  // filter3 = (word, i) => word.indexOf('b') !== -1
  // paragraphs = [ 
  //   {topic: 'Header1', body: 'body1', footer: 'footer1'},
  //   {topic: 'Topic1', body: 'body2', footer: 'footer2'},
  // ]
  time = rx.Observable.interval(1000).scan( (acc, curr) => acc + 1000, new Date(1000 * 60 * 60 * 24 * 58).getTime() )
  constructor() {
    // Sends them separately
    // rx.Observable.merge(
    //   rx.Observable.interval(250).scan((acc, val) => acc + 2, 1),
    //   rx.Observable.interval(400).scan((acc, val) => acc + 2, 0)
    // ).subscribe(val => console.log(val));

    // Never sends out value because obs never completes
    // rx.Observable.forkJoin(
    //   rx.Observable.interval(250).scan((acc, val) => acc + 2, 1),
    //   rx.Observable.interval(400).scan((acc, val) => acc + 2, 0)
    // ).subscribe(val => console.log(val));

    // Works! sends out both each time a new thing comes out from either
    // and and both have a value
    // rx.Observable.combineLatest(
    //   rx.Observable.interval(250).scan((acc, val) => acc + 2, 1),
    //   rx.Observable.interval(400).scan((acc, val) => acc + 2, 0)
    // ).subscribe(val => console.log(val));
  }

}
