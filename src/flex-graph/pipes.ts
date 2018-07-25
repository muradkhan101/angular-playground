import { Pipe, PipeTransform } from '@angular/core';
import { Graph } from './common';

@Pipe({
    name: 'shouldCollapse'
})
export class ShouldCollapsePipe implements PipeTransform {
    transform(tree: Graph, args?: any): boolean {
        if (tree.Layer > 1 && tree.Children.length > 1) {
            return true;
        }
        if (tree.Children.length > 5 && tree.Layer > 1) {
            return true;
        }
        return false;
    }
}

@Pipe({
    name: 'isInTree'
})
export class NodeInTreePipe implements PipeTransform {
    transform(node: Graph, tree: Graph): boolean {
        if (node.Layer === tree.Layer
            && node.Title === tree.Title
            && node.Subtitle === tree.Subtitle
        ) return true;

        return tree.Children.reduce((isInTree, child) => {
            return isInTree || this.transform(node, child)
        }, false)
    }
}
@Pipe({
    name: 'selectedClass'
})
export class SelectedClassPipe implements PipeTransform {
    transform(node: Graph, state) {
        if (state.hasSelection === null || state.hasSelection === undefined) return '';
        return state.selection === node
            ? 'node-selected'
            : 'node-not-selected';
    }
}