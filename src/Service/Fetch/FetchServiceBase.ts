import {DispatchFunction} from 'wbox-context/dist/Context/DispatchContext';
import {FetchActions} from '../../Data/Fetch/FetchAction';
import {FetchService} from './FetchService';
import {DetailsData} from "../../Data/State";

export abstract class FetchServiceBase implements FetchService {
    private readonly dispatch: DispatchFunction;

    private shouldCancel = false;

    constructor(dispatch: DispatchFunction) {
        this.dispatch = dispatch;
    }

    async fetch(): Promise<void> {
        this.dispatch(FetchActions.setData({}));
        await this.handleFetch(() => this.fetchData());
    }

    async handleFetch(fetchCallback: () => Promise<unknown>, onDone?: () => void): Promise<void> {
        this.shouldCancel = false;
        this.dispatch(FetchActions.setLoading(true));
        this.dispatch(FetchActions.setError(null));
        try {
            const data = await fetchCallback();
            if (this.shouldCancel) {
                return;
            }
            this.dispatch(FetchActions.setData(data as DetailsData));
            this.dispatch(FetchActions.setLoading(false));
            this.dispatch(FetchActions.setError(null));
            onDone?.();
        } catch (e) {
            if (this.shouldCancel) {
                return;
            }
            this.dispatch(FetchActions.setError(e));
            this.dispatch(FetchActions.setLoading(false));
        }
    }

    cancel(): void {
        this.shouldCancel = true;
        this.dispatch(FetchActions.setLoading(false));
        this.dispatch(FetchActions.setError(null));
    }

    protected abstract fetchData(): Promise<unknown>;
}
