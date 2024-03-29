import React, {useCallback, useMemo} from 'react';
import {CoreProvider, DispatchFunction} from 'wb-core-provider';
import {DefaultServiceFactory} from '../Service/ServiceFactory';
import {buildInitialState, State} from '../Data/State';
import {useDefaults} from '../Defaults/DefaultsContext';
import {Wrapper} from './Wrapper';
import {fetchReducer} from '../Data/Fetch/FetchReducer';
import {ProviderProps} from './ProviderProps';
import {setupReducer} from '../Data/Setup/SetupReducer';
import {defaultGroup} from '../Group/Group';

const baseReducers = [fetchReducer,setupReducer];

export function Provider(props: ProviderProps) {
    const {fetchOptions, reducers, serviceFactory, fields, groups} = props;
    const fetcherType = fetchOptions.data !== undefined ? 'direct' : 'http';
    const allReducers = useMemo(() => baseReducers.concat(reducers ?? []), [reducers]);
    const defaults = useDefaults();
    const createServiceFactory = useCallback(
        (dispatch: DispatchFunction, state: unknown) => serviceFactory
                ? serviceFactory(dispatch, state as State)
                : new DefaultServiceFactory(state as State, dispatch, defaults, props),
        [defaults,props]
    );
    const initialState = useMemo(() => buildInitialState({}), []);
    return (
        <CoreProvider reducers={allReducers} createServiceFactory={createServiceFactory} initialState={initialState}>
            <Wrapper fetcherType={fetcherType} fields={fields} groups={groups ?? [defaultGroup]} />
        </CoreProvider>
    );
}
