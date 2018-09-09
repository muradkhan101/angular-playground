import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleGraphComponent } from './single-graph/single-graph.component';
import { GroupedGraphComponent } from './grouped-graph/grouped-graph.component';
import {
  BlankNodeComponent,
  DistrictNodeComponent,
  MultipleElementNodeComponent,
  NodeRendererComponent,
  PersonNodeComponent,
  SiteNodeComponent,
} from './nodes';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SingleGraphComponent,
    GroupedGraphComponent,
    BlankNodeComponent,
    DistrictNodeComponent,
    MultipleElementNodeComponent,
    NodeRendererComponent,
    PersonNodeComponent,
    SiteNodeComponent,
  ]
})
export class FlexGraphModule { }
