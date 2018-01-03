import { Component } from '@angular/core';

@Component({
    selector: 'simple-projection',
    template: `
    <ng-content></ng-content>
    `
})
export class SimpleProjectionComponent {}

@Component({
    selector: 'css-selector',
    template:`
    <ng-content select=".class"></ng-content>
    `
})
export class CssProjectionComponent {}

@Component({
    selector: 'multi-selector',
    template: `
    <ng-content select=".otherClass[anAttribute]"></ng-content>
    `
})
export class MultiSelectorComponent {}

@Component({
    selector: 'triple-selector',
    template: `
    <ng-content select=".aClass[anAttribute]p"></ng-content>
    `
})
export class TripleSelectorComponent {}