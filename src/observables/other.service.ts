import { Injectable } from '@angular/core';

@Injectable()
export class OtherService {
    private _count = 0;
    get count() { return this._count; }
    constructor() {
        document.addEventListener('click', () => (console.log( this._count), this._count++));
    }
}
