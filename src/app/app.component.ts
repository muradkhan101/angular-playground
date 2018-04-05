import { Component } from '@angular/core';

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

  data = [
    {
      'key1': 'Poop',
      'key2': 'Doo-doo',
      'key3': 'Ca ca'
    },
    {
      'key1': 'Urine',
      'key2': 'Pee',
      'key3': 'yellow water'
    },
    {
      'key1': 'Word',
      'key2': 'Synonym',
      'key3': 'cinnamon'
    },
    {
      'key1': 'Water',
      'key2': 'Fire',
      'key3': 'Blood'
    },
    {
      'key1': 'Dance',
      'key2': 'Pants',
      'key3': 'Trance'
    }
  ];
  dataMap = { 'key1': 1 };

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
