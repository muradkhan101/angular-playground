import { Action } from '@ngrx/store';
import { Graph } from '../common';

export const SELECT_NODE = 'SELECT_NODE';
export const DESELECT_ALL = 'DESELECT_ALL';

type NodeCollection = Graph | Array<Graph>;

export const graphSelector = (store) => store.graph;

export interface GraphPayload {
    Node: NodeCollection;
}

export interface GraphAction extends Action {
    payload: GraphPayload;
}

export class SelectNodeAction {
    readonly type = SELECT_NODE;
    payload: GraphPayload;
    constructor(nodes: NodeCollection) {
        this.payload = {Node: nodes};
    }
}
export class DeselectAllAction {
    readonly type = DESELECT_ALL;
}