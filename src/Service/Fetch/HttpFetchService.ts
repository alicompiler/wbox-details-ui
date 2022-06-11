import {DispatchFunction} from 'wbox-context';
import {State} from '../../Data/State';
import {Defaults} from '../../Defaults/DefaultsContext';
import {FetchServiceBase} from './FetchServiceBase';

export class HttpFetchService extends FetchServiceBase {
    private readonly options: HttpFetchOptions;

    private readonly defaults: Defaults;

    private readonly state: State;

    constructor(dispatch: DispatchFunction, state: State, options: HttpFetchOptions, defaults: Defaults) {
        super(dispatch);
        this.options = options;
        this.defaults = defaults;
        this.state = state;
    }

    protected fetchData(): Promise<unknown> {
        const customFetch = this.options.fetch;
        if (customFetch) {
            return customFetch();
        }
        return this.sendRequest();
    }

    private async sendRequest() {
        const {url} = this.options;
        const parseResponse = this.options.parseResponse ?? this.defaults.httpFetcher.parseResponse;
        const headers = this.options.headers ?? this.defaults.httpFetcher.headers;
        const options: RequestInit = {
            method: this.options.method ?? this.defaults.httpFetcher.method,
            body: this.options.body,
            headers,
            ...this.defaults.httpFetcher.requestOptions,
            ...(this.options.fetchOptions ?? {}),
        };

        return fetch(url, options)
            .then(data => parseResponse(data))
            .then(res => res);
    }

}

export interface HttpFetchOptions {
    url: string;
    method?: string;
    body?: BodyInit;
    headers?: HeadersInit;
    fetchOptions?: RequestInit;
    parseResponse?: (response: Response) => Promise<unknown>;
    fetch?: () => Promise<unknown>;
    data?: never;
}
