import {Action, DispatchFunction, Reducer} from "wbox-context";
import React from "react";
import {State} from "../Data/State";
// eslint-disable-next-line import/no-cycle
import {ServiceFactory} from "../Service/ServiceFactory";
import {BasicFetchOptions} from "../Service/Fetch/BasicFetchService";
import {HttpFetchOptions} from "../Service/Fetch/HttpFetchService";
import {Field} from "../Field/Field";
import {Group} from "../Group/Group";

export interface ProviderProps {
    reducers?: Reducer<State, Action<any, any>>[];
    serviceFactory?: (dispatch: DispatchFunction, state: State) => ServiceFactory;
    fetchOptions: BasicFetchOptions | HttpFetchOptions;
    fields: Field[];
    groups?: Group[];
    detailsWrapperComponent?: React.ComponentType;
}
