import { Graph } from '../common';
import { Action } from '@ngrx/store';

export const SELECT_NODE = 'SELECT_NODE';
export const DESELECT_ALL = 'DESELECT_ALL';

interface GraphPayload {
    Node: Graph;
}

interface GraphAction extends Action {
    payload: GraphPayload;
}

const initialState = {
    selection: null,
    hasSelection: false
}

export function graphReducer(state = initialState, action: GraphAction) {
    switch (action.type) {
        case (SELECT_NODE): {
            return Object.assign({}, state, {selected: action.payload.Node, hasSelection: true});
        }
        case (DESELECT_ALL): {
            return Object.assign({}, state, {selected: null, hasSelection: false});
        }
    }
    return state;
}