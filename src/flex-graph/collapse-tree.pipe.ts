import { Pipe, PipeTransform } from '@angular/core';
import { Graph } from './flex-graph.component';

@Pipe({
    name: 'shouldCollapse'
})
export class ShouldCollapsePipe implements PipeTransform {
    transform(tree: Graph, args?: any): any {
        if (tree.Layer > 1 && tree.Children.length > 1) {
            return true;
        }
        if (tree.Children.length > 5 && tree.Layer > 1) {
            return true;
        }
        return false;
    }
}