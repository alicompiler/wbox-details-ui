import { Action } from 'wbox-context';

export enum FetchActionType {
    SET_LOADING = 'FETCH_ACTION@SET_START',
    SET_DATA = 'FETCH_ACTION@SET_DATA',
    SET_ERROR = 'FETCH_ACTION@SET_ERROR',
}

export type FetchAction<TPayload> = Action<FetchActionType, TPayload>;

export class FetchActions {
    public static setLoading(loading: boolean): FetchAction<boolean> {
        return {
            type: FetchActionType.SET_LOADING,
            payload: loading,
        };
    }

    public static setData(data: unknown): FetchAction<unknown> {
        return {
            type: FetchActionType.SET_DATA,
            payload: data,
        };
    }

    public static setError(error: unknown): FetchAction<unknown> {
        return {
            type: FetchActionType.SET_ERROR,
            payload: error,
        };
    }
}
