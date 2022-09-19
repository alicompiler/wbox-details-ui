import {DispatchFunction} from 'wb-core-provider';
import {BasicFetchOptions, BasicFetchService} from './Fetch/BasicFetchService';
import {HttpFetchOptions, HttpFetchService} from './Fetch/HttpFetchService';
import {State} from '../Data/State';
import {FetchService} from './Fetch/FetchService';
import {Defaults} from '../Defaults/DefaultsContext';
import {ProviderProps} from '../Provider/ProviderProps';

export interface ServiceFactory {
    createHttpFetchService(): FetchService;
    createBasicFetchService(): FetchService;
}

export class DefaultServiceFactory implements ServiceFactory {
    private readonly state: State;

    private readonly dispatch: DispatchFunction;

    private readonly defaults: Defaults;

    private readonly props : ProviderProps;

    public constructor(state: State, dispatch: DispatchFunction, defaults: Defaults , props : ProviderProps) {
        this.state = state;
        this.dispatch = dispatch;
        this.defaults = defaults;
        this.props = props;
    }

    createBasicFetchService(): FetchService {
        return new BasicFetchService(this.dispatch, this.props.fetchOptions as BasicFetchOptions);
    }

    createHttpFetchService(): FetchService {
        return new HttpFetchService(this.dispatch, this.state, this.props.fetchOptions as HttpFetchOptions, this.defaults);
    }
}
