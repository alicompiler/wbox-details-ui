import { Reducer } from 'wbox-context';
import { FetchAction, FetchActionType } from './FetchAction';
import { State } from '../State';

export const fetchReducer: Reducer<State, FetchAction<unknown>> = (state, action) => {
    switch (action.type) {
        case FetchActionType.SET_LOADING:
            return { ...state, loading: action.payload as boolean };
        case FetchActionType.SET_ERROR:
            return { ...state, error: action.payload };
        case FetchActionType.SET_DATA:
            return { ...state, allItems: action.payload as unknown[] };
        default:
            return state;
    }
};
