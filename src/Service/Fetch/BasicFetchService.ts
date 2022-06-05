import {DispatchFunction} from 'wbox-context';
import {FetchServiceBase} from './FetchServiceBase';

export class BasicFetchService extends FetchServiceBase {
    private readonly options: BasicFetchOptions;

    public constructor(dispatch: DispatchFunction, options: BasicFetchOptions) {
        super(dispatch);
        this.options = options;
    }

    protected fetchData(): Promise<unknown> {
        return new Promise<unknown>((resolve) => {
            resolve(this.options.data);
        });
    }
}

export interface BasicFetchOptions {
    data: unknown[];
}
