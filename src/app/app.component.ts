import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  paragraphs = [ 
    {topic: 'Header1', body: 'body1', footer: 'footer1'},
    {topic: 'Topic1', body: 'body2', footer: 'footer2'},
  ]
}
