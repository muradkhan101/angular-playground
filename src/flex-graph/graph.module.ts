import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexGraphComponent } from './flex-graph.component';
import { CollapsedGraphComponent } from './collapsed-graph/collapsed-graph.component';
import {
    AltDistrictNodeComponent,
    BlankNodeComponent,
    DistrictNodeComponent,
    MultipleElementNodeComponent,
    NodeRendererComponent,
    PersonNodeComponent,
    SiteNodeComponent,
} from './nodes';
import { NodeInTreePipe, SelectedClassPipe, ShouldCollapsePipe } from './pipes';

import { StoreModule } from '@ngrx/store';
import { graphReducer } from './store';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('graph', graphReducer)
    ],
    declarations: [
        FlexGraphComponent,
        CollapsedGraphComponent,
        NodeInTreePipe,
        SelectedClassPipe,
        ShouldCollapsePipe,
        AltDistrictNodeComponent,
        BlankNodeComponent,
        DistrictNodeComponent,
        MultipleElementNodeComponent,
        NodeRendererComponent,
        PersonNodeComponent,
        SiteNodeComponent,
    ],
    exports: [
        FlexGraphComponent,
        CollapsedGraphComponent,
        NodeInTreePipe,
        SelectedClassPipe,
        ShouldCollapsePipe,
        AltDistrictNodeComponent,
        BlankNodeComponent,
        DistrictNodeComponent,
        MultipleElementNodeComponent,
        NodeRendererComponent,
        PersonNodeComponent,
        SiteNodeComponent,
    ]
})
export class GraphModule {}