import {Reducer} from 'wb-core-provider';
import {State} from '../State';
import {SetupAction, SetupActionType} from './SetupAction';
import {Field} from '../../Field/Field';
import {Group} from '../../Group/Group';

export const setupReducer: Reducer<State, SetupAction<unknown>> = (state, action) => {
    switch (action.type) {
        case SetupActionType.SET_FIELDS:
            return {...state, fields: action.payload as Field[]};
        case SetupActionType.SET_GROUPS:
            return {...state, groups: action.payload as Group[]};
        default:
            return state;
    }
};
