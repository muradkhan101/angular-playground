import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  filter1 = (word, i) => word.length % 2
  filter2 = (word, i) => word.length > 5
  filter3 = (word, i) => word.indexOf('b') !== -1
  paragraphs = [ 
    {topic: 'Header1', body: 'body1', footer: 'footer1'},
    {topic: 'Topic1', body: 'body2', footer: 'footer2'},
  ]
}
