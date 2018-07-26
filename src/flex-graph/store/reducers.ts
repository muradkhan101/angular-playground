import { Graph } from '../common';

import { SELECT_NODE, DESELECT_ALL, GraphAction } from './actions';


export interface StoreState {
    selection: Graph | Array<Graph>;
    hasSelection: boolean;
}

const initialState = {
    selection: null,
    hasSelection: false
}

export function graphReducer(state = initialState, action: GraphAction) {
    switch (action.type) {
        case (SELECT_NODE): {
            return Object.assign({}, state, { selection: action.payload.Node, hasSelection: true} );
        }
        case (DESELECT_ALL): {
            return Object.assign({}, state, { selection: null, hasSelection: false} );
        }
    }
    return state;
}