import { Injectable } from '@angular/core';
import {
    Actions,
    Effect,
    ofType,
} from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { mergeMap } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import * as actions from './store.reducers';

@Injectable()
export class TodoEffects {
    constructor( private action$: Actions ) { }
    @Effect()
    add$ = this.action$.pipe(
        ofType(actions.ADD_TODO),
        mergeMap( (action: any) =>
            (
                console.log('In add$ effect'),
                // This creates an infinite loop of calling ADD_TODO effect and reducer
                // Observable.of(action).delay(1500)
                
                // Comment top one out and see this works since this effect doesn't create infinite loop
                Observable.of({type: 'NEW_TODO', data: action.data}).delay(1500)
            )
        )
    );
    // @Effect()
    // remove$ = this.action$.pipe(
    //     (console.log('Before ofType: delete$'), ofType(actions.REMOVE_TODO)),
    //     mergeMap( action =>
    //         (
    //             console.log('In delete$ effect'),
    //             Observable.of(action).delay(1500)
    //         )
    //     )
    // );
}

export const effects = [ TodoEffects ];
