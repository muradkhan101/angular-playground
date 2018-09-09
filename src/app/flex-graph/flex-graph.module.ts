import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleGraphComponent } from './single-graph/single-graph.component';
import { GroupedGraphComponent } from './grouped-graph/grouped-graph.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SingleGraphComponent, GroupedGraphComponent]
})
export class FlexGraphModule { }
