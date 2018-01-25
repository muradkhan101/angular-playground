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
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [WebsocketService, ObservableService, OtherService, AsyncService],
  bootstrap: [AppComponent]
})
export class AppModule { }
