import { Reducer } from 'wb-core-provider';
import { FetchAction, FetchActionType } from './FetchAction';
import {DetailsData, State} from '../State';

export const fetchReducer: Reducer<State, FetchAction<unknown>> = (state, action) => {
    switch (action.type) {
        case FetchActionType.SET_LOADING:
            return { ...state, loading: action.payload as boolean };
        case FetchActionType.SET_ERROR:
            return { ...state, error: action.payload };
        case FetchActionType.SET_DATA:
            return { ...state, data: action.payload as DetailsData };
        default:
            return state;
    }
};
