import React, {ReactNode, useContext} from "react";
import {GroupComponentProps} from "../Provider/GroupComponentProps";
// eslint-disable-next-line import/no-cycle
import {Details} from "../Provider/Details";

export interface Defaults {
    httpFetcher: {
        method: string;
        parseResponse: (response: Response) => Promise<unknown>;
        headers: HeadersInit;
        requestOptions: Partial<RequestInit>;
    };
    groupComponent: React.ComponentType<GroupComponentProps>
    detailsWrapperComponent: React.ComponentType<{renderOptions?: unknown}>;
    renderLoading: () => ReactNode;
    renderError: () => any;
}

export const defaults: Defaults = {
    httpFetcher: {
        method: 'GET',
        parseResponse: response => response.json(),
        headers: {
            'Content-Type': 'application/json',
        },
        requestOptions: {}
    },
    groupComponent: () => null,
    detailsWrapperComponent: Details,
    renderLoading: () => <h1>Loading...</h1>,
    renderError: () => <h1>Error: failed to fetch data</h1>
};

export const DefaultsContext = React.createContext<Defaults>(defaults);
export const DefaultsProvider = DefaultsContext.Provider;


export function useDefaults() {
    return useContext(DefaultsContext);
}
