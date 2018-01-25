import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';

@Injectable()
export class ObservableService {
    observable: Rx.Observable<any> = Rx.Observable.fromEvent(document, 'click').scan((acc, val, i) => i, 0);
    private _formObs: Rx.Observable<any>;
    // set formObs(form: HTMLElement) {this._formObs = Rx.Observable.fromEvent(form, 'input').map(e => e.target.value)}
    // get formObs(): Rx.Observable<any> { return this._formObs; }
}
