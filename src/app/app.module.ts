import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

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
  HeaderRow
} from '../tables/base-table';

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
    CanvasMapComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({toDo: toDo}),
    EffectsModule.forRoot(effects),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCGSBIO0mqqVSvOBQkGPw2CeeMNjPitykI'}),
  ],
  providers: [WebsocketService, ObservableService, OtherService, AsyncService],
  bootstrap: [AppComponent],
  entryComponents: [
    Cell,
    Row,
    HeaderRow,
    HeaderCell,
    RowTemplate,
    HeaderRowTemplate,
  ]
})
export class AppModule { }
