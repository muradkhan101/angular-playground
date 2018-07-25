import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RepeatComponent } from './repeat.component';
import { MainFormComponent } from '../forms/main-form.component';
import { SubFormComponent } from '../forms/subform.component';
import { ReverseParagraphComponent } from '../templateRefs/reverse-paragraph.component';
import { RefComponent } from '../refStuff/ref.component';
import {
  ListDirective,
  TitleDirective,
  BodyComponent,
} from '../refStuff/refWithDirectives';

import { WebsocketDisplayComponent } from '../websockets/websocket-display.component';
import { WebsocketService } from '../websockets/websocket.service';
import { NestedFormComponent } from '../forms/nested-form.component';
import { HttpClientModule } from '@angular/common/http';

import { ObservableComponent } from '../observables/observable.component';
import { ObsFormComponent, FormWatcher } from '../observables/observable-form.component';

import { PromisesComponent } from '../observables/other.component';
import { ObservableService } from '../observables/observable.service';
import { OtherService } from '../observables/other.service';

import { AsyncService, AsyncComponent, LateInititalizedComponent } from '../async';
import {
  Cell,
  Row,
  Table,
  CellHeader,
  CellDirective,
  colDef,
  HeaderCell,
  HeaderRow,
  TableCell,
  TableHeaderCell,
} from '../tables';

import {
  BodyCellDirective,
  DynamicTable,
  HeaderCellDirective,
  HeaderRowTemplate,
  RowTemplate,
} from '../dynamic-table/new-table';

import { StoreModule } from '@ngrx/store';
import { toDo } from '../store/store.reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects } from '../store/store.effects';
import { TodoComponent } from '../store/todo.component';
import { CanvasMapComponent } from '../canvas-map/canvas-map.component';
import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MapComponent } from '../map/map.component';
import { SideScrollerComponent } from './side-scroller/side-scroller.component';

import { DatePillPickerModule } from './date-pill-picker/date-pill-picker.module';
import { GraphNodeComponent, EfficientTreeComponent } from '../graph';
import { TimeDurationPipe } from './time-duration.pipe';
import {
  FlexGraphComponent,
  SiteNodeComponent,
  ClientNodeComponent,
  PersonNodeComponent,
  BlankNodeComponent,
  ShouldCollapsePipe,
  NodeRendererComponent,
  MultipleElementNodeComponent,
  DistrictNodeComponent,
  SelectedClassPipe,
  NodeInTreePipe,
} from '../flex-graph';
import { CollapsedGraphComponent } from '../flex-graph';
import { AttributeSelectorComponent } from './attribute-selector/attribute-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    ReverseParagraphComponent,
    RepeatComponent,
    MainFormComponent,
    SubFormComponent,
    RefComponent,
    ListDirective,
    TitleDirective,
    BodyComponent,
    WebsocketDisplayComponent,
    NestedFormComponent,
    PromisesComponent,
    ObservableComponent,
    ObsFormComponent,
    FormWatcher,
    AsyncComponent,
    LateInititalizedComponent,
    Cell,
    Table,
    Row,
    CellHeader,
    CellDirective,
    colDef,
    HeaderCell,
    HeaderRow,
    TodoComponent,
    BodyCellDirective,
    HeaderCellDirective,
    RowTemplate,
    HeaderRowTemplate,
    DynamicTable,
    CanvasMapComponent,
    MapComponent,
    TableCell,
    TableHeaderCell,
    SideScrollerComponent,
    TimeDurationPipe,
    GraphNodeComponent,
    EfficientTreeComponent,
    FlexGraphComponent,
    SiteNodeComponent,
    ClientNodeComponent,
    PersonNodeComponent,
    BlankNodeComponent,
    ShouldCollapsePipe,
    CollapsedGraphComponent,
    AttributeSelectorComponent,
    NodeRendererComponent,
    MultipleElementNodeComponent,
    DistrictNodeComponent,
    SelectedClassPipe,
    NodeInTreePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DatePillPickerModule,
    StoreModule.forRoot({toDo: toDo}),
    EffectsModule.forRoot(effects),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCGSBIO0mqqVSvOBQkGPw2CeeMNjPitykI'}),
    NgbModule.forRoot(),
  ],
  providers: [WebsocketService, ObservableService, OtherService, AsyncService],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  entryComponents: [
    Cell,
    Row,
    HeaderRow,
    HeaderCell,
    RowTemplate,
    HeaderRowTemplate,
    TableCell,
    TableHeaderCell,
    GraphNodeComponent,
    EfficientTreeComponent,
  ]
})
export class AppModule { }
