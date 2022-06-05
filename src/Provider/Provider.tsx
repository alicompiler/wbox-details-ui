import React, {PropsWithChildren, useCallback, useMemo} from 'react';
import {CoreProvider, DispatchFunction} from 'wbox-context';
import {DefaultServiceFactory} from '../Service/ServiceFactory';
import {buildInitialState, State} from "../Data/State";
import {useDefaults} from "../Defaults/DefaultsContext";
import {Wrapper} from "./Wrapper";
import {fetchReducer} from "../Data/Fetch/FetchReducer";
import {ProviderProps} from "./ProviderProps";
import {setupReducer} from "../Data/Setup/SetupReducer";

const baseReducers: any = [fetchReducer,setupReducer];

export function Provider(props: PropsWithChildren<ProviderProps>) {
    const {fetchOptions, reducers, serviceFactory, fields, children} = props;
    const fetcherType = fetchOptions.data !== undefined ? 'direct' : 'http';
    const allReducers = useMemo(() => baseReducers.concat(reducers ?? []), [reducers]);
    const defaults = useDefaults();
    const createServiceFactory = useCallback(
        (dispatch: DispatchFunction, state: unknown) => serviceFactory
            ? serviceFactory(dispatch, state as State)
            : new DefaultServiceFactory(state as State, dispatch, defaults, props),
        [defaults, props],
    );
    const initialState = useMemo(() => buildInitialState({}), []);
    return (
        <CoreProvider reducers={allReducers} createServiceFactory={createServiceFactory} initialState={initialState}>
            <Wrapper fetcherType={fetcherType} fields={fields} fetchOptions={fetchOptions}>
                {children}
            </Wrapper>
        </CoreProvider>
    );
}
