import { Component } from '@angular/core';

import * as rx from 'rxjs';
import { mergeMap } from 'rxjs/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  // filter1 = (word, i) => word.length % 2
  // filter2 = (word, i) => word.length > 5
  // filter3 = (word, i) => word.indexOf('b') !== -1
  // paragraphs = [ 
  //   {topic: 'Header1', body: 'body1', footer: 'footer1'},
  //   {topic: 'Topic1', body: 'body2', footer: 'footer2'},
  // ]
  time = rx.Observable.interval(1000).scan( (acc, curr) => acc + 1000, new Date(1000 * 60 * 60 * 24 * 30.123).getTime() )
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
  data = [
    {
      "key1": 40,
      "key2": "blue",
      "key3": "GROK",
      "key4": "+1 (883) 430-3571",
      "key5": "strawberry"
    },
    {
      "key1": 37,
      "key2": "blue",
      "key3": "DIGIRANG",
      "key4": "+1 (923) 471-2943",
      "key5": "apple"
    },
    {
      "key1": 24,
      "key2": "green",
      "key3": "BLEEKO",
      "key4": "+1 (865) 549-2255",
      "key5": "apple"
    },
    {
      "key1": 40,
      "key2": "green",
      "key3": "GEEKY",
      "key4": "+1 (996) 575-2202",
      "key5": "strawberry"
    },
    {
      "key1": 21,
      "key2": "blue",
      "key3": "TERRAGO",
      "key4": "+1 (848) 549-2491",
      "key5": "strawberry"
    },
    {
      "key1": 25,
      "key2": "blue",
      "key3": "FITCORE",
      "key4": "+1 (972) 552-2969",
      "key5": "strawberry"
    },
    {
      "key1": 36,
      "key2": "blue",
      "key3": "CIPROMOX",
      "key4": "+1 (850) 503-2784",
      "key5": "apple"
    },
    {
      "key1": 25,
      "key2": "brown",
      "key3": "VALREDA",
      "key4": "+1 (867) 465-2546",
      "key5": "strawberry"
    },
    {
      "key1": 37,
      "key2": "blue",
      "key3": "CEDWARD",
      "key4": "+1 (840) 509-2740",
      "key5": "strawberry"
    },
    {
      "key1": 21,
      "key2": "blue",
      "key3": "PLUTORQUE",
      "key4": "+1 (875) 506-3852",
      "key5": "banana"
    },
    {
      "key1": 22,
      "key2": "green",
      "key3": "EXOTERIC",
      "key4": "+1 (988) 423-3137",
      "key5": "banana"
    },
    {
      "key1": 27,
      "key2": "brown",
      "key3": "PUSHCART",
      "key4": "+1 (886) 468-2672",
      "key5": "banana"
    },
    {
      "key1": 30,
      "key2": "blue",
      "key3": "STREZZO",
      "key4": "+1 (951) 524-2436",
      "key5": "banana"
    },
    {
      "key1": 34,
      "key2": "brown",
      "key3": "KOFFEE",
      "key4": "+1 (980) 446-2630",
      "key5": "apple"
    },
    {
      "key1": 23,
      "key2": "green",
      "key3": "PAPRIKUT",
      "key4": "+1 (963) 458-3268",
      "key5": "strawberry"
    },
    {
      "key1": 34,
      "key2": "brown",
      "key3": "FUTURIS",
      "key4": "+1 (854) 557-3832",
      "key5": "apple"
    },
    {
      "key1": 25,
      "key2": "blue",
      "key3": "COMTENT",
      "key4": "+1 (901) 465-2446",
      "key5": "banana"
    },
    {
      "key1": 39,
      "key2": "green",
      "key3": "TINGLES",
      "key4": "+1 (839) 494-3668",
      "key5": "banana"
    },
    {
      "key1": 25,
      "key2": "green",
      "key3": "CHORIZON",
      "key4": "+1 (897) 504-3571",
      "key5": "banana"
    },
    {
      "key1": 26,
      "key2": "green",
      "key3": "GRUPOLI",
      "key4": "+1 (994) 401-2001",
      "key5": "apple"
    },
    {
      "key1": 40,
      "key2": "brown",
      "key3": "ENTROPIX",
      "key4": "+1 (903) 526-3702",
      "key5": "strawberry"
    },
    {
      "key1": 28,
      "key2": "brown",
      "key3": "MUSANPOLY",
      "key4": "+1 (814) 423-2164",
      "key5": "strawberry"
    },
    {
      "key1": 30,
      "key2": "brown",
      "key3": "STEELFAB",
      "key4": "+1 (941) 495-3614",
      "key5": "apple"
    },
    {
      "key1": 22,
      "key2": "brown",
      "key3": "OBONES",
      "key4": "+1 (855) 597-2116",
      "key5": "apple"
    },
    {
      "key1": 31,
      "key2": "brown",
      "key3": "DAYCORE",
      "key4": "+1 (843) 484-3722",
      "key5": "apple"
    },
    {
      "key1": 35,
      "key2": "brown",
      "key3": "POLARIA",
      "key4": "+1 (916) 532-2022",
      "key5": "strawberry"
    },
    {
      "key1": 35,
      "key2": "brown",
      "key3": "ZOXY",
      "key4": "+1 (854) 470-3697",
      "key5": "strawberry"
    },
    {
      "key1": 28,
      "key2": "brown",
      "key3": "DANCERITY",
      "key4": "+1 (803) 477-3113",
      "key5": "banana"
    },
    {
      "key1": 23,
      "key2": "brown",
      "key3": "GAZAK",
      "key4": "+1 (816) 564-2600",
      "key5": "apple"
    },
    {
      "key1": 40,
      "key2": "green",
      "key3": "RETROTEX",
      "key4": "+1 (895) 435-3657",
      "key5": "strawberry"
    },
    {
      "key1": 38,
      "key2": "green",
      "key3": "WARETEL",
      "key4": "+1 (913) 433-2633",
      "key5": "apple"
    },
    {
      "key1": 36,
      "key2": "blue",
      "key3": "ZOLARITY",
      "key4": "+1 (902) 466-2855",
      "key5": "strawberry"
    },
    {
      "key1": 26,
      "key2": "brown",
      "key3": "EQUITAX",
      "key4": "+1 (918) 502-3514",
      "key5": "apple"
    },
    {
      "key1": 37,
      "key2": "brown",
      "key3": "MAXEMIA",
      "key4": "+1 (859) 410-2142",
      "key5": "strawberry"
    },
    {
      "key1": 22,
      "key2": "brown",
      "key3": "EMOLTRA",
      "key4": "+1 (886) 465-2923",
      "key5": "apple"
    },
    {
      "key1": 36,
      "key2": "green",
      "key3": "BUZZMAKER",
      "key4": "+1 (835) 510-3963",
      "key5": "strawberry"
    },
    {
      "key1": 22,
      "key2": "blue",
      "key3": "PLASMOSIS",
      "key4": "+1 (822) 411-2302",
      "key5": "apple"
    },
    {
      "key1": 36,
      "key2": "green",
      "key3": "BALUBA",
      "key4": "+1 (813) 458-3059",
      "key5": "banana"
    },
    {
      "key1": 23,
      "key2": "green",
      "key3": "ANIXANG",
      "key4": "+1 (873) 419-3294",
      "key5": "banana"
    },
    {
      "key1": 40,
      "key2": "green",
      "key3": "PEARLESSA",
      "key4": "+1 (859) 479-3241",
      "key5": "strawberry"
    },
    {
      "key1": 24,
      "key2": "blue",
      "key3": "DOGTOWN",
      "key4": "+1 (836) 489-2970",
      "key5": "strawberry"
    },
    {
      "key1": 21,
      "key2": "blue",
      "key3": "ZORROMOP",
      "key4": "+1 (901) 423-2340",
      "key5": "strawberry"
    },
    {
      "key1": 26,
      "key2": "green",
      "key3": "MENBRAIN",
      "key4": "+1 (840) 593-3207",
      "key5": "strawberry"
    },
    {
      "key1": 21,
      "key2": "brown",
      "key3": "PAPRICUT",
      "key4": "+1 (843) 574-2810",
      "key5": "banana"
    },
    {
      "key1": 24,
      "key2": "blue",
      "key3": "MAKINGWAY",
      "key4": "+1 (870) 546-3718",
      "key5": "strawberry"
    },
    {
      "key1": 33,
      "key2": "brown",
      "key3": "DELPHIDE",
      "key4": "+1 (902) 439-2436",
      "key5": "banana"
    },
    {
      "key1": 28,
      "key2": "brown",
      "key3": "EXOZENT",
      "key4": "+1 (843) 531-2470",
      "key5": "strawberry"
    }
  ]

  tableData = {
    headers: ['One', 'Two', 'Three'],
    rows: [
      {
        name: 'Potato',
        data: [1, 2, 3],
      },
      {
        name: 'Tomato',
        data: [4, 5, 6],
      },
      {
        name: 'French Fry',
        data: [7, 8, 9]
      }
    ]
  }
}
