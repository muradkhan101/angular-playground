import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Graph } from '../flex-graph.component';

@Component({
  selector: '[collapsed-graph]',
  templateUrl: './collapsed-graph.component.html',
  styleUrls: ['./collapsed-graph.component.scss']
})
export class CollapsedGraphComponent implements OnInit {
  @Input() childCollection: Array<Graph>;
  @Input() depth = 0;
  @Input() childIndex = 0;
  isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
