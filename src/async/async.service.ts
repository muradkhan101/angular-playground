import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';

@Injectable()
export class AsyncService {
    private _data = ( async() => {
        let thing = await this.getDataAsync(250);
        console.log(thing, 'in data');
        this.subject.next(thing);

        // Set timeout to update data later
        setTimeout( () => this.newData(), 2000)

        return thing;
    })();
    get data() { return this._data; }
    async newData() {
        let newData = await this.getDataAsync('Swag swag like Cailou');
        this.subject.next(newData);
        this._data = newData;
    }


    private _subject: Rx.Subject<any> = new Rx.BehaviorSubject(undefined);
    get subject() { return this._subject; }

    getDataAsync(val) {
         return new Promise( (resolve, reject) => {
            setTimeout( () => 
                resolve((console.log('promise done'), val)
            ), 2000)
         })
    }
}