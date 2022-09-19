import {Action, DispatchFunction, Reducer} from 'wb-core-provider';
import React from 'react';
import {State} from '../Data/State';
import {ServiceFactory} from '../Service/ServiceFactory';
import {BasicFetchOptions} from '../Service/Fetch/BasicFetchService';
import {HttpFetchOptions} from '../Service/Fetch/HttpFetchService';
import {Field} from '../Field/Field';
import {Group} from '../Group/Group';
import {GroupComponentProps} from './GroupComponentProps';

export interface ProviderProps {
    reducers?: Reducer<State, Action<unknown, unknown>>[];
    serviceFactory?: (dispatch: DispatchFunction, state: State) => ServiceFactory;
    fetchOptions: BasicFetchOptions | HttpFetchOptions;
    fields: Field[];
    groups?: Group[];
    detailsWrapperComponent?: React.ComponentType<GroupComponentProps>;
}
