import React, {useContext} from "react";

export interface Defaults {
    httpFetcher: {
        method: string;
        parseResponse: (response: Response) => Promise<unknown>;
        headers: HeadersInit;
        requestOptions: Partial<RequestInit>;
    };
}

export const defaults: Defaults = {
    httpFetcher: {
        method: 'GET',
        parseResponse: response => response.json(),
        headers: {
            'Content-Type': 'application/json',
        },
        requestOptions: {}
    }
};

export const DefaultsContext = React.createContext<Defaults>(defaults);
export const DefaultsProvider = DefaultsContext.Provider;


export function useDefaults() {
    return useContext(DefaultsContext);
}